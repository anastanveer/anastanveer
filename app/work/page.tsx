import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { WorkGrid } from "@/components/sections/WorkGrid";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { jsonLdForPage, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio | Web Development Projects Dubai — Laravel, WordPress, Shopify",
  description: "Portfolio of web development projects by Anas Tanveer — Laravel platforms, WordPress sites, Shopify stores, business dashboards, ERP systems, API integrations, and performance fixes for Dubai and global clients.",
  path: "/work",
  extraKeywords: ["Web Developer Portfolio Dubai", "Laravel Projects Dubai", "WordPress Portfolio UAE", "Shopify Developer Portfolio", "Full Stack Portfolio Dubai"]
});

export default function WorkPage() {
  return (
    <>
      <JsonLd data={jsonLdForPage("/work")} id="work-json-ld" />
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
