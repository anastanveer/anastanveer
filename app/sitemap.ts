import type { MetadataRoute } from "next";
import { blogs, caseStudies } from "@/data/site";
import { seoServicePages } from "@/data/seo-pages";
import { routes } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

// Last time site structure / content was meaningfully updated
const SITE_LAST_UPDATED = new Date("2026-05-22");

function canonicalSitemapUrl(path: string) {
  if (path === "/" || path.includes(".")) return absoluteUrl(path);
  return `${absoluteUrl(path)}/`;
}

// Images per core page path
const corePageImages: Record<string, string[]> = {
  "/": ["/images/anas-premium-hero.webp", "/images/services-architecture-760.webp", "/images/projects-suite-760.webp"],
  "/about": ["/images/about-resume-brand.webp", "/images/anas-resume.webp"],
  "/services": ["/images/services-architecture-760.webp"],
  "/portfolio": ["/images/projects-suite-760.webp"],
  "/work": ["/images/projects-suite-760.webp"],
  "/contact": ["/images/contact-pricing.webp"],
  "/pricing": ["/images/contact-pricing.webp"],
  "/resume": ["/images/anas-resume.webp"]
};

// Build service page image lookup (slug → image) to avoid duplicates in routes.map
const serviceImageByPath: Record<string, string> = Object.fromEntries(
  seoServicePages.map((p) => [`/${p.slug}`, p.image])
);

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().slice(0, 10);

  return [
    // Core routes + all service/location pages (via lib/seo routes array)
    ...routes.map((route) => {
      const imgs = corePageImages[route.path]
        ? corePageImages[route.path].map(absoluteUrl)
        : serviceImageByPath[route.path]
        ? [absoluteUrl(serviceImageByPath[route.path])]
        : undefined;
      return {
        url: canonicalSitemapUrl(route.path),
        lastModified: SITE_LAST_UPDATED,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        ...(imgs ? { images: imgs } : {})
      };
    }),

    // Individual case study pages
    ...caseStudies.map((study) => ({
      url: canonicalSitemapUrl(`/case-studies/${study.slug}`),
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: "monthly" as const,
      priority: 0.8
    })),

    // Blog posts (published only — use actual post dates + featured image)
    ...blogs
      .filter((post) => post.publishedAt <= today)
      .map((post) => ({
        url: canonicalSitemapUrl(`/blog/${post.slug}`),
        lastModified: new Date(post.updatedAt),
        changeFrequency: "monthly" as const,
        priority: 0.72,
        images: [absoluteUrl(post.image)]
      }))
  ];
}
