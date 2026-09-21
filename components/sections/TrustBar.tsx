import { BadgeCheck, Clock, Globe2, ShieldCheck, Wallet } from "lucide-react";

// Static, server-rendered trust strip placed under the hero.
//
// This used to read "Trusted by businesses across" over four flags including
// Australia, which is a claim about past clients. The evidence on the site is six
// Fiverr reviews from the United States and France, and the Australia service pages
// were de-indexed precisely because they are not a market this domain serves. A claim
// the site's own content contradicts is the kind of thing an AdSense reviewer opens
// two tabs to check.
//
// It now states where the work is done from and for, which is true and checkable:
// based in the UAE, trading as a UK registered company, working with clients in North
// America and Europe. Everything in `signals` is likewise verifiable — Companies House
// 17039150, a stated reply time, and fixed-price options that exist on /pricing.
const regions = [
  { flag: "🇦🇪", label: "Based in UAE" },
  { flag: "🇬🇧", label: "UK registered" },
  { flag: "🇺🇸", label: "US clients" },
  { flag: "🇫🇷", label: "EU clients" }
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
          <span className="font-medium">Working across</span>
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
