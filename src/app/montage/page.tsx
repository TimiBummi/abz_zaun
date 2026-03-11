import Link from 'next/link';
import Container from '@/components/Container';
import Section from '@/components/Section';
import AnimateIn from '@/components/AnimateIn';
import {
  MessageSquare,
  ClipboardList,
  Wrench,
  CheckCircle2,
  Check,
  CheckSquare,
  ArrowRight,
} from 'lucide-react';

export const metadata = {
  title: 'Montage & Service',
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const processSteps = [
  {
    number: 1,
    icon: MessageSquare,
    title: 'Kostenlose Beratung',
    description:
      'Wir besprechen Ihre Wünsche und besichtigen Ihr Grundstück vor Ort. Gemeinsam finden wir die optimale Lösung.',
  },
  {
    number: 2,
    icon: ClipboardList,
    title: 'Planung & Angebot',
    description:
      'Sie erhalten ein detailliertes, unverbindliches Angebot mit allen Kosten und Leistungen transparent aufgeschlüsselt.',
  },
  {
    number: 3,
    icon: Wrench,
    title: 'Professionelle Montage',
    description:
      'Unser erfahrenes Montageteam installiert Ihren Zaun oder Ihr Tor fachgerecht und termingenau.',
  },
  {
    number: 4,
    icon: CheckCircle2,
    title: 'Abnahme & Garantie',
    description:
      'Gemeinsame Endabnahme vor Ort. Sie erhalten eine umfassende Garantie auf Material und Montage.',
  },
];

const services = [
  'Zaunmontage (Doppelstab, Maschendraht, Zierzaun)',
  'Tormontage (Schiebetore, Drehflügeltore, Einzeldrehtore)',
  'Torantrieb-Installation (Ditec Partner)',
  'Sichtschutz-Montage (Sigma, Delta, Gamma)',
  'Gabionen setzen und befüllen',
  'Demontage und Entsorgung alter Zäune',
  'Reparatur und Wartung',
  'Fundamente und Pfosten setzen',
];

const checklist = [
  'Grundstücksgrenzen klären (Katasteramt oder Vermessungsplan)',
  'Zufahrt für Lieferfahrzeuge sicherstellen',
  'Nachbarn über geplante Arbeiten informieren',
  'Eventuell erforderliche Genehmigungen einholen',
  'Vorhandene Leitungen und Kabel markieren lassen',
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

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
      {/* 2. PROCESS STEPS (TIMELINE)                                  */}
      {/* ============================================================ */}
      <Section background="white">
        <Container>
          <AnimateIn>
            <div className="mx-auto mb-14 max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                So läuft Ihr Projekt ab
              </h2>
            </div>
          </AnimateIn>

          <div className="relative mx-auto max-w-3xl">
            {/* Vertical connecting line (desktop) */}
            <div
              aria-hidden="true"
              className="absolute left-8 top-0 hidden h-full w-0.5 bg-warm-gray-dark md:block"
            />

            <div className="space-y-10">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <AnimateIn key={step.number} delay={i * 0.1}>
                  <div className="relative flex gap-6">
                    {/* Number circle */}
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-abz-red text-white shadow-lg shadow-abz-red/20">
                      <span className="font-heading text-xl font-bold">
                        {step.number}
                      </span>
                    </div>

                    {/* Card */}
                    <div className="flex-1 rounded-2xl border border-warm-gray-dark/50 bg-warm-white p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-abz-red/10 text-abz-red">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-charcoal">
                          {step.title}
                        </h3>
                      </div>
                      <p className="leading-relaxed text-body-text">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  </AnimateIn>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 3. SERVICES LIST                                             */}
      {/* ============================================================ */}
      <Section background="warm">
        <Container>
          <AnimateIn>
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                Unsere Leistungen
              </h2>
            </div>
          </AnimateIn>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
            {services.map((service, i) => (
              <AnimateIn key={service} delay={i * 0.1}>
                <div
                  className="flex items-start gap-3 rounded-2xl border border-warm-gray-dark/50 bg-white p-5"
                >
                  <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-abz-red/10 text-abz-red">
                    <Check className="h-4 w-4" />
                  </div>
                  <span className="text-body-text">{service}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 4. PREPARATION CHECKLIST                                     */}
      {/* ============================================================ */}
      <Section background="white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <AnimateIn>
              <div className="mb-10 text-center">
                <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                  Was Sie vorbereiten sollten
                </h2>
              </div>
            </AnimateIn>

            <div className="space-y-4">
              {checklist.map((item, i) => (
                <AnimateIn key={item} delay={i * 0.1}>
                  <div
                    className="flex items-start gap-4 rounded-lg border border-warm-gray-dark/50 bg-warm-white p-5"
                  >
                    <CheckSquare className="mt-0.5 h-5 w-5 shrink-0 text-abz-red" />
                    <span className="leading-relaxed text-body-text">
                      {item}
                    </span>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 5. CTA                                                       */}
      {/* ============================================================ */}
      <Section background="warm">
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
