import type { MetadataRoute } from "next";
import { blogs, caseStudies } from "@/data/site";
import { routes } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

function canonicalSitemapUrl(path: string) {
  if (path === "/" || path.includes(".")) return absoluteUrl(path);
  return `${absoluteUrl(path)}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Core routes + all service/location pages (via lib/seo routes array)
    ...routes.map((route) => ({
      url: canonicalSitemapUrl(route.path),
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority
    })),

    // Individual case study pages
    ...caseStudies.map((study) => ({
      url: canonicalSitemapUrl(`/case-studies/${study.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8
    })),

    // Blog posts (published only)
    ...blogs
      .filter((post) => post.publishedAt <= new Date().toISOString().slice(0, 10))
      .map((post) => ({
        url: canonicalSitemapUrl(`/blog/${post.slug}`),
        lastModified: new Date(Math.min(new Date(post.updatedAt).getTime(), now.getTime())),
        changeFrequency: "monthly" as const,
        priority: 0.72
      }))
  ];
}
