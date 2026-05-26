import type { MetadataRoute } from "next";
import { blogs } from "@/data/site";
import { routes } from "@/lib/seo";
import { absoluteUrl, siteUrl } from "@/lib/utils";

export const dynamic = "force-static";

const allowedPaths = [...routes.map((route) => route.path), ...blogs.map((post) => `/blog/${post.slug}`)];
const disallowedPaths = [
  "/api/",
  "/wp-admin/",
  "/wp-login.php",
  "/wp-content/",
  "/wp-includes/",
  "/xmlrpc.php",
  "/feed/",
  "/comments/feed/",
  "/category/",
  "/tag/",
  "/author/",
  "/thank-you/"
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Main rule for all crawlers
      {
        userAgent: "*",
        allow: allowedPaths,
        disallow: disallowedPaths
      },
      // Explicitly allow AI crawlers for AI search visibility (ChatGPT, Perplexity, Google AI)
      { userAgent: "GPTBot", allow: ["/"] },
      { userAgent: "ChatGPT-User", allow: ["/"] },
      { userAgent: "OAI-SearchBot", allow: ["/"] },
      { userAgent: "ClaudeBot", allow: ["/"] },
      { userAgent: "PerplexityBot", allow: ["/"] },
      { userAgent: "Applebot", allow: ["/"] },
      { userAgent: "Googlebot", allow: ["/"] },
      { userAgent: "Bingbot", allow: ["/"] },
      { userAgent: "cohere-ai", allow: ["/"] }
    ],
    sitemap: [absoluteUrl("/sitemap.xml"), absoluteUrl("/feed.xml")],
    host: siteUrl
  };
}
