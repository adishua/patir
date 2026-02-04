# Migration Plan: React+Vite to Next.js 14+ (App Router)

## Overview
Convert Patir legal services website from React+Vite to Next.js with Sanity CMS for content management at build time (pure SSG). Deploy to Cloudflare Pages. Use Sanity-hosted Studio (free tier).

## Current Architecture
- **Frontend**: React 18 + Vite + TypeScript + wouter routing
- **Styling**: Tailwind CSS + shadcn/ui (46 components)
- **Backend**: Express 5 (not active - will be removed)
- **Content**: Markdown files in `content/services/` (not yet integrated)
- **Data**: Hardcoded in `client/src/data/services.ts`

## Target Stack
- **Framework**: Next.js 14+ (App Router)
- **CMS**: Sanity (headless CMS with real-time editing)
- **Deployment**: Cloudflare Pages
- **Styling**: Tailwind CSS + shadcn/ui (preserved)

## Proposed Next.js Structure

```
patir/
├── app/
│   ├── layout.tsx                    # Root layout (RTL, fonts, metadata)
│   ├── page.tsx                      # Homepage (SSG)
│   ├── not-found.tsx                 # 404 page
│   ├── accessibility/page.tsx        # Accessibility (SSG)
│   ├── privacy/page.tsx              # Privacy policy (SSG)
│   ├── terms/page.tsx                # Terms of service (SSG)
│   ├── services/
│   │   ├── page.tsx                  # Services listing (SSG)
│   │   └── [slug]/page.tsx           # Dynamic service pages (SSG)
│   └── globals.css                   # Global styles
├── components/
│   ├── layout/                       # Header, Footer
│   ├── sections/                     # Hero, Services, Contact, etc.
│   └── ui/                           # shadcn/ui components (copy as-is)
├── lib/
│   ├── utils.ts                      # cn() helper
│   ├── sanity.ts                     # Sanity client configuration
│   └── fonts.ts                      # Font configuration
├── sanity/
│   ├── schemas/                      # Sanity schema definitions
│   │   ├── service.ts                # Service content type
│   │   ├── testimonial.ts            # Testimonial content type
│   │   └── index.ts                  # Schema exports
│   └── lib/
│       └── queries.ts                # GROQ queries
└── public/                           # Static assets (fonts, images)
```

## Data Fetching Strategy

| Page | Pattern | Rationale |
|------|---------|-----------|
| Homepage | SSG | Static content, services/testimonials from Sanity at build time |
| Service listing | SSG | Pre-generated, fetches from Sanity at build time |
| Service detail | SSG | Pre-generated with `generateStaticParams` |
| Static pages | SSG | Hardcoded content |
| Contact form | SSG + Client Component | Page is SSG, form component handles state client-side |

**Content Updates**: When Sanity content changes, trigger a Cloudflare Pages rebuild (can be automated via Sanity webhook → Cloudflare deploy hook).

## Migration Phases

### Phase 1: Project Setup
1. Initialize Next.js 14+ with App Router
2. Install dependencies:
   - `@sanity/client` - Sanity API client
   - `next-sanity` - Next.js integration helpers
   - Radix UI, react-hook-form, lucide-react (from current project)
3. Copy Tailwind config and shadcn components
4. Copy static assets (fonts, images)
5. Delete `server/` directory (not needed)

### Phase 2: Sanity Setup
1. Create Sanity project via CLI: `npx sanity@latest init`
2. Define content schemas locally in `sanity/schemas/`
3. Deploy schemas to Sanity: `npx sanity deploy`
4. Use Sanity-hosted Studio at `yourproject.sanity.studio` (free tier)
5. Import existing content from `client/src/data/services.ts` via CLI or manually
6. Configure Sanity client in `lib/sanity.ts`
7. Write GROQ queries for fetching content

### Phase 3: Core Pages Migration
1. Create root layout with RTL support and font configuration
2. Copy UI components from `client/src/components/ui/`
3. Migrate layout components (Header as Client, Footer as Server)
4. Migrate homepage with Sanity data fetching
5. Migrate static pages (Privacy, Terms, Accessibility)
6. Replace wouter with Next.js navigation (`next/link`, `usePathname`)

### Phase 4: Service Pages
1. Create service listing page with data from Sanity
2. Create dynamic service pages (`[slug]/page.tsx`)
3. Implement `generateStaticParams` for SSG
4. Add `generateMetadata` for dynamic SEO

### Phase 5: Cloudflare Pages Deployment
1. Configure `next.config.js` for Cloudflare Pages compatibility
2. Add `@cloudflare/next-on-pages` adapter
3. Configure environment variables in Cloudflare dashboard
4. (Optional) Set up Sanity webhook → Cloudflare deploy hook for auto-rebuild
5. Test build and deployment

## Key Component Changes

**Server Components (default):**
- Hero, Services, HowItWorks, WhyUs, About, Testimonials, Footer

**Client Components (add 'use client'):**
- Header (scroll state, mobile menu)
- Contact (form handling)
- Components using useInView, useState, useEffect

## Sanity Schema Examples

```typescript
// sanity/schemas/service.ts
export const service = {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'description', type: 'text', title: 'Short Description' },
    { name: 'icon', type: 'string', title: 'Icon Name' },
    { name: 'content', type: 'array', of: [{ type: 'block' }], title: 'Content' },
    { name: 'metaDescription', type: 'text', title: 'Meta Description' },
    { name: 'keywords', type: 'array', of: [{ type: 'string' }], title: 'Keywords' },
  ],
};
```

```typescript
// lib/sanity.ts
import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Use CDN for read operations
});
```

```typescript
// sanity/lib/queries.ts
export const servicesQuery = `*[_type == "service"] | order(order asc) {
  _id, title, "slug": slug.current, description, icon
}`;

export const serviceBySlugQuery = `*[_type == "service" && slug.current == $slug][0] {
  _id, title, "slug": slug.current, description, icon, content, metaDescription, keywords
}`;
```

## Verification Plan
1. Run `npm run build` to verify SSG works
2. Test all pages render correctly with RTL
3. Test contact form submission (external webhook)
4. Run Lighthouse audit - compare with current site
5. Deploy to Cloudflare Pages preview
6. Verify SEO metadata on all pages

## Cloudflare Pages Configuration

```javascript
// next.config.js
module.exports = {
  images: {
    loader: 'custom',
    loaderFile: './lib/image-loader.ts', // For Cloudflare compatibility
  },
};
```

**Environment Variables (Cloudflare Dashboard):**
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `SANITY_API_TOKEN` (only if needed for private datasets)

## Critical Files to Create
- `app/layout.tsx` - Root layout with RTL, fonts, metadata
- `app/page.tsx` - Homepage with Sanity data fetching
- `app/services/[slug]/page.tsx` - Dynamic service pages
- `lib/sanity.ts` - Sanity client configuration
- `lib/fonts.ts` - Next.js font configuration (using `next/font`)
- `sanity/schemas/service.ts` - Service schema
- `sanity/schemas/testimonial.ts` - Testimonial schema
- `sanity/lib/queries.ts` - GROQ queries

## Sanity CLI Commands
```bash
# Install CLI globally (one-time)
npm install -g @sanity/cli

# Initialize Sanity project in your repo
npx sanity@latest init --env

# Deploy schemas to Sanity cloud
npx sanity deploy

# Export content (backup)
npx sanity dataset export production ./backup.tar.gz

# Import content
npx sanity dataset import ./data.ndjson production
```

## Lighthouse Optimizations Preserved
| Current | Next.js Equivalent |
|---------|-------------------|
| Font preload via `<link>` | `next/font` with `preload: true` (better) |
| Critical CSS via Vite plugin | Built-in with App Router |
| Lazy-loaded routes | Automatic code splitting |
| Hero image preload | `priority` prop on `next/image` |
| Custom code splitting | Automatic + can use `dynamic()` |

## Files to Delete
- `server/` - Entire directory (backend not used)
- `shared/` - Database schemas (moving to Sanity)
- `drizzle.config.ts` - No longer needed
- `vite.config.ts` - Replaced by Next.js
- `vite-plugin-inline-critical.ts` - Next.js handles this
