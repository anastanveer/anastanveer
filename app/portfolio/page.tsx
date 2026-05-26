import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { projects } from "@/data/site";
import { jsonLdForPage, pageMetadata, pageTypeSchema } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio | Laravel, WordPress, Shopify Projects Dubai",
  description: "Portfolio of Laravel, WordPress, Shopify, dashboard, ecommerce, ERP, SEO, API and automation problems solved by Anas Tanveer.",
  path: "/portfolio"
});

const projectsItemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": absoluteUrl("/portfolio#project-list"),
  name: "Web Development Portfolio Projects by Anas Tanveer",
  url: absoluteUrl("/portfolio"),
  numberOfItems: projects.length,
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: p.title,
      description: p.solution,
      creator: { "@id": absoluteUrl("/#person") },
      about: p.problem,
      genre: p.category,
      keywords: p.stack.join(", "),
      image: { "@type": "ImageObject", url: absoluteUrl(p.image), width: 520, height: 350 }
    }
  }))
};

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/portfolio")} id="portfolio-json-ld" />
      <JsonLd
        data={pageTypeSchema("CollectionPage", "/portfolio", {
          name: "Portfolio — Laravel, WordPress, Shopify Projects by Anas Tanveer Dubai",
          description: "Portfolio of business web projects: Laravel platforms, WordPress websites, Shopify stores, dashboards, ERP, API integrations, and performance fixes.",
          items: projects.map((p) => ({ name: p.title, url: absoluteUrl("/portfolio"), description: p.solution }))
        })}
        id="portfolio-collection-json-ld"
      />
      <JsonLd data={projectsItemListJsonLd} id="portfolio-projects-list-json-ld" />
      <section className="section-pad page-start">
        <div className="mx-auto max-w-7xl px-5">
          <PageHero
            eyebrow="Work / Portfolio"
            title="Portfolio Work Built Around Real Problems."
            description="Examples of Laravel platforms, WordPress websites, Shopify systems, dashboards, ecommerce, ERP and SEO-focused work where the goal was business clarity, speed, control and conversion."
            image="/images/projects-suite-760.webp"
            imageAlt="Premium portfolio project suite visual"
            label="Trading tools, dashboards, Shopify features, ERP systems, CMS builds and agency websites."
            points={["Business pain points", "Custom web systems", "Conversion fixes", "SEO-ready delivery"]}
          />
          <div className="mt-12">
            <WorkGrid />
          </div>
        </div>
      </section>
      <CTASection
        title="See a similar problem in your business?"
        text="Send the platform, pain point, and expected outcome. I’ll help you understand the practical path for a Laravel platform, WordPress rebuild, Shopify improvement, dashboard, ERP module, or SEO-ready website."
      />
    </>
  );
}
