// Verification-only AdSense setup: ownership uses the account meta tag and
// ads.txt. No page should load ads until reviewed editorial placements are enabled.
// Check every HTML/Flight export, including 404.html and nested error routes.
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

async function verify(directory) {
  let checked = 0;
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      checked += await verify(file);
    } else if (/\.(html|txt)$/.test(file)) {
      const content = await readFile(file, "utf8");
      if (content.includes("adsbygoogle.js")) {
        throw new Error(`Ad loader found in verification-only export: ${file}`);
      }
      if (entry.name.endsWith(".html") && !content.includes('name="google-adsense-account"')) {
        throw new Error(`Missing AdSense ownership meta tag: ${file}`);
      }
      checked++;
    }
  }
  return checked;
}
const checked = await verify("out");
if (!checked) throw new Error("No exported files found");
const ads = await readFile("out/ads.txt", "utf8");
if (!ads.includes("pub-9027630763788678")) throw new Error("Missing ads.txt publisher record");
console.log(`AdSense: ${checked} HTML/text exports verified; ownership retained, ad serving disabled.`);
