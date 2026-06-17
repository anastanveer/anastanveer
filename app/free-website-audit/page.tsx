import type { Metadata } from "next";
import { Gauge, Search, ShieldCheck, Smartphone, TrendingUp } from "lucide-react";
import { AuditForm } from "@/components/ui/AuditForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { jsonLdForPage, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Free Website Audit Dubai | Speed, SEO & Conversion Check",
  description:
    "Get a free 5-point website audit — speed, mobile experience, SEO, security and conversion. A Dubai full-stack developer reviews your site and replies within 4 hours.",
  path: "/free-website-audit"
});

const points = [
  { icon: Gauge, title: "Speed & Core Web Vitals", text: "Where load time and LCP/CLS/INP are costing you visitors and rankings." },
  { icon: Smartphone, title: "Mobile experience", text: "How the site really performs on phones — the majority of your traffic." },
  { icon: Search, title: "SEO foundations", text: "Indexing, metadata, schema and structure gaps holding back visibility." },
  { icon: TrendingUp, title: "Conversion & UX", text: "Friction points and weak calls-to-action that lose enquiries." },
  { icon: ShieldCheck, title: "Security & tech health", text: "Outdated platform, plugin or hosting risks worth fixing." }
];

export default function FreeWebsiteAuditPage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/free-website-audit")} id="audit-json-ld" />
      <section className="section-pad page-start">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald/25 bg-emerald/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald light:border-emerald-600/25 light:bg-emerald-50 light:text-emerald-700">
                <Search size={14} /> Free · No obligation
              </p>
              <h1 className="mt-5 max-w-[18ch] font-display text-4xl font-semibold leading-[1.05] text-white light:text-slate-950 md:text-5xl">
                Free 5-point website audit
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-silver/82 light:text-slate-600">
                Send your URL and I will personally review your website across speed, mobile, SEO,
                conversion and security — then send back the highest-impact fixes. No automated PDF,
                no sales pressure, reply within 4 hours.
              </p>
              <ul className="mt-8 grid gap-4">
                {points.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan/25 bg-cyan/10 text-cyan light:border-blue-500/25 light:bg-blue-50 light:text-blue-700">
                      <Icon size={17} />
                    </span>
                    <div>
                      <p className="font-display text-sm font-semibold text-white light:text-slate-950">{title}</p>
                      <p className="mt-0.5 text-sm leading-6 text-silver/70 light:text-slate-600">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:sticky lg:top-28">
              <AuditForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
