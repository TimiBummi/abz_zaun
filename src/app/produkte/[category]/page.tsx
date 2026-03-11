import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import AnimateIn from '@/components/AnimateIn';
import {
  Shield,
  ArrowRightLeft,
  DoorOpen,
  Eye,
  Layers,
  Grid3x3,
  Sparkles,
  Zap,
  Check,
  ArrowRight,
} from 'lucide-react';

const iconMap = {
  Shield,
  ArrowRightLeft,
  DoorOpen,
  Eye,
  Layers,
  Grid3x3,
  Sparkles,
  Zap,
} as const;

type IconName = keyof typeof iconMap;

interface CategoryData {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: IconName;
  benefits: string[];
  specs: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
}

const categories: CategoryData[] = [
  {
    slug: 'doppelstabmattenzaun',
    title: 'Doppelstabmattenzaun',
    shortDescription: 'Der Klassiker für Sicherheit und Langlebigkeit',
    description:
      'Doppelstabmattenzäune sind die beliebteste Wahl für Grundstückseinfriedungen. Robust, langlebig und vielseitig einsetzbar — von der Garteneinfriedung bis zur Industrieanlage.',
    icon: 'Shield',
    benefits: [
      'Extrem robust und langlebig dank Doppelstabkonstruktion',
      'Feuerverzinkt und optional pulverbeschichtet',
      'Vielseitig einsetzbar für Privat- und Gewerbeobjekte',
      'Einfache Montage mit bewährtem Pfostensystem',
      'Verschiedene Höhen von 83 cm bis 253 cm verfügbar',
    ],
    specs: [
      { label: 'Material', value: 'Stahldraht, feuerverzinkt' },
      { label: 'Höhe', value: '83 cm – 253 cm' },
      { label: 'Drahtstärke', value: '6/5/6 mm oder 8/6/8 mm' },
      { label: 'Maschenweite', value: '200 x 50 mm' },
      { label: 'Oberfläche', value: 'Feuerverzinkt + Pulverbeschichtung' },
      { label: 'Farben', value: 'RAL 6005 (Grün), RAL 7016 (Anthrazit), RAL 9005 (Schwarz)' },
    ],
    faqs: [
      {
        question: 'Wie hoch sollte ein Doppelstabmattenzaun sein?',
        answer:
          'Die empfohlene Höhe hängt vom Einsatzzweck ab. Für Garteneinfriedungen sind 120–160 cm üblich. Für erhöhte Sicherheit empfehlen wir 180–200 cm. Wir beraten Sie gerne zur optimalen Höhe für Ihr Projekt.',
      },
      {
        question: 'Welche Drahtstärke ist die richtige?',
        answer:
          'Für den privaten Bereich reicht die Standardstärke 6/5/6 mm in der Regel aus. Für gewerbliche Anwendungen oder erhöhte Sicherheitsanforderungen empfehlen wir die verstärkte Variante 8/6/8 mm.',
      },
      {
        question: 'Wie wird der Zaun befestigt?',
        answer:
          'Die Doppelstabmatten werden mit Klemmhaltern an den Pfosten befestigt. Die Pfosten können einbetoniert oder mit unseren ABZ-Fix Produkten im Boden verankert werden.',
      },
    ],
  },
  {
    slug: 'schiebetore',
    title: 'Schiebetore',
    shortDescription: 'Platzsparende Torlösungen für jede Zufahrt',
    description:
      'Schiebetore eignen sich ideal für breite Einfahrten und bieten maximalen Komfort. Mit optionalem Torantrieb für automatisches Öffnen und Schließen.',
    icon: 'ArrowRightLeft',
    benefits: [
      'Platzsparend — kein Schwenkbereich nötig',
      'Breiten bis 12 Meter realisierbar',
      'Optimal für Torantriebe geeignet',
      'Freitragende oder schienengeführte Varianten',
      'Passend zu allen Zaunsystemen kombinierbar',
    ],
    specs: [
      { label: 'Material', value: 'Stahl, feuerverzinkt' },
      { label: 'Höhe', value: '100 cm – 240 cm' },
      { label: 'Breite', value: 'bis 12 m (freitragend bis 8 m)' },
      { label: 'Oberfläche', value: 'Feuerverzinkt + Pulverbeschichtung' },
      { label: 'Antrieb', value: 'Optional (Ditec-Antriebe)' },
      { label: 'Farben', value: 'RAL nach Wahl' },
    ],
    faqs: [
      {
        question: 'Freitragend oder schienengeführt — was ist besser?',
        answer:
          'Freitragende Schiebetore benötigen keine Bodenschiene und sind wartungsärmer. Schienengeführte Tore eignen sich besonders für sehr breite Durchfahrten über 8 Meter.',
      },
      {
        question: 'Kann ich nachträglich einen Torantrieb nachrüsten?',
        answer:
          'Ja, alle unsere Schiebetore sind für die nachträgliche Montage eines Torantriebs vorbereitet. Wir empfehlen die bewährten Ditec-Antriebe.',
      },
      {
        question: 'Wie viel Platz wird seitlich benötigt?',
        answer:
          'Für ein freitragendes Schiebetor benötigen Sie seitlich ca. 1,5-mal die lichte Durchfahrtsbreite. Bei einem 4-Meter-Tor also etwa 6 Meter seitlichen Platz.',
      },
    ],
  },
  {
    slug: 'drehfluegeltore',
    title: 'Drehflügeltore',
    shortDescription: 'Klassische Tore mit elegantem Design',
    description:
      'Drehflügeltore überzeugen durch ihr klassisches Design und ihre zuverlässige Funktion. Einzeln oder als Doppeldrehtor erhältlich.',
    icon: 'DoorOpen',
    benefits: [
      'Klassisches, zeitloses Design',
      'Als Einzeltor oder Doppeldrehtor erhältlich',
      'Robuste Konstruktion mit langer Lebensdauer',
      'Optionaler Torantrieb für Automatisierung',
      'Verschiedene Füllungen und Designs möglich',
    ],
    specs: [
      { label: 'Material', value: 'Stahl, feuerverzinkt' },
      { label: 'Höhe', value: '100 cm – 200 cm' },
      { label: 'Breite', value: 'Einzeltor bis 2 m, Doppeltor bis 6 m' },
      { label: 'Oberfläche', value: 'Feuerverzinkt + Pulverbeschichtung' },
      { label: 'Öffnungswinkel', value: 'bis 180°' },
      { label: 'Farben', value: 'RAL nach Wahl' },
    ],
    faqs: [
      {
        question: 'Einzeltor oder Doppeldrehtor — wann nehme ich was?',
        answer:
          'Einzeltore eignen sich für Durchgangsbreiten bis ca. 2 Meter. Für breitere Zufahrten empfehlen wir Doppeldrehtore, die sich nach beiden Seiten öffnen lassen.',
      },
      {
        question: 'Können Drehflügeltore automatisiert werden?',
        answer:
          'Ja, mit einem Drehtorantrieb von Ditec lassen sich alle unsere Drehflügeltore komfortabel per Fernbedienung oder Smartphone steuern.',
      },
    ],
  },
  {
    slug: 'sichtschutz',
    title: 'Sichtschutz',
    shortDescription: 'Privatsphäre für Ihren Garten',
    description:
      'Unsere Sichtschutzsysteme Sigma, Delta und Gamma bieten optimalen Schutz vor neugierigen Blicken und verleihen Ihrem Garten eine moderne Optik.',
    icon: 'Eye',
    benefits: [
      'Drei Systeme: Sigma, Delta und Gamma',
      'Bis zu 100 % Sichtschutz',
      'Modernes, ansprechendes Design',
      'Wind- und Lärmschutz als Zusatzeffekt',
      'Einfache Integration in bestehende Zaunsysteme',
    ],
    specs: [
      { label: 'Material', value: 'Aluminium / Kunststoff-Lamellen' },
      { label: 'Höhe', value: '80 cm – 200 cm' },
      { label: 'Sichtschutzgrad', value: '70 % – 100 %' },
      { label: 'Oberfläche', value: 'Pulverbeschichtet' },
      { label: 'Systeme', value: 'Sigma, Delta, Gamma' },
      { label: 'Farben', value: 'Anthrazit, Silber, Braun, Weiß' },
    ],
    faqs: [
      {
        question: 'Welches Sichtschutzsystem ist das richtige für mich?',
        answer:
          'Sigma bietet 100 % Sichtschutz mit geschlossenen Lamellen. Delta lässt noch leichten Lichteinfall zu. Gamma ist die wirtschaftliche Variante mit guter Blickdichte. Gerne beraten wir Sie persönlich.',
      },
      {
        question: 'Kann man Sichtschutz in einen bestehenden Zaun integrieren?',
        answer:
          'Ja, unsere Sichtschutzsysteme lassen sich in der Regel problemlos mit bestehenden Doppelstabmattenzäunen kombinieren.',
      },
      {
        question: 'Wie windstabil ist der Sichtschutz?',
        answer:
          'Unsere Sichtschutzsysteme sind für die üblichen Windlasten in Deutschland ausgelegt. Bei besonders exponierten Standorten empfehlen wir eine individuelle Beratung.',
      },
    ],
  },
  {
    slug: 'gabionen',
    title: 'Gabionen',
    shortDescription: 'Natürliche Gestaltung mit Steinkörben',
    description:
      'Gabionen verbinden natürliche Materialien mit modernem Design. Ideal als Sichtschutz, Stützmauer oder dekoratives Element im Garten.',
    icon: 'Layers',
    benefits: [
      'Natürliches, modernes Erscheinungsbild',
      'Vielseitig einsetzbar als Zaun, Mauer oder Deko',
      'Ausgezeichnete Schall- und Sichtschutzeigenschaften',
      'Langlebig und wartungsfrei',
      'Verschiedene Steinarten und Farben wählbar',
    ],
    specs: [
      { label: 'Material', value: 'Stahlgitterkörbe, feuerverzinkt + Galfan' },
      { label: 'Höhe', value: '60 cm – 200 cm' },
      { label: 'Drahtstärke', value: '4,5 mm – 5 mm' },
      { label: 'Maschenweite', value: '50 x 50 mm oder 50 x 100 mm' },
      { label: 'Füllung', value: 'Naturstein, Basalt, Granit u.v.m.' },
      { label: 'Oberfläche', value: 'Feuerverzinkt + Galfan-Beschichtung' },
    ],
    faqs: [
      {
        question: 'Welche Steine eignen sich für Gabionen?',
        answer:
          'Am beliebtesten sind Basalt, Granit, Jura-Kalkstein und Flusskiesel. Wichtig ist eine frostbeständige Steinsorte. Wir beraten Sie gerne zur passenden Füllung.',
      },
      {
        question: 'Brauchen Gabionen ein Fundament?',
        answer:
          'Bei Gabionenzäunen ab einer Höhe von ca. 120 cm empfehlen wir ein Streifenfundament. Niedrigere Gabionen können auf einem verdichteten Schotterbett stehen.',
      },
    ],
  },
  {
    slug: 'maschendrahtzaun',
    title: 'Maschendrahtzaun',
    shortDescription: 'Die wirtschaftliche Lösung für große Flächen',
    description:
      'Maschendrahtzäune sind die kostengünstige Wahl für die Einfriedung großer Grundstücke. Schnell montiert und bewährt seit Jahrzehnten.',
    icon: 'Grid3x3',
    benefits: [
      'Sehr gutes Preis-Leistungs-Verhältnis',
      'Schnelle und einfache Montage',
      'Ideal für große Grundstücke',
      'Bewährtes System seit Jahrzehnten',
      'Verzinkt und optional kunststoffummantelt',
    ],
    specs: [
      { label: 'Material', value: 'Stahldraht, verzinkt' },
      { label: 'Höhe', value: '80 cm – 200 cm' },
      { label: 'Drahtstärke', value: '2,4 mm – 3,1 mm' },
      { label: 'Maschenweite', value: '50 x 50 mm oder 60 x 60 mm' },
      { label: 'Oberfläche', value: 'Verzinkt oder kunststoffummantelt (grün)' },
      { label: 'Farben', value: 'Verzinkt (Silber), Grün' },
    ],
    faqs: [
      {
        question: 'Wie lange hält ein Maschendrahtzaun?',
        answer:
          'Ein verzinkter Maschendrahtzaun hält in der Regel 15–20 Jahre. Mit Kunststoffummantelung erhöht sich die Lebensdauer auf 25–30 Jahre.',
      },
      {
        question: 'Kann ich einen Maschendrahtzaun selbst montieren?',
        answer:
          'Ja, Maschendrahtzäune gehören zu den am einfachsten zu montierenden Zaunsystemen. Wir liefern eine ausführliche Montageanleitung mit. Alternativ übernehmen wir die Montage.',
      },
      {
        question: 'Ist ein Maschendrahtzaun als Grundstücksgrenze zulässig?',
        answer:
          'Ja, Maschendrahtzäune sind als Grundstückseinfriedung allgemein anerkannt. Bitte beachten Sie lokale Vorschriften zu Höhe und Abstand zur Grundstücksgrenze.',
      },
    ],
  },
  {
    slug: 'zierzaun',
    title: 'Zierzaun',
    shortDescription: 'Elegante Zäune mit dekorativem Charakter',
    description:
      'Zierzäune setzen optische Akzente und werten jedes Grundstück auf. In verschiedenen Designs und Farben erhältlich.',
    icon: 'Sparkles',
    benefits: [
      'Dekorative Designs mit eleganter Optik',
      'Hochwertige Verarbeitung',
      'Vielfältige Gestaltungsmöglichkeiten',
      'Ideal für Vorgärten und repräsentative Bereiche',
      'Feuerverzinkt und pulverbeschichtet',
    ],
    specs: [
      { label: 'Material', value: 'Stahl, feuerverzinkt' },
      { label: 'Höhe', value: '80 cm – 180 cm' },
      { label: 'Drahtstärke', value: '6 mm' },
      { label: 'Oberfläche', value: 'Feuerverzinkt + Pulverbeschichtung' },
      { label: 'Designs', value: 'Bogen oben, Bogen unten, Wellenform' },
      { label: 'Farben', value: 'RAL 6005 (Grün), RAL 7016 (Anthrazit), RAL 9005 (Schwarz)' },
    ],
    faqs: [
      {
        question: 'Welche Zierzaun-Designs gibt es?',
        answer:
          'Wir bieten verschiedene Formen an: Bogen oben, Bogen unten, Wellenform und gerade Ausführungen mit dekorativen Elementen. Gerne zeigen wir Ihnen alle Varianten.',
      },
      {
        question: 'Sind Zierzäune genauso stabil wie Doppelstabmattenzäune?',
        answer:
          'Zierzäune sind für den dekorativen Einsatz konzipiert. Sie sind solide verarbeitet, erreichen aber nicht die Stabilität eines Doppelstabmattenzauns. Für erhöhte Sicherheitsanforderungen empfehlen wir Doppelstabmatten.',
      },
    ],
  },
  {
    slug: 'torantriebe',
    title: 'Torantriebe',
    shortDescription: 'Komfort durch Automatisierung',
    description:
      'Torantriebe von unserem Partner Ditec sorgen für komfortables, automatisches Öffnen und Schließen Ihrer Tore. Steuerung per Fernbedienung oder Smartphone.',
    icon: 'Zap',
    benefits: [
      'Komfortables Öffnen per Fernbedienung oder App',
      'Bewährte Ditec-Qualität',
      'Für Schiebetore und Drehflügeltore geeignet',
      'Sichere Abschaltautomatik bei Hindernissen',
      'Auch nachrüstbar an bestehende Tore',
    ],
    specs: [
      { label: 'Hersteller', value: 'Ditec' },
      { label: 'Tortypen', value: 'Schiebetore, Drehflügeltore' },
      { label: 'Max. Torgewicht', value: 'bis 2.000 kg (je nach Modell)' },
      { label: 'Steuerung', value: 'Fernbedienung, Schlüsselschalter, Smartphone-App' },
      { label: 'Stromversorgung', value: '230 V oder Solar (optional)' },
      { label: 'Sicherheit', value: 'Hinderniserkennung, Notentriegelung' },
    ],
    faqs: [
      {
        question: 'Kann ich meinen bestehenden Torantrieb nachrüsten?',
        answer:
          'In den meisten Fällen ja. Unsere Ditec-Antriebe lassen sich an nahezu alle gängigen Tor-Typen nachrüsten. Wir prüfen gerne vor Ort die Machbarkeit.',
      },
      {
        question: 'Was passiert bei Stromausfall?',
        answer:
          'Alle unsere Torantriebe verfügen über eine manuelle Notentriegelung. Bei Stromausfall kann das Tor jederzeit von Hand geöffnet werden. Optional gibt es auch Akku-Pufferungen.',
      },
      {
        question: 'Wie laut ist ein Torantrieb?',
        answer:
          'Moderne Ditec-Antriebe arbeiten sehr leise. Die Lautstärke liegt typischerweise unter 55 dB — vergleichbar mit einem normalen Gespräch.',
      },
    ],
  },
];

function getCategoryBySlug(slug: string): CategoryData | undefined {
  return categories.find((c) => c.slug === slug);
}

export function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const category = getCategoryBySlug(params.category);
  if (!category) {
    return { title: 'Produkt nicht gefunden' };
  }
  return {
    title: category.title,
    description: category.description,
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = getCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  const Icon = iconMap[category.icon];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Startseite', item: 'https://abz-zaun.de' },
      { '@type': 'ListItem', position: 2, name: 'Produkte', item: 'https://abz-zaun.de/produkte' },
      { '@type': 'ListItem', position: 3, name: category.title, item: `https://abz-zaun.de/produkte/${category.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      {/* Breadcrumb + Header */}
      <Section background="warm">
        <Container>
          <Breadcrumb
            items={[
              { label: 'Startseite', href: '/' },
              { label: 'Produkte', href: '/produkte' },
              { label: category.title },
            ]}
          />
          <AnimateIn>
            <div className="flex items-start gap-6">
              <div className="hidden sm:flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-abz-red/10">
                <Icon className="h-8 w-8 text-abz-red" />
              </div>
              <div>
                <h1 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl lg:text-5xl">
                  {category.title}
                </h1>
                <p className="mt-3 max-w-2xl text-lg text-body-text font-body">
                  {category.description}
                </p>
              </div>
            </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* Benefits + Image Placeholder */}
      <Section background="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Benefits */}
            <AnimateIn>
              <div>
                <h2 className="font-heading text-2xl font-bold text-charcoal">
                  Vorteile & Eigenschaften
                </h2>
                <ul className="mt-6 space-y-4">
                  {category.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-abz-red/10">
                        <Check className="h-3.5 w-3.5 text-abz-red" />
                      </span>
                      <span className="text-body-text font-body">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            {/* Image Placeholder */}
            <AnimateIn delay={0.2}>
            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-warm-gray">
              <div className="text-center">
                <Icon className="mx-auto h-16 w-16 text-charcoal/10" />
                <p className="mt-3 text-sm font-medium text-warm-brown font-body">Produktbild</p>
              </div>
            </div>
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* Specifications Table */}
      <Section background="warm">
        <Container>
          <AnimateIn>
            <h2 className="font-heading text-2xl font-bold text-charcoal">
              Technische Daten
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.1}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-warm-gray-dark/50">
            <table className="w-full text-left font-body">
              <tbody>
                {category.specs.map((spec, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-warm-white'}
                  >
                    <td className="px-6 py-4 text-sm font-semibold text-charcoal whitespace-nowrap">
                      {spec.label}
                    </td>
                    <td className="px-6 py-4 text-sm text-body-text">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section background="white">
        <Container>
          <AnimateIn>
            <h2 className="font-heading text-2xl font-bold text-charcoal">
              Häufige Fragen zu {category.title}
            </h2>
          </AnimateIn>
          <div className="mt-8 space-y-4">
            {category.faqs.map((faq, index) => (
              <AnimateIn key={index} delay={index * 0.1}>
              <details
                key={index}
                className="group rounded-xl border border-warm-gray-dark bg-warm-white transition-colors open:bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-heading font-semibold text-charcoal marker:[content:none] [&::-webkit-details-marker]:hidden">
                  <span className="pr-4">{faq.question}</span>
                  <span className="shrink-0 text-warm-brown transition-transform group-open:rotate-45">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-body-text font-body leading-relaxed">
                  {faq.answer}
                </div>
              </details>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="charcoal">
        <Container>
          <AnimateIn>
            <div className="flex flex-col items-center text-center">
              <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                Jetzt Angebot für {category.title} anfordern
              </h2>
              <p className="mt-3 max-w-xl text-white/70 font-body">
                Wir erstellen Ihnen ein individuelles Angebot — kostenlos und unverbindlich.
                Kontaktieren Sie uns noch heute.
              </p>
              <Link
                href="/kontakt"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-abz-red px-8 py-3.5 font-heading font-semibold text-white transition-colors hover:bg-abz-red-dark"
              >
                Angebot anfordern
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </AnimateIn>
        </Container>
      </Section>
    </>
  );
}
