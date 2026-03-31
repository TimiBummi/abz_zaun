import type { Metadata } from 'next';
import Link from 'next/link';
import Container from '@/components/Container';
import Section from '@/components/Section';
import AnimateIn from '@/components/AnimateIn';
import QuoteWizard from '@/components/QuoteWizard';
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kontakt & Angebot anfordern',
  description: 'Fordern Sie ein kostenloses Angebot an oder kontaktieren Sie ABZ-Zaunsysteme direkt. Wir beraten Sie gerne zu Zäunen, Toren und Sichtschutz.',
  openGraph: {
    title: 'Kontakt & Angebot anfordern | ABZ-Zaunsysteme',
    description: 'Fordern Sie ein kostenloses Angebot an oder kontaktieren Sie ABZ-Zaunsysteme direkt. Wir beraten Sie gerne zu Zäunen, Toren und Sichtschutz.',
    url: 'https://abz-zaun.de/kontakt',
    siteName: 'ABZ-Zaunsysteme',
    locale: 'de_DE',
    type: 'website',
  },
};

export default function KontaktPage() {
  return (
    <>
      {/* ============================================================ */}
      {/* PAGE HEADER                                                   */}
      {/* ============================================================ */}
      <Section background="warm" className="py-12 sm:py-16">
        <Container>
          <AnimateIn>
            <h1 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
              Kontakt & Angebot
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-warm-brown">
              Fordern Sie in wenigen Schritten ein kostenloses und unverbindliches
              Angebot an — oder kontaktieren Sie uns direkt. Wir beraten Sie gerne!
            </p>
          </AnimateIn>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* MAIN CONTENT: WIZARD + SIDEBAR                               */}
      {/* ============================================================ */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Left column — Quote Wizard */}
            <AnimateIn className="lg:col-span-2">
              <QuoteWizard />
            </AnimateIn>

            {/* Right column — Contact sidebar */}
            <AnimateIn delay={0.2} className="lg:col-span-1">
            <aside>
              <div className="rounded-2xl bg-warm-gray p-6 sm:p-8">
                <h2 className="font-heading text-xl font-bold text-charcoal">
                  Direkter Kontakt
                </h2>
                <p className="mt-2 text-sm text-warm-brown">
                  Wir sind persönlich für Sie da.
                </p>

                <div className="mt-6 space-y-5">
                  {/* Phone */}
                  <a
                    href="tel:+4921567745050"
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-abz-red/10 text-abz-red">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-warm-brown">Telefon</p>
                      <p className="font-heading font-semibold text-charcoal group-hover:text-abz-red transition-colors">
                        +49 2156 774 50 50
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@abz-zaun.de"
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-abz-red/10 text-abz-red">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-warm-brown">E-Mail</p>
                      <p className="font-heading font-semibold text-charcoal group-hover:text-abz-red transition-colors">
                        info@abz-zaun.de
                      </p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/4921567745050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-abz-red/10 text-abz-red">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-warm-brown">WhatsApp</p>
                      <p className="font-heading font-semibold text-charcoal group-hover:text-abz-red transition-colors">
                        Nachricht senden
                      </p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-abz-red/10 text-abz-red">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-warm-brown">Adresse</p>
                      <p className="font-heading font-semibold text-charcoal">
                        ABZ-Zaunsysteme GmbH
                      </p>
                      <p className="text-sm text-body-text">
                        Virmondstrasse 137
                        <br />
                        47877 Willich-Neersen
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-abz-red/10 text-abz-red">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-warm-brown">
                        Öffnungszeiten
                      </p>
                      <p className="font-heading font-semibold text-charcoal">
                        MO - FR: 9:00 - 17:00
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 flex h-48 items-center justify-center rounded-xl bg-warm-gray text-center">
                  <p className="px-4 text-sm text-warm-brown">
                    Karte wird nach Cookie-Zustimmung geladen
                  </p>
                </div>
              </div>
            </aside>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* CTA BAR                                                       */}
      {/* ============================================================ */}
      <Section background="charcoal" className="py-10 sm:py-12">
        <Container>
          <AnimateIn>
            <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
              <div>
                <h2 className="font-heading text-2xl font-bold text-white">
                  Lieber direkt anrufen?
                </h2>
                <p className="mt-1 text-warm-gray">
                  Wir beraten Sie gerne persönlich.
                </p>
              </div>
              <a
                href="tel:+4921567745050"
                className="inline-flex items-center gap-3 rounded-lg bg-abz-red px-7 py-3.5 text-lg font-semibold text-white shadow-lg shadow-abz-red/25 transition-all hover:bg-abz-red-dark"
              >
                <Phone className="h-5 w-5" />
                +49 2156 774 50 50
              </a>
            </div>
          </AnimateIn>
        </Container>
      </Section>
    </>
  );
}
