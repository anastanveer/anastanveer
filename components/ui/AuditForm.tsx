"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Loader2, Search, XCircle } from "lucide-react";

// Lead-magnet form. Reuses the existing /api/contact PHP backend (no backend
// change): the website URL + concern are packed into the message field, and the
// same reCAPTCHA v3 + honeypot + rate-limit pattern as ContactForm is applied.
const fieldClass =
  "peer w-full rounded-xl border border-white/12 bg-black/18 px-4 pb-3 pt-6 text-sm text-white outline-none transition duration-300 placeholder:text-transparent focus:border-cyan/55 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(38,217,255,0.08)] light:border-slate-900/12 light:bg-white light:text-slate-950 light:focus:border-blue-500/55";

const rateLimitKey = "anas-audit-form-submissions";
const rateLimitWindow = 10 * 60 * 1000;
const minimumSubmitGap = 20 * 1000;
const maxSubmissionsPerWindow = 3;

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="group relative block">
      {children}
      <span className="pointer-events-none absolute left-4 top-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan/80 transition group-focus-within:text-cyan light:text-blue-700">
        {label}
      </span>
    </label>
  );
}

export function AuditForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const isRateLimited = () => {
    try {
      const now = Date.now();
      const recent = JSON.parse(localStorage.getItem(rateLimitKey) || "[]")
        .filter((t: unknown) => typeof t === "number" && now - t < rateLimitWindow) as number[];
      const last = recent.length ? recent[recent.length - 1] : 0;
      if (now - last < minimumSubmitGap || recent.length >= maxSubmissionsPerWindow) return true;
      localStorage.setItem(rateLimitKey, JSON.stringify([...recent, now]));
      return false;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    if (String(formData.get("_honey") || "").trim()) return;

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const website = String(formData.get("website") || "").trim();
    const concern = String(formData.get("concern") || "").trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !website || !emailPattern.test(email)) {
      setStatus("error");
      setFeedback("Please add your name, a valid email, and your website URL.");
      return;
    }
    if (isRateLimited()) {
      setStatus("error");
      setFeedback("Please wait a moment before requesting another audit.");
      return;
    }

    setStatus("sending");
    setFeedback("");

    let recaptchaToken = "";
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof (window as any).grecaptcha !== "undefined") {
        recaptchaToken = await Promise.race([
          new Promise<string>((resolve, reject) => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).grecaptcha.ready(() => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (window as any).grecaptcha
                .execute("6Lf_8-ksAAAAAJt3RbumC-30_Y6CrVfo5u_uvx7f", { action: "website_audit" })
                .then(resolve)
                .catch(reject);
            });
          }),
          new Promise<string>((_, reject) => setTimeout(() => reject(new Error("timeout")), 3000))
        ]);
      }
    } catch {
      // Server rejects if reCAPTCHA cannot be verified.
    }

    if (!recaptchaToken) {
      setStatus("error");
      setFeedback("Security verification failed. Please refresh and try again.");
      return;
    }

    try {
      formData.set("projectType", "Free Website Audit");
      formData.set(
        "message",
        `Free website audit request.\nWebsite: ${website}\nBiggest concern: ${concern || "Not specified"}`
      );
      formData.set("recaptchaToken", recaptchaToken);
      formData.set("source", "anastanveer.com/free-website-audit");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData
      });
      const result = (await response.json()) as { success: boolean };
      if (!response.ok || !result.success) throw new Error("Mail error");

      form.reset();
      router.push("/thank-you");
    } catch {
      setStatus("error");
      setFeedback("Request could not be sent right now. Please try again or message me on WhatsApp.");
    }
  };

  return (
    <form className="glass relative grid gap-4 overflow-hidden rounded-2xl p-5 md:p-7" onSubmit={handleSubmit} noValidate>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-premium-gradient" />
      <input className="hidden" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Your name">
          <input className={fieldClass} placeholder="Your name" name="name" autoComplete="name" required />
        </Field>
        <Field label="Email address">
          <input className={fieldClass} placeholder="Email address" name="email" type="email" autoComplete="email" required />
        </Field>
      </div>
      <Field label="Website URL">
        <input className={fieldClass} placeholder="https://yoursite.com" name="website" type="url" inputMode="url" required />
      </Field>
      <Field label="Biggest concern (optional)">
        <textarea className={`${fieldClass} min-h-28 resize-none`} placeholder="e.g. slow on mobile, low leads, not ranking" name="concern" />
      </Field>
      {feedback ? (
        <p className="flex items-start gap-2 rounded-2xl border border-red-400/25 bg-red-500/10 px-4 py-3 text-sm text-red-200 light:text-red-700" role="status" aria-live="polite">
          <XCircle className="mt-0.5 shrink-0" size={16} />
          <span>{feedback}</span>
        </p>
      ) : null}
      <button
        className="premium-button-gradient group inline-flex min-h-14 items-center justify-center gap-2 rounded-full border px-6 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-70"
        type="submit"
        disabled={status === "sending"}
      >
        <span>{status === "sending" ? "Sending request..." : "Get my free audit"}</span>
        {status === "sending" ? <Loader2 className="animate-spin" size={16} /> : <Search size={16} />}
      </button>
      <p className="flex items-center justify-center gap-1.5 text-center text-xs text-silver/55 light:text-slate-500">
        <CheckCircle2 size={13} className="text-emerald" /> No cost, no obligation. Reply within 4 hours.
      </p>
    </form>
  );
}
