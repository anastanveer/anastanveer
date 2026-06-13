# TASK_TEMPLATE.md — Use This Structure for Every Engineering Task

---

## Task Request
> [Paste the user's exact request here]

---

## Understanding
[What this actually means technically — in plain terms]

---

## Files Affected
| File | Change Type | Risk Level |
|------|------------|------------|
| | Add / Edit / Delete | Low / Medium / High / Critical |

---

## Risk Analysis
- **Breaking risk:** Low / Medium / High / Critical
- **Pages affected:** [single page / blog pages / all 145 pages]
- **Schema affected:** Yes / No — [which schema type]
- **Performance impact:** Yes / No — [mobile / desktop]
- **Build test required:** Yes / No

---

## Proposed Change (Before Touching Code)
[Exact description of what will change — confirm this with user if High or Critical risk]

---

## Implementation
[Code changes go here — only after plan is clear]

---

## Verification Commands
```bash
npm run typecheck
npm run build
```
- [ ] TypeScript: zero errors
- [ ] Build: 145 pages generated
- [ ] Feed: public/feed.xml generated

---

## Testing Checklist
- [ ] Affected page(s) render correctly in browser
- [ ] Mobile layout not broken
- [ ] No console errors
- [ ] Schema valid (Rich Results Test if schema changed)
- [ ] GSC no new errors expected

---

## Rollback Plan
```bash
# To undo this specific commit:
git revert HEAD

# To restore a specific file:
git checkout HEAD~1 -- [filename]
```
Last safe commit before this task: `[run: git rev-parse HEAD before starting]`

---

## CHANGELOG_AI.md Entry
```
## [DATE]
### [Task Title]
Files: [list]
Why: [reason]
Build: 145 pages ✅ / ❌
```
