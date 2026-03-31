import Link from 'next/link';
import Container from '@/components/Container';
import Section from '@/components/Section';
import AnimateIn from '@/components/AnimateIn';
import JsonLd from '@/components/JsonLd';
import { Shield, Award, Heart, ArrowRight, Mail, Clock, MapPin } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata = {
  title: 'Über uns - ABZ-Zaunsysteme',
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const values = [
  {
    icon: Shield,
    title: 'Qualität',
    text: 'Nur hochwertige Materialien und sorgfältige Verarbeitung',
  },
  {
    icon: Award,
    title: 'Erfahrung',
    text: 'Über 20 Jahre Fachkompetenz im Zaunbau',
  },
  {
    icon: Heart,
    title: 'Kundennähe',
    text: 'Persönliche Beratung und individuelle Lösungen',
  },
];

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://www.abz-zaun.de' },
    { '@type': 'ListItem', position: 2, name: 'Über uns', item: 'https://www.abz-zaun.de/ueber-uns' },
  ],
};

export default function UeberUnsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {/* ============================================================ */}
      {/* 1. PAGE HEADER                                               */}
      {/* ============================================================ */}
      <Section background="warm">
        <Container>
          <AnimateIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl font-bold text-charcoal sm:text-5xl">
                Über ABZ-Zaunsysteme
              </h1>
              <p className="mt-6 text-xl leading-relaxed text-body-text">
                Seit über 20 Jahren Ihr Partner für Zaunsysteme am Niederrhein
              </p>
            </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 2. COMPANY STORY                                             */}
      {/* ============================================================ */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <AnimateIn>
            <div>
              <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                Wer wir sind
              </h2>
              <p className="mt-6 text-base leading-relaxed text-body-text">
                ABZ-Zaunsysteme ist ein inhabergeführtes Unternehmen mit Sitz in
                Willich-Neersen. Seit unserer Gründung stehen wir für
                zuverlässige Qualität, faire Preise und persönliche Beratung.
                Als familienorientierter Betrieb liegt uns die Zufriedenheit
                unserer Kunden besonders am Herzen.
              </p>
              <p className="mt-4 text-base leading-relaxed text-body-text">
                Unser Einzugsgebiet umfasst die gesamte Niederrhein-Region —
                von Krefeld über Düsseldorf und Mönchengladbach bis Viersen und
                darüber hinaus. Ob Privatkunde, Gewerbebetrieb oder öffentliche
                Einrichtung: Wir finden die passende Zaunlösung für jeden
                Bedarf.
              </p>
              <p className="mt-4 text-base leading-relaxed text-body-text">
                Von der ersten Beratung über die Planung bis zur fachgerechten
                Montage begleiten wir Sie durch das gesamte Projekt. Dabei
                setzen wir ausschließlich auf hochwertige Materialien und
                bewährte Montagetechniken — für Ergebnisse, die langfristig
                überzeugen.
              </p>
            </div>
            </AnimateIn>

            {/* Placeholder image */}
            <AnimateIn delay={0.2}>
            <div className="flex h-80 items-center justify-center rounded-2xl bg-warm-gray lg:h-96">
              <span className="text-sm font-medium text-charcoal/20">
                Unternehmensfoto
              </span>
            </div>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 3. VALUES GRID                                               */}
      {/* ============================================================ */}
      <Section background="warm">
        <Container>
          <AnimateIn>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                Unsere Werte
              </h2>
              <p className="mt-4 text-lg text-body-text">
                Was uns antreibt und was Sie von uns erwarten können.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {values.map(({ icon: Icon, title, text }, i) => (
              <AnimateIn key={title} delay={i * 0.1}>
                <div
                  className="flex h-full flex-col items-center rounded-2xl border border-warm-gray-dark/50 bg-white p-8 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-abz-red/10 text-abz-red">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-charcoal">
                    {title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-body-text">
                    {text}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 4. PARTNERS                                                  */}
      {/* ============================================================ */}
      <Section background="white">
        <Container>
          <AnimateIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                Unsere Partner
              </h2>
              <p className="mt-4 text-lg text-body-text">
                Wir arbeiten mit führenden Herstellern zusammen, um Ihnen die
                besten Lösungen zu bieten.
              </p>
            </div>
          </AnimateIn>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {/* Ditec */}
            <AnimateIn delay={0}>
            <div className="flex flex-col items-center rounded-2xl border border-warm-gray-dark/50 bg-warm-white p-8 text-center">
              <div className="flex h-24 w-48 items-center justify-center rounded-lg bg-warm-gray-dark">
                <span className="text-sm font-medium text-charcoal/20">
                  Ditec Logo
                </span>
              </div>
              <h3 className="mt-6 font-heading text-lg font-semibold text-charcoal">
                Ditec
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body-text">
                Hochwertige Torantriebe für Schiebe- und Drehflügeltore —
                zuverlässig und langlebig.
              </p>
            </div>
            </AnimateIn>

            {/* Paulmann */}
            <AnimateIn delay={0.1}>
            <div className="flex flex-col items-center rounded-2xl border border-warm-gray-dark/50 bg-warm-white p-8 text-center">
              <div className="flex h-24 w-48 items-center justify-center rounded-lg bg-warm-gray-dark">
                <span className="text-sm font-medium text-charcoal/20">
                  Paulmann Logo
                </span>
              </div>
              <h3 className="mt-6 font-heading text-lg font-semibold text-charcoal">
                Paulmann
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body-text">
                Professionelle Garten- und Zaunbeleuchtung für Sicherheit und
                Atmosphäre.
              </p>
            </div>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 5. LOCATION / CONTACT                                        */}
      {/* ============================================================ */}
      <Section background="warm">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact details */}
            <AnimateIn>
            <div>
              <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                So finden Sie uns
              </h2>
              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-abz-red" />
                  <div>
                    <p className="font-heading font-semibold text-charcoal">
                      ABZ-Zaunsysteme GmbH
                    </p>
                    <p className="text-body-text">Virmondstrasse 137</p>
                    <p className="text-body-text">
                      47877 Willich-Neersen
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-abz-red" />
                  <a
                    href="mailto:info@abz-zaun.de"
                    className="font-medium text-charcoal transition-colors hover:text-abz-red"
                  >
                    info@abz-zaun.de
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 shrink-0 text-abz-red" />
                  <p className="text-body-text">
                    Montag – Freitag, 9:00 – 17:00 Uhr
                  </p>
                </div>
              </div>
            </div>
            </AnimateIn>

            {/* Map placeholder */}
            <div className="flex h-64 items-center justify-center rounded-2xl bg-warm-gray lg:h-auto lg:min-h-[20rem]">
              <span className="px-4 text-center text-sm font-medium text-charcoal/20">
                Karte wird nach Cookie-Zustimmung geladen
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 6. CTA                                                       */}
      {/* ============================================================ */}
      <Section background="charcoal">
        <Container>
          <AnimateIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
                Lernen Sie uns kennen
              </h2>
              <p className="mt-4 text-lg text-white/70">
                Wir freuen uns auf Ihre Anfrage — persönlich, telefonisch oder
                über unser Kontaktformular.
              </p>
              <div className="mt-8">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-abz-red px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-abz-red/25 transition-all hover:bg-abz-red-dark hover:shadow-xl"
                >
                  Kontakt aufnehmen
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </Section>
    </>
  );
}
