#!/usr/bin/env node
/**
 * IndexNow submitter — instantly notifies Bing, Yandex, Seznam, Naver (and any
 * IndexNow-participating engine) about the site's URLs so they crawl/index faster.
 *
 * Run AFTER a build + deploy:  node scripts/indexnow-submit.mjs
 * (Reads URLs from the generated out/sitemap.xml so it always stays in sync.)
 *
 * The key file public/<KEY>.txt must be deployed and reachable at
 * https://anastanveer.com/<KEY>.txt for IndexNow to verify ownership.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const HOST = "anastanveer.com";
const KEY = "9c676e8af9dc82902f221290e8785227";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

function collectUrls() {
  const outDir = path.join(ROOT, "out");
  const sitemaps = ["sitemap.xml", "sitemap-news.xml"]
    .map((f) => path.join(outDir, f))
    .filter((f) => fs.existsSync(f));
  if (sitemaps.length === 0) {
    console.error("No sitemap found in out/. Run `npm run build` first.");
    process.exit(1);
  }
  const urls = new Set();
  for (const file of sitemaps) {
    const xml = fs.readFileSync(file, "utf8");
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      urls.add(m[1].trim());
    }
  }
  return [...urls];
}

async function main() {
  const urlList = collectUrls();
  console.log(`Submitting ${urlList.length} URLs to IndexNow...`);

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList })
  });

  // IndexNow returns 200 (accepted) or 202 (accepted, pending). 4xx = problem.
  if (res.ok || res.status === 202) {
    console.log(`IndexNow accepted (HTTP ${res.status}).`);
  } else {
    console.error(`IndexNow returned HTTP ${res.status}: ${await res.text()}`);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
