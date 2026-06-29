import { blogs, caseStudies } from "@/data/site";
import { isPublished } from "@/lib/publishing";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

function escape(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

export async function GET() {
  const publishedBlogs = blogs.filter((post) => isPublished(post.publishedAt));

  const blogEntries = publishedBlogs.map((post) => `  <url>
    <loc>${absoluteUrl(`/blog/${post.slug}`)}</loc>
    <image:image>
      <image:loc>${absoluteUrl(post.image)}</image:loc>
      <image:title>${escape(post.title)}</image:title>
      <image:caption>${escape(post.excerpt)}</image:caption>
    </image:image>
  </url>`).join("\n");

  const caseStudyEntries = caseStudies.map((cs) => {
    const firstImage = (cs.images as string[] | undefined)?.[0] ?? "/images/anas-premium-hero.webp";
    return `  <url>
    <loc>${absoluteUrl(`/case-studies/${cs.slug}`)}</loc>
    <image:image>
      <image:loc>${absoluteUrl(firstImage)}</image:loc>
      <image:title>${escape(cs.title)}</image:title>
      <image:caption>${escape((cs as { result?: string }).result ?? cs.title)}</image:caption>
    </image:image>
  </url>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${blogEntries}
${caseStudyEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
