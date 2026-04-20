import Link from 'next/link';
import Container from '@/components/Container';
import Section from '@/components/Section';
import AnimateIn from '@/components/AnimateIn';
import MontageTabs from '@/components/MontageTabs';
import { ArrowRight, FileDown } from 'lucide-react';

export const metadata = {
  title: 'Montage & Service',
};

export default function MontagePage() {
  return (
    <>
      {/* ============================================================ */}
      {/* 1. PAGE HEADER                                               */}
      {/* ============================================================ */}
      <Section background="warm">
        <Container>
          <AnimateIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl font-bold text-charcoal sm:text-5xl">
                Montage &amp; Service
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-body-text sm:text-xl">
                Von der Beratung bis zur fertigen Montage — alles aus einer Hand.
              </p>
            </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 2. TABS (Ablauf / Vorbereitung / Wartungsverträge)           */}
      {/* ============================================================ */}
      <MontageTabs />

      {/* ============================================================ */}
      {/* 3. BEDIENUNGSANLEITUNG — always visible                      */}
      {/* ============================================================ */}
      <Section background="warm">
        <Container>
          <AnimateIn>
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col sm:flex-row items-center gap-6 rounded-2xl border border-warm-gray-dark/50 bg-warm-white p-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-abz-red/10 text-abz-red">
                  <FileDown className="h-8 w-8" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="font-heading text-xl font-bold text-charcoal">
                    Bedienungsanleitung
                  </h2>
                  <p className="mt-1 text-body-text">
                    Anleitungen für Ihre ABZ-Produkte als PDF zum Herunterladen.
                  </p>
                </div>
                <a
                  href="/bedienungsanleitung.pdf"
                  download
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-abz-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-abz-red-dark"
                >
                  <FileDown className="h-4 w-4" />
                  PDF herunterladen
                </a>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 4. CTA — always visible                                      */}
      {/* ============================================================ */}
      <Section background="stone">
        <Container>
          <AnimateIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                Montage anfragen
              </h2>
              <p className="mt-4 text-lg text-body-text">
                Kontaktieren Sie uns für ein unverbindliches Angebot — wir beraten
                Sie gerne.
              </p>
              <div className="mt-8">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-abz-red px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-abz-red-dark hover:shadow-xl"
                >
                  Jetzt Montage anfragen
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
