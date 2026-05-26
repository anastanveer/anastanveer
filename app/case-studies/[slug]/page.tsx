import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Layers3, Target, Lightbulb, Zap } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { caseStudies } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

const serviceLinks: Record<string, { href: string; label: string }[]> = {
  "trading-platform-prop-firm-dubai": [
    { href: "/laravel-developer-dubai", label: "Laravel Developer Dubai" },
    { href: "/dashboard-development-dubai", label: "Dashboard Development" },
    { href: "/fullstack-developer-dubai", label: "Full Stack Developer Dubai" },
  ],
  "business-finance-dashboard-analytics": [
    { href: "/dashboard-development-dubai", label: "Dashboard Development Dubai" },
    { href: "/erp-development-uae", label: "ERP Development UAE" },
    { href: "/mysql-developer-dubai", label: "MySQL Developer Dubai" },
  ],
  "shopify-conversion-optimization-size-mapping": [
    { href: "/shopify-developer-dubai", label: "Shopify Developer Dubai" },
    { href: "/ecommerce-developer-dubai", label: "Ecommerce Developer Dubai" },
    { href: "/website-speed-optimization-dubai", label: "Speed Optimization Dubai" },
  ],
  "erp-operations-workflow-system-dubai": [
    { href: "/erp-development-uae", label: "ERP Development UAE" },
    { href: "/crm-development-dubai", label: "CRM Development Dubai" },
    { href: "/laravel-developer-dubai", label: "Laravel Developer Dubai" },
  ],
};

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) return pageMetadata({ title: "Case Study | Anas Tanveer", description: "", path: "/case-studies" });

  return pageMetadata({
    title: `${study.title} — Case Study | Anas Tanveer`,
    description: `${study.challenge.slice(0, 155)}`,
    path: `/case-studies/${slug}`,
    image: study.images[0],
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);
  if (!study) notFound();

  const index = caseStudies.indexOf(study);
  const prev = index > 0 ? caseStudies[index - 1] : null;
  const next = index < caseStudies.length - 1 ? caseStudies[index + 1] : null;
  const links = serviceLinks[slug] ?? [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Article", "TechArticle"],
    "@id": absoluteUrl(`/case-studies/${slug}#article`),
    headline: study.title,
    description: study.challenge,
    url: absoluteUrl(`/case-studies/${slug}`),
    image: {
      "@type": "ImageObject",
      url: absoluteUrl(study.images[0]),
      width: 1200,
      height: 630,
      caption: study.title
    },
    thumbnailUrl: absoluteUrl(study.images[0]),
    datePublished: "2024-09-01",
    dateModified: "2025-05-22",
    author: { "@id": absoluteUrl("/#person") },
    publisher: { "@id": "https://arsdeveloper.co.uk/#organization" },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/case-studies/${slug}`)
    },
    about: {
      "@type": "Service",
      name: study.title,
      provider: { "@id": absoluteUrl("/#person") },
      description: study.solution,
    },
    result: {
      "@type": "Thing",
      name: study.result
    },
    keywords: study.stack.join(", "),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".case-intro"],
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Case Studies", item: absoluteUrl("/case-studies") },
      { "@type": "ListItem", position: 3, name: study.title, item: absoluteUrl(`/case-studies/${slug}`) },
    ],
  };

  const accentColors = ["text-cyan", "text-violet", "text-emerald", "text-amber-400"];
  const accent = accentColors[index % accentColors.length];

  return (
    <>
      <JsonLd data={jsonLd} id="case-study-json-ld" />
      <JsonLd data={breadcrumbJsonLd} id="case-study-breadcrumb-json-ld" />

      <section className="page-start section-pad">
        <div className="mx-auto max-w-5xl px-5">
          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-silver/55 light:text-slate-400">
              <li><Link href="/" className="hover:text-cyan light:hover:text-blue-600">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/case-studies" className="hover:text-cyan light:hover:text-blue-600">Case Studies</Link></li>
              <li aria-hidden="true">/</li>
              <li className="line-clamp-1 text-silver/85 light:text-slate-600">{study.title}</li>
            </ol>
          </nav>

          {/* Hero image */}
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={study.images[0]}
              alt={`${study.title} — case study visual`}
              width={1200}
              height={514}
              className="aspect-[21/9] w-full object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <p className={`text-xs font-semibold uppercase tracking-[0.26em] ${accent}`}>
                Case Study {String(index + 1).padStart(2, "0")}
              </p>
              <h1 className="mt-2 max-w-2xl font-display text-2xl font-semibold leading-snug text-white md:text-4xl case-intro">
                {study.title}
              </h1>
              <div className="mt-3 flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <span key={tech} className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-sm text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Business result */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald/25 bg-emerald/8 px-5 py-4 light:border-emerald-200 light:bg-emerald-50">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald light:text-emerald-600" />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald light:text-emerald-700">Business Result</p>
              <p className="mt-1 text-sm font-medium leading-6 text-emerald/90 light:text-emerald-800">{study.result}</p>
            </div>
          </div>

          {/* 4-block grid */}
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 light:border-slate-100 light:bg-slate-50">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl border border-red-400/20 bg-red-400/10 text-red-400">
                  <Target size={16} />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-silver/50 light:text-slate-500">The Challenge</p>
              </div>
              <p className="text-sm leading-7 text-silver/72 light:text-slate-600">{study.challenge}</p>
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 light:border-slate-100 light:bg-slate-50">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan/20 bg-cyan/10 text-cyan">
                  <Lightbulb size={16} />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-silver/50 light:text-slate-500">The Goal</p>
              </div>
              <p className="text-sm leading-7 text-silver/72 light:text-slate-600">{study.goal}</p>
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 light:border-slate-100 light:bg-slate-50">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl border border-violet/20 bg-violet/10 text-violet">
                  <Layers3 size={16} />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-silver/50 light:text-slate-500">Strategy</p>
              </div>
              <p className="text-sm leading-7 text-silver/72 light:text-slate-600">{study.strategy}</p>
            </div>

            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 light:border-slate-100 light:bg-slate-50">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl border border-emerald/20 bg-emerald/10 text-emerald">
                  <Zap size={16} />
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-silver/50 light:text-slate-500">Solution</p>
              </div>
              <p className="text-sm leading-7 text-silver/72 light:text-slate-600">{study.solution}</p>
            </div>
          </div>

          {/* Features */}
          <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.03] p-6 light:border-slate-100 light:bg-slate-50">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-silver/50 light:text-slate-500">Features Delivered</p>
            <div className="flex flex-wrap gap-2">
              {study.features.map((f) => (
                <span key={f} className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-silver/75 light:border-slate-200 light:bg-white light:text-slate-700">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Impact */}
          <div className="mt-5 rounded-2xl border border-white/8 bg-white/[0.03] p-6 light:border-slate-100 light:bg-slate-50">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-silver/50 light:text-slate-500">Business Impact</p>
            <p className="text-sm leading-7 text-silver/72 light:text-slate-600">{study.impact}</p>
          </div>

          {/* Screenshot gallery */}
          {study.images.length > 1 && (
            <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {study.images.slice(1, 5).map((img, i) => (
                <div key={img} className="overflow-hidden rounded-xl border border-white/8 light:border-slate-200">
                  <Image
                    src={img}
                    alt={`${study.title} screenshot ${i + 2}`}
                    width={400}
                    height={250}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Related services */}
          {links.length > 0 && (
            <div className="mt-8 border-t border-white/8 pt-6 light:border-slate-100">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-silver/50 light:text-slate-500">Related Services</p>
              <div className="flex flex-wrap gap-2">
                {links.map((l) => (
                  <Link key={l.href} href={l.href}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-silver/72 transition hover:border-cyan/35 hover:text-cyan light:border-slate-200 light:bg-white light:text-slate-700">
                    {l.label}
                  </Link>
                ))}
                <Link href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-silver/72 transition hover:border-cyan/35 hover:text-cyan light:border-slate-200 light:bg-white light:text-slate-700">
                  All Case Studies <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          )}

          {/* Prev / Next navigation */}
          <div className="mt-8 grid gap-3 border-t border-white/8 pt-6 light:border-slate-100 sm:grid-cols-2">
            {prev ? (
              <Link href={`/case-studies/${prev.slug}`}
                className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan/30 light:border-slate-100 light:bg-white">
                <ArrowLeft size={16} className="shrink-0 text-silver/50 transition group-hover:text-cyan" />
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-silver/40">Previous</p>
                  <p className="mt-0.5 truncate text-sm font-medium text-silver/76 light:text-slate-700">{prev.title}</p>
                </div>
              </Link>
            ) : <div />}
            {next && (
              <Link href={`/case-studies/${next.slug}`}
                className="group flex items-center justify-end gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-right transition hover:border-cyan/30 light:border-slate-100 light:bg-white">
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-silver/40">Next</p>
                  <p className="mt-0.5 truncate text-sm font-medium text-silver/76 light:text-slate-700">{next.title}</p>
                </div>
                <ArrowUpRight size={16} className="shrink-0 text-silver/50 transition group-hover:text-cyan" />
              </Link>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title="Want a similar solution for your business?"
        text="Send the business problem, current platform, and goal. I will review it and respond with a practical approach."
      />
    </>
  );
}
