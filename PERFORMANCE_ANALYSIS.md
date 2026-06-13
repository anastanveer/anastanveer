# PERFORMANCE_ANALYSIS.md — Performance Audit & Optimization Map

## Current Status (as of 2026-06-04)
- **GSC Core Web Vitals:** 30 pages POOR mobile, 0 good mobile (being fixed)
- **GSC Desktop:** No data yet (insufficient data)
- **Indexed pages:** 92 of 245 discovered
- **Average position:** 34 (page 3-4 on Google)

---

## Static Delivery Performance (Excellent)

The site is fully static — 0ms server processing time. Apache serves pre-rendered HTML directly.

### Caching Strategy (.htaccess)
| Asset Type | Cache Duration | Strategy |
|-----------|---------------|----------|
| HTML pages | 0 seconds, must-revalidate | Instant updates on redeploy |
| CSS, JS, fonts | 1 year (immutable) | Content-hashed filenames |
| Images (WebP, AVIF) | 1 year (immutable) | Content-hashed filenames |
| PDF (CV) | 1 year | Long-lived |

### Compression (.htaccess)
- **Brotli** compression enabled (smaller than gzip, modern browsers)
- **Gzip** fallback enabled for older browsers
- Applied to: HTML, CSS, JS, JSON, XML, SVG

**Estimated compression savings:** 60-80% on text assets.

---

## Core Web Vitals Analysis

### LCP (Largest Contentful Paint) — Target: < 2.5s
**LCP element:** Hero image `anas-premium-hero-1100.webp`

**Current optimizations:**
- `priority` prop on `<Image>` — generates `<link rel="preload">` in `<head>` ✅
- `fetchPriority="high"` on the `<img>` element ✅
- Image format: WebP ✅
- `preconnect` to Google fonts (none used — system font stack) ✅

**Known issue:**
- `images: { unoptimized: true }` — Next.js cannot generate responsive `srcset`
- Mobile devices (375px width) receive the same 1100px-wide image as desktop
- This adds unnecessary download weight on mobile (~300-500KB extra)
- **Fix requires:** Build-time image resizing or CDN image transformation

**LCP risk score: Medium** — image is preloaded correctly but oversized for mobile

---

### CLS (Cumulative Layout Shift) — Target: < 0.1

**Fixed (2026-06-03):**
- Reveal component Y-shift removed — now opacity-only fade ✅
- No animated elements shift surrounding layout at scroll-in

**Remaining CLS risks:**
1. `animate-ping` on status badge in Hero — small pulsing dot, low CLS impact
2. Font loading — Google Fonts (Inter + Space Grotesk) with `display: "swap"`
   - `swap` causes FOUT (Flash of Unstyled Text) which can cause slight CLS
   - Both fonts are declared in layout.tsx with `display: "swap"` — acceptable trade-off
3. reCAPTCHA iframe — loaded async, may inject into DOM after paint
   - Positioned in footer area — low CLS impact

**CLS risk score: Low** (after 2026-06-03 fix)

---

### INP (Interaction to Next Paint) — Target: < 200ms

**Fixed (2026-06-03):**
- CursorGlow RAF skipped on `pointer: coarse` devices ✅
- Lenis smooth scroll skipped on `pointer: coarse` devices ✅

**Remaining INP risks on mobile:**
1. **Framer Motion bundle** — loaded on all pages, adds ~50KB to JS bundle
   - `whileInView` animations run on scroll events — main thread work
   - `Reveal.tsx` now uses simple opacity fade — less computation
2. **MobileRailEffects.tsx** — RAF loop runs on mobile intentionally for rail scrolling
   - Has proper cleanup on unmount ✅
   - Only runs on `max-width: 768px` screens ✅
3. **Contact page** — reCAPTCHA execute call on form submit may add 100-300ms
4. **Hero animations** — Framer Motion `initial={false}` used (no initial animation) ✅

**INP risk score: Medium** — Framer Motion on mobile is the main remaining concern

---

### FCP (First Contentful Paint) — Target: < 1.8s

**Positives:**
- Static HTML — content in initial response ✅
- Fonts preloaded via Next.js font system ✅
- No render-blocking resources (scripts are async) ✅

**Concern:**
- reCAPTCHA script `async` loaded on every page (including non-contact pages)
- Google Analytics script `async` on every page
- These do not block render but do consume main thread bandwidth

---

## JavaScript Bundle Analysis

### Production Dependencies
| Package | Size (estimated) | Purpose | Mobile needed? |
|---------|-----------------|---------|----------------|
| `next` | Framework core | Routing, rendering | Yes |
| `react` + `react-dom` | ~130KB gzipped | UI framework | Yes |
| `framer-motion` | ~50KB gzipped | Animations | Partially |
| `lenis` | ~15KB gzipped | Smooth scroll | No (now guarded) |
| `lucide-react` | Tree-shaken | Icons | Yes |
| `clsx` + `tailwind-merge` | ~2KB | Class utilities | Yes |

**Biggest opportunity:** Framer Motion — could be replaced with CSS animations for mobile, but this is a significant refactor. Not recommended unless CWV remains poor after current fixes.

---

## Image Performance

### Current Image Inventory
| Image | Size | Format | Usage |
|-------|------|--------|-------|
| `anas-premium-hero-1100.webp` | ~180KB | WebP | Hero LCP (all pages) |
| `anas-resume.webp` | ~40KB | WebP | About/Resume pages |
| `about-resume-brand.webp` | ~60KB | WebP | About page |
| Blog covers (29 images) | ~80KB avg | WebP | Blog pages |

### Image Issues
1. **No responsive images** — 1100px hero served to all screen sizes
2. **No `sizes` prop** — browser cannot calculate appropriate image size
3. **`.png` originals exist** alongside `.webp` — should ensure only WebP is served

### Image Improvement (Low effort, no code change)
Create a 400px mobile version of the hero image:
- `anas-premium-hero-400.webp` for mobile screens
- Update Hero.tsx to use `srcset` manually or conditional `src`
- **Impact:** Could improve LCP by 0.5-1s on mobile

---

## Third-Party Script Impact

| Script | Load Method | Pages | Mobile Impact |
|--------|-----------|-------|--------------|
| Google Analytics | `async` | All | Low |
| Google Ads | Via GTM | All | Low |
| reCAPTCHA | `async` | All | Medium |

**Issue:** reCAPTCHA is loaded on ALL pages but only needed on `/contact`. This adds unnecessary script weight to every page.

**Recommended fix (future):** Move reCAPTCHA script loading to `app/contact/layout.tsx` instead of root `app/layout.tsx`. This requires creating a contact-specific layout file.
- **Effort:** Low
- **Impact:** Reduces main thread work on all non-contact pages

---

## SEO Performance (Crawling & Indexing)

### Current Indexing State
- **Submitted:** 245 pages (via sitemap)
- **Indexed:** 92 pages
- **Not indexed:** 154 pages (64% not yet indexed)

### Why 154 Pages Are Not Indexed
Likely reasons (in order of probability):
1. **Crawl budget** — Google is prioritizing known-quality pages first
2. **Thin content** — Some SEO pages may have similar content to each other
3. **Domain authority low** — New domain, Google indexes slowly
4. **Not yet crawled** — Google crawls gradually, not all at once

### Sitemap Configuration
Four sitemaps configured:
- `sitemap.xml` — all routes
- `sitemap-images.xml` — image sitemap
- `sitemap-news.xml` — news sitemap (blog posts)
- `feed.xml` — RSS feed

### robots.txt Configuration
- All legitimate routes: `Allow`
- WordPress paths: `Disallow`
- `/thank-you/`: `Disallow` (correct — no SEO value)
- AI crawlers explicitly `Allow`: GPTBot, ClaudeBot, PerplexityBot, Applebot
- AI visibility: ✅ Good — site can appear in AI search results

---

## Performance Optimization Roadmap

### Already Done ✅
- Static export (0ms server time)
- Brotli + Gzip compression
- 1-year asset caching
- WebP images
- Hero image: priority + fetchPriority
- CursorGlow: skipped on mobile
- Lenis: skipped on mobile
- Reveal: no Y-shift (CLS fix)
- Font: display swap

### Quick Wins (Low effort, High impact)
| Action | Impact | Effort | File |
|--------|--------|--------|------|
| Move reCAPTCHA to contact page only | INP improvement all pages | Low | `app/contact/layout.tsx` |
| Create 400px hero WebP for mobile | LCP improvement mobile | Medium | `Hero.tsx` + new image |
| Add `sizes` prop to hero image | LCP improvement | Low | `components/sections/Hero.tsx` |

### Medium Term
| Action | Impact | Effort |
|--------|--------|--------|
| Lazy-load Framer Motion on mobile | INP improvement | High |
| Add blog image `width`/`height` for CLS | CLS fix | Medium |
| Defer GA until after user interaction | FCP/INP improvement | Medium |

### Do Not Do (Risk vs Reward)
| Action | Why Not |
|--------|---------|
| Remove Framer Motion entirely | Major visual regression, high effort |
| Switch to SSR | Changes whole architecture, needs server |
| Add CMS | Major scope change, not needed for portfolio |
| Switch image format to AVIF | WebP already excellent, AVIF support still partial |
