# TESTING_CHECKLIST.md — Run After Every Task

---

## 1. Build Verification (Always)
```bash
npm run typecheck
npm run build
```
- [ ] `typecheck` — zero TypeScript errors
- [ ] `build` — completed successfully
- [ ] All 145 pages generated (confirm in build output)
- [ ] No missing module errors
- [ ] RSS feed generated: `public/feed.xml`

---

## 2. SEO & Schema (After any `lib/seo.ts` or `data/` change)
- [ ] Google Rich Results Test — paste URL or code snippet
- [ ] Review snippets: still valid in GSC Enhancements
- [ ] FAQ schema: still valid
- [ ] Breadcrumbs: still valid
- [ ] No duplicate `@id` values in JSON-LD graph
- [ ] `worstRating` present in all Rating objects
- [ ] `reviewBody` present in all Review objects
- [ ] `itemReviewed` present in standalone Review objects

**Key schema types in this project:**
- `Person` — Anas Tanveer personal entity
- `LocalBusiness` — Dubai, UK (ARS Developer), Canada (TorontoBytes)
- `ProfessionalService` — main service schema
- `BlogPosting` — blog articles
- `FAQPage` — FAQ schema on home + blog pages
- `BreadcrumbList` — on every page
- `Review` + `AggregateRating` — testimonials + all LocalBusiness entities

---

## 3. Performance (After animation, CSS, or component changes)
- [ ] Mobile: CursorGlow does NOT run (pointer:coarse check present)
- [ ] Mobile: Lenis does NOT run (pointer:coarse check present)
- [ ] Reveal: no Y-axis shift on scroll-in
- [ ] No new layout shift introduced (CLS)
- [ ] PageSpeed Insights mobile score not regressed
- [ ] No continuous RAF loops without cleanup

---

## 4. Visual Check (After CSS or component changes)
- [ ] Homepage (`/`) renders correctly
- [ ] Blog list (`/blog`) renders correctly
- [ ] Blog post (`/blog/[slug]`) renders correctly
- [ ] SEO landing page (e.g. `/laravel-developer-dubai`) renders correctly
- [ ] Contact page (`/contact`) renders correctly
- [ ] Mobile layout (375px) not broken
- [ ] Dark mode correct
- [ ] Light mode correct (if applicable)

---

## 5. Content (After `data/` changes)
- [ ] Blog post renders all sections
- [ ] `expandedSections` (not `expandedSections2` or other keys) used
- [ ] `updatedAt` set to today if content changed
- [ ] All internal links resolve
- [ ] No broken images (`/images/` paths correct)
- [ ] Reading time recalculates correctly

---

## 6. Git & Deploy
- [ ] Only intended files in the diff (`git diff --stat`)
- [ ] No `.env`, secrets, or `node_modules` committed
- [ ] Commit message describes the why, not just the what
- [ ] Pushed to `origin/main`
- [ ] Site live and accessible after deploy
