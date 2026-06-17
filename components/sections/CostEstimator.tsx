"use client";

import { useMemo, useState } from "react";
import { Calculator, Check, MessageCircle, Zap } from "lucide-react";

// Client-side indicative estimator. No server needed (static-safe). Results are
// clearly labelled as estimates and the final CTA prefills WhatsApp with the
// user's selections so a qualified lead arrives with context.

type Range = { min: number; max: number };

const PROJECT_TYPES: { id: string; label: string; base: Range }[] = [
  { id: "WordPress Website", label: "WordPress Website", base: { min: 2500, max: 6000 } },
  { id: "Shopify Store", label: "Shopify / Ecommerce Store", base: { min: 4000, max: 9000 } },
  { id: "Laravel Web App", label: "Custom Laravel Web App", base: { min: 8000, max: 25000 } },
  { id: "Dashboard / ERP", label: "Dashboard / ERP System", base: { min: 10000, max: 30000 } },
  { id: "API Integration", label: "API Integration", base: { min: 3000, max: 9000 } },
  { id: "SEO / Speed", label: "SEO / Speed Optimization", base: { min: 1500, max: 5000 } }
];

const FEATURES: { id: string; label: string; add: Range }[] = [
  { id: "Admin dashboard", label: "Admin dashboard / panel", add: { min: 3000, max: 7000 } },
  { id: "Payments / checkout", label: "Payments / checkout", add: { min: 1500, max: 4000 } },
  { id: "Multi-language (AR/EN)", label: "Multi-language (Arabic / English)", add: { min: 1500, max: 3500 } },
  { id: "Third-party APIs", label: "Third-party API integrations", add: { min: 2000, max: 6000 } },
  { id: "Custom UI/UX design", label: "Custom UI / UX design", add: { min: 2000, max: 5000 } },
  { id: "SEO setup", label: "SEO setup & schema", add: { min: 1000, max: 3000 } }
];

const round = (n: number) => Math.round(n / 500) * 500;
const fmt = (n: number) => n.toLocaleString("en-AE");

export function CostEstimator() {
  const [typeId, setTypeId] = useState(PROJECT_TYPES[2].id);
  const [features, setFeatures] = useState<string[]>([]);
  const [urgent, setUrgent] = useState(false);

  const estimate = useMemo<Range>(() => {
    const type = PROJECT_TYPES.find((t) => t.id === typeId) ?? PROJECT_TYPES[0];
    let min = type.base.min;
    let max = type.base.max;
    for (const f of FEATURES) {
      if (features.includes(f.id)) {
        min += f.add.min;
        max += f.add.max;
      }
    }
    const mult = urgent ? 1.25 : 1;
    return { min: round(min * mult), max: round(max * mult) };
  }, [typeId, features, urgent]);

  const toggle = (id: string) =>
    setFeatures((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));

  const waText = encodeURIComponent(
    `Hi Anas, I used the cost estimator on anastanveer.com.\n` +
      `Project: ${typeId}\n` +
      `Features: ${features.length ? features.join(", ") : "Core only"}\n` +
      `Timeline: ${urgent ? "Urgent" : "Standard"}\n` +
      `Estimated range: AED ${fmt(estimate.min)} – ${fmt(estimate.max)}\n` +
      `Please send me an exact quote.`
  );
  const waHref = `https://wa.me/971542435418?text=${waText}`;

  return (
    <section className="section-pad relative overflow-hidden" aria-label="Project cost estimator">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan/8 blur-[100px] light:bg-blue-200/40" />
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-8 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan light:border-blue-500/25 light:bg-blue-50 light:text-blue-700">
            <Calculator size={14} /> Instant estimate
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold text-white light:text-slate-950 md:text-4xl">
            Estimate your project in 30 seconds
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-silver/72 light:text-slate-600">
            Pick what you need for a rough budget range. It is an indicative estimate — your exact quote depends on scope, integrations and timeline.
          </p>
        </div>

        <div className="glass relative grid gap-6 overflow-hidden rounded-2xl p-6 md:p-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-premium-gradient" />

          <div className="grid gap-6">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-cyan/80 light:text-blue-700">1 · Project type</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {PROJECT_TYPES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTypeId(t.id)}
                    aria-pressed={typeId === t.id}
                    className={`rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                      typeId === t.id
                        ? "border-cyan/55 bg-cyan/10 text-white light:border-blue-500/55 light:bg-blue-50 light:text-slate-950"
                        : "border-white/10 bg-white/[0.03] text-silver/75 hover:border-cyan/30 light:border-slate-200 light:bg-white light:text-slate-700"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-cyan/80 light:text-blue-700">2 · Features needed</p>
              <div className="grid gap-2 sm:grid-cols-2">
                {FEATURES.map((f) => {
                  const on = features.includes(f.id);
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => toggle(f.id)}
                      aria-pressed={on}
                      className={`flex items-center gap-2.5 rounded-xl border px-4 py-3 text-left text-sm font-medium transition ${
                        on
                          ? "border-emerald/50 bg-emerald/10 text-white light:border-emerald-600/45 light:bg-emerald-50 light:text-slate-950"
                          : "border-white/10 bg-white/[0.03] text-silver/75 hover:border-emerald/30 light:border-slate-200 light:bg-white light:text-slate-700"
                      }`}
                    >
                      <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${on ? "border-emerald bg-emerald text-ink" : "border-white/25 light:border-slate-300"}`}>
                        {on ? <Check size={12} /> : null}
                      </span>
                      {f.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-cyan/80 light:text-blue-700">3 · Timeline</p>
              <button
                type="button"
                onClick={() => setUrgent((u) => !u)}
                aria-pressed={urgent}
                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-medium transition ${
                  urgent
                    ? "border-amber-400/55 bg-amber-400/10 text-amber-300 light:border-amber-500/55 light:bg-amber-50 light:text-amber-700"
                    : "border-white/10 bg-white/[0.03] text-silver/75 hover:border-amber-400/30 light:border-slate-200 light:bg-white light:text-slate-700"
                }`}
              >
                <Zap size={15} /> {urgent ? "Urgent / priority delivery" : "Standard timeline"}
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-5 rounded-2xl border border-white/10 bg-black/25 p-6 light:border-slate-200 light:bg-slate-50">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-silver/55 light:text-slate-500">Estimated range</p>
              <p className="mt-2 font-display text-3xl font-bold text-white light:text-slate-950 md:text-4xl">
                <span className="premium-text">AED {fmt(estimate.min)}</span>
              </p>
              <p className="mt-1 text-lg font-semibold text-silver/80 light:text-slate-700">to AED {fmt(estimate.max)}</p>
              <p className="mt-3 text-xs leading-5 text-silver/55 light:text-slate-500">
                Indicative only. USD / GBP / CAD available on request.
              </p>
            </div>
            <div className="grid gap-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald px-5 text-sm font-semibold text-ink transition hover:brightness-110"
              >
                <MessageCircle size={16} /> Get exact quote on WhatsApp
              </a>
              <a
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 text-sm font-semibold text-silver/85 transition hover:border-cyan/35 hover:text-cyan light:border-slate-200 light:bg-white light:text-slate-700"
              >
                Send full brief
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
