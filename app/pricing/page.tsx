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


// The four things that actually change a number, written out so a reader can work out
// roughly where they sit before the first call \u2014 and so a low quote from elsewhere
// can be compared on what it excludes rather than on the figure alone.
const PRICING_NOTES: { heading: string; body: string[] }[] = [
  {
    heading: "Pages are not the unit of work",
    body: [
      "A quote is rarely driven by page count. Twenty pages built from three templates is a smaller job than five pages that each behave differently, because the cost sits in distinct behaviour \u2014 a booking flow, a filtered catalogue, a member area \u2014 not in repeating a layout.",
      "So the useful question at the start is not how many pages, but how many things the site has to do. Two sites of the same size can differ by a factor of three on that alone."
    ]
  },
  {
    heading: "Content is the most common delay",
    body: [
      "Text, photographs and product data supplied on time keep a project on its dates. Supplied late, and the build stalls at exactly the point where it needs real material \u2014 usually after the design is approved and everyone expects it to be nearly finished.",
      "Where copy is written for you, that is quoted separately rather than folded in invisibly, because it is genuine work and hiding it inside a round number helps nobody."
    ]
  },
  {
    heading: "Integrations carry the risk",
    body: [
      "Connecting to a payment gateway, an accounting package, a CRM or a courier is where estimates move most, and the variable is the other system rather than this one. A provider with clean documentation and a sandbox is predictable. One with no sandbox, or an API that changes without notice, is not.",
      "Those are scoped once the other system has been seen, rather than guessed at up front. A fixed price quoted before anyone has looked at the API is a price that will be revisited."
    ]
  },
  {
    heading: "What continues after launch",
    body: [
      "Hosting, domain renewal, SSL, platform and plugin updates and backups do not stop when the site goes live. On a package build these are included for a stated period and then quoted openly, so there is no month where the site quietly stops being maintained.",
      "Ownership stays with you throughout: the domain in your registrar account, the hosting in your name, analytics under your Google account. A site you cannot move is not really yours, and that costs nothing to get right at the start."
    ]
  }
];

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
      {/* What the numbers above actually mean. A price list with no explanation of
          what moves it leaves the reader to guess, and guessing is why quotes get
          compared on the figure alone. */}
      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeader eyebrow="How pricing works" title="What moves a quote up or down." />
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            {PRICING_NOTES.map((n) => (
              <div key={n.heading}>
                <h3 className="font-display text-lg font-semibold text-white light:text-slate-950">{n.heading}</h3>
                {n.body.map((para) => (
                  <p key={para} className="mt-3 text-sm leading-8 text-silver/78 light:text-slate-600">{para}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
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
