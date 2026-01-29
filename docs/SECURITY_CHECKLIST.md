# Security Verification Checklist

**Site:** patir.net
**Last Updated:** January 29, 2026

This checklist contains actionable security verification steps. Complete each item to ensure production readiness.

---

## 1. Cloudflare Dashboard Settings

### SSL/TLS Configuration
Access: Cloudflare Dashboard → SSL/TLS

- [ ] **SSL/TLS Mode:** Set to "Full (Strict)"
  - Path: SSL/TLS → Overview
  - Why: Ensures end-to-end encryption between Cloudflare and origin server

- [ ] **Always Use HTTPS:** Enabled
  - Path: SSL/TLS → Edge Certificates
  - Why: Automatically redirects HTTP to HTTPS

- [ ] **Minimum TLS Version:** Set to TLS 1.2 or higher
  - Path: SSL/TLS → Edge Certificates
  - Why: Blocks outdated, insecure protocols

- [ ] **HTTP Strict Transport Security (HSTS):** Enabled
  - Path: SSL/TLS → Edge Certificates
  - Settings: Max Age = 12 months, Include subdomains, Preload
  - Why: Forces browsers to always use HTTPS

### Security Settings
Access: Cloudflare Dashboard → Security

- [ ] **Bot Fight Mode:** Enabled
  - Path: Security → Bots
  - Why: Blocks malicious bots automatically

- [ ] **Browser Integrity Check:** Enabled
  - Path: Security → Settings
  - Why: Checks for known malicious browser signatures

- [ ] **Security Level:** Medium or High
  - Path: Security → Settings
  - Why: Challenges suspicious visitors

### Scrape Shield
Access: Cloudflare Dashboard → Scrape Shield

- [ ] **Email Address Obfuscation:** Enabled
  - Why: Prevents email harvesting by bots

- [ ] **Hotlink Protection:** Enabled (optional)
  - Why: Prevents other sites from embedding your images

---

## 2. Security Headers Verification

After deploying the `_headers` file, verify headers are active:

### How to Check:
1. Open browser DevTools (F12)
2. Go to Network tab
3. Visit https://patir.net
4. Click the main document request
5. Check Response Headers

### Required Headers:
- [ ] `X-Frame-Options: DENY`
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `X-XSS-Protection: 1; mode=block`
- [ ] `Referrer-Policy: strict-origin-when-cross-origin`
- [ ] `Permissions-Policy: geolocation=(), microphone=(), camera=()`
- [ ] `Content-Security-Policy: default-src 'self'...`
- [ ] `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`

### Testing Tools:
- [ ] Run https://securityheaders.com/?q=https://patir.net
  - Target: A or A+ rating

---

## 3. n8n Webhook Security

### Access n8n Dashboard:
Check workflow settings for contact form

- [ ] **CORS Configuration:**
  - Only allow origin: `https://patir.net`
  - Block all other origins

- [ ] **Webhook Authentication:**
  - Verify webhook URL is not easily guessable
  - Consider adding authentication header if supported

- [ ] **Input Validation:**
  - Phone number format validation (Israeli format)
  - Email format validation
  - Required field checks
  - Maximum length limits

- [ ] **Rate Limiting:**
  - Consider adding rate limit in n8n (e.g., max 5 submissions per IP per hour)
  - Or use Cloudflare Rate Limiting rule

- [ ] **Honeypot Field:**
  - Verify honeypot field (`website`) is checked in workflow
  - If filled → reject submission silently

### Backup Workflow:
- [ ] Export n8n workflow as JSON
  - Store in secure location (not in public repo)
  - Update backup when workflow changes

---

## 4. Form Security Testing

### Manual Tests:
- [ ] **Normal Submission:**
  - Fill form with valid data → Should receive email

- [ ] **Honeypot Test:**
  - Fill honeypot field → Should fail silently (no email)

- [ ] **Invalid Data:**
  - Invalid email format → Should reject or sanitize
  - Invalid phone → Should reject or sanitize

- [ ] **Empty Required Fields:**
  - Should show validation errors

- [ ] **XSS Attempt:**
  - Try `<script>alert('xss')</script>` in fields
  - Should be escaped/sanitized

### Automated Tests (Optional):
- [ ] Set up rate limiting test
- [ ] Set up bot detection test

---

## 5. Google Search Console Setup

- [ ] **Add Property:**
  1. Go to https://search.google.com/search-console
  2. Add property for `patir.net`
  3. Verify ownership (DNS TXT record or HTML file)

- [ ] **Submit Sitemap:**
  - Submit `https://patir.net/sitemap.xml`
  - Verify sitemap is accessible and valid

- [ ] **Monitor Indexing:**
  - Check "Coverage" report after 48-72 hours
  - Verify pages are indexed

- [ ] **Mobile Usability:**
  - Check for mobile issues

- [ ] **Core Web Vitals:**
  - Monitor performance metrics

---

## 6. Monitoring & Alerts

### Cloudflare Analytics
- [ ] **Enable Email Alerts:**
  - Path: Account Home → Notifications
  - Enable: Traffic anomalies, SSL expiry warnings, DDoS alerts

### Uptime Monitoring (Optional)
Choose one:
- [ ] UptimeRobot (free tier)
- [ ] Pingdom
- [ ] Cloudflare Health Checks

Configure:
- [ ] Monitor https://patir.net every 5 minutes
- [ ] Alert via email if down
- [ ] Alert via SMS for critical issues (optional)

### Google Analytics
- [ ] Verify GTM is firing correctly
- [ ] Set up goal for form submissions
- [ ] Enable alerts for traffic drops

---

## 7. Privacy & Cookie Compliance

- [ ] **Privacy Policy:**
  - Verify `/privacy` page is accessible
  - Update last modified date if changed
  - Ensure it mentions:
    - What data is collected (name, email, phone, message)
    - How it's used (contact purposes only)
    - Third parties (n8n, Google Analytics/GTM)
    - User rights (access, deletion)

- [ ] **Terms of Service:**
  - Verify `/terms` page is accessible
  - Update if needed

- [ ] **Cookie Consent Banner:**
  - If using analytics cookies (GTM tracks users)
  - Consider adding cookie consent banner for GDPR/Israeli privacy law compliance
  - Tools: Cookie Consent by Osano, CookieBot, or custom solution

---

## 8. Backup & Recovery

- [ ] **Code Repository:**
  - Verify code is in Git
  - Push latest changes to GitHub/GitLab
  - Ensure `.gitignore` excludes sensitive files

- [ ] **Cloudflare Pages:**
  - Verify auto-deploy from Git is working
  - Test rollback to previous deployment

- [ ] **n8n Workflow Backup:**
  - Export workflow JSON
  - Store securely (password manager, encrypted drive)

- [ ] **Environment Variables:**
  - Document all environment variables
  - Store securely (not in public repo)

---

## 9. Performance Verification

- [ ] **Lighthouse Audit:**
  - Run in Chrome DevTools (Incognito mode)
  - Target: All scores 90+
  - Check mobile and desktop

- [ ] **WebPageTest:**
  - Run test from https://www.webpagetest.org
  - Location: Israel/Europe
  - Check First Contentful Paint, Speed Index

- [ ] **GTmetrix:**
  - Run test from https://gtmetrix.com
  - Verify grades A/B

---

## 10. Final Pre-Launch Checklist

- [ ] All Cloudflare security settings verified
- [ ] Security headers returning correct values
- [ ] Form submissions working and secure
- [ ] Sitemap submitted to search engines
- [ ] Google Business Profile created
- [ ] Monitoring and alerts configured
- [ ] Privacy policy and terms accessible
- [ ] All lighthouse scores 90+
- [ ] Mobile responsive on real devices
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] Hebrew content displays correctly

---

## Emergency Contacts

**Cloudflare Support:**
- Dashboard: https://dash.cloudflare.com
- Support: Cloudflare dashboard → Support

**n8n Support:**
- Dashboard: https://app.n8n.cloud
- Docs: https://docs.n8n.io

**DNS Provider (GoDaddy):**
- Login: https://sso.godaddy.com

---

## Notes

- Review this checklist quarterly
- Update after major changes to infrastructure
- Keep a log of when each item was last verified
- Document any deviations from recommendations with justification
