# Sanity v3 Studio Configuration

## Overview
Sanity v3 studio configuration has been set up for ABZ-Zaunsysteme GmbH's Next.js 15 + Static Export website.

## Files Created/Updated

### 1. sanity.config.ts (NEW)
- **Location**: `/home/tim/web_design/abz_zaun/sanity.config.ts`
- **Purpose**: Central Sanity studio configuration file
- **Includes**:
  - Sanity project ID and dataset from environment variables
  - Structure Tool plugin for content organization
  - Vision Tool plugin for GROQ query testing
  - All schema types from `./sanity/schemas`

### 2. Package Dependencies (UPDATED)
- **Added**: `@sanity/vision@5.18.0` to devDependencies
- **Existing**: `@sanity/client`, `next-sanity` already present in package.json

### 3. Environment Configuration (EXISTING)
- **Location**: `/home/tim/web_design/abz_zaun/.env.local`
- **Required Setup**: Client must fill in:
  - `NEXT_PUBLIC_SANITY_PROJECT_ID` — obtained from https://sanity.io/manage
  - `NEXT_PUBLIC_SANITY_DATASET` — defaults to 'production' (already set)

## How to Set Up Sanity Studio Access

### Step 1: Create/Access Sanity Project
1. Visit https://sanity.io/manage
2. Create a new project (or use existing)
3. Copy the **Project ID** from project settings
4. Paste into `.env.local`:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id-here
   ```

### Step 2: Access the Studio
Since the website uses **static export** (`output: 'export'` in next.config.ts), the embedded `/studio` route **cannot work in production**. Instead:

**For Client (Production):**
- Use Sanity Manage: https://sanity.io/manage
- Or use Sanity Studio: https://[project-id].sanity.studio (provided by Sanity)

**For Development (Local Testing):**
- If you want to test with an embedded studio route locally (optional):
  - Remove `output: 'export'` from next.config.ts temporarily
  - Create `src/app/studio/[[...tool]]/page.tsx` with:
    ```tsx
    'use client'
    import { NextStudio } from 'next-sanity/studio'
    import config from '../../../sanity.config'
    
    export default function StudioPage() {
      return <NextStudio config={config} />
    }
    ```
  - Access at http://localhost:3000/studio
  - Remember to restore `output: 'export'` before deploying

## Schemas Available
All schemas are defined in `/home/tim/web_design/abz_zaun/sanity/schemas/`:
- `productCategory.ts` — Product categories
- `product.ts` — Individual products
- `reference.ts` — Customer references/case studies
- `faq.ts` — FAQ content
- `testimonial.ts` — Testimonials
- `siteSettings.ts` — Global site settings (company info, opening hours, partner logos, etc.)
- `page.ts` — Static pages

## Important Constraints

### Static Export Limitation
- The Next.js config uses `output: 'export'`, which generates a fully static site
- Dynamic API routes (like `/api/...`) won't work in production
- The embedded Sanity studio route (`/studio`) won't be included in the static export
- **Solution**: Use Sanity Manage or the standalone Sanity Studio (hosted by Sanity)

### Webhook Rebuilds (GitHub Actions)
- Sanity webhook triggers GitHub Actions to rebuild the site when content changes
- Configure in GitHub Actions workflow (see `.github/workflows/deploy.yml`)
- Webhook URL: `https://github.com/<owner>/<repo>/actions/workflows/deploy.yml`

### Environment Variables
- All Sanity environment variables must be `NEXT_PUBLIC_*` prefix (client-side)
- Never expose sensitive tokens in client-side code

## Next Steps for Client

1. **Sign up for Sanity** (if not already done):
   - Go to https://sanity.io
   - Create a free account or use existing

2. **Create/Connect Project**:
   - Create a new project in https://sanity.io/manage
   - Get the Project ID and provide to development team
   - Set up token for API access (if needed for deployment webhooks)

3. **Access Studio**:
   - Studio URL will be: https://[project-id].sanity.studio
   - Share this link with content editors
   - Users can edit content visually without touching code

4. **Configure Webhook** (for automated rebuilds):
   - In Sanity project settings, add webhook
   - Point to GitHub Actions deployment workflow
   - Content changes will auto-trigger site rebuilds

## References
- Sanity Docs: https://www.sanity.io/docs
- Sanity v3 API: https://www.sanity.io/docs/sanity-cli
- next-sanity: https://github.com/sanity-io/next-sanity
