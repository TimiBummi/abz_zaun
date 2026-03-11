# Task: Apply Homepage Redesign to All Other Pages

## Context

We just redesigned the homepage of ABZ Zaunsysteme (a German fencing company in `/home/tim/web_design/abz_zaun`). The other pages still use the old design language. Apply the same warm, approachable design to every other page.

## Design System (MUST follow)

### Colors — use these Tailwind classes:
- `text-charcoal` / `bg-charcoal` — headings, dark elements (#2d2d2d)
- `text-body-text` — body copy (#4a4540, softer than charcoal)
- `text-warm-brown` / `bg-warm-brown` — secondary text, subtle accents (#7a6e5d)
- `text-abz-red` / `bg-abz-red` — CTAs, links, highlights (#c8102e)
- `bg-warm-white` — main background (#faf7f2)
- `bg-warm-gray` — section alternate / stone background (#f0ebe3)
- `bg-warm-gray-dark` — borders, subtle fills (#e3ddd3)

### Colors to STOP using:
- `text-sage` / `bg-sage` — replace with `text-abz-red` or `text-warm-brown` depending on context
- `text-charcoal/60` or `text-charcoal/50` — replace with `text-body-text` or `text-warm-brown`
- Any raw gray colors — use the warm variants instead

### Typography:
- Headings: `font-heading` (DM Sans)
- Body: default font (Inter)
- Body text color: `text-body-text` (not `text-charcoal/60`)

### Component patterns:
- Cards: `rounded-2xl border border-warm-gray-dark/50 bg-white` with `hover:-translate-y-1 hover:shadow-lg`
- Badges/tags: `rounded-full bg-abz-red/10 px-3 py-0.5 text-xs font-medium text-abz-red` (NOT sage)
- Primary buttons: `rounded-lg bg-abz-red px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-abz-red/20 hover:bg-abz-red-dark hover:shadow-xl`
- Outline buttons: `rounded-lg border-2 border-charcoal/20 px-7 py-3.5 text-base font-semibold text-charcoal hover:border-charcoal/40 hover:bg-charcoal/5`
- Section headers: centered `max-w-2xl mx-auto text-center` with `font-heading text-3xl font-bold text-charcoal sm:text-4xl` heading + `mt-4 text-lg text-body-text` subtitle
- Use `Section` component with `background="white"`, `"warm"`, `"stone"`, or `"charcoal"`
- Image placeholders: `bg-warm-gray` with faint text (not `bg-warm-gray-dark`)

### Animations (framer-motion):
- Add `'use client'` directive when using motion components
- Note: pages that export `metadata` cannot be client components. Either remove metadata (root layout handles it) or keep the page as server component without animations.
- Scroll reveal: `initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}`
- Stagger children: add `transition={{ delay: i * 0.1 }}` in `.map()` loops

## Pages to Update

Read each page first, then apply the design system. Keep all content/data/functionality — only change styling.

1. **`src/app/produkte/page.tsx`** — product listing page
2. **`src/app/produkte/[category]/page.tsx`** — product detail pages
3. **`src/app/kontakt/page.tsx`** — contact page with QuoteWizard
4. **`src/app/referenzen/page.tsx`** — references/portfolio page
5. **`src/app/ueber-uns/page.tsx`** — about page
6. **`src/app/faq/page.tsx`** — FAQ page
7. **`src/app/montage/page.tsx`** — montage & service page
8. **`src/app/danke/page.tsx`** — thank you page
9. **`src/app/impressum/page.tsx`** — legal imprint
10. **`src/app/datenschutz/page.tsx`** — privacy policy
11. **`src/app/agb/page.tsx`** — terms & conditions
12. **`src/components/QuoteWizard.tsx`** — multi-step form (update colors)
13. **`src/components/FloatingContact.tsx`** — floating action button (update colors)

## Reference files (read these to understand the design):
- `src/app/page.tsx` — the redesigned homepage (your reference for patterns)
- `src/app/globals.css` — color variables
- `src/components/Section.tsx` — section wrapper with background variants
- `src/components/Header.tsx` — already updated
- `src/components/Footer.tsx` — already updated

## Key Rules
- Do NOT change content, data, or functionality — only styling
- Replace ALL sage color references with abz-red or warm-brown equivalents
- Replace ALL `text-charcoal/60` with `text-body-text`
- Use `rounded-2xl` for cards (not `rounded-xl`)
- Use `border-warm-gray-dark/50` for card borders
- Legal pages (impressum, datenschutz, agb) can stay simple — just update colors
- Run `bun run build` after finishing to verify no errors
