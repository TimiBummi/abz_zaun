import Container from '@/components/Container';
import Section from '@/components/Section';
import AnimateIn from '@/components/AnimateIn';
import CtaBanner from '@/components/CtaBanner';
import { MapPin } from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

export const metadata = {
  title: 'Referenzen - Unsere Projekte',
  description: 'Überzeugen Sie sich von unseren erfolgreich realisierten Zaunprojekten am Niederrhein. Referenzen für Privatkunden und Gewerbe.',
  openGraph: {
    title: 'Referenzen - Unsere Projekte | ABZ-Zaunsysteme',
    description: 'Überzeugen Sie sich von unseren erfolgreich realisierten Zaunprojekten am Niederrhein. Referenzen für Privatkunden und Gewerbe.',
    url: 'https://abz-zaun.de/referenzen',
    siteName: 'ABZ-Zaunsysteme',
    locale: 'de_DE',
    type: 'website',
  },
};

/* ------------------------------------------------------------------ */
/*  Placeholder data (will be replaced by Sanity queries)             */
/* ------------------------------------------------------------------ */

const projects = [
  {
    title: 'Doppelstabmattenzaun mit Schiebetor',
    location: 'Krefeld',
    category: 'Zäune',
    description:
      'Komplettanlage mit 80 m Doppelstabmattenzaun in anthrazit und einem elektrisch betriebenen Schiebetor für die Einfahrt.',
  },
  {
    title: 'Gabionenwand als Sichtschutz',
    location: 'Düsseldorf',
    category: 'Gabionen',
    description:
      'Gestaltung einer modernen Gabionenwand als natürlicher Sichtschutz zwischen zwei Grundstücken — individuell befüllt.',
  },
  {
    title: 'Industriezaun mit Drehflügeltor',
    location: 'Mönchengladbach',
    category: 'Gewerbe',
    description:
      'Großflächige Einzäunung eines Betriebsgeländes mit stabilem Industriezaun und zweiflügeligem Drehtor.',
  },
  {
    title: 'Sichtschutz Sigma für Reihenhausgarten',
    location: 'Willich',
    category: 'Sichtschutz',
    description:
      'Montage unseres Sigma-Sichtschutzsystems als elegante Abtrennung im Reihenhausgarten — pflegeleicht und langlebig.',
  },
  {
    title: 'Automatisches Schiebetor mit Ditec-Antrieb',
    location: 'Viersen',
    category: 'Tore',
    description:
      'Freitragendes Schiebetor mit Ditec-Antrieb, Funksteuerung und integrierter Sicherheitslichtschranke.',
  },
  {
    title: 'Maschendrahtzaun für Sportanlage',
    location: 'Tönisvorst',
    category: 'Gewerbe',
    description:
      'Einfriedung einer kommunalen Sportanlage mit hochwertigem Maschendrahtzaun und mehreren Zugangstoren.',
  },
];

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function ReferenzenPage() {
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
                Unsere Referenzen
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-body-text">
                Seit über 20 Jahren realisieren wir Zaunprojekte am Niederrhein —
                für Privatkunden, Gewerbe und öffentliche Einrichtungen. Hier
                finden Sie eine Auswahl unserer erfolgreich abgeschlossenen
                Projekte.
              </p>
            </div>
          </AnimateIn>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 2. PROJECT GRID                                              */}
      {/* ============================================================ */}
      <Section background="white">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <AnimateIn key={project.title} delay={i * 0.1}>
                <div
                  className="group h-full overflow-hidden rounded-2xl border border-warm-gray-dark/50 bg-white transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* Placeholder image */}
                  <div className="flex h-48 items-center justify-center bg-warm-gray">
                    <span className="text-sm font-medium text-charcoal/20">
                      Projektfoto
                    </span>
                  </div>

                  <div className="p-5">
                    <span className="mb-2 inline-block rounded-full bg-abz-red/10 px-3 py-0.5 text-xs font-medium text-abz-red">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-charcoal">
                      {project.title}
                    </h3>
                    <p className="mt-1 flex items-center gap-1 text-sm text-warm-brown">
                      <MapPin className="h-3.5 w-3.5" />
                      {project.location}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-body-text">
                      {project.description}
                    </p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 3. BEFORE / AFTER                                            */}
      {/* ============================================================ */}
      <Section background="warm">
        <Container>
          <AnimateIn>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
                Vorher &amp; Nachher
              </h2>
              <p className="mt-4 text-lg text-body-text">
                Der Unterschied, den ein professioneller Zaun macht — sehen Sie
                selbst.
              </p>
            </div>
          </AnimateIn>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="flex h-64 items-center justify-center rounded-xl bg-warm-gray">
              <span className="text-lg font-medium text-charcoal/20">
                Vorher
              </span>
            </div>
            <div className="flex h-64 items-center justify-center rounded-xl bg-warm-gray">
              <span className="text-lg font-medium text-charcoal/20">
                Nachher
              </span>
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-body-text">
            Dieses Grundstück in Krefeld wurde mit einem Doppelstabmattenzaun
            in anthrazit und einem passenden Schiebetor ausgestattet. Das
            Ergebnis: mehr Sicherheit, klare Grundstücksgrenzen und ein
            modernes Erscheinungsbild.
          </p>
        </Container>
      </Section>

      {/* ============================================================ */}
      {/* 4. CTA                                                       */}
      {/* ============================================================ */}
      <CtaBanner
        heading="Ihr Projekt könnte das nächste sein"
        subtext="Erzählen Sie uns von Ihrem Vorhaben — wir beraten Sie gerne unverbindlich und erstellen Ihnen ein individuelles Angebot."
        buttonLabel="Jetzt Angebot anfordern"
        buttonHref="/kontakt"
      />
    </>
  );
}
