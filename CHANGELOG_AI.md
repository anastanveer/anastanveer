# CHANGELOG_AI.md — AI-Assisted Changes Log

Read this before every task to understand what was recently changed and why.

---

## 2026-10-13 — AdSense content-quality remediation

**Authorization:** User approved the audit's eight-part plan, implementation, GitHub push and automatic production deployment. Work isolated from the original checkout and its pre-existing feed changes.

**Problem and change:** Repeated filler, overlapping geographic articles, unsupported numerical claims and sitewide ad loading weakened the publication. Removed the shared filler; rewrote 15 guides with concrete decision/test procedures and clearly labelled examples; consolidated 49 definitions (37 previously published and 12 future drafts) into relevant guides using permanent redirects. The blog now has 52 published articles. Removed obsolete expanded sections/FAQ claims from revised and retired guides. Publication dates remain original; revision dates reflect this work. Updated internal links, metadata and RSS; fixed RSS parsing of quoted property names.

**Trust and navigation:** Visible article bylines and sources; six homepage testimonials displayed once; homepage case-study links point to the matching case study where one exists; about-page keyword directory replaced with useful navigation. Services navigation excludes already deindexed/redirected landing pages. About ProfilePage mainEntity now explicitly describes a Person. Removed self-serving review-snippet markup from testimonials while retaining the authentic visible reviews, and fixed duplicate review anchors/React keys.

**Ads:** Verification uses the official google-adsense-account meta tag and existing authorized ads.txt. Removed the global ad loader, including error/noindex/utility pages. Postbuild now checks every HTML/Flight export for accidental loader reintroduction and ownership-marker presence. Ad placements remain disabled until approval and a deliberate placement/consent review; removing ads does not itself cure low-value content.

**Risk:** High — content consolidation changes URLs and search signals; root layout affects every page; Apache rewrites affect retired URLs. Existing contact backend/security rules remain intact. Google indexing/rankings and AdSense approval are not guaranteed. No fabricated traffic, client results or evidence added.

**Validation:** TypeScript and production export pass (171 generated routes; 167 HTML files; 52 blog posts). Export link/schema/sitemap checks and live deployment checks are recorded in the audit artifacts. Validate final build and redirects before re-review. No package/dependency changes.

**Rollback:** Baseline b4f062d555fcd77bab7afefb34f63508ebe72306. Revert the remediation commit on main and push; the existing deployment workflow rebuilds/restores the prior content. Do not reset or overwrite another contributor's changes.

---

## 2026-07-02

### SEO Audit Fixes — Hero CTA, Trust Row, Review Framing, Canonical Host, Neighborhood 301s, News Sitemap Removal
**Files changed:**
- `components/sections/Hero.tsx` — hero "Download CV" link replaced with "Get a Free Website Audit" → `/free-website-audit`; added trust row under H1 (100+ projects · 4.9★ · replies within 4 hours — all existing claims)
- `components/sections/Testimonials.tsx` — visible "via Fiverr" labels softened to "Verified client review(s)" (quotes untouched)
- `app/testimonials/page.tsx` — "Collected from Fiverr project deliveries" and per-card "via Fiverr" softened to verified-client wording (schema `platform` field untouched)
- `app/ar/page.tsx` — Arabic review card "· Fiverr" label → "· مراجعة موثّقة"
- `public/.htaccess` — 301 www.anastanveer.com → anastanveer.com; 301 seven thin Dubai neighborhood pages (al-furjan, jlt, marina, deira, business-bay, downtown-dubai, al-rashidiya) → /web-developer-dubai/
- `app/sitemap-news.xml/route.ts` — DELETED (news sitemap inappropriate for a portfolio blog)
- `app/robots.ts`, `app/layout.tsx`, `scripts/indexnow-submit.mjs` — removed sitemap-news.xml references

**Not changed (verified already correct):** meta author is "Anas Tanveer" on all pages; "Steve Barlow" appears only as a Review schema author (client reviewer — correct); homepage JSON-LD already contains Person + ProfessionalService + WebSite with correct attribution.
**Why:** Professional SEO audit implementation (conversion + canonicalization + structured-data verification).
**Risk level:** High (layout.tsx one-line link removal, .htaccess, sitemap route removal)
**Build result:** 156 pages ✅ TypeScript ✅ (was 157 — news sitemap route removed intentionally)
**Rollback:** `git checkout 29000d3 -- <file>` per file, or `git stash` (changes uncommitted)

---

## 2026-06-04

### Workspace Setup — AI Engineering Docs Created
**Files created:**
- `CLAUDE.md` — AI rules and constraints
- `PROJECT_RULES.md` — protected systems and schema rules
- `AI_WORKFLOW.md` — step-by-step engineering process
- `TASK_TEMPLATE.md` — task planning structure
- `TESTING_CHECKLIST.md` — post-task verification
- `ROLLBACK_PLAN.md` — how to undo any change
- `CHANGELOG_AI.md` — this file

**Why:** Establish a safe, repeatable AI-assisted engineering process for the portfolio site.
**App code changed:** None
**Build result:** Not required (docs only)

---

## 2026-06-03

### SEO Performance — Mobile CWV + Review Schema + Blog Content
**Files changed:**
- `components/animations/CursorGlow.tsx` — added `(pointer: coarse)` guard, skips RAF on touch devices
- `components/layout/Providers.tsx` — added `(pointer: coarse)` guard, disables Lenis on mobile
- `components/animations/Reveal.tsx` — removed `y: 28` shift, now opacity-only fade (CLS fix)
- `lib/seo.ts` — added `worstRating` to `reviewAggregateSchema` inner Rating; added `review[]` arrays and `reviewCount` to UK and Canada LocalBusiness entities
- `data/site.ts` — `updatedAt` for `wordpress-vs-custom-laravel` → `2026-06-03`; readingTime → `8 min read`
- `data/blogSeo.ts` — 4 new `expandedSections` added (performance, concurrency, ecommerce, advantages); 2 new FAQs added; targeting dropped GSC queries

**Why:** GSC showed 30 poor mobile Core Web Vitals pages, 10 invalid review snippets, blog post 99% impression drop
**Build result:** 145 pages ✅ TypeScript ✅

---

## 2026-05-20 (approximate)

### SEO Phase 7 — RSS Feed + News Sitemap + Robots Cleanup
**Files changed:**
- `app/sitemap-news.xml` — news sitemap
- `public/feed.xml` — RSS feed (29 posts)
- `app/robots.ts` — layout cleanup

**Build result:** 145 pages ✅

---

### Advanced SEO Phase 2 — Image Sitemap + Schema + Preconnect
**Files changed:**
- `lib/seo.ts` — ProfilePage schema, preconnect hints, Dublin Core, hreflang
- `app/layout.tsx` — og:locale:alternate, Twitter rich cards, rel=author/me

**Build result:** 145 pages ✅

---

### Review Schema Fix
**Files changed:**
- `lib/seo.ts` — `reviewedItem` → `itemReviewed`, dates added, `worstRating` added

**Build result:** 145 pages ✅

---

### Mobile CWV Fix — Phase 1
**Files changed:**
- `app/page.tsx` — hero image LCP optimization
- `app/globals.css` — mobile animation adjustments

**Build result:** 145 pages ✅
