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
  const lastModified = new Date();

  return [
    ...routes.map((route) => ({
      url: canonicalSitemapUrl(route.path),
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority
    })),
    ...blogs.map((post) => ({
      url: canonicalSitemapUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.72
    }))
  ];
}
