# SECURITY_ANALYSIS.md — Security Review & Risk Register

## Security Posture: GOOD for a static portfolio site
No database. No auth. No user accounts. No server-side code in Next.js.
Attack surface is minimal by design.

---

## Layer 1 — Apache / .htaccess Security

### HTTPS Enforcement
```apache
RewriteCond %{HTTPS} !=on
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
```
**Status:** All HTTP traffic redirected to HTTPS. ✅

### HSTS (HTTP Strict Transport Security)
```apache
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains; preload"
```
**Status:** 1-year HSTS with subdomains and preload. ✅
**Note:** Preload flag means the site can be submitted to browser HSTS preload lists.

### Content Security Policy
```
default-src 'self';
script-src 'self' 'unsafe-inline' https://www.google.com https://www.gstatic.com https://www.googletagmanager.com;
style-src 'self' 'unsafe-inline';
connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com;
img-src 'self' data: blob: https:;
frame-src https://www.google.com https://www.gstatic.com;
object-src 'none';
frame-ancestors 'self';
```
**Status:** CSP present. ✅
**Known weakness:** `'unsafe-inline'` required for scripts and styles.
- Scripts: Needed for Google Analytics inline init and theme detection script
- Styles: Needed for Tailwind inline styles
- **Risk:** Medium — `unsafe-inline` allows inline XSS if user input ever reaches the page. Currently no user content is rendered in HTML, so risk is theoretical only.

### Security Headers
| Header | Value | Status |
|--------|-------|--------|
| `X-Frame-Options` | `SAMEORIGIN` | ✅ Clickjacking protected |
| `X-Content-Type-Options` | `nosniff` | ✅ MIME sniffing blocked |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | ✅ Privacy-safe referrer |
| `Permissions-Policy` | camera, mic, geolocation restricted | ✅ |
| `X-Powered-By` | Unset | ✅ Server info hidden |

### File Access Blocking
```apache
<FilesMatch "(\.env|\.git|composer\.json|package\.json|next\.config\..*|tsconfig\.json|tailwind\.config\.*)">
  Require all denied
</FilesMatch>
```
**Status:** Config files, env files, lock files all blocked from web access. ✅

### WordPress Attack Path Blocking
```apache
RewriteRule ^(wp-admin|wp-includes|wp-content)(/.*)?$ - [G,L,NC]
RewriteRule ^(wp-login\.php|xmlrpc\.php|wp-config\.php)$ - [G,L,NC]
```
**Status:** Common WordPress scanner attacks return 410 Gone. ✅

---

## Layer 2 — Contact Form Security

### reCAPTCHA v3
- Site key: `6Lf_8-ksAAAAAJt3RbumC-30_Y6CrVfo5u_uvx7f` (public, expected in HTML)
- Score threshold enforced server-side by PHP backend
- Token obtained before every submit
- 3-second timeout — if reCAPTCHA fails, form rejects
**Status:** ✅ Bot mitigation active

### Honeypot Field
```html
<input className="hidden" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />
```
Form silently drops submission if `_honey` field is filled (bots fill all fields).
**Status:** ✅ Basic bot trap

### Client-Side Rate Limiting
```typescript
const rateLimitWindow = 10 * 60 * 1000;  // 10 minutes
const minimumSubmitGap = 20 * 1000;       // 20 seconds between submits
const maxSubmissionsPerWindow = 3;         // Max 3 per 10 minutes
```
Enforced via `localStorage`.
**Status:** ✅ UX protection
**Known limitation:** Can be bypassed by clearing localStorage or using incognito. Backend rate limiting (PHP side) is the real defence. This is a client-side UX layer only.

### Input Validation (Client-Side)
- Name: required, non-empty
- Email: required, regex pattern `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Message: required, non-empty
- Phone: optional
**Status:** ✅ Client-side validation present
**Note:** Backend (PHP) must also validate — client-side validation is not security, it is UX.

### Form Submission Security
- `fetch()` POST to `/api/contact` with `FormData`
- No credentials sent (`no credentials` mode is default for same-origin)
- `Accept: application/json` header only
- reCAPTCHA token added to FormData before send
**Status:** ✅

---

## Layer 3 — JavaScript Security

### dangerouslySetInnerHTML Usage
Two instances in `app/layout.tsx`:

**1. Google Analytics init:**
```javascript
"window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-3DEZL0WXWD');gtag('config','AW-658923491');"
```
**Risk:** None — hardcoded string, no user input, no dynamic values.

**2. Theme detection:**
```javascript
"try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light')}catch(e){}"
```
**Risk:** None — reads from localStorage and adds a CSS class only. No innerHTML write.

**Overall `dangerouslySetInnerHTML` status:** ✅ Safe — both uses are controlled static strings

### No User Content Rendered as HTML
The site renders NO user-generated content. All content is from TypeScript data files authored by the developer. XSS via content injection is not applicable.
**Status:** ✅

### Third-Party Scripts
| Script | Source | Trust Level |
|--------|--------|------------|
| Google Analytics | googletagmanager.com | High |
| Google Ads | googletagmanager.com | High |
| reCAPTCHA | google.com / gstatic.com | High |

All third-party scripts are from Google CDNs only. No unknown third parties.
**Status:** ✅

---

## Layer 4 — Information Exposure

### What Is Publicly Visible
| Item | Exposed | Risk |
|------|---------|------|
| reCAPTCHA site key | Yes (HTML) | None — public key by design |
| Google Analytics ID `G-3DEZL0WXWD` | Yes (HTML) | Low — GA IDs are always public |
| Google Ads ID `AW-658923491` | Yes (HTML) | Low — public by design |
| Email address | Yes (`info@anastanveer.com`) | Low — intentional contact info |
| Phone number | Yes | Low — intentional |
| GitHub username | Yes | Low — intentional |
| LinkedIn URL | Yes | Low — intentional |
| Source code structure | Via GitHub | Low — portfolio is open |

### What Is NOT Exposed
- No `.env` files (blocked by .htaccess)
- No database credentials (no database in Next.js)
- No server configuration
- No PHP backend source code (separate repo)
- No private API keys

---

## Risk Register

| Risk | Likelihood | Impact | Current Mitigation | Recommended Action |
|------|-----------|--------|-------------------|-------------------|
| Contact form spam | Medium | Low | reCAPTCHA v3 + honeypot | Backend rate limiting in PHP |
| Clickjacking | Low | Low | X-Frame-Options: SAMEORIGIN | ✅ Done |
| XSS via content | Very Low | Low | No user-generated content rendered | Monitor if CMS added later |
| `unsafe-inline` script | Low | Medium | No dynamic content, CSP otherwise tight | Add nonce if GA changes |
| Client rate limit bypass | Medium | Low | Backend must enforce rate limit | Verify PHP has rate limiting |
| WordPress scanner bots | High | None | .htaccess blocks all WP paths | ✅ Done |
| DDoS | Low | Medium | Static files — very resilient | CDN if needed |
| Dependency vulnerabilities | Medium | Medium | Only 7 production deps | Run `npm audit` regularly |

---

## Security Maintenance Checklist
Run monthly:
- [ ] `npm audit` — check for vulnerable packages
- [ ] Review Google Search Console → Security issues tab
- [ ] Verify reCAPTCHA dashboard for anomalous form attempts
- [ ] Check Apache access logs for scanning activity (if accessible)
- [ ] Confirm HSTS preload status: hstspreload.org
