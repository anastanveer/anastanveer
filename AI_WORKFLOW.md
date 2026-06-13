# AI_WORKFLOW.md — Maximum Engineering Discipline Workflow

---

## Core Principle

**Code is the last step, not the first.**

The quality of a solution is determined by the quality of the analysis before it.
A correct 3-line change delivered after thorough analysis is worth more than a
50-line rewrite delivered immediately. This workflow enforces that standard.

---

## The 8-Part Mandatory Plan

Every task that involves any code, file edit, or configuration change must produce
this exact plan in this exact order before any code is written.

---

### Part 1 — Understanding

State clearly:
- What is the user actually trying to achieve? (not just what they literally asked)
- Is there a simpler interpretation of this request?
- Is this a bug fix, a feature, a content update, a performance fix, or a refactor?
- Has this area been recently changed? (check `CHANGELOG_AI.md`)
- Are there existing patterns in this project that should be followed?

**Gate:** If the understanding is unclear, ask one targeted clarifying question before proceeding.

---

### Part 2 — Risk Analysis

For every file that will be touched, state:
- **Risk Level:** Critical / High / Medium / Low (see `PROJECT_RULES.md`)
- **What breaks if this change is wrong?**
- **How many pages are affected?**
- **Does this touch schema JSON-LD?** If yes — GSC impact.
- **Does this touch CSS or animations?** If yes — CWV impact.
- **Does this touch layout.tsx?** If yes — all 145 pages affected.
- **Does this change a URL or route?** If yes — ranking impact.
- **Is this reversible with a single `git revert`?**

Risk scoring:
```
CRITICAL — affects all pages, schema, or build pipeline
HIGH     — affects many pages or has security implications
MEDIUM   — affects a section of pages or a specific feature
LOW      — affects one page or is purely cosmetic
```

---

### Part 3 — Impact Analysis

Map the full blast radius:
- **Pages affected:** List specific pages or "all 145"
- **Schema affected:** Which JSON-LD types? Any `@id` changes?
- **SEO impact:** Could this affect rankings, indexing, or GSC enhancements?
- **Performance impact:** LCP, CLS, INP, FCP — which metrics could regress?
- **User experience impact:** Mobile, desktop, dark mode, light mode
- **Business impact:** Could this affect contact form leads, conversions, or trust signals?

---

### Part 4 — Affected Files

List every file that will change. For each:

| File | Change Type | Risk Level | Reason It Must Change |
|------|------------|------------|-----------------------|
| `path/to/file.tsx` | Edit / Create | Critical/High/Medium/Low | Why this file and not another |

If a file is on the Tier 1 or Tier 2 protected list (`PROJECT_RULES.md`), flag it explicitly.

---

### Part 5 — Implementation Plan

Describe the exact changes in plain language before writing code:
- What lines or functions will change?
- What will be added, removed, or modified?
- Are there any edge cases to handle?
- What existing patterns from the codebase will be followed?
- Is this the minimal change that solves the problem? If not, why not?

Do not write code here. Describe the change in words.

---

### Part 6 — Testing Plan

State exactly how this change will be verified:

**Build verification (always):**
```bash
npm run typecheck   # Zero errors required
npm run build       # 145 pages required
```

**Functional verification (specific to this change):**
- Which pages to open in browser?
- What to look for on mobile (375px)?
- What to look for in dark mode?
- If schema changed: which Rich Results Test URL?
- If animation changed: which interaction to test?
- If content changed: which sections to verify render?

---

### Part 7 — Rollback Plan

Provide the exact commands to undo this change:

```bash
# Save current position before starting
git rev-parse HEAD  # Note this hash

# To undo after completion (safe — creates new commit)
git revert HEAD

# To restore a specific file only
git checkout HEAD~1 -- [filename]
```

State: "If this change breaks something, run [specific command] to restore."

---

### Part 8 — Senior Engineer Review

Apply the four engineering lenses before requesting approval:

**Principal Engineer lens:**
- Is this the right architectural decision, or just the fastest one?
- Does this create technical debt?
- Will this be maintainable in 6 months without this context?

**Security Reviewer lens:**
- Does this add user input to the page?
- Does this change HTTP headers, CSP, or CORS?
- Does this add or modify third-party script loading?
- Does this touch authentication or session logic?

**QA Lead lens:**
- What is the exact test that proves this works?
- What is the exact test that proves nothing regressed?
- What happens if the change fails silently?

**Performance Engineer lens:**
- Does this add to the JavaScript bundle?
- Does this add a new animation, RAF loop, or event listener?
- Does this affect mobile CWV (LCP, CLS, INP)?
- Does this add a new synchronous operation on the critical path?

---

## APPROVAL GATE

**After presenting the 8-part plan, stop and wait.**

Do not write code. Do not continue. Present the plan and ask:
> "Plan is ready. Shall I proceed with implementation?"

Only proceed when the user explicitly approves.

Acceptable approval signals: "go", "yes", "proceed", "do it", "approved", "ok", or equivalent.

If the user modifies the plan, update the plan before proceeding.

---

## Post-Implementation Protocol

After every approved change is implemented:

### Immediate Verification
```bash
npm run typecheck
npm run build
```
- Report the result: "Build passed — 145 pages generated" or describe the error.

### Update CHANGELOG_AI.md
```markdown
## [DATE]
### [Task Title]
**Files changed:** [list with one-line reason each]
**Why:** [user's goal]
**Risk level:** [Critical/High/Medium/Low]
**Build result:** 145 pages ✅ TypeScript ✅
**Rollback:** git revert [hash]
```

### State What Was Preserved
Confirm that the following were not accidentally affected:
- All URLs still resolve
- Schema JSON-LD unchanged (unless schema was the task)
- Mobile layout intact
- Contact form intact
- Analytics tracking intact

---

## Task Classification Reference

| Task Type | Risk | Files at Risk | Required Steps |
|-----------|------|--------------|----------------|
| SEO / Schema change | Critical | `lib/seo.ts`, `data/` | Full 8-part plan + build + Rich Results Test |
| New blog content | Medium | `data/blogSeo.ts`, `data/site.ts` | Parts 1-7 + build |
| Animation / CSS change | Medium | `globals.css`, `components/animations/` | Parts 1-7 + mobile visual check |
| New SEO page | High | `app/[slug]/page.tsx`, `sitemap.ts` | Full 8-part plan + build |
| Performance fix | High | `components/`, `Providers.tsx` | Full 8-part plan + CWV check |
| Layout change | Critical | `app/layout.tsx` | Full 8-part plan + all page types visual check |
| Config change | Critical | `next.config.mjs` | Full 8-part plan + full deploy test |
| Single component fix | Low | One `components/` file | Parts 1-5 + build |
| Content text update | Low | `data/` files | Parts 1-4 + build |

---

## Prohibited Shortcuts

These shortcuts are never permitted regardless of how simple the task appears:

| Shortcut | Why Prohibited |
|---------|---------------|
| "I'll just quickly edit this" | No edit is quick in a production system |
| Editing while explaining | Inspect first, propose second, code only after approval |
| Assuming file contents | Always Read files — they may have changed |
| Fixing related issues without asking | Expands scope without approval |
| Skipping build verification | A passing build is the minimum standard of correctness |
| "This is a minor change" | Minor changes to CRITICAL files have major consequences |
| Combining multiple requests into one commit | Each task = one reviewable, revertable unit |

---

## Pattern Reference — Use These, Do Not Invent New Ones

Before proposing a solution, check if this pattern already exists:

| Need | Existing Pattern | Location |
|------|-----------------|----------|
| Page metadata | `pageMetadata()` | `lib/seo.ts` |
| JSON-LD schema | `jsonLdForPage()`, `siteJsonLd()` | `lib/seo.ts` |
| FAQ schema | `faqSchema()` | `lib/seo.ts` |
| HowTo schema | `howToSchema()` | `lib/seo.ts` |
| Inject schema to page | `<JsonLd data={} id="" />` | `components/seo/JsonLd.tsx` |
| SEO landing page | `<SeoServicePageView config={} />` | `components/seo/SeoServicePageView.tsx` |
| Scroll fade animation | `<Reveal delay={}>` | `components/animations/Reveal.tsx` |
| Class merging | `cn()` | `lib/utils.ts` |
| Absolute URL | `absoluteUrl(path)` | `lib/utils.ts` |
| Blog expanded content | `expandedSections[]` key | `data/blogSeo.ts` |
| Mobile-only guard | `window.matchMedia("(pointer: coarse)")` | `Providers.tsx`, `CursorGlow.tsx` |
