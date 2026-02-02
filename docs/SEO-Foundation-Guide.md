# Phase 1: SEO Foundation Guide

**patir.net - Organic Growth Strategy**

---

## 1. Technical SEO

### 1.1 Google Search Console

**What is it?** Free Google tool to monitor your site's presence in search results.

**Steps:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property for `patir.net`
3. Verify ownership via Cloudflare DNS (add TXT record)
4. Submit Sitemap: `https://patir.net/sitemap.xml`

**Benefits:**
- Index error reports
- Keywords driving traffic
- Site issue alerts
- Performance data (impressions, clicks, CTR)

| Task | Status |
|------|--------|
| Add property in GSC | ⏳ |
| Verify ownership | ⏳ |
| Submit sitemap.xml | ⏳ |

---

### 1.2 Bing Webmaster Tools

**What is it?** Similar tool to GSC for the Bing search engine.

**Why it matters:** Bing accounts for ~3-5% of searches in Israel. Simple setup takes 5 minutes.

**Steps:**
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Auto-import from Google Search Console (easiest)
3. Or add manually + verify

| Task | Status |
|------|--------|
| Add site to Bing | ⏳ |

---

### 1.3 Structured Data (Schema.org)

**What is it?** JSON-LD code that tells Google what your site contains and enables rich results in search.

**Required Schema types for the site:**

#### LegalService Schema (Required)
Business information - name, phone, address, specialty area.

```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Patir Law Office",
  "url": "https://patir.net",
  "telephone": "+972-54-733-7115",
  "email": "info@patir.net",
  "description": "Law firm specializing in criminal case closure, criminal record deletion, and closure reason changes",
  "areaServed": {
    "@type": "Country",
    "name": "Israel"
  },
  "priceRange": "$$"
}
```

#### FAQPage Schema (Recommended)
For FAQ pages - enables FAQ display directly in Google results.

#### Service Schema (Recommended)
Detail each service: case closure, record deletion, closure reason change.

**Testing Tools:**
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema Markup Validator](https://validator.schema.org)

| Task | Status |
|------|--------|
| Add LegalService Schema | ⏳ |
| Add FAQPage Schema | ⏳ |
| Test with Rich Results Test | ⏳ |

---

### 1.4 robots.txt

**What is it?** File that instructs Google which pages to crawl and which to skip.

**Location:** `https://patir.net/robots.txt`

**Recommended content:**
```
User-agent: *
Allow: /
Sitemap: https://patir.net/sitemap.xml
```

| Task | Status |
|------|--------|
| Verify robots.txt file | ⏳ |

---

## 2. Content Strategy

### 2.1 Keyword Research

**Primary keywords to target (Hebrew):**

| Keyword (Hebrew) | Translation | Est. Volume | Competition | Priority |
|------------------|-------------|-------------|-------------|----------|
| סגירת תיק פלילי | Criminal case closure | High | Medium | ⭐⭐⭐ |
| עורך דין פלילי | Criminal lawyer | High | High | ⭐⭐ |
| מחיקת רישום פלילי | Criminal record deletion | Medium | Low | ⭐⭐⭐ |
| שינוי עילת סגירה | Change closure reason | Low | Low | ⭐⭐⭐ |
| כמה זמן לוקח לסגור תיק | How long to close a case | Medium | Low | ⭐⭐⭐ |
| חוסר אשמה vs חוסר ראיות | Lack of guilt vs lack of evidence | Low | Low | ⭐⭐ |

**Research Tools:**
- [Google Keyword Planner](https://ads.google.com/keyword-planner) (free with Google Ads account)
- [Ubersuggest](https://neilpatel.com/ubersuggest/) (limited free)
- Google Autocomplete (search suggestions)

---

### 2.2 Content Strategy

**Recommended content types:**

#### 1. Service Pages
Dedicated page for each service with:
- Detailed process explanation
- Who it's suitable for
- FAQ section
- Call to action

#### 2. Blog Articles
Educational content answering common questions:
- "What's the difference between lack of guilt and lack of evidence?"
- "5 reasons to delete your criminal record"
- "Complete guide to criminal case closure"

#### 3. FAQ Page
Common questions and answers - good for SEO and user experience.

---

### 2.3 Recommended Content Calendar

| Week | Content Type | Topic | Target Keywords |
|------|--------------|-------|-----------------|
| 1 | Article | Complete guide to criminal case closure | סגירת תיק פלילי |
| 2 | Article | Why it's important to delete criminal record | מחיקת רישום פלילי |
| 3 | FAQ Page | Common questions about criminal cases | שאלות על תיק פלילי |
| 4 | Article | Changing closure reason - what and why | שינוי עילת סגירה |

---

## 3. Local SEO

### 3.1 Google Business Profile

**What is it?** Business profile on Google that appears in search results and maps.

**Why critical:** For searches like "criminal lawyer" Google displays business profiles at the top of results.

**Steps:**
1. Go to [Google Business Profile](https://business.google.com)
2. Create profile or claim existing one
3. Fill in all details completely:
   - Business name
   - Address / Service area
   - Phone number
   - Business hours
   - Business description (up to 750 characters)
   - Categories (Primary: "Criminal Justice Attorney")
   - Photos

**Tips:**
- Add quality photos (logo, team, office)
- Respond to all reviews
- Post updates regularly
- Collect reviews from satisfied clients

| Task | Status |
|------|--------|
| Create Google Business Profile | ⏳ |
| Complete profile fully | ⏳ |
| Upload photos | ⏳ |
| Request first reviews | ⏳ |

---

### 3.2 Israeli Business Directories

**Recommended listings (free):**

| Directory | Link | Priority |
|-----------|------|----------|
| Dapei Zahav | dapei.co.il | High |
| b144 | b144.co.il | High |
| Zap | zap.co.il | Medium |
| Yellow Pages | yellow.co.il | Medium |

**Important:** Maintain NAP (Name, Address, Phone) consistency across all directories.

---

### 3.3 Reviews and Testimonials

**Why important:**
- 93% of consumers read reviews before choosing a lawyer
- Reviews improve Google ranking
- Increase trust and conversion rate

**How to collect:**
1. Ask satisfied clients for Google review
2. Send direct link to write review
3. Display reviews on site (with permission)

---

## Task Checklist - Summary

### High Priority (Week 1)
- [ ] Set up Google Search Console
- [ ] Submit sitemap
- [ ] Create Google Business Profile
- [ ] Add LegalService Schema

### Medium Priority (Week 2-3)
- [ ] Set up Bing Webmaster Tools
- [ ] Write first article (case closure guide)
- [ ] Deep keyword research
- [ ] Register in business directories

### Lower Priority (Week 4+)
- [ ] Add FAQPage Schema
- [ ] Create FAQ page on site
- [ ] Collect first reviews

---

## Recommended Tools

| Tool | Purpose | Cost |
|------|---------|------|
| Google Search Console | Index & performance monitoring | Free |
| Google Analytics | Traffic analysis | Free |
| Google Business Profile | Local SEO | Free |
| Rich Results Test | Schema validation | Free |
| PageSpeed Insights | Speed testing | Free |

---

*This document is part of the patir.net growth plan*
