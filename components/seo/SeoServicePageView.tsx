import Link from "next/link";
import { ArrowRight, CheckCircle2, HelpCircle, Link2, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { BrandIcon, slugToStack } from "@/components/ui/BrandIcon";
import type { SeoServicePage } from "@/data/seo-pages";
import { jsonLdForPage } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

const UK_SLUG_KEYWORDS = ["-uk", "-london", "-manchester", "-birmingham", "-leeds", "-glasgow", "-edinburgh", "-bristol", "-sheffield"];
const CA_SLUG_KEYWORDS = ["-canada", "-toronto", "-vancouver", "-calgary", "-ottawa", "-montreal", "-edmonton"];
const AU_SLUG_KEYWORDS = ["-australia", "-sydney", "-melbourne", "-brisbane", "-perth", "-adelaide"];

function isUkSlug(slug: string) { return UK_SLUG_KEYWORDS.some((k) => slug.includes(k)); }
function isCanadaSlug(slug: string) { return CA_SLUG_KEYWORDS.some((k) => slug.includes(k)); }
function isAustraliaSlug(slug: string) { return AU_SLUG_KEYWORDS.some((k) => slug.includes(k)); }

function getAreaServed(slug: string) {
  if (isUkSlug(slug)) {
    return [
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "City", name: "London" },
      { "@type": "City", name: "Manchester" },
      { "@type": "City", name: "Birmingham" },
      { "@type": "City", name: "Leeds" },
      { "@type": "City", name: "Glasgow" },
      { "@type": "City", name: "Edinburgh" },
      { "@type": "City", name: "Bristol" },
      { "@type": "City", name: "Sheffield" }
    ];
  }
  if (isCanadaSlug(slug)) {
    return [
      { "@type": "Country", name: "Canada" },
      { "@type": "City", name: "Toronto" },
      { "@type": "City", name: "Vancouver" },
      { "@type": "City", name: "Calgary" },
      { "@type": "City", name: "Ottawa" },
      { "@type": "City", name: "Montreal" },
      { "@type": "City", name: "Edmonton" }
    ];
  }
  if (isAustraliaSlug(slug)) {
    return [
      { "@type": "Country", name: "Australia" },
      { "@type": "City", name: "Sydney" },
      { "@type": "City", name: "Melbourne" },
      { "@type": "City", name: "Brisbane" },
      { "@type": "City", name: "Perth" },
      { "@type": "City", name: "Adelaide" }
    ];
  }
  return [
    { "@type": "City", name: "Dubai" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "AdministrativeArea", name: "Abu Dhabi" },
    { "@type": "AdministrativeArea", name: "Sharjah" },
    { "@type": "AdministrativeArea", name: "Ajman" },
    { "@type": "AdministrativeArea", name: "Ras Al Khaimah" },
    { "@type": "AdministrativeArea", name: "Fujairah" },
    { "@type": "AdministrativeArea", name: "Umm Al Quwain" }
  ];
}

function getOfferCurrency(slug: string) {
  if (isUkSlug(slug)) return "GBP";
  if (isCanadaSlug(slug)) return "CAD";
  if (isAustraliaSlug(slug)) return "AUD";
  return "AED";
}

function serviceJsonLd(page: SeoServicePage) {
  const url = absoluteUrl(`/${page.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: page.title,
    description: page.metaDescription,
    provider: { "@id": absoluteUrl("/#person") },
    areaServed: getAreaServed(page.slug),
    serviceType: page.navLabel,
    category: "Web Development",
    url,
    image: {
      "@type": "ImageObject",
      url: absoluteUrl(page.image),
      width: 760,
      height: 428,
      caption: page.title
    },
    audience: {
      "@type": "Audience",
      audienceType: "Businesses, Startups, Founders, Agencies, Ecommerce Owners"
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: page.title,
      itemListElement: page.features.map((feature) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: feature }
      }))
    },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2", ".service-intro"] },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: getOfferCurrency(page.slug),
        description: "Project pricing depends on scope, platform, integrations, timeline, and required support."
      }
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "4",
      bestRating: "5",
      worstRating: "1"
    },
    potentialAction: {
      "@type": "ContactAction",
      name: "Get a Quote",
      target: [absoluteUrl("/contact")]
    }
  };
}

function faqJsonLd(page: SeoServicePage) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${absoluteUrl(`/${page.slug}`)}#faq`,
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };
}

// Brand name display labels for stack icons
const brandLabels: Record<string, string> = {
  laravel: "Laravel", wordpress: "WordPress", shopify: "Shopify",
  react: "React", nextjs: "Next.js", php: "PHP", mysql: "MySQL",
  vue: "Vue.js", typescript: "TypeScript", javascript: "JavaScript",
  nodejs: "Node.js", tailwind: "Tailwind",
};

export function SeoServicePageView({ page }: { page: SeoServicePage }) {
  const path = `/${page.slug}`;
  const stackIcons = slugToStack[page.slug] ?? [];

  return (
    <>
      <JsonLd
        data={jsonLdForPage(path, [
          { name: "Home", url: absoluteUrl("/") },
          { name: "Services", url: absoluteUrl("/services") },
          { name: page.navLabel, url: absoluteUrl(path) }
        ])}
        id={`${page.slug}-json-ld`}
      />
      <JsonLd data={serviceJsonLd(page)} id={`${page.slug}-service-json-ld`} />
      <JsonLd data={faqJsonLd(page)} id={`${page.slug}-faq-json-ld`} />

      <section className="page-start section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <nav aria-label="breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-silver/55 light:text-slate-400">
              <li><Link href="/" className="hover:text-cyan light:hover:text-blue-600">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/services" className="hover:text-cyan light:hover:text-blue-600">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-silver/85 light:text-slate-600">{page.navLabel}</li>
            </ol>
          </nav>
          <PageHero
            eyebrow="Problem-solving service"
            title={page.title}
            description={page.intro[0]}
            image={page.image}
            imageAlt={page.imageAlt}
            label={`${page.navLabel} by Anas Tanveer`}
            points={["Dubai, UAE", "7+ years experience", "Laravel, WordPress, Shopify", "Available for freelance and remote projects"]}
          />

          {/* Tech stack strip */}
          {stackIcons.length > 0 && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-silver/40 light:text-slate-400">Built with</span>
              {stackIcons.map((icon) => (
                <span
                  key={icon}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm font-medium text-silver/80 light:border-slate-200 light:bg-white light:text-slate-700"
                >
                  <BrandIcon name={icon} className="h-[18px] w-[18px] rounded-sm" />
                  {brandLabels[icon] ?? icon}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-[0.78fr_0.22fr]">
          <article className="space-y-6">

            {/* Service overview */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 shadow-[0_4px_40px_rgba(0,0,0,0.18)] light:border-slate-200 light:bg-white md:p-8">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan/5 via-transparent to-violet/5 light:from-blue-50/80 light:via-transparent light:to-violet-50/40" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">Service overview</p>
                <div className="service-intro mt-5 space-y-5 text-base leading-8 text-silver/76 light:text-slate-600">
                  {page.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Problems + Features — 2 col */}
            <div className="grid gap-5 md:grid-cols-2">

              {/* Problems */}
              <div className="relative overflow-hidden rounded-2xl border border-cyan/15 bg-white/[0.02] p-6 light:border-blue-100 light:bg-blue-50/40">
                <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan/8 blur-3xl light:bg-blue-200/40" />
                <div className="relative">
                  <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-2xl border border-cyan/25 bg-cyan/15 text-cyan">
                    <ShieldCheck size={20} />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-white light:text-slate-950">Problems this service solves</h2>
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-silver/72 light:text-slate-600">
                    {page.problems.map((item) => (
                      <li className="flex gap-3" key={item}>
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Features */}
              <div className="relative overflow-hidden rounded-2xl border border-emerald/15 bg-white/[0.02] p-6 light:border-emerald-100 light:bg-emerald-50/40">
                <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-emerald/8 blur-3xl light:bg-emerald-200/40" />
                <div className="relative">
                  <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-2xl border border-emerald/25 bg-emerald/15 text-emerald">
                    <Sparkles size={20} />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-white light:text-slate-950">Features delivered</h2>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {page.features.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-emerald/20 bg-emerald/8 px-3 py-1.5 text-xs font-medium text-emerald/85 light:border-emerald-200 light:bg-emerald-50 light:text-emerald-800"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-7 font-display text-base font-semibold text-white light:text-slate-950">Best fit for</h3>
                  <ul className="mt-4 space-y-2 text-sm text-silver/72 light:text-slate-600">
                    {page.bestFor.map((item) => (
                      <li className="flex items-center gap-2" key={item}>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald shadow-[0_0_6px_rgba(52,211,153,0.6)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Anas */}
            <div className="relative overflow-hidden rounded-2xl border border-violet/15 bg-white/[0.02] p-6 light:border-violet-100 light:bg-violet-50/30 md:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-violet/8 blur-3xl light:bg-violet-200/40" />
              <div className="relative">
                <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-2xl border border-violet/25 bg-violet/15 text-violet">
                  <Zap size={20} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet light:text-violet-700">Why work with Anas Tanveer</p>
                <h2 className="mt-4 font-display text-2xl font-semibold text-white light:text-slate-950">
                  Practical full-stack delivery with business context.
                </h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-silver/76 light:text-slate-600">
                  {page.delivery.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <p>
                    Anas Tanveer is a Dubai-based full-stack web developer connected with ARS Developer Ltd, working across Laravel, PHP,
                    WordPress, Shopify, React, Next.js, MySQL, REST APIs, SEO, PageSpeed, dashboards, ERP, CRM, and ecommerce systems for
                    UAE, UK, Canada, and international project needs.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 light:border-slate-200 light:bg-white md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">Frequently asked questions</p>
              <div className="mt-5 grid gap-4">
                {page.faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 light:border-slate-100 light:bg-slate-50"
                  >
                    <h3 className="flex items-start gap-3 font-display text-base font-semibold text-white light:text-slate-950">
                      <HelpCircle className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-silver/72 light:text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">

            {/* Related links */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 light:border-slate-200 light:bg-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Related services</p>
              <div className="mt-4 grid gap-2">
                {page.related.map((link) => (
                  <Link
                    key={`${link.href}-${link.label}`}
                    href={link.href}
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-silver/76 transition hover:border-cyan/35 hover:bg-cyan/5 hover:text-cyan light:border-slate-100 light:bg-white light:text-slate-700"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Stack icons in sidebar */}
            {stackIcons.length > 0 && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 light:border-slate-200 light:bg-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Tech stack</p>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {stackIcons.map((icon) => (
                    <div key={icon} className="flex flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.03] px-2 py-3 light:border-slate-100 light:bg-slate-50">
                      <BrandIcon name={icon} className="h-7 w-7 rounded-md" />
                      <span className="text-center text-[10px] font-medium leading-tight text-silver/55 light:text-slate-500">
                        {brandLabels[icon] ?? icon}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Entity card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 light:border-slate-200 light:bg-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Developer</p>
              <dl className="mt-4 space-y-3 text-sm text-silver/72 light:text-slate-600">
                <div><dt className="text-white light:text-slate-950">Name</dt><dd>Anas Tanveer</dd></div>
                <div><dt className="text-white light:text-slate-950">Location</dt><dd>Dubai, UAE</dd></div>
                <div><dt className="text-white light:text-slate-950">Company</dt><dd>ARS Developer Ltd</dd></div>
                <div><dt className="text-white light:text-slate-950">Contact</dt><dd>info@anastanveer.com</dd></div>
              </dl>
              <a
                href="https://www.linkedin.com/in/anas-fullstackdev/"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-emerald"
              >
                <Link2 size={15} />
                LinkedIn profile
              </a>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        title={`Need ${page.navLabel.toLowerCase()} support?`}
        text="Send the business problem, current platform, desired result, timeline, and budget range. I will review it and respond with a practical next step."
      />
    </>
  );
}
