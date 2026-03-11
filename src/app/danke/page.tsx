import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Section from '@/components/Section';
import AnimateIn from '@/components/AnimateIn';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vielen Dank!',
};

export default function DankePage() {
  return (
    <Section background="warm">
      <Container>
        <AnimateIn>
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-abz-red/10">
              <CheckCircle className="h-12 w-12 text-abz-red" />
            </div>

            <h1 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
              Vielen Dank für Ihre Anfrage!
            </h1>

            <p className="mt-4 text-lg text-body-text">
              Wir haben Ihre Nachricht erhalten und melden uns schnellstmöglich
              bei Ihnen — in der Regel innerhalb von 24 Stunden.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-abz-red px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-abz-red/25 transition-all hover:bg-abz-red-dark"
              >
                Zurück zur Startseite
              </Link>
              <Link
                href="/produkte"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-charcoal/20 px-7 py-3.5 text-base font-semibold text-charcoal transition-all hover:border-charcoal/40 hover:bg-white"
              >
                Unsere Produkte
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </AnimateIn>
      </Container>
    </Section>
  );
}
