import { Check, Minus, X } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const rows = [
  { label: "Direct access to the developer",          me: true,  agency: false, fiverr: null  },
  { label: "Fixed scope & price agreed upfront",       me: true,  agency: false, fiverr: null  },
  { label: "Business problem-first thinking",           me: true,  agency: false, fiverr: false },
  { label: "30-day post-launch support included",       me: true,  agency: false, fiverr: false },
  { label: "Fast replies (under 4 hours)",              me: true,  agency: false, fiverr: true  },
  { label: "No account managers or handoffs",           me: true,  agency: false, fiverr: true  },
  { label: "SEO-ready code & schema from day one",      me: true,  agency: null,  fiverr: false },
  { label: "Registered business & legal accountability",me: true,  agency: true,  fiverr: false },
];

function Cell({ value }: { value: boolean | null }) {
  if (value === true)
    return (
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald/15 text-emerald light:bg-emerald-50 light:text-emerald-600">
        <Check size={13} strokeWidth={2.5} />
      </span>
    );
  if (value === false)
    return (
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-500/10 text-red-400 light:bg-red-50 light:text-red-500">
        <X size={13} strokeWidth={2.5} />
      </span>
    );
  return (
    <span className="flex h-7 w-7 items-center justify-center text-silver/28 light:text-slate-300">
      <Minus size={13} />
    </span>
  );
}

export function ComparisonSection() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(38,217,255,0.06),transparent_55%)] light:bg-[radial-gradient(ellipse_at_50%_0%,rgba(37,99,235,0.04),transparent_55%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/25 to-transparent" />
      <div className="mx-auto max-w-7xl px-5">
        <div className="mb-10">
          <SectionHeader
            eyebrow="Why Choose Me"
            title="Me vs. Agency vs. Fiverr — a practical comparison."
            description="Agency quality. Freelancer speed. Registered business accountability. Here's what that means in practice."
          />
        </div>
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-white/10 light:border-slate-200">
            {/* Header row */}
            <div className="grid grid-cols-[1fr_80px_80px_80px] border-b border-white/8 bg-white/[0.05] px-5 py-4 light:border-slate-100 light:bg-slate-50 md:grid-cols-[1fr_112px_112px_112px]">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-silver/45 light:text-slate-400">
                What you need
              </div>
              <div className="text-center text-xs font-bold text-cyan light:text-blue-700">Anas</div>
              <div className="text-center text-xs font-semibold text-silver/50 light:text-slate-400">Agency</div>
              <div className="text-center text-xs font-semibold text-silver/50 light:text-slate-400">Fiverr</div>
            </div>

            {/* Data rows */}
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1fr_80px_80px_80px] items-center border-b border-white/[0.045] px-5 py-3.5 last:border-0 light:border-slate-100 md:grid-cols-[1fr_112px_112px_112px] md:py-4 ${
                  i % 2 !== 0 ? "bg-white/[0.02] light:bg-slate-50/60" : ""
                }`}
              >
                <p className="pr-4 text-sm text-silver/78 light:text-slate-700">{row.label}</p>
                <div className="flex justify-center">
                  <Cell value={row.me} />
                </div>
                <div className="flex justify-center">
                  <Cell value={row.agency} />
                </div>
                <div className="flex justify-center">
                  <Cell value={row.fiverr} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-center text-sm text-silver/42 light:text-slate-400">
            — means varies. Fiverr/agency generalisations based on typical project experience at the SME level.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
