# CLAUDE.md — Maximum Engineering Discipline Mode
# anastanveer.com — AI Assistant Rules

---

## PRIME DIRECTIVE

**ANALYZE FIRST. CODE NEVER COMES FIRST.**

Every task begins with understanding, inspection, and explicit user approval.
No code is generated until the user has reviewed and approved the full plan.
This is a production website. Treat it as a high-risk production environment at all times.

---

## Project Identity

- **Site:** anastanveer.com + arsdeveloper.co.uk (UK) + torontobytes.ca (Canada)
- **Owner:** Anas Tanveer — Full-Stack Laravel & WordPress Developer, Dubai
- **Framework:** Next.js 16 App Router, TypeScript 5.7, Tailwind CSS v3
- **Output:** `output: "export"` — 100% static, no server runtime
- **Backend:** Separate PHP backend at `backend/public/index.php` (contact form only)
- **Deploy:** GitHub → Apache static host via .htaccess
- **Pages:** 145 pre-rendered static pages at build time
- **Critical data files:** `lib/seo.ts` (1598 lines), `data/site.ts` (2652 lines), `data/blogSeo.ts` (4214 lines)

---

## MANDATORY PRE-TASK SEQUENCE

Before ANY response involving code, edits, or changes, Claude MUST complete ALL of the following in order. Skipping any step is not permitted.

### Step 1 — Build Project Memory
Read and internalize:
- `PROJECT_MAP.md` — full file and route map
- `ARCHITECTURE_ANALYSIS.md` — system design
- `CHANGELOG_AI.md` — what changed recently
- `PROJECT_RULES.md` — protected systems
- `SECURITY_ANALYSIS.md` — security context
- `PERFORMANCE_ANALYSIS.md` — performance context

### Step 2 — Inspect Affected Files
- Read every file that will be touched using the Read tool
- Do NOT assume file contents — always verify current state
- Identify all files that import from or depend on the target file
- Map the full blast radius of the proposed change

### Step 3 — Produce the Full 8-Part Plan
Present to the user before writing a single line of code:
1. **Understanding** — what is actually being asked
2. **Risk Analysis** — what can break, likelihood, severity
3. **Impact Analysis** — which pages, features, schema affected
4. **Affected Files** — every file that will change, with risk level
5. **Implementation Plan** — exact steps, in order
6. **Testing Plan** — specific checks after implementation
7. **Rollback Plan** — exact git commands to undo
8. **Senior Engineer Review** — what a principal engineer would flag

### Step 4 — WAIT FOR EXPLICIT APPROVAL
Do not proceed until the user says: "go", "approved", "do it", or equivalent.
If the user has not approved, do not generate code.

---

## Mandatory Review Checkpoints

Every plan must address all 6 of the following before approval is requested:

| Checkpoint | Questions to Answer |
|-----------|-------------------|
| **Security Review** | Does this add user input? Change headers? Expose data? Touch auth? |
| **Performance Review** | Does this add JS weight? Cause CLS? Block main thread? Add RAF? |
| **Scalability Review** | If 10x content is added later, does this still work? |
| **Maintainability Review** | Is this the simplest solution? Will it be clear to read in 6 months? |
| **QA Review** | What breaks if this fails? What is the exact test? |
| **Production Readiness** | Build pass? TypeScript pass? All 145 pages generated? Rollback documented? |

---

## Absolute Prohibitions — Never Do These

### Code Prohibitions
- Never generate code before completing the 8-part plan
- Never generate code without explicit user approval
- Never rewrite working code when a minimal targeted change is possible
- Never add server-side code (`use server`, API routes, `getServerSideProps`)
- Never add a database connection to the Next.js layer
- Never change `output: "export"` or `images: { unoptimized: true }`
- Never install packages without explicit user approval

### File Prohibitions
- Never modify unrelated files while fixing something else
- Never modify 2+ critical-risk files in one commit without explicit approval
- Never skip `npm run build` verification after any data, schema, or layout change
- Never touch `public/images/` without asking
- Never modify `app/layout.tsx` without stating it affects all 145 pages

### Architecture Prohibitions
- Never add authentication or session management
- Never change routing structure without sitemap update
- Never change schema JSON-LD structure without Rich Results Test
- Never add new `requestAnimationFrame` loops without mobile guard
- Never add `will-change` CSS without measuring impact
- Never add `dangerouslySetInnerHTML` without explicit justification

### Change Control Prohibitions
- No multi-file changes without justification for each file
- No deployment-impacting changes without rollback documentation
- No refactoring of working code unless explicitly requested
- No dependency upgrades without compatibility analysis
- No "while I'm in here" changes — fix only what was asked

---

## File Risk Classification

| Risk Level | Files | Rule |
|-----------|-------|------|
| **CRITICAL** | `lib/seo.ts`, `data/site.ts` | Affects all 145 pages. Build + typecheck required. Approval required. |
| **HIGH** | `app/layout.tsx`, `next.config.mjs`, `public/.htaccess` | Affects all pages or deployment. Approval required. |
| **HIGH** | `components/seo/SeoServicePageView.tsx` | Affects all 100+ SEO landing pages simultaneously. |
| **MEDIUM** | `app/globals.css`, `data/blogSeo.ts`, `app/sitemap.ts` | Affects multiple pages. Build required. |
| **MEDIUM** | `components/layout/Header.tsx`, `Footer.tsx`, `Providers.tsx` | Affects all pages visually. |
| **LOW** | `components/animations/`, `components/ui/`, `components/sections/` | UI only. Visual check required. |
| **LOW** | `app/[single-page]/page.tsx`, `data/seo-pages.ts` entries | Single page or specific config only. |

---

## Project Memory Behavior

Claude must build and maintain a mental model of this project:

- **Architecture:** Jamstack static + PHP backend. No SSR. No database in Next.js.
- **Data flow:** TypeScript files → build → static HTML. No runtime data fetching.
- **SEO:** Dual-layer schema (global via layout + page-specific). Schema errors = GSC penalties.
- **Performance:** Static delivery is fast. JS animations are the main mobile bottleneck.
- **Contact form:** POSTs to PHP backend via Apache rewrite. Not a Next.js API route.
- **Routes:** 145 pages. Adding/removing routes requires sitemap.ts update.
- **Blog:** Content split across `data/site.ts` (base) and `data/blogSeo.ts` (expanded). Only `expandedSections` key is rendered.

Reference existing project patterns. Do not invent new patterns when existing ones work.

---

## What "Minimal Safe Change" Means

The correct solution is the one that:
1. Solves exactly the stated problem
2. Changes the fewest files possible
3. Follows existing code patterns in the project
4. Requires the least explanation to understand
5. Is fully reversible with a single `git revert`

If a 3-line change solves the problem, a 30-line change is wrong.
If one file change solves the problem, touching two files is wrong.

---

## Build Verification (Non-Negotiable)

After any change to CRITICAL or HIGH risk files:
```bash
npm run typecheck   # Must show zero errors
npm run build       # Must generate 145 pages
```
Do not report a task as complete until these pass.

---

## Preserved Systems — Never Break These

The following systems must remain exactly as they are unless explicitly requested by the user:

- All 145 routes and their URLs
- All SEO metadata and JSON-LD schema structures
- All existing UI, responsiveness, animations (desktop)
- Contact form: honeypot, reCAPTCHA, rate limiting, validation
- `robots.ts` crawler rules including AI bot allowlist
- All sitemaps (main, image, news)
- RSS feed generation
- Apache .htaccess: HTTPS, CSP, security headers, redirects
- Dark/light mode toggle behavior
- All internal links and anchor hrefs
- Google Analytics and Google Ads tracking IDs
