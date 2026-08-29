// Remove the AdSense loader from pages that must never carry ads.
//
// The loader lives in app/layout.tsx, so it ships on every route. That is what
// AdSense verification wants, but AdSense policy separately forbids ads on error
// pages and on pages with little or no content — and this site's /404/ and
// /_not-found/ carry seven words, /thank-you/ forty-four. A reviewer landing on
// one of those sees ad code on an empty page, which is exactly the shape that gets
// a site marked "low value content".
//
// A static export has no per-route hook for a <head> tag, so the tag is stripped
// from the built HTML instead. Runs from `postbuild`, after `next build`.

import { readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";

const OUT = "out";

// Utility routes with no editorial content. Real but short pages (contact,
// testimonials) are deliberately NOT here — they are legitimate site pages and
// removing ads from them would not change how the site is judged.
const NO_ADS = ["404", "_not-found", "thank-you"];

// Matches the loader <script> however the exporter chose to format it.
const AD_TAG = /<script[^>]*pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js[^>]*>\s*<\/script>/gi;

// The same script is described a second time inside the RSC flight payload, as an
// escaped array element. Removing only the rendered tag is not enough: React reads
// the payload on hydration and puts the script back, so the page ends up carrying
// ads anyway. This matches that element, with its trailing comma.
const AD_IN_PAYLOAD =
  /\[\\"\$\\",\\"script\\",null,\{\\"async\\":true,\\"src\\":\\"https:\/\/pagead2\.googlesyndication\.com[^}]*\}\],/g;

let stripped = 0;
let failures = 0;
let missing = [];

for (const route of NO_ADS) {
  const file = path.join(OUT, route, "index.html");
  try {
    await access(file);
  } catch {
    missing.push(route);
    continue;
  }
  const html = await readFile(file, "utf8");
  const next = html.replace(AD_TAG, "").replace(AD_IN_PAYLOAD, "");
  if (next !== html) {
    await writeFile(file, next, "utf8");
    const left = (next.match(/adsbygoogle\.js/g) || []).length;
    console.log(`  ads removed  /${route}/${left ? `  — ${left} reference(s) STILL PRESENT` : ""}`);
    if (left) failures++;
    stripped++;
  } else {
    console.log(`  no ad tag    /${route}/`);
  }
}

if (missing.length) {
  // Not fatal: a route can legitimately disappear. Worth saying out loud so the
  // list here does not silently rot as pages are renamed.
  console.log(`  note: not built — ${missing.join(", ")}`);
}
console.log(`postbuild: stripped AdSense from ${stripped} page(s)`);
if (failures) {
  // Fail the build rather than deploy a page that still carries ad code after we
  // said we removed it — that is the exact thing AdSense flags.
  console.error(`postbuild: ${failures} page(s) still reference adsbygoogle.js`);
  process.exit(1);
}
