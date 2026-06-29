import { blogs } from "@/data/site";
import { compareNewestFirst, isPublished, toRfc822 } from "@/lib/publishing";
import { absoluteUrl, siteUrl } from "@/lib/utils";

export const dynamic = "force-static";

function escape(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const published = blogs
    .filter((post) => isPublished(post.publishedAt))
    .sort((a, b) => compareNewestFirst(a.publishedAt, b.publishedAt));

  const items = published
    .map((post) => {
      const url = absoluteUrl(`/blog/${post.slug}`);
      const imageUrl = absoluteUrl(post.image);
      return `  <item>
    <title>${escape(post.seoTitle)}</title>
    <link>${url}</link>
    <guid isPermaLink="true">${url}</guid>
    <description>${escape(post.seoDescription)}</description>
    <pubDate>${toRfc822(post.publishedAt)}</pubDate>
    <dc:creator>Anas Tanveer</dc:creator>
    <category>${escape(post.tag)}</category>
    <media:content url="${imageUrl}" medium="image" type="image/webp"/>
    <media:thumbnail url="${imageUrl}"/>
  </item>`;
    })
    .join("\n");

  const lastBuildDate = published.length ? toRfc822(published[0].publishedAt) : new Date().toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Anas Tanveer — Web Development Blog</title>
    <link>${absoluteUrl("/blog")}</link>
    <description>Web development insights for Dubai, UAE, UK and Canadian businesses — Laravel, WordPress, Shopify, performance and SEO.</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml"/>
    <generator>Anas Tanveer Portfolio — Next.js</generator>
    <managingEditor>info@anastanveer.com (Anas Tanveer)</managingEditor>
    <webMaster>info@anastanveer.com (Anas Tanveer)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} Anas Tanveer</copyright>
    <ttl>1440</ttl>
    <image>
      <url>${absoluteUrl("/images/anas-premium-hero.webp")}</url>
      <title>Anas Tanveer</title>
      <link>${siteUrl}</link>
      <description>Full-stack web developer portfolio — Dubai, UK and Canada</description>
    </image>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
