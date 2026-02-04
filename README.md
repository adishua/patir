# Patir - Legal Services Website

A modern, RTL-optimized legal services website built with Next.js 14+ App Router and Sanity CMS.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **CMS**: Sanity (headless CMS)
- **Styling**: Tailwind CSS + shadcn/ui
- **Deployment**: Cloudflare Pages (Static Export)
- **Language**: TypeScript
- **Font**: Assistant (Hebrew + Latin)

## Getting Started

### Prerequisites

- Node.js 20.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/patir.git
cd patir
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your configuration:
- `NEXT_PUBLIC_WEBHOOK_URL`: n8n webhook URL for contact form submissions
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: Your Sanity project ID
- `SANITY_API_TOKEN`: Your Sanity API token (optional for public datasets)

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This creates a static export in the `out/` directory, ready for deployment to Cloudflare Pages.

## Sanity CMS Setup

1. Create a Sanity project:
```bash
npm install -g @sanity/cli
npx sanity@latest init
```

2. The schemas are already defined in `sanity/schemas/`. Deploy them:
```bash
npx sanity deploy
```

3. Access your Sanity Studio at `yourproject.sanity.studio`

4. Import initial content from `data/services.ts` and `data/testimonials.ts`

## Project Structure

```
patir/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout (RTL, fonts, metadata)
│   ├── page.tsx                 # Homepage
│   ├── services/                # Services pages
│   │   ├── page.tsx            # Services listing
│   │   └── [slug]/page.tsx     # Dynamic service pages
│   ├── privacy/page.tsx         # Privacy policy
│   ├── terms/page.tsx           # Terms of service
│   └── accessibility/page.tsx   # Accessibility statement
├── components/
│   ├── layout/                  # Header, Footer
│   ├── sections/                # Page sections (Hero, Services, etc.)
│   └── ui/                      # shadcn/ui components
├── lib/
│   ├── utils.ts                 # Utility functions
│   ├── sanity.ts                # Sanity client
│   └── fonts.ts                 # Font configuration
├── sanity/
│   ├── schemas/                 # Sanity content schemas
│   └── lib/queries.ts           # GROQ queries
├── data/                        # Static data (fallback)
└── public/                      # Static assets
```

## Deployment

### Cloudflare Pages

1. Connect your Git repository to Cloudflare Pages

2. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`

3. Add environment variables in Cloudflare dashboard:
   - `NEXT_PUBLIC_WEBHOOK_URL`
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `SANITY_API_TOKEN` (if using private dataset)

4. Deploy!

### Automatic Rebuilds

To trigger rebuilds when Sanity content changes:

1. Get your Cloudflare Pages deploy hook URL
2. In Sanity dashboard, add a webhook pointing to your deploy hook
3. Content updates will now trigger automatic rebuilds

## RTL Support

This website is fully RTL (Right-to-Left) optimized for Hebrew:

- `dir="rtl"` set in root layout
- RTL-aware Tailwind utilities
- Lucide icons automatically flip in RTL mode
- Custom fonts with Hebrew subsetting

## Performance Optimizations

- Static Site Generation (SSG) for all pages
- Optimized fonts with subset loading
- Critical CSS inlined
- Image optimization
- Minimal JavaScript bundle

## Contact

For questions or support, contact:
- **Email**: info@patir.net
- **Phone**: 054-7337115

## License

MIT License - see LICENSE file for details
