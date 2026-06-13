import { BadgeCheck, Clock, RotateCcw, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";

const items = [
  {
    icon: ShieldCheck,
    title: "Scope Fixed Before Work Starts",
    body: "Clear deliverables, timeline, and price agreed upfront. No scope creep, no surprise invoices.",
    accent: "text-emerald border-emerald/25 bg-emerald/10 light:text-emerald-600 light:border-emerald-200 light:bg-emerald-50"
  },
  {
    icon: RotateCcw,
    title: "30-Day Post-Launch Support",
    body: "Any issue found after launch is fixed free of charge for 30 days — no questions asked.",
    accent: "text-cyan border-cyan/25 bg-cyan/10 light:text-blue-600 light:border-blue-200 light:bg-blue-50"
  },
  {
    icon: Clock,
    title: "Milestone Updates Throughout",
    body: "Progress shared at every stage. Delays communicated immediately — never discovered at the end.",
    accent: "text-violet border-violet/25 bg-violet/10 light:text-violet-600 light:border-violet-200 light:bg-violet-50"
  },
  {
    icon: BadgeCheck,
    title: "UK Registered Business",
    body: "ARS Developer Ltd — a registered UK company. Professional, accountable, and legally protected.",
    accent: "text-amber-400 border-amber-400/25 bg-amber-400/10 light:text-amber-600 light:border-amber-200 light:bg-amber-50"
  }
];

export function GuaranteeBar() {
  return (
    <section className="relative overflow-hidden border-y border-white/8 py-14 light:border-slate-200">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald/4 via-transparent to-cyan/4 light:from-emerald-50/60 light:via-white light:to-blue-50/60" />
      <div className="mx-auto max-w-7xl px-5">
        <Reveal>
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-emerald light:text-emerald-600">
              What You Can Always Expect
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl light:text-slate-950">
              Every engagement comes with these commitments
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, body, accent }, i) => (
            <Reveal key={title} delay={i * 0.08}>
              <div className="flex flex-col gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all duration-300 hover:border-white/16 hover:bg-white/[0.05] light:border-slate-100 light:bg-white light:shadow-sm light:hover:shadow-md">
                <span className={`grid h-11 w-11 place-items-center rounded-xl border ${accent}`}>
                  <Icon size={19} />
                </span>
                <div>
                  <p className="font-display text-[15px] font-semibold leading-snug text-white light:text-slate-950">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-silver/62 light:text-slate-500">{body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
