# ABZ Zaunsysteme Homepage Redesign

## Goal
Redesign the homepage to feel warm, approachable, and quality-focused. Move away from generic/corporate aesthetics toward a craftsmanship-oriented family business feel.

## Brand Context
- Small German fencing company in Willich-Neersen
- Competes on quality, not price
- 20+ years experience, 1000+ projects
- Logo: red (#c8102e) and charcoal (#2d2d2d)

## Color Palette

| Role | Color | Note |
|------|-------|------|
| Primary accent | `#c8102e` | ABZ red — CTAs, links, highlights |
| Primary hover | `#a30d24` | Darker red for hover states |
| Text/dark | `#2d2d2d` | Charcoal — headings, logo |
| Background | `#faf7f2` | Warm cream — main bg |
| Section alt | `#f0ebe3` | Warm stone — alternating sections |
| Secondary accent | `#7a6e5d` | Warm brown — subtle accents, borders |
| Body text | `#4a4540` | Warm dark — softer than pure charcoal |

## Typography
- Headings: DM Sans (bold, semibold)
- Body: Inter with warm text colors

## Homepage Sections

### 1. Hero Section
Split layout: content left (60%), background image right (40%) with angled clip-path.
- ABZ logo top-left
- Headline: "Qualitaet, die man sieht" or similar
- Subtitle about craftsmanship and local service
- Primary CTA button (red)
- Contact info footer (website, phone, address) with icons
- Framer Motion animations for staggered reveal

### 2. Trust Bar
Three-column grid with icons:
- 20+ Jahre Erfahrung
- 1000+ Projekte
- Kostenlose Beratung
Warm background, subtle styling.

### 3. Product Categories (Bento Grid)
Asymmetric card grid:
- 1 large featured card spanning 2 columns (Doppelstabmattenzaun)
- Remaining 7 products in smaller cards
- Each card: icon, title, short description
- Warm soft borders, rounded corners, subtle hover lift

### 4. Testimonials (Asymmetric Grid)
Grid layout inspired by 21st.dev testimonials component:
- 1 large featured testimonial spanning 2 rows on left
- 2-3 smaller testimonials on right
- Star ratings, customer name, location
- Card-based with warm backgrounds

### 5. CTA Section
Centered layout with warm gradient background:
- Headline: "Lassen Sie sich kostenlos beraten"
- Two buttons: contact form + phone call
- Warm tones, not generic purple/blue

## Tech Constraints
- Next.js 16 with App Router
- Tailwind CSS 4
- Lucide React icons
- Sanity CMS integration (existing)
- Framer Motion for animations (new dependency)
- No shadcn/ui — custom components only

## Files to Modify
- `src/app/globals.css` — update CSS variables for new color palette
- `src/app/page.tsx` — complete homepage rewrite
- `src/components/Header.tsx` — may need subtle styling updates
- `src/components/Footer.tsx` — may need color alignment
- `src/components/Section.tsx` — update background variants
