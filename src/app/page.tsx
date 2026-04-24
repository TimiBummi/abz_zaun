'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container';
import Section from '@/components/Section';
import CtaBanner from '@/components/CtaBanner';
import JsonLd from '@/components/JsonLd';
import HeroSlider from '@/components/HeroSlider';
import { motion } from 'framer-motion';
import {
  Award,
  CheckCircle,
  ArrowRight,
  Star,
  MapPin,
  Quote,
  HeadphonesIcon,
  ShoppingBag,
  Truck,
  Globe,
  Package,
  Warehouse,
  Wrench,
  PlayCircle,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Placeholder data (will be replaced by Sanity queries)             */
/* ------------------------------------------------------------------ */

const productCategories = [
  {
    name: 'Doppelstabmattenzaun',
    slug: 'doppelstabmattenzaun',
    description: 'Robust, langlebig und vielseitig — der Klassiker für Haus und Gewerbe.',
    image: '/images/produkte/doppelstabmattenzaun/doppelstabmattenzaun-wohnanlage.jpg',
  },
  {
    name: 'Schiebetore',
    slug: 'schiebetore',
    description: 'Platzsparende Torlösungen mit optionalem elektrischem Antrieb.',
    image: '/images/produkte/schiebetore/schiebetor-anthrazit-lamellen-wohnhaus.jpg',
  },
  {
    name: 'Drehflügeltore',
    slug: 'drehfluegeltore',
    description: 'Elegante Einfahrtstore für jede Grundstücksbreite.',
    image: '/images/produkte/drehfluegeltore/drehfluegeltor-doppel-anthrazit-lamellen-wohnhaus.jpg',
  },
  {
    name: 'Sichtschutz',
    slug: 'sichtschutz',
    description: 'Privatsphäre und Design vereint — in vielen Varianten erhältlich.',
    image: '/images/produkte/sichtschutz/sichtschutz-delta-anthrazit-garten.jpg',
  },
  {
    name: 'Gabionen',
    slug: 'gabionen',
    description: 'Natürliche Steinelemente als Zaun, Mauer oder Gestaltungselement.',
    image: '/images/produkte/gabionen/gabionen-anthrazit-mit-tor.jpg',
  },
  {
    name: 'Maschendrahtzaun',
    slug: 'maschendrahtzaun',
    description: 'Die wirtschaftliche Lösung für Grundstückseinfriedungen.',
    image: '/images/produkte/maschendrahtzaun/maschendrahtzaun-anlage.jpg',
  },
  {
    name: 'Zierzaun',
    slug: 'zierzaun',
    description: 'Dekorative Zäune mit individuellem Charakter für Ihren Garten.',
    image: '/images/produkte/zierzaun/zierzaun-anthrazit-einfahrt-wohnhaus.jpg',
  },
  {
    name: 'Torantriebe',
    slug: 'torantriebe',
    description: 'Komfort per Knopfdruck — automatische Antriebe für alle Torarten.',
    image: null,
  },
  {
    name: 'Zaunleuchten Kappa',
    slug: 'zaunbeleuchtung',
    description: 'Elegante Solarleuchten für Zaunpfosten — stimmungsvoller Lichtakzent für Ihr Grundstück.',
    image: '/images/produkte/zaunbeleuchtung/zaunbeleuchtung-solar-alle-farben.jpg',
  },
  {
    name: 'Briefkastenanlagen',
    slug: 'briefkastenanlagen',
    description: 'Briefkästen und Multifunktionsboxen — passgenau für die Integration in Ihre Zaunanlage.',
    image: '/images/produkte/briefkastenanlagen/briefkasten-zaunanlage.jpg',
  },
];

const references = [
  {
    title: 'Doppelstabmattenzaun mit Schiebetor',
    location: 'Willich',
    category: 'Privat',
  },
  {
    title: 'Gabionenwand als Sichtschutz',
    location: 'Krefeld',
    category: 'Privat',
  },
  {
    title: 'Industriezaun mit Drehflügeltor',
    location: 'Mönchengladbach',
    category: 'Gewerbe',
  },
];

const testimonials = [
  {
    quote:
      'Von der Beratung bis zur Montage war alles perfekt. Unser neuer Doppelstabmattenzaun sieht super aus und wurde pünktlich fertig.',
    name: 'Familie Schneider',
    location: 'Willich',
    rating: 5,
  },
  {
    quote:
      'Sehr kompetente Beratung und faire Preise. Das Schiebetor funktioniert einwandfrei. Würde ABZ jederzeit weiterempfehlen!',
    name: 'Thomas M.',
    location: 'Krefeld',
    rating: 5,
  },
  {
    quote:
      'Wir sind begeistert von unserem neuen Sichtschutz. Das Team hat sauber und schnell gearbeitet. Top Service!',
    name: 'Andrea & Klaus B.',
    location: 'Tönisvorst',
    rating: 5,
  },
];

/* ------------------------------------------------------------------ */
/*  Schema data                                                        */
/* ------------------------------------------------------------------ */

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ABZ-Zaunsysteme GmbH',
  url: 'https://www.abz-zaun.de',
};

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      {/* ============================================================ */}
      {/* 1. HERO SECTION                                              */}
      {/* ============================================================ */}
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
              <span className="text-2xl font-bold italic text-abz-red font-heading">ABZ<span className="relative -top-[3px] text-base">-</span></span>
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

          {/* Trust signals footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-xs text-warm-brown"
          >
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-abz-red" />
              Familienunternehmen
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-abz-red" />
              Niederrhein & Umgebung
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-abz-red" />
              Auch online verfügbar
            </span>
          </motion.div>
        </div>

        {/* Right Side: Image Slider with angled clip */}
        <motion.div
          className="min-h-[300px] w-full bg-warm-gray md:min-h-full md:w-2/5"
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.2, ease: 'circOut' }}
        >
          <HeroSlider />
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* 2. TRUST BAR                                                 */}
      {/* ============================================================ */}
      <section className="border-y border-warm-gray-dark/50 bg-white py-10">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Award, label: '20+ Jahre', text: 'Erfahrung im Zaunbau' },
              { icon: Warehouse, label: 'Lager', text: 'Großes Warensortiment sofort verfügbar' },
              { icon: Package, label: 'Vertrieb & Montage', text: 'Kauf, Lieferung oder Abholung — auch ohne Montage' },
              { icon: Wrench, label: 'Wartungsverträge', text: 'Service für elektrische Toranlagen' },
              { icon: MapPin, label: 'Musterausstellung', text: 'Vor Ort in Willich-Neersen' },
              { icon: HeadphonesIcon, label: 'Kostenlose Beratung', text: 'Persönlich & unverbindlich' },
            ].map(({ icon: Icon, label, text }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-abz-red/10 text-abz-red">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading text-base font-bold text-charcoal">{label}</p>
                  <p className="text-sm text-body-text">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 3. PRODUCT CATEGORIES — BENTO GRID                           */}
      {/* ============================================================ */}
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
                  {/* Product image */}
                  {product.image ? (
                    <div className={`relative mb-4 overflow-hidden rounded-xl ${i === 0 ? 'h-48 sm:h-64' : 'h-28'}`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes={i === 0 ? '(max-width: 640px) 100vw, 50vw' : '(max-width: 640px) 100vw, 25vw'}
                      />
                    </div>
                  ) : (
                    <div className={`mb-4 flex items-center justify-center rounded-xl bg-warm-gray ${i === 0 ? 'h-48 sm:h-64' : 'h-28'}`}>
                      <span className={`font-bold text-charcoal/8 font-heading ${i === 0 ? 'text-5xl' : 'text-2xl'}`}>
                        ABZ-
                      </span>
                    </div>
                  )}
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

          <div className="mt-10 text-center">
            <Link
              href="/produkte"
              className="inline-flex items-center gap-2 font-heading text-base font-semibold text-abz-red transition-colors hover:text-abz-red-dark"
            >
              Alle Produkte ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 3b. ONLINE SHOP BRIDGE                                       */}
      {/* ============================================================ */}
      <section className="border-y border-warm-gray-dark/50 bg-white py-14">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-10 md:flex-row md:gap-16"
          >
            <div className="flex-1">
              <p className="mb-2 text-xs font-medium uppercase tracking-widest text-warm-brown">
                Unser Online-Shop
              </p>
              <h2 className="font-heading text-2xl font-bold text-charcoal sm:text-3xl">
                Auch bequem online bestellen
              </h2>
              <p className="mt-3 text-body-text">
                Alle Produkte auch bequem von zu Hause konfigurieren und bestellen —
                mit derselben Qualität, die Sie von uns vor Ort kennen.
              </p>
              <a
                href="https://zaunhandel.online"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-abz-red transition-colors hover:text-abz-red-dark"
              >
                Zum Shop
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-6 sm:gap-x-14">
              {[
                { icon: Globe, text: 'Europaweiter Versand' },
                { icon: Package, text: 'Große Auswahl' },
                { icon: Truck, text: 'Schnelle Lieferung' },
                { icon: ShoppingBag, text: 'Einfach bestellen' },
              ].map(({ icon: Icon, text }, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-warm-gray text-warm-brown">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-charcoal">{text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ============================================================ */}
      {/* 4. CTA BANNER                                                */}
      {/* ============================================================ */}
      <CtaBanner
        heading="Lassen Sie sich kostenlos beraten"
        subtext="Wir helfen Ihnen, die perfekte Zaunlösung zu finden — persönlich und unverbindlich."
        buttonLabel="Angebot anfordern"
        buttonHref="/kontakt"
        secondaryButtonLabel="Anrufen"
        secondaryButtonHref="tel:+4921567745050"
      />

      {/* ============================================================ */}
      {/* 5. VIDEO SECTION — BAUVORHABEN                               */}
      {/* ============================================================ */}
      <Section background="warm">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-3xl font-bold text-charcoal sm:text-4xl"
            >
              Einblicke in unsere Projekte
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-body-text"
            >
              Sehen Sie, wie wir arbeiten — kurze Clips direkt von unseren Baustellen.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Doppelstabmattenzaun — Wohnanlage Willich' },
              { title: 'Schiebetor mit Automatikantrieb' },
              { title: 'Gabionenwand als Sichtschutz' },
            ].map(({ title }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="overflow-hidden rounded-2xl border border-warm-gray-dark/50 bg-white"
              >
                {/* Placeholder video area */}
                <div className="flex h-48 flex-col items-center justify-center gap-3 bg-charcoal/5">
                  <PlayCircle className="h-12 w-12 text-charcoal/20" />
                  <span className="rounded-full bg-warm-brown/15 px-3 py-1 text-xs font-medium text-warm-brown">
                    Video folgt
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-heading text-sm font-semibold text-charcoal">{title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 6. REFERENCE PREVIEW                                         */}
      {/* ============================================================ */}
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

      {/* ============================================================ */}
      {/* 6. TESTIMONIALS — ASYMMETRIC GRID                            */}
      {/* ============================================================ */}
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
                className="flex flex-col rounded-2xl border border-warm-gray-dark/50 bg-white p-6 sm:p-8"
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
                <p className="flex-1 text-base leading-relaxed text-body-text">
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

    </>
  );
}
