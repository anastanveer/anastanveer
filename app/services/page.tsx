import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Globe, Layers, Zap } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { BrandIcon, slugToStack } from "@/components/ui/BrandIcon";
import { allFaqs } from "@/data/faqs";
import { services } from "@/data/site";
import { seoServicePages } from "@/data/seo-pages";
import { jsonLdForPage, faqSchema, pageMetadata } from "@/lib/seo";

const servicesFaqs = allFaqs.map(({ q, a }) => ({ question: q, answer: a }));

export const metadata: Metadata = pageMetadata({
  title: "Services | Laravel, WordPress, Shopify Developer Dubai",
  description: "Web problem solving in Dubai for Laravel apps, WordPress sites, Shopify stores, dashboards, ERP, API integrations, SEO and speed.",
  path: "/services"
});

// Category buckets — SEO pages grouped for visual clarity
const platformSlugs = [
  "laravel-developer-dubai",
  "php-developer-dubai",
  "wordpress-developer-dubai",
  "shopify-developer-dubai",
  "react-developer-dubai",
  "nextjs-developer-dubai",
  "vue-developer-dubai",
  "typescript-developer-dubai",
  "nodejs-developer-dubai",
  "mysql-developer-dubai",
  "hire-laravel-developer",
];

const locationSlugs = [
  "web-developer-abu-dhabi",
  "web-developer-sharjah",
  "web-developer-ajman",
  "web-developer-ras-al-khaimah",
];

const specialtySlugs = [
  "fullstack-developer-dubai",
  "dashboard-development-dubai",
  "erp-development-uae",
  "crm-development-dubai",
  "saas-developer-dubai",
  "api-integration-services",
  "ecommerce-website-development-dubai",
  "ecommerce-developer-dubai",
  "website-speed-optimization-dubai",
  "wordpress-seo-dubai",
  "wordpress-maintenance-dubai",
  "seo-friendly-website-development",
  "freelance-web-developer-dubai",
];

function getPlatformPage(slug: string) {
  return seoServicePages.find((p) => p.slug === slug);
}

const platformPages = platformSlugs.map(getPlatformPage).filter(Boolean) as typeof seoServicePages;
const locationPages = locationSlugs.map(getPlatformPage).filter(Boolean) as typeof seoServicePages;
const specialtyPages = specialtySlugs.map(getPlatformPage).filter(Boolean) as typeof seoServicePages;

// Remaining pages not in any bucket
const bucketed = new Set([...platformSlugs, ...locationSlugs, ...specialtySlugs]);
const otherPages = seoServicePages.filter((p) => !bucketed.has(p.slug));

const categories = [
  {
    id: "platforms",
    eyebrow: "01 / Platforms & Frameworks",
    title: "Framework & Platform Experts",
    desc: "Full-stack delivery on the platforms that power real business workflows — Laravel, WordPress, Shopify, React and more.",
    icon: Layers,
    accent: "cyan",
    borderClass: "border-cyan/20",
    bgClass: "bg-cyan/[0.04]",
    glowClass: "from-cyan/8",
    hoverBorder: "hover:border-cyan/35",
    hoverBg: "hover:bg-cyan/5",
    hoverText: "group-hover:text-cyan",
    arrowColor: "group-hover:text-cyan",
    pages: platformPages,
  },
  {
    id: "locations",
    eyebrow: "02 / UAE Locations",
    title: "UAE Location Services",
    desc: "Web development serving Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah and all UAE emirates — remote and on-site.",
    icon: Globe,
    accent: "violet",
    borderClass: "border-violet/20",
    bgClass: "bg-violet/[0.04]",
    glowClass: "from-violet/8",
    hoverBorder: "hover:border-violet/35",
    hoverBg: "hover:bg-violet/5",
    hoverText: "group-hover:text-violet",
    arrowColor: "group-hover:text-violet",
    pages: locationPages,
  },
  {
    id: "specialty",
    eyebrow: "03 / Specialty Services",
    title: "Specialist & Enterprise Services",
    desc: "ERP, CRM, SaaS, API integration, ecommerce, speed optimisation, and SEO-ready systems built around business outcomes.",
    icon: Zap,
    accent: "emerald",
    borderClass: "border-emerald/20",
    bgClass: "bg-emerald/[0.04]",
    glowClass: "from-emerald/8",
    hoverBorder: "hover:border-emerald/35",
    hoverBg: "hover:bg-emerald/5",
    hoverText: "group-hover:text-emerald",
    arrowColor: "group-hover:text-emerald",
    pages: specialtyPages,
  },
];

function ServiceAreaCard({
  page,
  hoverBorder,
  hoverBg,
  hoverText,
  arrowColor,
}: {
  page: typeof seoServicePages[0];
  hoverBorder: string;
  hoverBg: string;
  hoverText: string;
  arrowColor: string;
}) {
  const stackIcons = slugToStack[page.slug] ?? [];
  const primaryIcon = stackIcons[0];

  return (
    <Link
      href={`/${page.slug}`}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-5 transition-all duration-200 ${hoverBorder} ${hoverBg} light:border-slate-200 light:bg-white light:hover:border-blue-200`}
    >
      <div className="mb-3 flex items-start justify-between gap-2">
        {primaryIcon ? (
          <BrandIcon name={primaryIcon} className="h-8 w-8 rounded-lg" />
        ) : (
          <span className="inline-grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white/10 light:bg-slate-100">
            <Globe size={16} className="text-silver/50" />
          </span>
        )}
        <ArrowUpRight
          size={15}
          className={`shrink-0 text-silver/25 transition ${arrowColor} light:text-slate-300`}
        />
      </div>
      <p className={`font-display text-sm font-semibold leading-snug text-white transition ${hoverText} light:text-slate-950`}>
        {page.navLabel}
      </p>
      {stackIcons.length > 1 && (
        <div className="mt-2.5 flex gap-1">
          {stackIcons.slice(1, 3).map((icon) => (
            <BrandIcon key={icon} name={icon} className="h-4 w-4 rounded-sm opacity-60" />
          ))}
        </div>
      )}
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/services")} id="services-json-ld" />
      <JsonLd data={faqSchema(servicesFaqs)} id="services-faq-json-ld" />

      <section className="section-pad page-start">
        <div className="mx-auto max-w-7xl px-5">
          <PageHero
            eyebrow="Services"
            title="Services for Businesses That Need Web Problems Solved."
            description="Laravel applications, WordPress websites, Shopify stores, dashboards, APIs, ecommerce, ERP, SEO and speed work planned around the outcome your business needs."
            image="/images/services-architecture-760.webp"
            imageAlt="Premium service architecture for Laravel WordPress Shopify ERP and SEO"
            label="Laravel, WordPress, Shopify, dashboards, APIs, ecommerce, ERP and technical SEO."
            points={["Manual work to systems", "Slow websites to speed", "Plugin limits to custom logic", "Traffic to better leads"]}
          />
          <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 md:gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} detailed index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Categorised service areas ── */}
      {categories.map((cat) => {
        if (!cat.pages.length) return null;
        const CatIcon = cat.icon;
        return (
          <section key={cat.id} className="section-pad pt-0">
            <div className="mx-auto max-w-7xl px-5">
              {/* Category header */}
              <div className={`relative overflow-hidden rounded-2xl border ${cat.borderClass} ${cat.bgClass} p-6 md:p-8`}>
                <div className={`pointer-events-none absolute right-0 top-0 h-48 w-64 rounded-full bg-gradient-to-bl ${cat.glowClass} via-transparent to-transparent blur-3xl`} />
                <div className="relative flex flex-wrap items-start gap-4">
                  <div className={`inline-grid h-11 w-11 shrink-0 place-items-center rounded-2xl border ${cat.borderClass} ${cat.bgClass}`}>
                    <CatIcon size={20} className={`text-${cat.accent}`} />
                  </div>
                  <div>
                    <p className={`text-xs font-semibold uppercase tracking-[0.24em] text-${cat.accent}`}>{cat.eyebrow}</p>
                    <h2 className="mt-1 font-display text-xl font-semibold text-white light:text-slate-950">{cat.title}</h2>
                    <p className="mt-1 max-w-2xl text-sm leading-7 text-silver/65 light:text-slate-600">{cat.desc}</p>
                  </div>
                </div>
              </div>

              {/* Cards grid */}
              <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {cat.pages.map((page) => (
                  <ServiceAreaCard
                    key={page.slug}
                    page={page}
                    hoverBorder={cat.hoverBorder}
                    hoverBg={cat.hoverBg}
                    hoverText={cat.hoverText}
                    arrowColor={cat.arrowColor}
                  />
                ))}
              </div>

              {/* Any remaining other pages (catch-all) */}
              {cat.id === "specialty" && otherPages.length > 0 && (
                <div className="mt-3 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {otherPages.map((page) => (
                    <ServiceAreaCard
                      key={page.slug}
                      page={page}
                      hoverBorder={cat.hoverBorder}
                      hoverBg={cat.hoverBg}
                      hoverText={cat.hoverText}
                      arrowColor={cat.arrowColor}
                    />
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      })}

      <section className="section-pad pt-0">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="Questions" title="What clients, agencies, recruiters, and founders usually ask before hiring." />
          <FAQ items={allFaqs} />
        </div>
      </section>
      <CTASection
        title="Which web problem do you need solved?"
        text="Share the current issue, platform, business goal, and timeline. I'll help identify whether Laravel, WordPress, Shopify, APIs, dashboards, SEO, speed optimization, or a custom platform is the right direction."
      />
    </>
  );
}
