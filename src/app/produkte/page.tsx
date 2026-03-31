import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container';
import Section from '@/components/Section';
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
  ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Unsere Produkte',
  description:
    'Entdecken Sie unser umfangreiches Sortiment an Zaunsystemen, Toren und Zubehör. Doppelstabmattenzäune, Schiebetore, Sichtschutz, Gabionen und mehr.',
  openGraph: {
    title: 'Produkte - Zäune, Tore & Sichtschutz | ABZ-Zaunsysteme',
    description: 'Entdecken Sie unser umfangreiches Sortiment an Zaunsystemen, Toren und Zubehör. Doppelstabmattenzäune, Schiebetore, Sichtschutz, Gabionen und mehr.',
    url: 'https://abz-zaun.de/produkte',
    siteName: 'ABZ-Zaunsysteme',
    locale: 'de_DE',
    type: 'website',
  },
};

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

const categories = [
  { slug: 'doppelstabmattenzaun', title: 'Doppelstabmattenzaun', shortDescription: 'Der Klassiker für Sicherheit und Langlebigkeit', icon: 'Shield' as const, image: '/images/produkte/doppelstabmattenzaun/doppelstabmattenzaun-wohnanlage.jpg' },
  { slug: 'schiebetore', title: 'Schiebetore', shortDescription: 'Platzsparende Torlösungen für jede Zufahrt', icon: 'ArrowRightLeft' as const, image: '/images/produkte/schiebetore/schiebetor-anthrazit-lamellen-wohnhaus.jpg' },
  { slug: 'drehfluegeltore', title: 'Drehflügeltore', shortDescription: 'Klassische Tore mit elegantem Design', icon: 'DoorOpen' as const, image: '/images/produkte/drehfluegeltore/drehfluegeltor-doppel-anthrazit-lamellen-wohnhaus.jpg' },
  { slug: 'sichtschutz', title: 'Sichtschutz', shortDescription: 'Privatsphäre für Ihren Garten', icon: 'Eye' as const, image: '/images/produkte/sichtschutz/sichtschutz-delta-anthrazit-garten.jpg' },
  { slug: 'gabionen', title: 'Gabionen', shortDescription: 'Natürliche Gestaltung mit Steinkörben', icon: 'Layers' as const, image: '/images/produkte/gabionen/gabionen-anthrazit-mit-tor.jpg' },
  { slug: 'maschendrahtzaun', title: 'Maschendrahtzaun', shortDescription: 'Die wirtschaftliche Lösung für große Flächen', icon: 'Grid3x3' as const, image: null },
  { slug: 'zierzaun', title: 'Zierzaun', shortDescription: 'Elegante Zäune mit dekorativem Charakter', icon: 'Sparkles' as const, image: '/images/produkte/zierzaun/zierzaun-anthrazit-einfahrt-wohnhaus.jpg' },
  { slug: 'torantriebe', title: 'Torantriebe', shortDescription: 'Komfort durch Automatisierung', icon: 'Zap' as const, image: null },
];

export default function ProduktePage() {
  return (
    <>
      {/* Hero / Intro */}
      <Section background="warm">
        <Container>
          <AnimateIn>
            <div className="max-w-3xl">
              <h1 className="font-heading text-4xl font-bold text-charcoal sm:text-5xl">
                Unsere Produkte
              </h1>
              <p className="mt-4 text-lg text-body-text font-body">
                Entdecken Sie unser umfangreiches Sortiment an Zaunsystemen, Toren und Zubehör.
                Qualität made in Germany — für Privatkunden und Gewerbe.
              </p>
            </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* Category Grid */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => {
              const Icon = iconMap[category.icon];
              const isAlt = index % 2 === 1;
              return (
                <AnimateIn key={category.slug} delay={index * 0.1}>
                  <Link
                    href={`/produkte/${category.slug}`}
                    className={`group flex h-full flex-col rounded-2xl border border-warm-gray-dark/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      isAlt ? 'bg-warm-white' : 'bg-white'
                    }`}
                  >
                    {/* Product image */}
                    {category.image ? (
                      <div className="relative mb-5 h-36 overflow-hidden rounded-xl">
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                    ) : (
                      <div className={`mb-5 flex h-36 items-center justify-center rounded-xl ${isAlt ? 'bg-warm-gray' : 'bg-warm-white'}`}>
                        <Icon className="h-12 w-12 text-warm-brown transition-colors group-hover:text-abz-red" />
                      </div>
                    )}

                    <h2 className="font-heading text-lg font-semibold text-charcoal">
                      {category.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm text-body-text font-body">
                      {category.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-abz-red transition-colors group-hover:text-abz-red-dark">
                      Mehr erfahren
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </AnimateIn>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA Banner */}
      <Section background="charcoal">
        <Container>
          <AnimateIn>
            <div className="flex flex-col items-center text-center">
              <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                Nicht sicher, welcher Zaun der richtige ist?
              </h2>
              <p className="mt-3 max-w-xl text-white/70 font-body">
                Wir beraten Sie gerne — kostenlos und unverbindlich. Gemeinsam finden wir die
                passende Lösung für Ihr Grundstück.
              </p>
              <Link
                href="/kontakt"
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-abz-red px-8 py-3.5 font-heading font-semibold text-white transition-colors hover:bg-abz-red-dark"
              >
                Jetzt beraten lassen
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </AnimateIn>
        </Container>
      </Section>
    </>
  );
}
