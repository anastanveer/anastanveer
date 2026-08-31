import type { MetadataRoute } from "next";
import { absoluteUrl, siteUrl } from "@/lib/utils";

export const dynamic = "force-static";

// A single "Allow: /" does what 205 individually listed paths were doing, and it
// cannot fall out of date as pages are added. The explicit list also had to be
// regenerated on every content change to stay truthful.
const allowedPaths = ["/"];
// Only paths that exist and should stay out of the index.
//
// The old WordPress leftovers were removed deliberately, and not because they
// were merely untidy: /wp-content/, /wp-includes/, /xmlrpc.php, /feed/,
// /comments/feed/, /category/, /tag/ and /author/ all return 410 Gone. Blocking a
// 410 in robots.txt is counterproductive — a crawler that is not allowed to fetch
// the URL never sees the 410, so the URL can linger in the index instead of being
// dropped. Letting them be crawled is what actually removes them.
//
// /wp-admin/ and /wp-login.php are the exception and stay blocked: they return
// HTTP 200 with the server's "Checking your browser" anti-bot page, so they are
// crawlable thin content rather than a clean 410.
const disallowedPaths = [
  "/api/",
  "/wp-admin/",
  "/wp-login.php",
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
    sitemap: [absoluteUrl("/sitemap.xml"), absoluteUrl("/feed.xml"), absoluteUrl("/sitemap-images.xml")],
    host: siteUrl
  };
}
