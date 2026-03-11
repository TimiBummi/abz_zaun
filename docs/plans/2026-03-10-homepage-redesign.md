# Homepage Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign the ABZ Zaunsysteme homepage to feel warm, approachable, and quality-focused instead of generic/corporate.

**Architecture:** Update CSS variables for a warmer color palette, then rewrite the homepage sections one by one. Add `framer-motion` for smooth animations. Keep existing data structures, Container, and Section components.

**Tech Stack:** Next.js 16, Tailwind CSS 4, Lucide React, Framer Motion (new)

---

### Task 1: Install framer-motion

**Step 1: Install the dependency**

Run: `cd /home/tim/web_design/abz_zaun && bun add framer-motion`

**Step 2: Verify installation**

Run: `grep framer-motion package.json`
Expected: `"framer-motion": "^X.X.X"` in dependencies

**Step 3: Commit**

```bash
git add package.json bun.lock
git commit -m "chore: add framer-motion for homepage animations"
```

---

### Task 2: Update color palette in globals.css

**Files:**
- Modify: `src/app/globals.css`

**Step 1: Update CSS variables**

Replace the `:root` color block in `src/app/globals.css` (lines 3-26) with:

```css
:root {
  /* ABZ Brand Colors */
  --color-charcoal: #2d2d2d;
  --color-charcoal-light: #3a3a3a;
  --color-abz-red: #c8102e;
  --color-abz-red-dark: #a30d24;
  --color-warm-brown: #7a6e5d;
  --color-warm-brown-light: #968a78;
  --color-warm-white: #faf7f2;
  --color-warm-gray: #f0ebe3;
  --color-warm-gray-dark: #e3ddd3;

  /* Body text — softer than pure charcoal */
  --color-body-text: #4a4540;

  /* Semantic */
  --color-success: #16a34a;
  --color-error: #8b1a2b;

  /* Fonts */
  --font-heading: 'DM Sans', sans-serif;
  --font-body: 'Inter', sans-serif;

  /* Base */
  --background: var(--color-warm-white);
  --foreground: var(--color-body-text);
}
```

**Step 2: Update the `@theme inline` block**

Replace the `@theme inline` block (lines 28-44) with:

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-charcoal: var(--color-charcoal);
  --color-charcoal-light: var(--color-charcoal-light);
  --color-abz-red: var(--color-abz-red);
  --color-abz-red-dark: var(--color-abz-red-dark);
  --color-warm-brown: var(--color-warm-brown);
  --color-warm-brown-light: var(--color-warm-brown-light);
  --color-warm-white: var(--color-warm-white);
  --color-warm-gray: var(--color-warm-gray);
  --color-warm-gray-dark: var(--color-warm-gray-dark);
  --color-body-text: var(--color-body-text);
  --color-success: var(--color-success);
  --color-error: var(--color-error);
  --font-heading: var(--font-heading);
  --font-body: var(--font-body);
}
```

**Step 3: Update body styles**

Change the body rule to use the new foreground:

```css
body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-body);
}
```

This should already work since `--foreground` now points to `--color-body-text`.

**Step 4: Verify the dev server still runs**

Run: `cd /home/tim/web_design/abz_zaun && bun run build 2>&1 | tail -5`
Expected: Build succeeds (warnings OK)

**Step 5: Commit**

```bash
git add src/app/globals.css
git commit -m "style: update color palette to warmer tones"
```

---

### Task 3: Update Section component with new background variant

**Files:**
- Modify: `src/components/Section.tsx`

**Step 1: Add a `stone` background variant**

Replace the entire file with:

```tsx
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'warm' | 'stone' | 'charcoal';
}

export default function Section({ children, className = '', id, background = 'white' }: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    warm: 'bg-warm-white',
    stone: 'bg-warm-gray',
    charcoal: 'bg-charcoal text-white',
  };
  return (
    <section id={id} className={`py-16 sm:py-24 ${bgClasses[background]} ${className}`}>
      {children}
    </section>
  );
}
```

**Step 2: Commit**

```bash
git add src/components/Section.tsx
git commit -m "feat: add stone background variant to Section component"
```

---

### Task 4: Rewrite the Hero Section

**Files:**
- Modify: `src/app/page.tsx` (lines 119-175)

**Step 1: Add 'use client' and framer-motion imports**

Replace the imports at the top of `src/app/page.tsx` (lines 1-13) with:

```tsx
'use client';

import Link from 'next/link';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { motion } from 'framer-motion';
import {
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  MapPin,
  Quote,
  HeadphonesIcon,
  Phone,
  Globe,
} from 'lucide-react';
```

Note: Since we're adding `'use client'`, we need to move the `metadata` export to a separate `layout.tsx` or keep it as a separate export. Actually, metadata exports are not allowed in client components. We need to handle this.

**Step 1b: Move metadata to layout or a separate file**

Remove the metadata export from `page.tsx` (lines 15-24). The root layout already has metadata defined. If specific OG tags are needed for the homepage, add them to `src/app/layout.tsx` instead.

**Step 2: Replace the Hero section (lines 125-175) with:**

```tsx
{/* 1. HERO SECTION */}
<section className="relative flex min-h-[85vh] w-full flex-col overflow-hidden bg-warm-white md:flex-row">
  {/* Left Side: Content */}
  <div className="flex w-full flex-col justify-between px-6 py-12 sm:px-10 md:w-3/5 md:px-16 lg:py-20">
    {/* Logo area */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <div className="flex items-baseline gap-1.5">
        <span className="text-2xl font-bold italic text-abz-red font-heading">ABZ</span>
        <span className="text-lg font-medium text-charcoal font-heading">Zaunsysteme</span>
      </div>
      <p className="mt-1 text-xs tracking-widest uppercase text-warm-brown">
        Qualität aus Überzeugung
      </p>
    </motion.div>

    {/* Main content */}
    <div>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="font-heading text-4xl font-bold leading-tight text-charcoal md:text-5xl lg:text-6xl"
      >
        Qualität, die{' '}
        <span className="text-abz-red">man sieht</span>
      </motion.h1>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="my-6 h-1 w-20 origin-left bg-abz-red"
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mb-8 max-w-md text-lg text-body-text"
      >
        Seit über 20 Jahren planen und montieren wir Zäune, Tore und
        Sichtschutz am Niederrhein — persönlich, zuverlässig und mit
        Liebe zum Detail.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      >
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2 rounded-lg bg-abz-red px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-abz-red/20 transition-all hover:bg-abz-red-dark hover:shadow-xl"
        >
          Kostenloses Angebot
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>

    {/* Contact info footer */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mt-12 grid grid-cols-1 gap-4 text-xs text-warm-brown sm:grid-cols-3"
    >
      <div className="flex items-center gap-2">
        <Globe className="h-4 w-4 text-abz-red" />
        <span>abz-zaun.de</span>
      </div>
      <div className="flex items-center gap-2">
        <Phone className="h-4 w-4 text-abz-red" />
        <span>+49 2156 774 50 50</span>
      </div>
      <div className="flex items-center gap-2">
        <MapPin className="h-4 w-4 text-abz-red" />
        <span>Willich-Neersen</span>
      </div>
    </motion.div>
  </div>

  {/* Right Side: Image with angled clip */}
  <motion.div
    className="min-h-[300px] w-full bg-warm-gray bg-cover bg-center md:min-h-full md:w-2/5"
    style={{
      backgroundImage: 'url(/hero-fence.jpg)',
      backgroundColor: '#e3ddd3',
    }}
    initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
    animate={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
    transition={{ duration: 1.2, ease: 'circOut' }}
  >
    {/* Placeholder — when no image exists yet, show a warm gray area */}
    <div className="flex h-full items-center justify-center">
      <span className="text-6xl font-bold text-charcoal/5 font-heading">ABZ</span>
    </div>
  </motion.div>
</section>
```

**Step 3: Verify build**

Run: `cd /home/tim/web_design/abz_zaun && bun run build 2>&1 | tail -5`

**Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: redesign hero section with split layout and animations"
```

---

### Task 5: Rewrite the Trust Bar

**Files:**
- Modify: `src/app/page.tsx` (trust bar section)

**Step 1: Replace the trust bar section with:**

```tsx
{/* 2. TRUST BAR */}
<section className="border-y border-warm-gray-dark/50 bg-white py-10">
  <Container>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {[
        { icon: Award, label: '20+ Jahre', text: 'Erfahrung im Zaunbau' },
        { icon: CheckCircle, label: '1.000+', text: 'Realisierte Projekte' },
        { icon: HeadphonesIcon, label: 'Kostenlose', text: 'Beratung vor Ort' },
      ].map(({ icon: Icon, label, text }, i) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="flex items-center justify-center gap-4 text-center sm:text-left"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-abz-red/10 text-abz-red">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="font-heading text-xl font-bold text-charcoal">{label}</p>
            <p className="text-sm text-body-text">{text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </Container>
</section>
```

**Step 2: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: redesign trust bar with warm styling and animations"
```

---

### Task 6: Rewrite the Product Categories as Bento Grid

**Files:**
- Modify: `src/app/page.tsx` (product categories section)

**Step 1: Replace the product categories section with:**

```tsx
{/* 3. PRODUCT CATEGORIES — BENTO GRID */}
<Section background="warm">
  <Container>
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl font-bold text-charcoal sm:text-4xl"
      >
        Unsere Produkte
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-4 text-lg text-body-text"
      >
        Von Doppelstabmattenzäunen bis Gabionen — wir bieten die passende
        Lösung für Ihr Grundstück.
      </motion.p>
    </div>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {productCategories.map((product, i) => (
        <motion.div
          key={product.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
          className={i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}
        >
          <Link
            href={`/produkte/${product.slug}`}
            className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-warm-gray-dark/50 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${
              i === 0 ? 'sm:p-8' : ''
            }`}
          >
            {/* Placeholder visual area */}
            <div
              className={`mb-4 flex items-center justify-center rounded-xl bg-warm-gray ${
                i === 0 ? 'h-48 sm:h-64' : 'h-28'
              }`}
            >
              <span className={`font-bold text-charcoal/8 font-heading ${
                i === 0 ? 'text-5xl' : 'text-2xl'
              }`}>
                ABZ
              </span>
            </div>
            <h3 className={`font-heading font-semibold text-charcoal ${
              i === 0 ? 'text-xl sm:text-2xl' : 'text-base'
            }`}>
              {product.name}
            </h3>
            <p className={`mt-1 flex-1 text-body-text ${
              i === 0 ? 'text-base' : 'text-sm'
            }`}>
              {product.description}
            </p>
            <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-abz-red transition-colors group-hover:text-abz-red-dark">
              Mehr erfahren
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </Container>
</Section>
```

**Step 2: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: redesign product grid as bento layout with featured card"
```

---

### Task 7: Rewrite the Testimonials as Asymmetric Grid

**Files:**
- Modify: `src/app/page.tsx` (testimonials section)

**Step 1: Replace the testimonials section with:**

```tsx
{/* 5. TESTIMONIALS — ASYMMETRIC GRID */}
<Section background="stone">
  <Container>
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl font-bold text-charcoal sm:text-4xl"
      >
        Was unsere Kunden sagen
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-4 text-lg text-body-text"
      >
        Vertrauen entsteht durch Erfahrung — lesen Sie, was andere über
        uns berichten.
      </motion.p>
    </div>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t, i) => (
        <motion.div
          key={t.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className={`flex flex-col rounded-2xl border border-warm-gray-dark/50 bg-white p-6 sm:p-8 ${
            i === 0 ? 'sm:col-span-2 lg:col-span-1 lg:row-span-2' : ''
          }`}
        >
          {/* Star rating */}
          <div className="mb-4 flex gap-0.5">
            {Array.from({ length: t.rating }).map((_, j) => (
              <Star
                key={j}
                className="h-4 w-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <Quote className="mb-3 h-6 w-6 text-abz-red/25" />
          <p className={`flex-1 leading-relaxed text-body-text ${
            i === 0 ? 'text-lg' : 'text-base'
          }`}>
            {t.quote}
          </p>
          <div className="mt-6 border-t border-warm-gray-dark/50 pt-4">
            <p className="font-heading font-semibold text-charcoal">
              {t.name}
            </p>
            <p className="flex items-center gap-1 text-sm text-warm-brown">
              <MapPin className="h-3 w-3" />
              {t.location}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </Container>
</Section>
```

**Step 2: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: redesign testimonials with asymmetric grid layout"
```

---

### Task 8: Rewrite the CTA and Final CTA Sections

**Files:**
- Modify: `src/app/page.tsx` (CTA banner + final CTA sections)

**Step 1: Replace the CTA Banner (section 4) with:**

```tsx
{/* 4. CTA BANNER */}
<section className="bg-charcoal py-16">
  <Container>
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left"
    >
      <div className="flex-1">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          Lassen Sie sich kostenlos beraten
        </h2>
        <p className="mt-3 text-lg text-warm-gray">
          Wir helfen Ihnen, die perfekte Zaunlösung zu finden — persönlich
          und unverbindlich.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-abz-red px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-abz-red/25 transition-all hover:bg-abz-red-dark hover:shadow-xl"
        >
          Angebot anfordern
          <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href="tel:+4921567745050"
          className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/20 px-7 py-3.5 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
        >
          <Phone className="h-4 w-4" />
          Anrufen
        </a>
      </div>
    </motion.div>
  </Container>
</section>
```

**Step 2: Replace the Final CTA (section 7) with:**

```tsx
{/* 7. FINAL CTA */}
<Section background="warm">
  <Container>
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto max-w-2xl text-center"
    >
      <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
        Bereit für Ihren neuen Zaun?
      </h2>
      <p className="mt-4 text-lg text-body-text">
        Kontaktieren Sie uns für eine kostenlose Beratung vor Ort — wir
        freuen uns auf Ihr Projekt.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link
          href="/kontakt"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-abz-red px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-abz-red/20 transition-all hover:bg-abz-red-dark hover:shadow-xl"
        >
          Jetzt Angebot anfordern
          <ArrowRight className="h-4 w-4" />
        </Link>
        <a
          href="tel:+4921567745050"
          className="inline-flex items-center justify-center gap-2 text-base font-semibold text-charcoal transition-colors hover:text-abz-red"
        >
          <Phone className="h-4 w-4" />
          +49 2156 774 50 50
        </a>
      </div>
    </motion.div>
  </Container>
</Section>
```

**Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: redesign CTA sections with warm charcoal styling"
```

---

### Task 9: Update References section styling

**Files:**
- Modify: `src/app/page.tsx` (references section)

**Step 1: Update the references section to match new warm design:**

```tsx
{/* 5. REFERENCE PREVIEW */}
<Section background="white">
  <Container>
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-3xl font-bold text-charcoal sm:text-4xl"
      >
        Unsere Referenzen
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="mt-4 text-lg text-body-text"
      >
        Überzeugen Sie sich selbst — eine Auswahl unserer realisierten Projekte.
      </motion.p>
    </div>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {references.map((ref, i) => (
        <motion.div
          key={ref.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="group overflow-hidden rounded-2xl border border-warm-gray-dark/50 bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
        >
          {/* Placeholder image area */}
          <div className="flex h-48 items-center justify-center bg-warm-gray">
            <span className="text-sm font-medium text-charcoal/20">
              Projektfoto
            </span>
          </div>
          <div className="p-5">
            <span className="mb-2 inline-block rounded-full bg-abz-red/10 px-3 py-0.5 text-xs font-medium text-abz-red">
              {ref.category}
            </span>
            <h3 className="font-heading text-lg font-semibold text-charcoal">
              {ref.title}
            </h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-warm-brown">
              <MapPin className="h-3.5 w-3.5" />
              {ref.location}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="mt-10 text-center">
      <Link
        href="/referenzen"
        className="inline-flex items-center gap-2 font-heading text-base font-semibold text-abz-red transition-colors hover:text-abz-red-dark"
      >
        Alle Referenzen ansehen
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </Container>
</Section>
```

**Step 2: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: update references section with warm styling"
```

---

### Task 10: Update Header and Footer colors

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Footer.tsx`

**Step 1: Update Header**

In `src/components/Header.tsx`, change line 21:
- From: `bg-white border-b border-warm-gray`
- To: `bg-warm-white/95 backdrop-blur-sm border-b border-warm-gray-dark/30`

This gives a warm tinted, slightly translucent header.

**Step 2: Update Footer**

In `src/components/Footer.tsx`, change the CTA banner background (line 30):
- From: `bg-warm-gray`
- To: `bg-warm-gray`

(This stays the same since our new `--color-warm-gray` is already warmer.)

Update the sage references badge in Footer if any exist — but checking the code, Footer doesn't use sage. No changes needed.

**Step 3: Commit**

```bash
git add src/components/Header.tsx
git commit -m "style: update header to warm translucent background"
```

---

### Task 11: Final build verification

**Step 1: Run full build**

Run: `cd /home/tim/web_design/abz_zaun && bun run build`
Expected: Build succeeds

**Step 2: Run dev server and visually verify**

Run: `cd /home/tim/web_design/abz_zaun && bun run dev`
Check: Open http://localhost:3000 and verify the homepage looks correct

**Step 3: Fix any issues found during verification**

Address any build errors, missing colors, or layout issues.

**Step 4: Final commit if any fixes were needed**

```bash
git add -A
git commit -m "fix: address homepage redesign issues from build verification"
```
