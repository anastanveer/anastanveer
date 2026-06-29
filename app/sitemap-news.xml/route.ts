import { blogs } from "@/data/site";
import { compareNewestFirst, isPublished, publishDate } from "@/lib/publishing";
import { absoluteUrl } from "@/lib/utils";

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

  const entries = published
    .map((post) => {
      const pubDate = publishDate(post.publishedAt).toISOString();
      const imageUrl = absoluteUrl(post.image);
      return `  <url>
    <loc>${absoluteUrl(`/blog/${post.slug}`)}</loc>
    <news:news>
      <news:publication>
        <news:name>Anas Tanveer Web Development Blog</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${pubDate}</news:publication_date>
      <news:title>${escape(post.seoTitle)}</news:title>
      <news:keywords>${escape(post.tag)}, Web Development, Dubai, Laravel, WordPress, Shopify</news:keywords>
    </news:news>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${escape(post.seoTitle)}</image:title>
      <image:caption>${escape(post.excerpt)}</image:caption>
    </image:image>
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
