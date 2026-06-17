import { BadgeCheck, Clock, Globe2, ShieldCheck, Wallet } from "lucide-react";

// Static, server-rendered trust strip placed under the hero. All claims are
// factual (UK registered entity, multi-region reach, stated reply time,
// fixed-price options on the pricing page). No client JS, no layout shift.
const regions = [
  { flag: "🇦🇪", label: "UAE" },
  { flag: "🇬🇧", label: "UK" },
  { flag: "🇨🇦", label: "Canada" },
  { flag: "🇦🇺", label: "Australia" }
];

const signals = [
  { icon: ShieldCheck, label: "UK Registered Business" },
  { icon: BadgeCheck, label: "7+ Years Experience" },
  { icon: Clock, label: "Replies within 4 hours" },
  { icon: Wallet, label: "Fixed-Price Options" }
];

export function TrustBar() {
  return (
    <section className="relative border-b border-white/8 py-5 light:border-slate-200" aria-label="Trust and coverage">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 px-5 md:flex-row md:gap-8">
        <div className="flex items-center gap-2 text-sm text-silver/70 light:text-slate-600">
          <Globe2 size={16} className="text-cyan light:text-blue-600" />
          <span className="font-medium">Trusted by businesses across</span>
          <span className="flex items-center gap-2">
            {regions.map((r) => (
              <span key={r.label} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-semibold text-silver/85 light:border-slate-200 light:bg-white light:text-slate-700">
                <span aria-hidden="true">{r.flag}</span>
                {r.label}
              </span>
            ))}
          </span>
        </div>
        <div className="hidden h-5 w-px bg-white/12 md:block light:bg-slate-200" />
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {signals.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-1.5 text-xs font-medium text-silver/72 light:text-slate-600">
              <Icon size={14} className="text-emerald light:text-emerald-600" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
