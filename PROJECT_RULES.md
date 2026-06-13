# PROJECT_RULES.md — Protected Systems, Boundaries & Change Control

---

## Governing Principle

This is a live production site. Every change has real consequences for SEO rankings,
Google Search Console status, Core Web Vitals scores, and client acquisition.
Treat every file edit as if it affects a system generating revenue.

---

## Protected Systems — Explicit Permission Required to Touch

### Tier 1 — Never Touch Without Full 8-Part Plan + Approval
| File | Why Protected | Blast Radius |
|------|--------------|--------------|
| `lib/seo.ts` | All schema JSON-LD + metadata functions | All 145 pages, GSC schema validity |
| `data/site.ts` | All content: blogs, projects, services, pricing, skills | All 145 pages |
| `app/layout.tsx` | Root layout wrapping every page | All 145 pages |
| `next.config.mjs` | Static export config | Entire build pipeline |
| `public/.htaccess` | HTTPS, CSP, security headers, Apache rewrites | Deployment, security, redirects |

### Tier 2 — Requires Risk Analysis + Approval Before Edit
| File | Why Protected | Blast Radius |
|------|--------------|--------------|
| `components/seo/SeoServicePageView.tsx` | Template for all 100+ SEO landing pages | All SEO pages |
| `app/sitemap.ts` | Controls what Google indexes | All indexed pages |
| `app/robots.ts` | Controls crawler access | All AI and search bot behaviour |
| `components/layout/Header.tsx` | Navigation — all pages | All pages visually |
| `components/layout/Footer.tsx` | Footer — all pages | All pages visually |
| `components/layout/Providers.tsx` | Lenis + card tilt — all pages | All pages JS behaviour |
| `app/globals.css` | All design tokens, animations, cursor system | All pages visually |
| `data/seo-pages.ts` | Config for 100+ landing pages | All SEO landing pages |
| `data/blogSeo.ts` | Expanded blog content + FAQs | All blog pages |
| `app/blog/[slug]/page.tsx` | Blog template | All blog pages |

### Tier 3 — Standard Risk Analysis Required
| File | Why Protected | Blast Radius |
|------|--------------|--------------|
| `components/sections/Hero.tsx` | LCP element — homepage performance | Homepage, Core Web Vitals |
| `components/ui/ContactForm.tsx` | reCAPTCHA + honeypot + rate limiting | Contact page, lead generation |
| `data/faqs.ts` | FAQ schema content | Pages using FAQ schema |
| `data/howTo.ts` | HowTo schema content | Blog pages using HowTo |
| Individual `app/[slug]/page.tsx` | Single page | That page only |

---

## Architecture Constraints — Read Before Every Task

### Static Export Constraints
- `output: "export"` — the entire site is pre-rendered HTML. No runtime server.
- No `use server` directive. No server actions. No API routes within Next.js.
- No `getServerSideProps` or `getStaticProps` (App Router uses different patterns).
- `images: { unoptimized: true }` — required. Next.js image optimisation needs a server.
- `trailingSlash: true` — all URLs end with `/`. Do not remove.
- Adding a new page requires: new folder + `page.tsx` + entry in `sitemap.ts`.

### Contact Form Constraints
- The form POSTs to `/api/contact`.
- `.htaccess` rewrites `/api/contact` → `backend/public/index.php` (separate PHP codebase).
- The PHP backend is NOT in this repository. Do not attempt to edit it here.
- Do not change the form's `fetch("/api/contact")` endpoint.
- Do not remove: honeypot field, reCAPTCHA execution, rate limiting logic.

### Schema JSON-LD Constraints
Every schema change must be validated. Required fields by type:

**Review:**
- `@type`, `reviewRating`, `author`, `datePublished`, `reviewBody`, `itemReviewed`

**Rating (inside Review):**
- `@type`, `ratingValue`, `bestRating`, `worstRating`

**AggregateRating:**
- `@type`, `ratingValue`, `ratingCount`, `reviewCount`, `bestRating`, `worstRating`

**BlogPosting:**
- `headline`, `author`, `datePublished`, `dateModified`, `url`, `image`

**Never duplicate `@id` values** across the JSON-LD graph on any page.
**Never remove** `itemReviewed` from standalone Review objects.

### Blog Content Constraints
- Base sections: `data/site.ts` → `sections[]`
- Expanded sections: `data/blogSeo.ts` → `expandedSections[]` — this is the ONLY key the template reads
- Any other key (`expandedSections2`, `additionalSections`, etc.) is silently ignored by the template
- `updatedAt` must be set to today's date whenever blog content is changed
- FAQs in `blogSeo.ts` are rendered as structured FAQ schema — they must be genuine Q&A pairs

### SEO Landing Page Constraints
- Page slug must match folder name exactly (e.g. `/laravel-developer-dubai` → `app/laravel-developer-dubai/page.tsx`)
- Every new page requires: unique `<title>`, unique `<meta description>`, unique `<h1>`, breadcrumb, schema
- Duplicate content across pages triggers Google penalties — every page must be meaningfully unique
- New pages must be added to `app/sitemap.ts` or they will not be indexed

---

## Change Control Rules

### Single-File Rule
When a change can be made to one file, it must be made to one file.
Justification is required for every additional file touched beyond the first.

### No Opportunistic Changes
Do not fix, refactor, or improve anything that was not part of the stated task.
"While I'm in here" changes are prohibited. They expand blast radius without approval.

### Package Installation Rule
No new packages may be installed without:
1. Stating the package name and version
2. Explaining why no existing solution works
3. Confirming the package is actively maintained
4. Explicit user approval

### Multi-File Change Rule
If a task requires changing 2+ files:
- List every file and why it must change
- Confirm with user before proceeding
- Commit each logical group separately where possible

### Refactoring Rule
Working code must not be refactored unless:
- The user explicitly requests a refactor, OR
- The refactor is required to implement the requested feature safely
If refactoring is needed, state this explicitly and get approval before proceeding.

---

## Performance Rules — Core Web Vitals Protection

These rules exist because 30 mobile pages currently have POOR Core Web Vitals.
Every change is evaluated for its performance impact on mobile.

| Rule | Reason |
|------|--------|
| No new `requestAnimationFrame` loops without `pointer: coarse` guard | Causes mobile INP regression |
| No new Framer Motion `initial` states with Y-axis values | Causes CLS |
| No new `will-change` CSS without measurement | Causes compositing layer bloat |
| No new synchronous scripts in `app/layout.tsx` | Blocks FCP on all 145 pages |
| No new third-party scripts without justification | Adds main thread pressure |
| reCAPTCHA is already loaded globally — do not add another copy | Script duplication |
| Hero image `priority` and `fetchPriority` must remain | LCP protection |

---

## SEO Protection Rules

These rules protect the site's ranking signals. Violations can cause GSC errors
and ranking drops that take weeks to recover.

| Rule | Reason |
|------|--------|
| Never change an existing URL slug | Breaks inbound links and rankings |
| Never remove `<h1>` from any page | Ranking signal |
| Never remove breadcrumb schema | GSC Breadcrumbs enhancement |
| Never remove FAQ schema from pages that have it | GSC FAQ enhancement |
| Never remove `dateModified` from BlogPosting schema | Freshness signal |
| Never change `robots.ts` allowlist without understanding impact | Crawler access |
| Never add `noindex` to any page without explicit instruction | Removes from Google |
| `updatedAt` in blog posts must reflect real content update date | Google freshness |

---

## Preserved Systems — Zero Tolerance for Regression

The following must work identically after every task:

- All 145 URLs resolve and return correct content
- Google Analytics tracking fires on all pages
- Google Ads conversion tracking is intact
- reCAPTCHA protects the contact form
- Honeypot field is present and hidden
- Dark mode / light mode toggle works
- Mobile layout is not broken at 375px
- All internal navigation links work
- RSS feed is accessible at `/feed.xml`
- All sitemaps are accessible
- HTTPS enforced (`.htaccess` rule must not be removed)
- All security headers present (`X-Frame-Options`, `X-Content-Type-Options`, `CSP`, `HSTS`)
