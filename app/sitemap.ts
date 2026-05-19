import type { MetadataRoute } from "next";
import { blogs } from "@/data/site";
import { routes } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

function canonicalSitemapUrl(path: string) {
  if (path === "/" || path.includes(".")) return absoluteUrl(path);
  return `${absoluteUrl(path)}/`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const lastModified = now;

  return [
    ...routes.map((route) => ({
      url: canonicalSitemapUrl(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority
    })),
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
