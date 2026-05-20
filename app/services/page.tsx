import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";
import { FAQ } from "@/components/sections/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
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
      <section className="section-pad pt-0">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="Service Areas" title="Serving Dubai, Abu Dhabi, Sharjah and UAE businesses remotely." />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {seoServicePages.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-medium text-silver/76 transition hover:border-cyan/35 hover:text-cyan light:border-slate-200 light:bg-white light:text-slate-700 light:hover:border-blue-300 light:hover:text-blue-700"
              >
                <span>{page.navLabel}</span>
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="Questions" title="What clients, agencies, recruiters, and founders usually ask before hiring." />
          <FAQ items={allFaqs} />
        </div>
      </section>
      <CTASection
        title="Which web problem do you need solved?"
        text="Share the current issue, platform, business goal, and timeline. I’ll help identify whether Laravel, WordPress, Shopify, APIs, dashboards, SEO, speed optimization, or a custom platform is the right direction."
      />
    </>
  );
}
