# ROLLBACK_PLAN.md — How to Undo Any Change

---

## Before Starting Any Task — Save Your Position
```bash
git rev-parse HEAD
# Note this hash. If anything breaks, use it to restore.
```

---

## Rollback Last Commit (Safe — creates a new undo commit)
```bash
git revert HEAD
git push origin main
```

---

## Rollback Last Commit (Hard — destroys changes permanently)
```bash
# Only use this if revert is not sufficient
git reset --hard HEAD~1
git push --force origin main
```

---

## Restore a Single File to Previous State
```bash
# Restore one file without affecting anything else
git checkout HEAD~1 -- lib/seo.ts
git checkout HEAD~1 -- data/site.ts
git checkout HEAD~1 -- app/layout.tsx
git checkout HEAD~1 -- data/blogSeo.ts
```

---

## Emergency: Site is Broken After Deploy
1. `git log --oneline -10` — find last working commit hash
2. `git revert [hash]` — create a safe undo commit
3. `npm run build` — confirm it passes (145 pages)
4. `git push origin main` — deploy the fix

---

## High-Risk File Restore Reference
| File | Restore Command |
|------|----------------|
| `lib/seo.ts` | `git checkout HEAD~1 -- lib/seo.ts` |
| `data/site.ts` | `git checkout HEAD~1 -- data/site.ts` |
| `app/layout.tsx` | `git checkout HEAD~1 -- app/layout.tsx` |
| `next.config.mjs` | `git checkout HEAD~1 -- next.config.mjs` |
| `app/globals.css` | `git checkout HEAD~1 -- app/globals.css` |
| `data/blogSeo.ts` | `git checkout HEAD~1 -- data/blogSeo.ts` |

---

## Check What Changed in a Commit
```bash
# See files changed in last commit
git show HEAD --stat

# See exact diff of one file
git diff HEAD~1 HEAD -- lib/seo.ts

# See all recent commits
git log --oneline -10
```

---

## If Build is Broken and You Cannot Identify Why
```bash
# Find the last commit where build passed
git stash                    # save current changes
npm run build                # test current state
git checkout HEAD~1          # go back one commit
npm run build                # if this passes, last commit broke it
git checkout main            # return to main
git revert HEAD              # safely undo
```
