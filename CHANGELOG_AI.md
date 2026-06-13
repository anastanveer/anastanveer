# CHANGELOG_AI.md — AI-Assisted Changes Log

Read this before every task to understand what was recently changed and why.

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
