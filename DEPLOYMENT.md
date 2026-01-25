# Deployment Guide

## Architecture

This is a static React application with no backend server or database.

```
┌─────────────────┐     ┌──────────────────┐
│  Netlify/Vercel │     │  Your Server     │
│  (patir.net)    │────▶│  (api.patir.net) │
│                 │     │                  │
│  Static React   │     │  n8n Webhook     │
└─────────────────┘     └──────────────────┘
```

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure webhook URL:**
   ```bash
   cp .env.example .env
   # Edit .env and set VITE_WEBHOOK_URL to your n8n webhook endpoint
   ```

3. **Run dev server:**
   ```bash
   npm run dev
   ```

## Production Build

```bash
npm run build
```

Output: `dist/` folder with static files ready to deploy.

## Deploy to Netlify/Vercel

### Netlify

1. Connect your GitHub repo
2. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Environment variables:
   - `VITE_WEBHOOK_URL`: Your n8n webhook URL (e.g., `https://api.patir.net/webhook/contact`)
4. Domain settings:
   - Primary domain: `patir.net`

### Vercel

1. Import GitHub repo
2. Framework preset: Vite
3. Build settings:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Environment variables:
   - `VITE_WEBHOOK_URL`: Your n8n webhook URL
5. Domains:
   - Add `patir.net` and `www.patir.net`

## DNS Configuration

Point your domain to the hosting provider:

```
Type: A      Name: @       Value: <Netlify/Vercel IP>
Type: CNAME  Name: www     Value: <your-site>.netlify.app
Type: A      Name: api     Value: <your-server-ip>
```

## Data Updates

Services and testimonials are stored in:
- `client/src/data/services.ts`
- `client/src/data/testimonials.ts`

To update:
1. Edit the TypeScript files directly, OR
2. Update CSV files and regenerate (manual process)
3. Commit and push
4. Auto-deploys on Netlify/Vercel

## n8n Webhook Setup

Your n8n workflow should:
1. Listen on a webhook endpoint (e.g., `/webhook/contact`)
2. Receive POST requests with:
   ```json
   {
     "name": "string",
     "phone": "string",
     "email": "string (optional)",
     "serviceId": number,
     "message": "string"
   }
   ```
3. Process (email notification, CRM integration, etc.)
4. Return success response

## Legacy Files (Can be deleted)

The following directories are no longer used:
- `server/` - Old Express server
- `shared/` - Old shared schemas
- `script/` - Old build scripts
- `services.csv` / `testimonials.csv` - Replaced by TypeScript data files

Keep for reference or delete to clean up the repository.
