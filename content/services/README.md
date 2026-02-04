# Service Landing Pages - Content Guide

Created 6 service landing pages optimized for SEO and conversion.

## Files Created

1. **1-file-archival.md** - בקשה לגניזת תיק פלילי
2. **2-pardon-request.md** - בקשת חנינה
3. **3-private-criminal-complaint.md** - הגשת קובלנה פלילית פרטית
4. **4-warning-letter.md** - טיפול במכתב התראה
5. **5-indictment-defense.md** - ייצוג בכתב אישום
6. **6-file-closure-appeal.md** - ערר על סגירת תיק

## Structure of Each Page

Each page (~600-800 words) includes:

- **SEO-optimized title** (H1 with keyword)
- **Meta description** (155 characters, SEO-focused)
- **Keywords list** for targeting
- **What is it** (מה זה) - Explanation of the service
- **Who needs it** (למי זה מתאים) - Target audience
- **The process** (התהליך) - Step-by-step breakdown
- **Pricing indication** (מחיר משוער) - Price ranges
- **FAQ section** - Common questions
- **CTA** - Clear call-to-action

## How to Export to Google Docs

### Option 1: Direct Copy-Paste
1. Open each `.md` file in any text editor
2. Copy all content
3. Paste into Google Docs
4. Format will mostly preserve (headings, lists, bold)

### Option 2: Use Pandoc (Better Formatting)
```bash
# Install pandoc if needed
brew install pandoc

# Convert each file
cd /Users/adi/Developments/patir/content/services
pandoc 1-file-archival.md -o 1-file-archival.docx
pandoc 2-pardon-request.md -o 2-pardon-request.docx
# ... repeat for all files
```

Then upload the `.docx` files to Google Drive and open with Google Docs.

### Option 3: Use Dillinger.io (Online)
1. Go to https://dillinger.io/
2. Copy-paste the markdown content
3. Click "Export As" → "Styled HTML" or "PDF"
4. Import to Google Docs

## Next Steps

### 1. Manual Improvements
- Add real statistics and success rates where indicated
- Include anonymized case studies
- Adjust pricing based on your actual rates
- Add your specific expertise and credentials

### 2. SEO Optimization
- Use the suggested URLs (/services/בקשה-לגניזת-תיק)
- Implement the meta descriptions in your HTML
- Target the listed keywords in your content strategy

### 3. Integration Options

**Temporary (before CMS):**
- Place these as static pages in `/client/src/pages/services/`
- Convert markdown to React components manually
- Or use a markdown renderer library

**Long-term (with CMS):**
- Import to Sanity/Decap CMS
- Set up dynamic routing
- Enable easy editing via CMS interface

## SEO Keywords Covered

Each page targets:
- Primary: [Service Name] + עורך דין
- Secondary: Related action verbs + legal terms
- Long-tail: Specific questions people search

## Conversion Elements

Each page includes:
- Clear value proposition
- Trust signals (process transparency)
- Risk mitigation (free consultation, no obligation)
- Multiple CTAs (top, middle, bottom)
- FAQ to address objections

## Notes

- All content is in Hebrew (RTL)
- Prices are estimates - adjust to your actual rates
- "הערות לעריכה" sections at bottom suggest improvements
- Content is structured for both humans and search engines

---

**Questions or need changes?** Let me know which pages need adjustments.
