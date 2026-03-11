import Link from 'next/link';
import Container from '@/components/Container';
import Section from '@/components/Section';
import JsonLd from '@/components/JsonLd';
import AnimateIn from '@/components/AnimateIn';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const metadata = {
  title: 'Häufig gestellte Fragen (FAQ)',
};

/* ------------------------------------------------------------------ */
/*  FAQ Data                                                           */
/* ------------------------------------------------------------------ */

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  id: string;
  label: string;
  items: FaqItem[];
}

const faqCategories: FaqCategory[] = [
  {
    id: 'allgemein',
    label: 'Allgemein',
    items: [
      {
        question: 'Welche Gebiete beliefern und montieren Sie?',
        answer:
          'Unser Einzugsgebiet umfasst die gesamte Niederrhein-Region in einem Radius von etwa 50 Kilometern rund um unseren Standort in Willich. Dazu gehören unter anderem Krefeld, Mönchengladbach, Düsseldorf, Duisburg und Neuss. Für größere Projekte sind wir nach Absprache auch überregional im Einsatz.',
      },
      {
        question: 'Bieten Sie kostenlose Beratung an?',
        answer:
          'Ja, wir bieten Ihnen eine kostenlose und unverbindliche Beratung direkt bei Ihnen vor Ort an. Dabei besichtigen wir Ihr Grundstück, besprechen Ihre Wünsche und zeigen Ihnen die verschiedenen Möglichkeiten auf. Vereinbaren Sie einfach einen Termin telefonisch oder über unser Kontaktformular.',
      },
      {
        question: 'Wie lange dauert die Lieferung?',
        answer:
          'Die Lieferzeit beträgt in der Regel zwei bis vier Wochen, abhängig vom gewählten Produkt und der aktuellen Auftragslage. Sonderanfertigungen oder spezielle Farbbeschichtungen können etwas länger dauern. Wir informieren Sie bei der Auftragsbestätigung über den voraussichtlichen Liefertermin.',
      },
    ],
  },
  {
    id: 'zaeune',
    label: 'Zäune',
    items: [
      {
        question: 'Welcher Zaun eignet sich für mein Grundstück?',
        answer:
          'Die Wahl des richtigen Zauns hängt von mehreren Faktoren ab: Ihren Anforderungen an Sicherheit und Sichtschutz, der Grundstücksbeschaffenheit und Ihrem Budget. Der Doppelstabmattenzaun ist unser beliebtestes Produkt — er ist robust, pflegeleicht und vielseitig einsetzbar. Bei einer Vor-Ort-Beratung finden wir gemeinsam die optimale Lösung für Sie.',
      },
      {
        question: 'Brauche ich eine Baugenehmigung für einen Zaun?',
        answer:
          'Ob Sie eine Baugenehmigung benötigen, hängt von Ihrer Gemeinde und der geplanten Zaunhöhe ab. In vielen Kommunen am Niederrhein sind Zäune bis zu einer Höhe von 1,80 Meter genehmigungsfrei. Wir beraten Sie gerne zu den örtlichen Vorschriften und unterstützen Sie bei Bedarf beim Genehmigungsverfahren.',
      },
      {
        question: 'Wie pflege ich meinen Zaun richtig?',
        answer:
          'Unsere Zäune sind feuerverzinkt und pulverbeschichtet, wodurch sie äußerst witterungsbeständig und pflegeleicht sind. In der Regel reicht eine gelegentliche Reinigung mit Wasser und einem milden Reinigungsmittel. Kontrollieren Sie die Befestigungen einmal jährlich und behandeln Sie eventuelle Kratzer zeitnah mit Ausbesserungslack.',
      },
    ],
  },
  {
    id: 'tore',
    label: 'Tore',
    items: [
      {
        question: 'Welches Tor passt zu meinem Zaun?',
        answer:
          'Wir stimmen jedes Tor optisch und technisch auf Ihr Zaunsystem ab. Egal ob Einzeldrehtor, Doppeldrehtor oder Schiebetor — Farbe, Material und Design werden passend gefertigt. So ergibt sich ein einheitliches und harmonisches Gesamtbild für Ihr Grundstück.',
      },
      {
        question: 'Kann ich einen Torantrieb nachrüsten?',
        answer:
          'Ja, ein elektrischer Torantrieb kann in den meisten Fällen problemlos nachgerüstet werden. Als Ditec-Partner verbauen wir hochwertige Antriebe, die zu nahezu allen gängigen Tortypen passen. Wir prüfen vorab die technischen Voraussetzungen und beraten Sie zur optimalen Lösung.',
      },
      {
        question: 'Wie breit sollte ein Einfahrtstor sein?',
        answer:
          'Für die Durchfahrt eines PKW empfehlen wir eine lichte Breite von mindestens 3 Metern. Wenn Sie regelmäßig mit größeren Fahrzeugen oder Anhängern einfahren, sollten Sie 4 Meter oder mehr einplanen. Bei der Vor-Ort-Beratung vermessen wir die Zufahrt und empfehlen die passende Torgröße.',
      },
    ],
  },
  {
    id: 'sichtschutz',
    label: 'Sichtschutz',
    items: [
      {
        question: 'Welche Sichtschutz-Varianten gibt es?',
        answer:
          'Wir bieten drei bewährte Sichtschutzsysteme an: Sigma, Delta und Gamma. Jedes System hat eigene Vorteile hinsichtlich Optik, Blickdichte und Windschutz. Alle Varianten sind in verschiedenen Farben erhältlich und lassen sich perfekt mit unseren Zaunsystemen kombinieren.',
      },
      {
        question: 'Wie hoch darf ein Sichtschutz sein?',
        answer:
          'In den meisten Gemeinden am Niederrhein ist ein Sichtschutz bis zu einer Höhe von 1,80 Metern ohne Genehmigung zulässig. Höhere Anlagen können genehmigungspflichtig sein. Die genauen Regelungen variieren von Kommune zu Kommune — wir informieren Sie gerne über die Bestimmungen an Ihrem Standort.',
      },
      {
        question: 'Ist Sichtschutz genehmigungspflichtig?',
        answer:
          'Ob eine Genehmigung erforderlich ist, hängt von der Höhe, dem Standort und den lokalen Bauvorschriften ab. Leichte Sichtschutzelemente bis 1,80 Meter sind häufig genehmigungsfrei, während massive Konstruktionen wie Gabionenwände strengere Auflagen haben können. Wir klären das im Rahmen unserer Beratung für Sie.',
      },
    ],
  },
  {
    id: 'montage',
    label: 'Montage',
    items: [
      {
        question: 'Wie lange dauert eine Zaunmontage?',
        answer:
          'Die Montagedauer hängt von der Zaunlänge, dem Gelände und dem gewählten System ab. Ein typischer Gartenzaun mit 20 bis 40 Metern Länge wird in ein bis drei Arbeitstagen fertiggestellt. Bei größeren Projekten oder aufwendigem Gelände erstellen wir Ihnen vorab einen detaillierten Zeitplan.',
      },
      {
        question: 'Montieren Sie auch am Wochenende?',
        answer:
          'Unsere regulären Montagezeiten sind Montag bis Freitag. In Ausnahmefällen und nach vorheriger Absprache sind Wochenendtermine jedoch möglich. Sprechen Sie uns einfach an — wir finden gemeinsam eine Lösung, die in Ihren Zeitplan passt.',
      },
      {
        question: 'Entsorgen Sie den alten Zaun?',
        answer:
          'Ja, die fachgerechte Demontage und Entsorgung Ihres alten Zauns gehört zu unserem Leistungsumfang. Wir entfernen den Altzaun inklusive Pfosten und sorgen für eine umweltgerechte Entsorgung. Diese Leistung wird im Angebot separat ausgewiesen.',
      },
    ],
  },
  {
    id: 'preise',
    label: 'Preise',
    items: [
      {
        question: 'Was kostet ein Doppelstabmattenzaun?',
        answer:
          'Der Preis für einen Doppelstabmattenzaun hängt von verschiedenen Faktoren ab: Höhe, Gesamtlänge, Materialstärke und gewünschtem Zubehör. Pauschalpreise zu nennen wäre unseriös — deshalb erstellen wir Ihnen ein individuelles, kostenloses Angebot, das alle Posten transparent aufschlüsselt.',
      },
      {
        question: 'Erstellen Sie kostenlose Angebote?',
        answer:
          'Selbstverständlich! Unsere Angebote sind immer kostenlos und unverbindlich. Nach der Vor-Ort-Beratung erhalten Sie eine detaillierte Aufstellung aller Kosten für Material, Montage und eventuelles Zubehör. So wissen Sie vorab genau, was auf Sie zukommt — ohne versteckte Kosten.',
      },
      {
        question: 'Gibt es Finanzierungsmöglichkeiten?',
        answer:
          'Auf Anfrage sind individuelle Zahlungsvereinbarungen möglich. Sprechen Sie uns bei der Angebotserstellung einfach auf Ihre Wünsche an, und wir finden gemeinsam eine passende Lösung. Kontaktieren Sie uns für ein persönliches Gespräch.',
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function FaqPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqCategories.flatMap((cat) =>
      cat.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      }))
    ),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      {/* ============================================================ */}
      {/* 1. PAGE HEADER                                               */}
      {/* ============================================================ */}
      <Section background="warm">
        <Container>
          <AnimateIn>
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-heading text-4xl font-bold text-charcoal sm:text-5xl">
                Häufig gestellte Fragen
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-body-text sm:text-xl">
                Hier finden Sie Antworten auf die wichtigsten Fragen rund um
                Zäune, Tore, Sichtschutz, Montage und Preise.
              </p>
            </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 2. FAQ CONTENT                                               */}
      {/* ============================================================ */}
      <Section background="white">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Jump links */}
            <nav className="mb-12 flex flex-wrap justify-center gap-2">
              {faqCategories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="rounded-full border border-warm-gray-dark px-4 py-2 text-sm font-medium text-charcoal transition-colors hover:border-abz-red hover:bg-abz-red/5 hover:text-abz-red"
                >
                  {cat.label}
                </a>
              ))}
            </nav>

            {/* Category sections */}
            <div className="space-y-12">
              {faqCategories.map((cat, i) => (
                <AnimateIn key={cat.id} delay={i * 0.1}>
                <div id={cat.id}>
                  <h2 className="mb-6 font-heading text-2xl font-bold text-charcoal">
                    {cat.label}
                  </h2>

                  <div className="divide-y divide-warm-gray-dark/50 rounded-2xl border border-warm-gray-dark/50 bg-warm-white">
                    {cat.items.map((item) => (
                      <details key={item.question} className="group">
                        <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-5 font-heading font-semibold text-charcoal transition-colors hover:text-abz-red [&::-webkit-details-marker]:hidden list-none">
                          <span>{item.question}</span>
                          <ChevronDown className="h-5 w-5 shrink-0 text-warm-brown transition-transform duration-200 group-open:rotate-180" />
                        </summary>
                        <div className="px-6 pb-5 leading-relaxed text-body-text">
                          {item.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 3. CTA                                                       */}
      {/* ============================================================ */}
      <Section background="warm">
        <Container>
          <AnimateIn>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                Frage nicht dabei?
              </h2>
              <p className="mt-4 text-lg text-body-text">
                Kontaktieren Sie uns — wir helfen gerne weiter.
              </p>
              <div className="mt-8">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-abz-red px-7 py-3.5 text-base font-semibold text-white transition-all hover:bg-abz-red-dark hover:shadow-xl"
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
