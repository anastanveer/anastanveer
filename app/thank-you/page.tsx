import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageCircle, ArrowRight, Mail } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { jsonLdForPage, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Thank You | Message Received – Anas Tanveer",
    description: "Your project inquiry has been received. Anas Tanveer will respond within 4 hours with practical direction for your web project.",
    path: "/thank-you"
  }),
  robots: { index: false, follow: false }
};

export default function ThankYouPage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/thank-you")} id="thank-you-json-ld" />
      <section className="section-pad page-start flex min-h-[80vh] items-center">
        <div className="mx-auto w-full max-w-2xl px-5 text-center">

          <div className="relative inline-flex">
            <div className="absolute inset-0 animate-ping rounded-full bg-emerald/20" />
            <div className="relative grid h-20 w-20 place-items-center rounded-full border border-emerald/30 bg-emerald/10">
              <CheckCircle2 className="text-emerald" size={36} />
            </div>
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.28em] text-emerald">
            Message Received
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-white light:text-slate-950 md:text-5xl">
            Thank you for reaching out.
          </h1>
          <p className="mt-5 text-base leading-8 text-silver/70 light:text-slate-600">
            Your project inquiry has been received. I'll review the details and respond within
            <strong className="text-white light:text-slate-950"> 4 hours </strong>
            with practical direction — not a generic quote.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href="https://wa.me/971542435418"
              className="group flex items-center justify-center gap-3 rounded-2xl border border-emerald/25 bg-emerald/8 px-5 py-4 text-sm font-semibold text-emerald transition hover:border-emerald/50 hover:bg-emerald/12 light:border-emerald-600/25 light:bg-emerald-50 light:text-emerald-700"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
              <ArrowRight className="transition group-hover:translate-x-1" size={15} />
            </a>
            <a
              href="mailto:info@anastanveer.com"
              className="group flex items-center justify-center gap-3 rounded-2xl border border-cyan/20 bg-cyan/8 px-5 py-4 text-sm font-semibold text-cyan transition hover:border-cyan/40 hover:bg-cyan/12 light:border-blue-600/20 light:bg-blue-50 light:text-blue-700"
            >
              <Mail size={18} />
              <span>Email directly</span>
              <ArrowRight className="transition group-hover:translate-x-1" size={15} />
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/8 pt-8 light:border-slate-900/8">
            <Link
              href="/services"
              className="text-sm text-silver/60 transition hover:text-cyan light:text-slate-500 light:hover:text-blue-600"
            >
              Browse Services
            </Link>
            <Link
              href="/portfolio"
              className="text-sm text-silver/60 transition hover:text-cyan light:text-slate-500 light:hover:text-blue-600"
            >
              View Portfolio
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-silver/60 transition hover:text-cyan light:text-slate-500 light:hover:text-blue-600"
            >
              See Pricing
            </Link>
            <Link
              href="/"
              className="text-sm text-silver/60 transition hover:text-cyan light:text-slate-500 light:hover:text-blue-600"
            >
              Back to Home
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
