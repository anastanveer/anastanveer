import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { CostEstimator } from "@/components/sections/CostEstimator";
import { FAQ } from "@/components/sections/FAQ";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { PricingCard } from "@/components/ui/PricingCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { pricingFaqItems } from "@/data/faqs";
import { pricing } from "@/data/site";
import { jsonLdForPage, faqSchema, pageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

const pricingFaqs = pricingFaqItems.map(({ q, a }) => ({ question: q, answer: a }));

const pricingOffersJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": absoluteUrl("/pricing#offers"),
  name: "Web Development Pricing — Dubai, UK & Canada",
  description: "Transparent pricing packages for web development in Dubai (AED), UK (GBP) and Canada (CAD): websites, Shopify stores, Laravel platforms, dashboards, ERP, and monthly support.",
  url: absoluteUrl("/pricing"),
  numberOfItems: pricing.length,
  itemListElement: pricing.map((plan, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Offer",
      "@id": `${absoluteUrl("/pricing")}#offer-${plan.title.replace(/\s/g, "-").toLowerCase()}`,
      name: plan.title,
      description: plan.description,
      url: absoluteUrl("/pricing"),
      priceCurrency: "AED",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "AED",
        description: plan.price,
        eligibleRegion: [
          { "@type": "Country", name: "United Arab Emirates" },
          { "@type": "Country", name: "United Kingdom" },
          { "@type": "Country", name: "Canada" }
        ]
      },
      availability: "https://schema.org/InStock",
      seller: { "@id": absoluteUrl("/#person") },
      itemOffered: {
        "@type": "Service",
        name: plan.title,
        description: plan.description,
        provider: { "@id": absoluteUrl("/#person") }
      }
    }
  }))
};

export const metadata: Metadata = pageMetadata({
  title: "Pricing | Web Development Packages — Dubai, UK & Canada",
  description: "Transparent pricing for web development in Dubai (AED), UK (GBP) and Canada (CAD) — WordPress websites, Shopify stores, Laravel platforms, dashboards, ERP, CRM, SaaS MVPs, API integrations and SEO-ready builds.",
  path: "/pricing",
  extraKeywords: ["Web Development Pricing Dubai", "Laravel Developer Cost Dubai", "WordPress Website Price UAE", "Shopify Developer Pricing Dubai", "Freelance Developer Rates Dubai", "Web Development Cost UK", "Laravel Developer UK Rates", "Shopify Developer UK Pricing", "WordPress Developer UK Cost", "Web Development Pricing Canada", "Laravel Developer Canada Rates", "Hire Web Developer UK Cost", "Freelance Web Developer UK Rates", "Web Developer Pricing GBP", "Web Developer Pricing CAD"]
});

export default function PricingPage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/pricing")} id="pricing-json-ld" />
      <JsonLd data={faqSchema(pricingFaqs)} id="pricing-faq-json-ld" />
      <JsonLd data={pricingOffersJsonLd} id="pricing-offers-json-ld" />
      <section className="section-pad page-start">
        <div className="mx-auto max-w-7xl px-5">
          <PageHero
            eyebrow="Engagement options"
            title="Project Options Based on the Problem You Need Solved."
            description="Starting points for businesses that need a credible website, ecommerce improvements, a custom Laravel platform, dashboard, ERP workflow, SEO-ready rebuild or monthly technical support."
            image="/images/contact-pricing.webp"
            imageAlt="Premium pricing and project consultation visual"
            label="Share the scope, platform, timeline, features and expected outcome."
            points={["Website credibility", "Lead generation", "Ecommerce conversion", "Custom systems"]}
          />
          <div className="mobile-rail mt-10 grid gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {pricing.map((plan, index) => (
              <PricingCard key={plan.title} plan={plan} index={index} />
            ))}
          </div>
          <p className="mt-8 rounded-lg border border-white/10 bg-white/5 p-5 text-sm leading-7 text-silver/72 light:border-slate-900/10 light:bg-white light:text-slate-600">
            Final pricing depends on scope, features, integrations, timeline, and platform.
          </p>
        </div>
      </section>
      <CostEstimator />
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="FAQs" title="Questions about pricing, scope, deliverables, and what’s included." />
          <FAQ items={pricingFaqItems} />
        </div>
      </section>
      <CTASection
        title="Not sure which package fits?"
        text="Send the current pain point, platform, required features, integrations, and deadline. I’ll help you choose a practical path instead of overselling the wrong build."
      />
    </>
  );
}
