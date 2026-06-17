import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { caseStudies } from "@/data/site";
import { jsonLdForPage, pageMetadata, pageTypeSchema } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Case Studies | Web Problems Solved by Anas Tanveer",
  description: "Case studies on trading platforms, dashboards, Shopify conversion, Laravel, APIs, ERP, ecommerce and SEO-ready web solutions.",
  path: "/case-studies"
});

const accentColors = [
  { border: "border-cyan/30", bg: "bg-cyan/10", text: "text-cyan", label: "light:border-blue-300/50 light:bg-blue-50 light:text-blue-700" },
  { border: "border-violet/30", bg: "bg-violet/10", text: "text-violet", label: "light:border-violet-300/50 light:bg-violet-50 light:text-violet-700" },
  { border: "border-emerald/30", bg: "bg-emerald/10", text: "text-emerald", label: "light:border-emerald-300/50 light:bg-emerald-50 light:text-emerald-700" },
  { border: "border-amber-400/30", bg: "bg-amber-400/10", text: "text-amber-400", label: "light:border-amber-400/50 light:bg-amber-50 light:text-amber-700" }
];

const serviceLinks = [
  { label: "Laravel Developer Dubai", href: "/laravel-developer-dubai" },
  { label: "Dashboard Development", href: "/dashboard-development-dubai" },
  { label: "Shopify Developer Dubai", href: "/shopify-developer-dubai" },
  { label: "ERP Development UAE", href: "/erp-development-uae" },
  { label: "API Integration Services", href: "/api-integration-services" }
];

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": absoluteUrl("/case-studies#list"),
  name: "Web Development Case Studies by Anas Tanveer",
  url: absoluteUrl("/case-studies"),
  numberOfItems: caseStudies.length,
  itemListElement: caseStudies.map((cs, i) => ({
    "@type": "ListItem",
    position: i + 1,
    url: absoluteUrl(`/case-studies/${cs.slug}`),
    name: cs.title,
  })),
};

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/case-studies")} id="case-studies-json-ld" />
      <JsonLd data={itemListJsonLd} id="case-studies-list-json-ld" />
      <JsonLd
        data={pageTypeSchema("CollectionPage", "/case-studies", {
          name: "Case Studies — Web Development Projects by Anas Tanveer Dubai",
          description: "Business-focused case studies showing the challenge, strategy, solution, and outcome behind Laravel platforms, dashboards, Shopify, ERP, and API projects for Dubai and global clients.",
          items: caseStudies.map((cs) => ({
            name: cs.title,
            url: absoluteUrl(`/case-studies/${cs.slug}`),
            description: cs.result
          }))
        })}
        id="case-studies-collection-json-ld"
      />
      <section className="section-pad page-start">
        <div className="mx-auto max-w-7xl px-5">
          <PageHero
            eyebrow="Case Studies"
            title="Case Studies from Problem to Working Solution."
            description="Business-focused examples showing the problem, goal, strategy, features, technology, and outcome behind Laravel platforms, dashboards, Shopify logic and API delivery."
            image="/images/projects-suite-760.webp"
            imageAlt="Premium case study systems visual"
            label="Project planning, technical decisions, implementation and delivery."
            points={["Problem diagnosis", "Technical strategy", "Business impact", "Maintainable delivery"]}
          />

          <div className="mt-14 grid gap-10">
            {caseStudies.map((study, index) => {
              const accent = accentColors[index % accentColors.length];
              return (
                <article
                  key={study.title}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] shadow-[0_4px_60px_rgba(0,0,0,0.3)] light:border-slate-200 light:bg-white light:shadow-xl"
                >
                  {/* ── Hero image with overlay ── */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={study.images[0]}
                      alt={`${study.title} project visual`}
                      width={1200}
                      height={514}
                      className="aspect-[21/9] w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                      sizes="(max-width: 1280px) 100vw, 1200px"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/10" />

                    {/* Decorative number */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-6 top-4 select-none font-display text-[7rem] font-bold leading-none text-white/[0.08] md:text-[9rem]"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Bottom overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <p className={`text-[11px] font-semibold uppercase tracking-[0.26em] ${accent.text}`}>
                        Case Study {String(index + 1).padStart(2, "0")}
                      </p>
                      <h2 className="mt-2 font-display text-2xl font-semibold leading-snug text-white md:text-3xl">
                        {study.title}
                      </h2>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {study.stack.map((tech) => (
                          <span
                            key={tech}
                            className={`rounded-full border px-3 py-1 text-[11px] font-semibold backdrop-blur-sm ${accent.border} ${accent.bg} ${accent.text}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ── Card body ── */}
                  <div className="p-6 md:p-8">

                    {/* Impact result — prominent */}
                    <div className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald/25 bg-emerald/8 px-5 py-4 light:border-emerald-200 light:bg-emerald-50">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald light:text-emerald-600" />
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald light:text-emerald-700">
                          Business Result
                        </p>
                        <p className="mt-1 text-sm font-medium leading-6 text-emerald/90 light:text-emerald-800">
                          {study.result}
                        </p>
                      </div>
                    </div>

                    {/* Highlights — honest capability strip */}
                    {study.highlights?.length ? (
                      <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                        {study.highlights.map((h) => (
                          <div
                            key={h}
                            className={`flex items-center gap-2.5 rounded-2xl border px-4 py-3 ${accent.border} ${accent.bg} light:bg-white`}
                          >
                            <CheckCircle2 size={16} className={`shrink-0 ${accent.text}`} />
                            <span className="text-sm font-semibold leading-snug text-white light:text-slate-800">{h}</span>
                          </div>
                        ))}
                      </div>
                    ) : null}

                    {/* Challenge + Solution 2 columns */}
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 light:border-slate-100 light:bg-slate-50">
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-silver/45 light:text-slate-400">
                          The Challenge
                        </p>
                        <p className="text-sm leading-7 text-silver/72 light:text-slate-600">{study.challenge}</p>
                      </div>
                      <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 light:border-slate-100 light:bg-slate-50">
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-silver/45 light:text-slate-400">
                          The Solution
                        </p>
                        <p className="text-sm leading-7 text-silver/72 light:text-slate-600">{study.solution}</p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mt-5">
                      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-silver/45 light:text-slate-400">
                        Features Delivered
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {study.features.map((feature) => (
                          <span
                            key={feature}
                            className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-silver/75 light:border-slate-200 light:bg-white light:text-slate-700"
                          >
                            <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${accent.bg.replace("/10", "")} ${accent.text}`} />
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Image gallery — 4 thumbs */}
                    {study.images.length > 1 && (
                      <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                        {study.images.slice(1, 5).map((image, imageIndex) => (
                          <div
                            key={image}
                            className="overflow-hidden rounded-xl border border-white/8 light:border-slate-200"
                          >
                            <Image
                              src={image}
                              alt={`${study.title} screenshot ${imageIndex + 2}`}
                              width={400}
                              height={250}
                              className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Bottom — related links + CTA */}
                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 pt-5 light:border-slate-100">
                      <div className="flex flex-wrap gap-2">
                        {serviceLinks.slice(0, 3).map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-silver/65 transition hover:border-cyan/30 hover:text-cyan light:border-slate-200 light:text-slate-500 light:hover:border-blue-300 light:hover:text-blue-700"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <Link
                          href={`/case-studies/${study.slug}`}
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-silver/76 transition hover:border-cyan/35 hover:text-cyan light:border-slate-200 light:bg-white light:text-slate-700"
                        >
                          Read full case study <ArrowUpRight size={14} />
                        </Link>
                        <Link
                          href="/contact"
                          className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition hover:opacity-80 ${accent.border} ${accent.bg} ${accent.text} ${accent.label}`}
                        >
                          Start similar project <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Want your project treated like a case study?"
        text="Send the problem, current platform, business goal, and deadline. I'll look at the workflow, users, technical risks, SEO needs, and launch path before suggesting a practical solution."
      />
    </>
  );
}
