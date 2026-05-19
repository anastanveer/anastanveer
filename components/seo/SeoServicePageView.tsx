import Link from "next/link";
import { ArrowRight, CheckCircle2, HelpCircle, Link2, ShieldCheck, Sparkles } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import type { SeoServicePage } from "@/data/seo-pages";
import { jsonLdForPage } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

function serviceJsonLd(page: SeoServicePage) {
  const url = absoluteUrl(`/${page.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: page.title,
    description: page.metaDescription,
    provider: { "@id": absoluteUrl("/#person") },
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" }
    ],
    serviceType: page.navLabel,
    url,
    image: absoluteUrl(page.image),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".service-intro"]
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "AED",
        description: "Project pricing depends on scope, platform, integrations, timeline, and required support."
      }
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
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function SeoServicePageView({ page }: { page: SeoServicePage }) {
  const path = `/${page.slug}`;

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
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 lg:grid-cols-[0.78fr_0.22fr]">
          <article className="space-y-6">
            <div className="glass rounded-lg p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">Service overview</p>
              <div className="mt-5 space-y-5 text-base leading-8 text-silver/76 light:text-slate-600">
                {page.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="premium-card glass rounded-lg p-6">
                <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-2xl border border-cyan/20 bg-cyan/10 text-cyan">
                  <ShieldCheck size={20} />
                </div>
                <h2 className="font-display text-2xl font-semibold text-white light:text-slate-950">Problems this service solves</h2>
                <ul className="mt-5 space-y-3 text-sm leading-7 text-silver/72 light:text-slate-600">
                  {page.problems.map((item) => (
                    <li className="flex gap-3" key={item}>
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-cyan" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="premium-card glass rounded-lg p-6">
                <div className="mb-5 inline-grid h-11 w-11 place-items-center rounded-2xl border border-emerald/20 bg-emerald/10 text-emerald">
                  <Sparkles size={20} />
                </div>
                <h2 className="font-display text-2xl font-semibold text-white light:text-slate-950">Features delivered</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {page.features.map((item) => (
                    <span
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-silver/76 light:border-slate-900/10 light:bg-slate-50 light:text-slate-700"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <h3 className="mt-7 font-display text-lg font-semibold text-white light:text-slate-950">Best fit for</h3>
                <ul className="mt-4 space-y-2 text-sm text-silver/72 light:text-slate-600">
                  {page.bestFor.map((item) => (
                    <li className="flex items-center gap-2" key={item}>
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="glass rounded-lg p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">Why work with Anas Tanveer</p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-white light:text-slate-950">
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

            <div className="glass rounded-lg p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan">Frequently asked questions</p>
              <div className="mt-5 grid gap-4">
                {page.faqs.map((faq) => (
                  <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 light:border-slate-900/10 light:bg-white" key={faq.question}>
                    <h3 className="flex items-start gap-3 font-display text-lg font-semibold text-white light:text-slate-950">
                      <HelpCircle className="mt-1 h-4 w-4 shrink-0 text-cyan" />
                      {faq.question}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-silver/72 light:text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="glass rounded-lg p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Internal links</p>
              <div className="mt-4 grid gap-2">
                {page.related.map((link) => (
                  <Link
                    className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-medium text-silver/76 transition hover:border-cyan/35 hover:text-cyan light:border-slate-900/10 light:bg-white light:text-slate-700"
                    href={link.href}
                    key={`${link.href}-${link.label}`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="glass rounded-lg p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">Entity details</p>
              <dl className="mt-4 space-y-3 text-sm text-silver/72 light:text-slate-600">
                <div><dt className="text-white light:text-slate-950">Name</dt><dd>Anas Tanveer</dd></div>
                <div><dt className="text-white light:text-slate-950">Location</dt><dd>Dubai, UAE</dd></div>
                <div><dt className="text-white light:text-slate-950">Company</dt><dd>ARS Developer Ltd</dd></div>
                <div><dt className="text-white light:text-slate-950">Contact</dt><dd>info@anastanveer.com</dd></div>
              </dl>
              <a
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:text-emerald"
                href="https://www.linkedin.com/in/anas-fullstackdev/"
                target="_blank"
                rel="noreferrer"
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
