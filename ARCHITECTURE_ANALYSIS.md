# ARCHITECTURE_ANALYSIS.md — Deep System Design Analysis

## Architecture Pattern
**Jamstack Static Site** with a separate PHP backend for form handling.

```
┌─────────────────────────────────────┐
│         anastanveer.com             │
│   Next.js 16 Static Export (SSG)    │
│   145 pre-rendered HTML pages       │
│   Served via Apache + .htaccess     │
└────────────────┬────────────────────┘
                 │ /api/contact POST
                 ▼
┌─────────────────────────────────────┐
│   backend/public/index.php (PHP)    │
│   Handles contact form submission   │
│   Sends email notification          │
└─────────────────────────────────────┘
```

---

## Layer 1 — Static Site (Next.js)

### How Pages Are Generated
All 145 pages are **pre-rendered at build time** using `output: "export"`. There is no runtime server. Google, users, and bots receive pure static HTML with embedded JSON-LD schema.

**Page generation chain:**
1. `npm run build` triggers `npm run prebuild` (RSS generation) first
2. Next.js compiles TypeScript → JavaScript
3. App Router generates each page: `app/[slug]/page.tsx`
4. `generateStaticParams()` in `app/blog/[slug]/page.tsx` generates one page per blog post
5. All SEO landing pages use static `page.tsx` files — no dynamic params needed
6. Output: `out/` directory of static HTML + assets

### Content Architecture — No CMS
All content lives in TypeScript data files. Changes require a code edit + rebuild + redeploy.

| Data File | What It Contains | Pages Affected |
|-----------|-----------------|----------------|
| `data/site.ts` (2652 lines) | Blogs, projects, services, pricing, skills, stats | All pages |
| `data/blogSeo.ts` (4214 lines) | Blog expanded sections, FAQs, checklists, related links | Blog pages only |
| `data/seo-pages.ts` | Config for 100+ landing pages | SEO pages |
| `data/faqs.ts` | FAQ items | Home + SEO pages |
| `data/howTo.ts` | HowTo schema steps per page | Blog pages |

### SEO Architecture — Two-Layer Schema
Every page receives schema from two sources:

**Layer 1 — Global (every page via layout.tsx):**
`siteJsonLd()` injects:
- `Person` entity (Anas Tanveer)
- `ProfessionalService` entity
- `LocalBusiness` — Dubai, UK (ARS Developer), Canada (TorontoBytes)
- `Organization` entities
- `WebSite` with `SearchAction`

**Layer 2 — Page-specific:**
`jsonLdForPage(path)` injects:
- `WebPage` or `BlogPosting`
- `BreadcrumbList`
- `FAQPage` (where applicable)
- `HowTo` (blog pages with howTo data)

---

## Layer 2 — PHP Backend

### Contact Form Backend
**Location:** `backend/public/index.php` (not in this Next.js repo)
**Route:** `.htaccess` rewrites `/api/contact` → `backend/public/index.php`

The PHP backend:
- Receives `FormData` POST from the contact form
- Validates the reCAPTCHA v3 token against Google's API
- Sends email notification
- Returns `{ "success": true }` or error JSON

**This means:** The Next.js app has NO server-side code at all. The `/api/contact` endpoint is entirely handled by the PHP backend on the same server.

---

## Component Architecture

### Rendering Strategy
| Component Type | Rendering | Why |
|---------------|-----------|-----|
| Page components (`app/*/page.tsx`) | Server (static) | Pre-rendered at build |
| Layout (`app/layout.tsx`) | Server (static) | Shared shell |
| `"use client"` components | Client | Interactive UI |
| Schema (`JsonLd.tsx`) | Server | SEO — must be in initial HTML |

### Client Components (Interactive)
All components with `"use client"` directive:
- `CursorGlow.tsx` — RAF loop for cursor animation (desktop only)
- `MobileRailEffects.tsx` — Touch scroll rail effects (mobile only)
- `ScrollProgress.tsx` — Scroll position tracker
- `Providers.tsx` — Lenis smooth scroll + card tilt (desktop only)
- `Reveal.tsx` — Framer Motion scroll-triggered fade
- `ContactForm.tsx` — Form with reCAPTCHA + state management
- `FloatingAssistant.tsx` — Floating UI element
- `CountUp.tsx` — Animated number counter
- `MagneticButton.tsx` — Magnetic hover effect
- `ThemeToggle.tsx` — Dark/light mode toggle
- `Header.tsx` — Nav (mobile menu state)
- `FAQ.tsx` — Accordion
- `Hero.tsx` — Framer Motion animations
- `TechMarquee.tsx` — Scrolling tech logo marquee
- `SkillsVisual.tsx` — Animated skills chart

### SEO Landing Page Template Pattern
All 100+ landing pages use a shared template:
```
app/[slug]/page.tsx
  → exports metadata (via pageMetadata())
  → renders <SeoServicePageView config={pageConfig} />
  → pageConfig comes from data/seo-pages.ts
```
This means editing `SeoServicePageView.tsx` affects all 100+ SEO pages simultaneously.

---

## Routing Architecture

### Static Routes
All routes are static folders with `page.tsx`. Next.js generates `route/index.html` for each.

### Dynamic Route
`app/blog/[slug]/page.tsx` uses `generateStaticParams()` to pre-render one HTML file per blog post. Blog posts are defined in `data/site.ts` with `publishedAt` date gating.

### Redirects
All redirects are handled by `.htaccess` (Apache), not Next.js:
- Old URLs → new URLs (e.g. `/about-us/` → `/about/`)
- `/api/contact` → PHP backend
- WordPress attack paths → 410 Gone

### Trailing Slash
`trailingSlash: true` in `next.config.mjs` ensures all URLs end with `/` and files are generated as `[route]/index.html`. Critical for Apache static serving.

---

## Styling Architecture

### Stack
- **Tailwind CSS v3** — utility classes
- **Custom CSS** in `app/globals.css` (848 lines):
  - CSS custom properties (design tokens)
  - `.grid-bg` — background grid pattern
  - `.cursor-glow`, `.custom-cursor-*` — cursor system
  - `@keyframes` — grid, cursor, orbit, rail, shimmer animations
  - `.glass` — glassmorphism card style
  - `.premium-text` — gradient text
  - `.premium-button-gradient` — main CTA button
  - `.mobile-rail` — horizontal scroll rail system
  - `@media (prefers-reduced-motion)` — motion safety

### Design Tokens
Colors defined as Tailwind extensions:
- `cyan` — primary accent (#26D9FF)
- `violet` — secondary (#8B5CF6)
- `emerald` — success/available (#10B981)
- `silver` — body text
- Background: deep navy `#05070d`

---

## Performance Architecture

### Static Delivery
- Pre-rendered HTML = 0ms server processing
- Apache serves static files directly
- Brotli compression on HTML/CSS/JS
- 1-year immutable cache on all assets (CSS, JS, images, fonts)
- 0-second cache on HTML (instant updates on redeploy)

### Image Strategy
- All images pre-converted to WebP format in `public/images/`
- Hero image: `anas-premium-hero-1100.webp` with `priority` + `fetchPriority="high"`
- `images: { unoptimized: true }` — required for static export (no Next.js image server)
- No responsive `srcset` — single size served to all devices (known limitation)

### JavaScript Strategy
- Framer Motion loaded for animations
- Lenis loaded for smooth scroll
- Both disabled on `pointer: coarse` (mobile/touch) devices
- reCAPTCHA loaded async on all pages (layout.tsx)
- Google Analytics loaded async

### RSS & Feed
- `scripts/generate-rss.mjs` runs as `prebuild` hook
- Generates `public/feed.xml` from `data/site.ts` blog data
- Served as static file

---

## Known Architectural Constraints

| Constraint | Impact | Cannot Fix Without |
|-----------|--------|-------------------|
| Static export — no SSR | No server-side personalization | Switching to Vercel/Node.js host |
| `images: { unoptimized: true }` | No responsive images from Next.js | Adding CDN image transformation |
| Content in `.ts` files | No CMS — every content change needs redeploy | Adding a headless CMS |
| PHP backend in separate codebase | Contact form backend not in this repo | N/A — by design |
| No `srcset` on images | Same image served to 375px and 1440px screens | Build-time image processing |
| reCAPTCHA on every page load | ~500ms script load from Google | Not fixable without removing reCAPTCHA |
