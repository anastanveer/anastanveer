/**
 * RSS feed generator for anastanveer.com blog.
 * Run: node scripts/generate-rss.mjs
 * Also runs automatically via "prebuild" script.
 *
 * Reads data/site.ts blogs so RSS dates stay aligned with the site schedule.
 */

import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const SITE_URL = "https://anastanveer.com";
const FEED_TITLE = "Anas Tanveer — Web Development Blog";
const FEED_DESC =
  "Decision-focused articles on Laravel, WordPress, Shopify, website speed, technical SEO, ecommerce, dashboards and business systems for Dubai, UK and Canadian businesses.";
const AUTHOR_EMAIL = "info@anastanveer.com";
const AUTHOR_NAME = "Anas Tanveer";
const DEFAULT_TIMEZONE = "+04:00";

function findMatchingBracket(source, startIndex, openChar, closeChar) {
  let depth = 0;
  let quote = null;
  let escaped = false;

  for (let i = startIndex; i < source.length; i += 1) {
    const char = source[i];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = null;
      }
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      quote = char;
    } else if (char === openChar) {
      depth += 1;
    } else if (char === closeChar) {
      depth -= 1;
      if (depth === 0) return i;
    }
  }

  throw new Error(`Could not find matching ${closeChar}`);
}

function getStringField(block, field) {
  const match = block.match(new RegExp(`${field}:\\s*"((?:\\\\.|[^"\\\\])*)"`));
  return match ? match[1].replace(/\\"/g, '"') : "";
}

function readBlogPosts() {
  const siteSource = readFileSync(join(ROOT, "data", "site.ts"), "utf-8");
  const blogsStart = siteSource.indexOf("export const blogs");
  if (blogsStart === -1) throw new Error("Could not find blogs export in data/site.ts");

  const assignmentStart = siteSource.indexOf("=", blogsStart);
  const arrayStart = siteSource.indexOf("[", assignmentStart);
  const arrayEnd = findMatchingBracket(siteSource, arrayStart, "[", "]");
  const blogsArraySource = siteSource.slice(arrayStart + 1, arrayEnd);

  const posts = [];
  let cursor = 0;
  while (cursor < blogsArraySource.length) {
    const objectStart = blogsArraySource.indexOf("{", cursor);
    if (objectStart === -1) break;

    const objectEnd = findMatchingBracket(blogsArraySource, objectStart, "{", "}");
    const block = blogsArraySource.slice(objectStart, objectEnd + 1);
    const slug = getStringField(block, "slug");

    if (slug) {
      posts.push({
        slug,
        title: getStringField(block, "seoTitle") || getStringField(block, "title"),
        excerpt: getStringField(block, "excerpt"),
        publishedAt: getStringField(block, "publishedAt"),
        updatedAt: getStringField(block, "updatedAt") || getStringField(block, "publishedAt"),
        tag: getStringField(block, "tag"),
        image: getStringField(block, "image")
      });
    }

    cursor = objectEnd + 1;
  }

  return posts;
}

const POSTS = readBlogPosts();

function publishDate(dateStr) {
  return dateStr.includes("T") ? new Date(dateStr) : new Date(`${dateStr}T00:00:00${DEFAULT_TIMEZONE}`);
}

const now = process.env.SITE_BUILD_NOW ? new Date(process.env.SITE_BUILD_NOW) : new Date();
const published = POSTS.filter((p) => publishDate(p.publishedAt) <= now).sort(
  (a, b) => publishDate(b.publishedAt).getTime() - publishDate(a.publishedAt).getTime()
);

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function rfc822(dateStr) {
  return publishDate(dateStr).toUTCString();
}

const items = published
  .map(
    (p) => `
  <item>
    <title>${escapeXml(p.title)}</title>
    <link>${SITE_URL}/blog/${p.slug}/</link>
    <guid isPermaLink="true">${SITE_URL}/blog/${p.slug}/</guid>
    <description>${escapeXml(p.excerpt)}</description>
    <pubDate>${rfc822(p.publishedAt)}</pubDate>
    <lastBuildDate>${rfc822(p.updatedAt)}</lastBuildDate>
    <category>${escapeXml(p.tag)}</category>
    <author>${AUTHOR_EMAIL} (${AUTHOR_NAME})</author>
    <enclosure url="${SITE_URL}${p.image}" type="image/webp" length="0" />
  </item>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(FEED_TITLE)}</title>
    <link>${SITE_URL}/blog/</link>
    <description>${escapeXml(FEED_DESC)}</description>
    <language>en-ae</language>
    <managingEditor>${AUTHOR_EMAIL} (${AUTHOR_NAME})</managingEditor>
    <webMaster>${AUTHOR_EMAIL} (${AUTHOR_NAME})</webMaster>
    <lastBuildDate>${rfc822(published[0]?.updatedAt ?? new Date().toISOString())}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/images/anas-premium-hero.webp</url>
      <title>${escapeXml(FEED_TITLE)}</title>
      <link>${SITE_URL}/blog/</link>
    </image>
    ${items}
  </channel>
</rss>`;

const outPath = join(ROOT, "public", "feed.xml");
writeFileSync(outPath, xml.trim(), "utf-8");
console.log(`✓ RSS feed generated → public/feed.xml (${published.length} posts)`);
