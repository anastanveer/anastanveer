import type { Metadata } from "next";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { BlogCard } from "@/components/ui/BlogCard";
import { PageHero } from "@/components/ui/PageHero";
import { blogs } from "@/data/site";

export const revalidate = 86400;
import { absoluteUrl } from "@/lib/utils";
import { jsonLdForPage, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Blog | Laravel, WordPress, Shopify and SEO Insights",
  description: "Decision-focused articles on Laravel, WordPress, Shopify, website speed, technical SEO, ecommerce, dashboards and business systems.",
  path: "/blog"
});

export default function BlogPage() {
  const today = new Date().toISOString().slice(0, 10);
  const published = blogs
    .filter((b) => b.publishedAt <= today)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": absoluteUrl("/blog#blog"),
    name: "Anas Tanveer Web Development Insights",
    url: absoluteUrl("/blog"),
    description: "Decision-focused articles on Laravel, WordPress, Shopify, website speed, technical SEO, ecommerce, dashboards and business systems for Dubai and UAE businesses.",
    inLanguage: "en",
    author: { "@id": absoluteUrl("/#person") },
    publisher: { "@id": "https://arsdeveloper.co.uk/#organization" },
    blogPost: published.map((post) => ({
      "@type": "BlogPosting",
      "@id": absoluteUrl(`/blog/${post.slug}#article`),
      headline: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      image: absoluteUrl(post.image),
      author: { "@id": absoluteUrl("/#person") },
      publisher: { "@id": "https://arsdeveloper.co.uk/#organization" }
    }))
  };

  return (
    <>
      <JsonLd data={jsonLdForPage("/blog")} id="blog-page-json-ld" />
      <JsonLd data={blogListSchema} id="blog-list-json-ld" />
      <section className="section-pad page-start">
        <div className="mx-auto max-w-7xl px-5">
          <PageHero
            eyebrow="Blog"
            title="Web Development Notes for Better Decisions."
            description="Practical thinking for business owners, agencies and recruiters choosing between Laravel, WordPress, Shopify, ecommerce, dashboards, speed, SEO and custom web systems."
            image="/images/services-architecture-760.webp"
            imageAlt="Premium web development writing and technical notes visual"
            label="Practical notes on Laravel, WordPress, Shopify, ecommerce, speed and SEO."
            points={["Platform decisions", "Conversion fixes", "Speed and SEO", "Business systems"]}
          />
          <div className="mobile-rail mt-10 grid gap-5 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {published.map((post, index) => (
              <BlogCard key={post.title} post={post} index={index} />
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Need a practical opinion before starting?"
        text="If you are unsure whether to use Laravel, WordPress, Shopify, a dashboard, API integration, or SEO-focused rebuild, send the problem and I’ll reply with a clear direction."
      />
    </>
  );
}
