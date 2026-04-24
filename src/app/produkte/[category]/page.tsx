import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Breadcrumb from '@/components/Breadcrumb';
import JsonLd from '@/components/JsonLd';
import AnimateIn from '@/components/AnimateIn';
import ProductPageClient from '@/components/ProductPageClient';
import {
  Shield,
  ArrowRightLeft,
  DoorOpen,
  Eye,
  Layers,
  Grid3x3,
  Sparkles,
  Zap,
  Mail,
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
  Mail,
} as const;

type IconName = keyof typeof iconMap;

interface ProductImage {
  src: string;
  alt: string;
}

interface ContentBlock {
  heading: string;
  text: string;
}

interface CategoryData {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: IconName;
  benefits: string[];
  images: ProductImage[];
  contentBlocks: ContentBlock[];
  specs: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
}

const categories: CategoryData[] = [
  {
    slug: 'doppelstabmattenzaun',
    title: 'Doppelstabmattenzaun',
    shortDescription: 'Der Klassiker für Sicherheit und Langlebigkeit',
    description:
      'Doppelstabmattenzaun von ABZ-Zaunsysteme GmbH in Willich-Neersen: stabil, langlebig und zeitlos in der Optik. Als beliebteste Zaunlösung für Grundstückseinfriedungen überzeugt der Doppelstabmattenzaun im privaten wie gewerblichen Bereich. Feuerverzinkt und pulverbeschichtet trotzt er jedem Wetter, während die schlanke Doppelstabkonstruktion Ihrem Grundstück ein modernes Erscheinungsbild verleiht. Unsere Fachberater am Niederrhein unterstützen Sie von der Planung bis zur fertigen Montage.',
    icon: 'Shield',
    benefits: [
      'Extrem robust dank verschweißter Doppelstab-Konstruktion (6/5/6 oder 8/6/8 mm)',
      'Feuerverzinkt und pulverbeschichtet — witterungsbeständig und praktisch wartungsfrei',
      'Verfügbar in Höhen von 83 cm bis 253 cm für jeden Einsatzzweck',
      'Flexible Montage auch an Hängen und in unebenem Gelände',
      'Kombinierbar mit Sichtschutz, Beleuchtung und passenden Toranlagen',
      'Einfache Befestigung mit Bügel- oder Leistensystem',
      'Beliebte Farben: Anthrazit (RAL 7016), Moosgrün und Schwarz',
    ],
    images: [
      { src: '/images/produkte/doppelstabmattenzaun/buegelsystem-anthrazit-mit-pfostenbeleuchtung.jpg', alt: 'Doppelstabmattenzaun Bügelsystem in Anthrazitgrau mit Pfostenbeleuchtung' },
      { src: '/images/produkte/doppelstabmattenzaun/doppelstabmattenzaun-wohnanlage.jpg', alt: 'Doppelstabmattenzaun an einer modernen Wohnanlage' },
      { src: '/images/produkte/doppelstabmattenzaun/kita-anthrazit.jpg', alt: 'Doppelstabmattenzaun in Anthrazitgrau an einer Kindertagesstätte' },
      { src: '/images/produkte/doppelstabmattenzaun/leistensystem-moosgruen-garten.jpg', alt: 'Doppelstabmattenzaun Leistensystem in Moosgrün im Gartenbereich' },
      { src: '/images/produkte/doppelstabmattenzaun/buegelsystem-moosgruen.jpg', alt: 'Doppelstabmattenzaun Bügelsystem in Moosgrün mit Bepflanzung' },
      { src: '/images/produkte/doppelstabmattenzaun/abdeckleiste-anthrazit-hang.jpg', alt: 'Doppelstabmattenzaun mit Abdeckleiste in Anthrazitgrau am Hang montiert' },
    ],
    contentBlocks: [
      { heading: 'Doppelstabmattenzaun für Haus und Garten', text: 'Für Eigenheime und Wohnanlagen ist der Doppelstabmattenzaun die ideale Kombination aus Sicherheit und Ästhetik. In Höhen von 1,00 bis 1,80 m fasst er Ihren Garten stilvoll ein und lässt sich harmonisch mit Bepflanzung verbinden. Ergänzt um einen passenden Sichtschutz entsteht Ihre private Wohlfühloase — ohne auf ein gepflegtes Erscheinungsbild zu verzichten. Unsere Kunden in Willich und am Niederrhein schätzen besonders die Kombination mit unseren Sichtschutzsystemen Sigma, Delta und Gamma.' },
      { heading: 'Stabiler Zaun für Gewerbe und Industrie', text: 'Ob Lagerhalle, Produktionsstätte oder Außengelände — ab 2,00 m Höhe und in der verstärkten 8/6/8-mm-Ausführung bietet der Doppelstabmattenzaun eine zuverlässige Barriere gegen unbefugten Zutritt. In Kombination mit unseren Schiebe- und Drehflügeltoren sichern Sie Ihr Firmengelände professionell ab. Auch für Sportanlagen, Kitas und öffentliche Einrichtungen setzen wir seit Jahren Projekte in der gesamten Region um.' },
      { heading: 'Montage: Bügelsystem oder Leistensystem', text: 'Beim Bügelsystem werden die Doppelstabmatten mit Klemmhaltern an den Pfosten befestigt — schnell, stabil und bewährt. Das Leistensystem mit Abdeckleiste bietet zusätzlich eine glatte Oberfläche ohne vorstehende Teile und wird bei repräsentativen Einfriedungen bevorzugt. Beide Varianten lassen sich mit unseren ABZ-Fix Produkten sicher im Boden verankern oder klassisch einbetonieren. Unsere Fachberater helfen Ihnen bei der Wahl des richtigen Systems.' },
      { heading: 'Doppelstabmattenzaun in Anthrazit und weiteren Farben', text: 'Unsere Doppelstabmattenzäune sind in RAL 7016 Anthrazitgrau, RAL 6005 Moosgrün und RAL 9005 Schwarz erhältlich — Farben, die sich harmonisch in jede Umgebung einfügen. Der Doppelstabmattenzaun Anthrazit ist dabei die mit Abstand beliebteste Wahl unserer Kunden. Alle farbigen Ausführungen sind feuerverzinkt und zusätzlich pulverbeschichtet, was für langanhaltenden Farbglanz und Korrosionsschutz sorgt. Auch rein feuerverzinkte Ausführungen stehen zur Verfügung.' },
      { heading: 'Doppelstabmattenzaun Montage — auch am Hang', text: 'Dank flexibler Montagemöglichkeiten lässt sich der Doppelstabmattenzaun auch in schwierigem Gelände sicher installieren. An Hängen wird die Höhe stufenweise angepasst, sodass ein sauberer Abschluss entsteht. Ob Sie den Zaun selbst montieren oder unseren professionellen Montageservice nutzen — wir beraten Sie vor Ort zur optimalen Lösung für Ihr Grundstück. Unser erfahrenes Montageteam übernimmt auf Wunsch die komplette Installation.' },
    ],
    specs: [
      { label: 'Material', value: 'Stahldraht, feuerverzinkt' },
      { label: 'Drahtstärke', value: '6/5/6 mm (Standard) oder 8/6/8 mm (verstärkt)' },
      { label: 'Maschenweite', value: '200 x 50 mm' },
      { label: 'Höhen', value: '83 cm, 103 cm, 123 cm, 143 cm, 163 cm, 183 cm, 203 cm, 223 cm, 253 cm' },
      { label: 'Oberfläche', value: 'Feuerverzinkt, optional zusätzlich pulverbeschichtet' },
      { label: 'Farben', value: 'RAL 7016 Anthrazitgrau, RAL 6005 Moosgrün, RAL 9005 Schwarz' },
      { label: 'Befestigung', value: 'Bügelsystem oder Leistensystem mit Abdeckleiste' },
      { label: 'Pfostenmontage', value: 'Einbetonieren oder Aufdübeln (ABZ-Fix V / ABZ-Fix P)' },
    ],
    faqs: [
      {
        question: 'Wie hoch sollte ein Doppelstabmattenzaun sein?',
        answer:
          'Für private Garteneinfriedungen sind 1,00 bis 1,60 m die gängigsten Höhen. Wünschen Sie mehr Sichtschutz oder Sicherheit, empfehlen wir 1,80 m. Für gewerbliche Anwendungen und Firmengelände sind Höhen ab 2,00 m ideal — unser Sortiment reicht bis 2,53 m. Unsere Fachberater bei ABZ-Zaunsysteme in Willich helfen Ihnen gerne bei der Wahl der passenden Höhe.',
      },
      {
        question: 'Was bedeuten die Drahtstärken 6/5/6 und 8/6/8 mm?',
        answer:
          'Die Zahlen bezeichnen die Durchmesser der Stahldrähte in Millimetern: Bei 6/5/6 mm sind die waagerechten Doppelstäbe 6 mm und die senkrechten Stäbe 5 mm stark. Die verstärkte Variante 8/6/8 mm bietet mit 8 mm waagerechten und 6 mm senkrechten Stäben deutlich mehr Stabilität — ideal für sicherheitskritische Bereiche, Gewerbe oder öffentliche Einrichtungen.',
      },
      {
        question: 'Welche Farbe ist beim Doppelstabmattenzaun am beliebtesten?',
        answer:
          'Anthrazitgrau (RAL 7016) ist mit Abstand die beliebteste Farbe. Sie wirkt modern, unauffällig und passt zu nahezu jeder Fassade und Gartengestaltung. Daneben bieten wir Moosgrün (RAL 6005) und Schwarz (RAL 9005) an. Alle Farbvarianten sind feuerverzinkt und zusätzlich pulverbeschichtet für dauerhaften Korrosionsschutz.',
      },
      {
        question: 'Kann ich den Doppelstabmattenzaun selbst montieren?',
        answer:
          'Ja, mit dem richtigen Zubehör und etwas handwerklichem Geschick ist die Selbstmontage gut machbar. Die Matten werden mit Bügel- oder Leistensystem an den Pfosten befestigt, die Pfosten einbetoniert oder mit ABZ-Fix aufgedübelt. Alternativ übernimmt unser Montageteam die fachgerechte Installation in der Region Willich-Neersen und am gesamten Niederrhein.',
      },
      {
        question: 'Kann ich einen Doppelstabmattenzaun mit Sichtschutz kombinieren?',
        answer:
          'Ja, das ist problemlos möglich. Wir bieten verschiedene Sichtschutzsysteme (Sigma, Delta, Gamma) an, die sich direkt in die Zaunmatten einfügen lassen. So schaffen Sie Privatsphäre, ohne auf die Stabilität und Optik des Doppelstabmattenzauns zu verzichten. Diese Kombination ist bei unseren Kunden besonders beliebt.',
      },
      {
        question: 'Wie pflegeleicht ist ein Doppelstabmattenzaun?',
        answer:
          'Sehr pflegeleicht. Dank Feuerverzinkung und optionaler Pulverbeschichtung sind die Zaunelemente extrem witterungsbeständig und rostfrei. Gelegentliches Abspritzen mit Wasser genügt, um Schmutz und Ablagerungen zu entfernen. Eine aufwendige Wartung oder ein Neuanstrich ist über viele Jahre nicht nötig.',
      },
    ],
  },
  {
    slug: 'schiebetore',
    title: 'Schiebetore',
    shortDescription: 'Platzsparende Torlösungen für jede Einfahrt',
    description:
      'Schiebetore von ABZ-Zaunsysteme GmbH in Willich-Neersen: platzsparend, sicher und komfortabel zu bedienen. Ob als freitragendes Schiebetor oder schienengeführte Variante — unsere Schiebetore eignen sich ideal für Einfahrten im privaten und gewerblichen Bereich. In Kombination mit einem Ditec-Antrieb wird Ihr Schiebetor zum vollautomatischen Zufahrtssystem. Unsere Fachberater am Niederrhein begleiten Sie von der Planung über die Fertigung bis zur professionellen Montage.',
    icon: 'ArrowRightLeft',
    images: [
      { src: '/images/produkte/schiebetore/schiebetor-anthrazit-lamellen-wohnhaus.jpg', alt: 'Freitragendes Schiebetor anthrazit mit Lamellenfüllung vor modernem Wohnhaus' },
      { src: '/images/produkte/schiebetore/schiebetor-anthrazit-frontgitter-wohnhaus.jpg', alt: 'Freitragendes Schiebetor anthrazit in Frontgitteroptik, geöffnet, vor Einfamilienhaus' },
      { src: '/images/produkte/schiebetore/schiebetor-anthrazit-doppelstabmatten-garten.jpg', alt: 'Freitragendes Schiebetor anthrazit mit Doppelstabmattenfüllung Delta vor Garten' },
      { src: '/images/produkte/schiebetore/schiebetor-aluminium-graugruen-backstein.jpg', alt: 'Aluminiumschiebetor graugrün mit vertikaler Stabfüllung an Backsteinpfeiler' },
      { src: '/images/produkte/schiebetore/schiebetor-anthrazit-vollblech-einfahrt.jpg', alt: 'Freitragendes Schiebetor anthrazit mit Vollblechfüllung an Wohnhauseinfahrt' },
      { src: '/images/produkte/schiebetore/schiebetor-anthrazit-stabfuellung-gewerbe.jpg', alt: 'Freitragendes Schiebetor anthrazit mit Stabfüllung an gewerblichem Objekt, geöffnet' },
    ],
    benefits: [
      'Platzsparend — kein Schwenkbereich vor oder hinter dem Tor nötig',
      'Freitragende Konstruktion ohne Bodenschiene möglich — kein Einfrieren, kein Stolpern',
      'Automatisierbar mit hochwertigen Torantrieben — Ditec-Gebietspartner für maximalen Service',
      'Robuster Stahlrahmen, feuerverzinkt und pulverbeschichtet für dauerhafte Witterungsbeständigkeit',
      'Durchfahrtsbreiten bis ca. 10 m realisierbar — auch für Lkw und Transporter',
      'Individuelle Füllung passend zum Zaunsystem: Doppelstabmatte, Schmuckgitter oder Lamellenfüllung',
      'RAL-Farbton nach Wunsch für eine harmonische Gesamtoptik mit dem bestehenden Zaun',
    ],
    contentBlocks: [
      { heading: 'Schiebetor für die Einfahrt — wann ist es die richtige Wahl?', text: 'Ein Schiebetor empfiehlt sich immer dann, wenn vor oder hinter der Toröffnung kein Platz für aufschwingende Flügel vorhanden ist. An Grundstücken mit Hanglage, direkt an Gehwegen oder bei breiten Einfahrten spielt das Schiebetor seine Stärken voll aus: Es gleitet seitlich entlang des Zauns und benötigt lediglich seitlichen Freiraum in der Breite der Toröffnung. Damit ist ein Schiebetor für die Einfahrt die erste Wahl bei beengten Platzverhältnissen und gleichzeitig eine optisch elegante Lösung. Bei ABZ-Zaunsysteme in Willich beraten wir Sie, ob ein Schiebetor, ein Drehflügeltor oder ein Doppeldrehtor für Ihre Situation am besten geeignet ist.' },
      { heading: 'Freitragendes Schiebetor oder schienengeführt — die Unterschiede', text: 'Bei einem freitragenden Schiebetor wird das Torblatt von einer Tragkonstruktion am Führungspfosten gehalten und schwebt frei über dem Boden. Eine Bodenschiene ist nicht erforderlich, was die Zufahrt absenkerfrei und pflegeleicht hält — ideal bei Schnee, Laub oder unebenem Untergrund. Das schienengeführte Schiebetor dagegen läuft auf einer im Boden eingelassenen Schiene und eignet sich besonders bei sehr breiten Öffnungen oder hohem Torgewicht. Beide Varianten liefern wir maßgefertigt und passend zu Ihrem bestehenden Zaunsystem.' },
      { heading: 'Automatisches Schiebetor mit elektrischem Antrieb', text: 'Ein Schiebetor mit Antrieb macht das tägliche Ein- und Ausfahren bequem und sicher. ABZ-Zaunsysteme setzt je nach Torhersteller und Anforderung auf die passenden Torantriebe — für Ditec-Antriebe sind wir exklusiver Gebietspartner. Per Handsender, Schlüsselschalter oder Smart-Home-Integration öffnen und schließen Sie Ihr automatisches Schiebetor komfortabel vom Fahrzeug oder Haus aus. Auch eine Nachrüstung ist bei den meisten bestehenden Schiebetoren problemlos möglich. Unsere Techniker übernehmen Einbau und Einstellung des Antriebs vor Ort.' },
      { heading: 'Material und Oberfläche — Schiebetor in Wunschfarbe', text: 'Unsere Schiebetore bestehen aus einem stabilen Stahlrahmen, der feuerverzinkt und anschließend pulverbeschichtet wird. Diese doppelte Schutzschicht sorgt für langanhaltenden Korrosionsschutz und dauerhaften Farbglanz. Die Füllung des Torblatts wird passend zu Ihrem Zaun gewählt — ob Doppelstabmatte, Schmuckgitter oder Sichtschutzlamellen. Den RAL-Farbton bestimmen Sie selbst: Anthrazitgrau (RAL 7016) und Moosgrün (RAL 6005) sind besonders gefragt, weitere RAL-Töne liefern wir auf Anfrage.' },
      { heading: 'Schiebetor-Montage und Service vom Fachbetrieb', text: 'ABZ-Zaunsysteme GmbH übernimmt die komplette Montage Ihres Schiebetors in der Region Willich-Neersen und am gesamten Niederrhein. Wir setzen das Fundament, montieren die Führungspfosten und installieren Torblatt und Antrieb fachgerecht. Bei automatisierten Schiebetoren kümmern wir uns auch um die elektrische Anbindung und die Einstellung der Sicherheitskontaktleiste. Auch nach der Montage sind wir Ihr Ansprechpartner: regelmäßige Wartung und schneller Service gehören zu unserem Komplettangebot.' },
    ],
    specs: [
      { label: 'Material', value: 'Stahlrahmen, feuerverzinkt' },
      { label: 'Höhenbereich', value: 'ca. 80 cm bis 200 cm (Sonderhöhen auf Anfrage)' },
      { label: 'Durchfahrtsbreite', value: 'ca. 2,00 m bis 10,00 m' },
      { label: 'Bauart', value: 'Freitragend oder schienengeführt' },
      { label: 'Oberfläche', value: 'Feuerverzinkt + Pulverbeschichtung' },
      { label: 'Farben', value: 'RAL 7016 Anthrazitgrau, RAL 6005 Moosgrün, weitere RAL-Töne auf Anfrage' },
      { label: 'Füllung', value: 'Doppelstabmatte, Schmuckgitter, Lamellenfüllung' },
      { label: 'Antrieb', value: 'Ditec-Torantriebe (Handsender, Schlüsselschalter, Smart-Home-fähig)' },
    ],
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen einem freitragenden und einem schienengeführten Schiebetor?',
        answer:
          'Ein freitragendes Schiebetor schwebt frei über dem Boden und benötigt keine Bodenschiene — das macht die Zufahrt ebenerdig, pflegeleicht und winterfest. Ein schienengeführtes Schiebetor läuft hingegen auf einer im Boden eingelassenen Schiene, was bei besonders breiten Öffnungen oder schweren Torblättern Vorteile bietet. Für die meisten privaten Einfahrten empfehlen wir bei ABZ-Zaunsysteme die freitragende Variante.',
      },
      {
        question: 'Wie viel Platz brauche ich seitlich für ein Schiebetor?',
        answer:
          'Das Schiebetor benötigt seitlichen Freiraum entlang des Zauns, um vollständig aufzufahren. Als Faustregel gilt: Die freie Strecke sollte mindestens der Toröffnung plus etwa 30 bis 40 Prozent Überlänge entsprechen. Bei einer 4 m breiten Einfahrt rechnen Sie also mit ca. 5,50 m seitlichem Platz. Wir prüfen die Platzverhältnisse gerne vor Ort bei einem Beratungstermin.',
      },
      {
        question: 'Kann ein Schiebetor nachträglich mit einem Antrieb ausgestattet werden?',
        answer:
          'Ja, bei den meisten Schiebetoren lässt sich ein elektrischer Antrieb nachträglich einbauen. ABZ-Zaunsysteme verwendet dafür Ditec-Torantriebe, die sich durch leisen Lauf und hohe Zuverlässigkeit auszeichnen. Unsere Techniker prüfen Ihr vorhandenes Tor und montieren den Antrieb fachgerecht — inklusive Handsender und Sicherheitskontaktleiste.',
      },
      {
        question: 'Welche Durchfahrtsbreite ist bei einem Schiebetor möglich?',
        answer:
          'Schiebetore lassen sich in Breiten von ca. 2,00 m bis etwa 10,00 m realisieren. Für private Einfahrten sind 3,50 bis 5,00 m üblich, für gewerbliche Zufahrten empfehlen wir 6,00 m und mehr. ABZ-Zaunsysteme fertigt jedes Schiebetor individuell nach Ihren Maßen.',
      },
      {
        question: 'Ist ein Schiebetor sicher gegen Einbruch?',
        answer:
          'Schiebetore bieten aufgrund ihrer massiven Stahlkonstruktion einen hohen mechanischen Widerstand. Durch das seitliche Gleiten lässt sich das Tor nicht einfach aufdrücken. In Kombination mit einem elektrischen Antrieb und einer Verriegelung ist das Schiebetor dauerhaft gesichert. Auf Wunsch integrieren wir zusätzliche Sicherheitsoptionen wie Codetaster oder Gegensprechanlagen.',
      },
      {
        question: 'Bietet ABZ-Zaunsysteme auch Wartung für automatische Schiebetore an?',
        answer:
          'Ja, ABZ-Zaunsysteme GmbH bietet einen Wartungsservice für automatisierte Schiebetore an. Regelmäßige Inspektionen umfassen die Prüfung des Antriebs, der Laufrollen, der Sicherheitskontaktleiste und der elektrischen Komponenten. So stellen wir sicher, dass Ihr Schiebetor mit Antrieb dauerhaft zuverlässig funktioniert. Vereinbaren Sie einen Termin unter +49 21 56 774 50 50.',
      },
    ],
  },
  {
    slug: 'drehfluegeltore',
    title: 'Drehflügeltore',
    shortDescription: 'Klassische Tore für Einfahrt und Garten',
    description:
      'Drehflügeltore von ABZ-Zaunsysteme GmbH in Willich-Neersen vereinen klassische Eleganz mit zuverlässiger Funktion. Als bewährte Einfahrtstore öffnen sie sich komfortabel nach innen oder außen und lassen sich auf Wunsch vollständig automatisieren — für Ditec-Antriebe sind wir exklusiver Gebietspartner. Ob Einzeldrehtor für den Garteneingang oder Doppeldrehtor für die Zufahrt — wir beraten Sie persönlich und liefern Ihr Tor inklusive Montage aus einer Hand.',
    icon: 'DoorOpen',
    images: [
      { src: '/images/produkte/drehfluegeltore/drehfluegeltor-doppel-anthrazit-lamellen-wohnhaus.jpg', alt: 'Doppeldrehtor in Anthrazitgrau mit Lamellenoptik vor Wohnhaus' },
      { src: '/images/produkte/drehfluegeltore/drehfluegeltor-einzeln-vollblech-briefkasten.jpg', alt: 'Drehflügeltor mit Vollblechfüllung in Anthrazitgrau und integrierter Briefkastenanlage' },
      { src: '/images/produkte/drehfluegeltore/drehfluegeltor-einzeln-vollblech-garten.jpg', alt: 'Einzeldrehtor mit Vollblechfüllung in Anthrazitgrau, eingebaut zwischen Hauswand und Sichtschutzzaun' },
      { src: '/images/produkte/drehfluegeltore/drehfluegeltor-einzeln-lamellen-holzdekor.jpg', alt: 'Einzeldrehtor in Anthrazitgrau mit Lamellenoptik und Holzdekor-Einsatz in Rotbraun' },
      { src: '/images/produkte/drehfluegeltore/drehfluegeltor-doppel-frontgitter-gewerbe.jpg', alt: 'Doppeldrehtor mit Frontgitterfüllung in Anthrazitgrau für gewerbliche Einfahrt' },
    ],
    benefits: [
      'Klassisches Tordesign für repräsentative Einfahrten und Gartenzugänge',
      'Feuerverzinkter Stahl mit optionaler Pulverbeschichtung — langlebig und witterungsbeständig',
      'Erhältlich als Einzeldrehtor (bis ca. 1,50 m) oder Doppeldrehtor (bis ca. 6,00 m Durchfahrtsbreite)',
      'Automatisierbar mit elektrischen Torantrieben — Ditec-Gebietspartner für maximalen Service',
      'Kombinierbar mit Doppelstabmattenzaun und allen gängigen ABZ-Zaunsystemen',
      'Individuelle Farben nach RAL — Anthrazit (RAL 7016) besonders beliebt',
      'Komplettservice von der Beratung über die Planung bis zur fertigen Montage am Niederrhein',
    ],
    contentBlocks: [
      { heading: 'Drehflügeltore — der Klassiker für Einfahrt und Garten', text: 'Das Drehflügeltor ist die traditionelle und zugleich zeitlose Lösung für Grundstückszufahrten und Garteneingänge. Ein oder zwei Torflügel schwenken um eine senkrechte Achse und geben die Durchfahrt oder den Durchgang frei. Durch die einfache Mechanik sind Drehflügeltore besonders zuverlässig und wartungsarm. ABZ-Zaunsysteme fertigt Ihr Einfahrtstor passgenau zu Ihrem vorhandenen Zaun — ob Doppelstabmatte, Frontgitter oder Zierzaun. Lassen Sie sich in unserem Betrieb in Willich-Neersen von den verschiedenen Ausführungen überzeugen.' },
      { heading: 'Einzeldrehtor — platzsparend für Garten und Fußgängerzugang', text: 'Das Einzeldrehtor besteht aus einem einzigen Flügel und eignet sich ideal für Gartenpforten, Fußgängerzugänge oder schmale Nebeneingänge. Mit Durchgangsbreiten bis etwa 1,50 m ist es die kompakte Alternative zum Doppeldrehtor. Trotz seiner schlanken Bauweise steht das Einzeldrehtor in Stabilität und Verarbeitung den größeren Varianten in nichts nach. Aus feuerverzinktem Stahl gefertigt und optional pulverbeschichtet, fügt es sich optisch nahtlos in Ihre bestehende Zaunanlage ein. Auch ein elektrischer Antrieb ist problemlos nachrüstbar.' },
      { heading: 'Doppeldrehtor für große Einfahrten und Zufahrten', text: 'Wo breitere Durchfahrten benötigt werden, ist das Doppeldrehtor die richtige Wahl. Zwei symmetrische oder asymmetrische Flügel ermöglichen Durchfahrtsbreiten von bis zu etwa 6,00 Metern. Im Alltag lässt sich ein Flügel als Fußgängerpforte nutzen, für die Fahrzeugdurchfahrt werden beide Flügel geöffnet. Das Doppeldrehtor passt sich flexibel an Ihre Einfahrtssituation an und ist sowohl für private Grundstücke als auch für Gewerbezufahrten eine repräsentative Lösung. ABZ-Zaunsysteme liefert Ihr Doppeldrehtor maßgefertigt und farblich abgestimmt auf Ihren Zaun.' },
      { heading: 'Automatisches Tor mit Ditec-Antrieb — komfortabel und sicher', text: 'Jedes Drehflügeltor von ABZ-Zaunsysteme lässt sich mit einem elektrischen Antrieb unseres Partners Ditec automatisieren. Per Fernbedienung, Schlüsselschalter oder Smart-Home-Anbindung öffnen und schließen Sie Ihr Tor bequem — auch vom Auto aus. Die Ditec-Antriebe arbeiten leise, zuverlässig und verfügen über eine Hinderniserkennung für maximale Sicherheit. Ob Nachrüstung an einem bestehenden Tor oder Neuplanung mit integriertem Torantrieb — wir beraten Sie zu allen Möglichkeiten.' },
      { heading: 'Material, Farben und Oberflächen für Ihr Drehflügeltor', text: 'Unsere Drehflügeltore werden aus robustem Stahl gefertigt und durch Feuerverzinkung dauerhaft vor Korrosion geschützt. Für eine individuelle Optik steht Ihnen eine breite Palette an RAL-Farben zur Verfügung — besonders gefragt sind Anthrazitgrau (RAL 7016), Moosgrün (RAL 6005) und Schwarz (RAL 9005). Die zusätzliche Pulverbeschichtung sorgt für eine gleichmäßige, kratzfeste Oberfläche und langanhaltenden Farbglanz. So passt sich Ihr Tor perfekt an Fassade, Zaun und Gartengestaltung an.' },
    ],
    specs: [
      { label: 'Material', value: 'Stahl, feuerverzinkt' },
      { label: 'Oberfläche', value: 'Feuerverzinkt, optional zusätzlich pulverbeschichtet' },
      { label: 'Farben', value: 'RAL 7016 Anthrazitgrau, RAL 6005 Moosgrün, RAL 9005 Schwarz sowie weitere RAL-Farben auf Anfrage' },
      { label: 'Höhen', value: 'Ca. 80 cm bis 200 cm (abhängig vom Zauntyp)' },
      { label: 'Breite Einzeldrehtor', value: 'Bis ca. 1,50 m Durchgangsbreite' },
      { label: 'Breite Doppeldrehtor', value: 'Bis ca. 6,00 m Durchfahrtsbreite' },
      { label: 'Öffnungswinkel', value: 'Bis 180° (je nach Einbausituation und Antrieb)' },
      { label: 'Antrieb', value: 'Optional: Ditec Drehtorantrieb (elektrisch), Fernbedienung, Schlüsselschalter' },
    ],
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen einem Einzeldrehtor und einem Doppeldrehtor?',
        answer:
          'Ein Einzeldrehtor hat einen Flügel und eignet sich für Durchgänge bis ca. 1,50 m — ideal als Gartenpforte oder Fußgängerzugang. Ein Doppeldrehtor besteht aus zwei Flügeln und ermöglicht Durchfahrtsbreiten bis ca. 6,00 m, was es zur passenden Wahl für PKW- und LKW-Einfahrten macht. Beide Varianten sind bei ABZ-Zaunsysteme maßgefertigt erhältlich und lassen sich mit einem Antrieb automatisieren.',
      },
      {
        question: 'Kann ein Drehflügeltor automatisiert werden?',
        answer:
          'Ja, jedes Drehflügeltor lässt sich mit einem elektrischen Antrieb ausstatten. ABZ-Zaunsysteme setzt auf Antriebe unseres Partners Ditec, die per Fernbedienung, Schlüsselschalter oder Smart-Home-System gesteuert werden. Auch eine Nachrüstung an bestehenden Toren ist in der Regel problemlos möglich. Der Einbau wird von unserem Montageteam fachgerecht durchgeführt.',
      },
      {
        question: 'Wie viel Platz braucht ein Drehflügeltor zum Öffnen?',
        answer:
          'Ein Drehflügeltor benötigt im Schwenkbereich ausreichend freie Fläche — je nach Flügelbreite bis zu 3,00 m pro Seite bei einem Doppeldrehtor. Das Tor kann nach innen oder außen öffnen. Wichtig ist, dass der Boden im Schwenkbereich eben und frei von Hindernissen ist. Sollte der Platz knapp sein, kann ein Schiebetor die bessere Alternative sein — wir beraten Sie gerne vor Ort in Willich-Neersen.',
      },
      {
        question: 'Wie pflege ich ein Drehflügeltor richtig?',
        answer:
          'Drehflügeltore aus feuerverzinktem und pulverbeschichtetem Stahl sind sehr pflegeleicht. Gelegentliches Abspritzen mit Wasser entfernt Schmutz und Ablagerungen. Die Scharniere und beweglichen Teile sollten ein- bis zweimal jährlich geschmiert werden. Bei Toren mit elektrischem Antrieb empfehlen wir eine jährliche Wartung der Technik — unser Serviceteam übernimmt das gerne.',
      },
      {
        question: 'Kann ich ein Drehflügeltor an meinen bestehenden Zaun anpassen?',
        answer:
          'Ja, ABZ-Zaunsysteme fertigt Drehflügeltore passgenau zu Ihrem vorhandenen Zaun. Ob Doppelstabmattenzaun, Frontgitterzaun oder Zierzaun — das Tor wird in Höhe, Füllung und Farbe auf Ihre bestehende Einfriedung abgestimmt. So entsteht ein einheitliches Gesamtbild. Sprechen Sie uns einfach an oder senden Sie uns Fotos Ihrer aktuellen Anlage.',
      },
    ],
  },
  {
    slug: 'sichtschutz',
    title: 'Sichtschutz',
    shortDescription: 'Privatsphäre für Ihren Garten',
    description:
      'Sichtschutz für Doppelstabmattenzaun von ABZ-Zaunsysteme GmbH in Willich-Neersen: blickdicht, UV-beständig und einfach nachträglich montierbar. Ob preisgünstige Sichtschutzstreifen oder lichtdurchlässige Premium-Lösung — mit unseren vier Systemen Alpha, Sigma, Delta und Gamma finden Sie den passenden Sichtschutzzaun für Ihren Garten. Alle Varianten sind Made in Germany, witterungsbeständig und lassen sich ohne Fachkenntnisse in bestehende Zäune einfädeln. Unsere Fachberater am Niederrhein helfen Ihnen bei der Auswahl.',
    icon: 'Eye',
    images: [
      { src: '/images/produkte/sichtschutz/sichtschutz-delta-anthrazit-garten.jpg', alt: 'Sichtschutz Delta anthrazitgrau im Garten mit Gartenlampe und Bepflanzung' },
      { src: '/images/produkte/sichtschutz/sichtschutz-delta-anthrazit-terrasse.jpg', alt: 'Sichtschutz Delta anthrazit als Terrassenabgrenzung mit Gartenmöbeln' },
      { src: '/images/produkte/sichtschutz/sichtschutz-delta-gruen-zaun.jpg', alt: 'Sichtschutz Delta moosgrün als langer Grundstückszaun entlang der Straße' },
      { src: '/images/produkte/sichtschutz/sichtschutz-gamma-light-anthrazit-muelltonnen.jpg', alt: 'Sichtschutz Gamma Light anthrazit als Mülltonnenabtrennung im Hof' },
      { src: '/images/produkte/sichtschutz/sichtschutz-gamma-light-anthrazit-detail.jpg', alt: 'Sichtschutz Gamma Light anthrazit Detailansicht mit Pfosten und Abdeckleiste am Haus' },
      { src: '/images/produkte/sichtschutz/sichtschutz-sigma-anthrazit-silbergrau-pool.jpg', alt: 'Sichtschutz Sigma in Kombination anthrazitgrau und silbergrau am Pool' },
      { src: '/images/produkte/sichtschutz/sichtschutz-sigma-gruen-einfahrt.jpg', alt: 'Sichtschutz Sigma moosgrün an Einfahrt mit Klinkerpfeilern' },
    ],
    benefits: [
      'Vier Sichtschutzsysteme für jeden Anspruch: Alpha, Sigma, Delta und Gamma',
      'UV-schutzlackiert und witterungsbeständig — langanhaltende Farbqualität über viele Jahre',
      'Made in Germany — höchste Qualitätsstandards bei ABZ-Zaunsysteme in Willich',
      'Einfache Montage auch ohne Fachkenntnisse — Sichtschutz nachträglich anbringen in Eigenregie',
      'Breite Farbauswahl: Anthrazitgrau, Moosgrün, Silbergrau, Weiß und transparente Varianten',
      'Passend für gängige Doppelstabmattenzäune mit 19 cm Streifenhöhe',
      'Praktisches Zubehör wie Klemmschienen und Montagehilfen für sichere Befestigung',
    ],
    contentBlocks: [
      { heading: 'Sichtschutz für Garten und Terrasse — Privatsphäre auf Knopfdruck', text: 'Ein Sichtschutzzaun ist die wirksamste Lösung, um im eigenen Garten oder auf der Terrasse ungestört entspannen zu können. Unsere Sichtschutzstreifen schirmen zuverlässig vor neugierigen Blicken ab und bieten gleichzeitig Wind- und Lärmschutz. Ob Sie einen bestehenden Doppelstabmattenzaun nachrüsten oder einen neuen Zaun mit Sichtschutz planen — mit unseren vier Systemen Alpha, Sigma, Delta und Gamma finden Sie die passende Lösung für Ihren Außenbereich. Kunden in Willich-Neersen und am gesamten Niederrhein vertrauen seit Jahren auf unsere Beratung.' },
      { heading: 'Sichtschutz Alpha — die preisgünstige Lösung zum Einfädeln', text: 'Das Modell Alpha ist unsere wirtschaftliche Einstiegsvariante für alle, die einen blickdichten Sichtschutz zu einem fairen Preis suchen. Der Sichtschutzstreifen besteht aus robustem PES/PVC-Verbundmaterial, ist absolut blickdicht und einseitig UV-schutzlackiert. Erhältlich in Moosgrün (RAL 6005) und Anthrazitgrau (RAL 7016), bietet die Rollenlänge von 35 Metern maximale Flexibilität beim Einfädeln in den Doppelstabmattenzaun. Alpha eignet sich hervorragend zur optischen Umrandung von Haus, Garten oder Terrasse — und lässt sich problemlos nachträglich anbringen.' },
      { heading: 'Sichtschutz Sigma — Premium-Qualität mit beidseitigem UV-Schutz', text: 'Sigma ist unsere hochwertigste Sichtschutzlösung für alle, die Wert auf maximale Langlebigkeit legen. Gefertigt aus stabilem PVC und beidseitig UV-schutzlackiert, behält dieser Sichtschutz auch an besonders sonnigen Standorten über viele Jahre seine Farbintensität. In den zeitlosen Farben Anthrazitgrau, Moosgrün und Silbergrau erhältlich, fügt sich Sigma harmonisch in jede Gartengestaltung ein. Die beidseitige UV-Beschichtung macht den entscheidenden Unterschied: Auch die Innenseite bleibt farbecht und gepflegt — ein Qualitätsmerkmal, das unsere Kunden in der Region besonders schätzen.' },
      { heading: 'Sichtschutz Delta — Licht und Privatsphäre vereint', text: 'Der Sichtschutz Delta verbindet auf innovative Weise blickdichten Schutz mit Lichtdurchlässigkeit. Die transparente Struktur lässt Tageslicht hindurch und schafft eine helle, freundliche Atmosphäre, ohne dabei an Privatsphäre einzubüßen. Erhältlich in Anthrazitgrau-transparent, Moosgrün-transparent und Weiß-transparent, ist Delta beidseitig UV-schutzlackiert und damit ideal für moderne Gartengestaltungen. Besonders beliebt ist Delta bei Grundstücken, die an schattige Bereiche grenzen — hier bleibt der Garten trotz Sichtschutz hell und einladend.' },
      { heading: 'Sichtschutz Gamma — Hartkunststoff-Streifen einzeln einfädeln', text: 'Die Sichtschutzstreifen Gamma und Gamma Light bestehen aus robustem Hart-PVC und werden einzeln in den Doppelstabmattenzaun eingefädelt. Mit einer Länge von 2,55 m und einer Höhe von 19 cm passen sie exakt in gängige Zaunmatten. Erhältlich in Fenstergrau, Anthrazit, Moosgrün und Weiß, sind diese Streifen UV- und witterungsbeständig. Gamma eignet sich besonders, wenn Sie nur einzelne Zaunfelder blickdicht gestalten möchten — ideal für eine schnelle, flexible Nachrüstung ohne großen Aufwand.' },
      { heading: 'Sichtschutz Montage — einfach selbst gemacht', text: 'Sichtschutzstreifen einfädeln ist unkompliziert und auch von einer Person durchführbar. Die Rollen werden einfach durch die Doppelstabmatten gefädelt und mit Klemmschienen sicher fixiert — Klemmleisten sind als passendes Zubehör für die Systeme Delta und Sigma erhältlich. Für ein noch schnelleres Ergebnis empfehlen wir unseren selbst entwickelten Rollenhalter: Er hält die schwere Rolle beim Einfädeln stabil und ist bei ABZ-Zaunsysteme käuflich zu erwerben oder leihweise erhältlich. Bei Fragen beraten wir Sie gerne persönlich in unserem Fachhandel in Willich-Neersen oder telefonisch unter +49 (0)2156 774 50 50.' },
    ],
    specs: [
      { label: 'Alpha — Material', value: 'PES/PVC-Verbundmaterial, einseitig UV-schutzlackiert' },
      { label: 'Alpha — Rollenlänge / Höhe', value: '35 m / 19 cm' },
      { label: 'Alpha — Farben', value: 'Moosgrün (RAL 6005), Anthrazitgrau (RAL 7016)' },
      { label: 'Sigma — Material', value: 'PVC, beidseitig UV-schutzlackiert' },
      { label: 'Sigma — Rollenlänge / Höhe', value: '26 m / 19 cm' },
      { label: 'Sigma — Farben', value: 'Anthrazitgrau, Moosgrün, Silbergrau' },
      { label: 'Delta — Material', value: 'PVC mit Klarsichtbeschichtung, beidseitig UV-schutzlackiert' },
      { label: 'Delta — Rollenlänge / Höhe', value: '26 m / 19 cm' },
      { label: 'Delta — Farben', value: 'Anthrazitgrau-transparent, Moosgrün-transparent, Weiß-transparent' },
      { label: 'Gamma — Material', value: 'Hart-PVC, UV- und witterungsbeständig' },
      { label: 'Gamma — Streifenlänge / Höhe', value: '2,55 m / 19 cm' },
      { label: 'Gamma — Farben', value: 'Fenstergrau, Anthrazit, Moosgrün, Weiß' },
      { label: 'Zubehör', value: 'Klemmschienen (Anthrazitgrau, Moosgrün, Transparent), Montagehilfe' },
    ],
    faqs: [
      {
        question: 'Welcher Sichtschutz ist der richtige für mich — Alpha, Sigma, Delta oder Gamma?',
        answer:
          'Das hängt von Ihren Prioritäten ab: Alpha ist die preisgünstige Lösung für einfachen, blickdichten Sichtschutz. Sigma bietet mit beidseitiger UV-Beschichtung die höchste Langlebigkeit und Farbechtheit. Delta ist ideal, wenn Sie Lichtdurchlässigkeit mit Blickschutz kombinieren möchten — perfekt für schattige Gartenbereiche. Gamma-Streifen eignen sich besonders, wenn Sie nur einzelne Zaunfelder nachrüsten wollen. Unsere Fachberater bei ABZ-Zaunsysteme in Willich helfen Ihnen gerne bei der Auswahl.',
      },
      {
        question: 'Kann ich Sichtschutz nachträglich an meinem bestehenden Zaun anbringen?',
        answer:
          'Ja, alle unsere Sichtschutzvarianten lassen sich problemlos nachträglich in bestehende Doppelstabmattenzäune einfügen — eine aufwendige Demontage des Zauns ist nicht nötig. Die Sichtschutzstreifen auf Rolle werden einfach durch die Zaunmatten gefädelt und mit Klemmschienen fixiert. Bei den Gamma-Streifen stecken Sie die einzelnen Hartkunststoffstreifen direkt in die Maschen ein. So wird Ihr vorhandener Zaun in wenigen Stunden zum blickdichten Sichtschutzzaun.',
      },
      {
        question: 'In welchen Farben sind die Sichtschutzstreifen erhältlich?',
        answer:
          'Die Farbauswahl variiert je nach Modell: Alpha gibt es in Moosgrün (RAL 6005) und Anthrazitgrau (RAL 7016), Sigma zusätzlich in Silbergrau, Delta in drei transparenten Farbkombinationen und Gamma in Fenstergrau, Anthrazit, Moosgrün und Weiß. So finden Sie für jeden Doppelstabmattenzaun und jede Gartengestaltung den passenden Farbton — die Klemmschienen sind farblich abgestimmt in Anthrazitgrau, Moosgrün und Transparent erhältlich.',
      },
      {
        question: 'Wie lange hält ein Sichtschutz am Doppelstabmattenzaun?',
        answer:
          'Unsere Sichtschutzlösungen sind auf viele Jahre Nutzungsdauer ausgelegt. Dank UV-Schutzlackierung und witterungsbeständigen Materialien — Made in Germany — bleiben Farbe und Struktur auch bei intensiver Sonneneinstrahlung erhalten. Besonders Sigma und Delta mit beidseitiger UV-Beschichtung bieten maximale Farbechtheit. Eine besondere Pflege ist nicht erforderlich: gelegentliches Abwischen mit Wasser genügt.',
      },
      {
        question: 'Wie funktioniert das Einfädeln der Sichtschutzstreifen?',
        answer:
          'Die Sichtschutzrollen (Alpha, Sigma, Delta) werden durch die Maschen der Doppelstabmatte gefädelt und anschließend mit Klemmschienen befestigt. Mit unserer speziellen Montagehilfe gelingt das Einfädeln schnell und sauber — auch alleine, ohne Fachkenntnisse. Die Gamma-Streifen sind noch einfacher: Sie werden einzeln direkt in die Zaunmaschen eingesteckt. In der Regel ist ein Zaunfeld in wenigen Minuten fertig.',
      },
      {
        question: 'Was ist der Unterschied zwischen Sichtschutz auf Rolle und Hartkunststoffstreifen?',
        answer:
          'Sichtschutz auf Rolle (Alpha, Sigma, Delta) wird als durchgehende Bahn durch den Zaun gefädelt und eignet sich für größere, zusammenhängende Flächen. Hartkunststoffstreifen (Gamma, Gamma Light) werden einzeln pro Zaunfeld eingesetzt und sind besonders praktisch, wenn Sie nur einzelne Bereiche blickdicht gestalten möchten. Beide Varianten passen in Standard-Doppelstabmattenzäune mit 200 x 50 mm Maschenweite und 19 cm Streifenhöhe.',
      },
      {
        question: 'Ist der Sichtschutz wirklich blickdicht?',
        answer:
          'Alpha, Sigma und die Gamma-Streifen sind vollständig blickdicht — von außen ist kein Einblick möglich. Delta bietet eine Besonderheit: Durch die transparente Struktur lässt dieser Sichtschutz Tageslicht hindurch, ist aber dennoch blickdicht. So profitieren Sie von Privatsphäre, ohne auf eine helle, freundliche Atmosphäre in Ihrem Garten verzichten zu müssen.',
      },
    ],
  },
  {
    slug: 'gabionen',
    title: 'Gabionen',
    shortDescription: 'Natürliche Steinkörbe für Garten und Sichtschutz',
    description:
      'Gabionen von ABZ-Zaunsysteme GmbH in Willich-Neersen: vielseitige Steinkörbe aus feuerverzinktem Stahl, die als Sichtschutz, Gartenmauer oder Gestaltungselement begeistern. Ob Gabionenzaun als Grundstücksbegrenzung, dekorative Gabionenmauer oder begrüntes Hochbeet — mit individuell wählbaren Füllmaterialien schaffen Sie einzigartige Akzente in Ihrem Außenbereich. Unsere Fachberater am Niederrhein unterstützen Sie von der Planung über die Materialauswahl bis zur fertigen Montage.',
    icon: 'Layers',
    images: [
      { src: '/images/produkte/gabionen/gabionenzaun-feuerverzinkt-naturstein.jpg', alt: 'Gabionenzaun feuerverzinkt mit hellen Natursteinen als langer Grundstückszaun' },
      { src: '/images/produkte/gabionen/gabionenzaun-anthrazit-mit-holztor-garten.jpg', alt: 'Gabionenzaun anthrazitgrau in Kombination mit Holztor im Garten, Herbststimmung' },
      { src: '/images/produkte/gabionen/gabionen-anthrazit-mit-tor.jpg', alt: 'Gabionenzaun anthrazitgrau mit Einfahrtstor an Wohnhaus, Einfahrt gepflastert' },
      { src: '/images/produkte/gabionen/gabionenzaun-anthrazit-sichtschutz-modern.jpg', alt: 'Gabionen als Sichtschutzwand anthrazitgrau neben Mülltonnenbox an modernem Mehrfamilienhaus' },
      { src: '/images/produkte/gabionen/gabionenzaun-kombination-doppelstabmatte-sichtschutz.jpg', alt: 'Gabionenzaun anthrazitgrau in Kombination mit Doppelstabmattenzaun und Sichtschutz Delta an Einfahrt' },
    ],
    benefits: [
      'Extrem langlebig dank feuerverzinktem Stahldraht mit Galfan-Beschichtung',
      'Vielseitig einsetzbar als Sichtschutz, Gartenmauer, Hochbeet oder Hangbefestigung',
      'Individuelle Gestaltung durch Naturstein, Glasbruch, Holz oder farbige Steine',
      'Wartungsarm und witterungsbeständig — kein Streichen oder Nachbehandeln nötig',
      'Natürlicher Schallschutz durch die massive, steinbefüllte Konstruktion',
      'Verfügbar in verschiedenen Höhen, Breiten und Tiefen nach Maß',
      'Ökologisch wertvoll: bietet Lebensraum für Insekten und Eidechsen in den Steinspalten',
    ],
    contentBlocks: [
      { heading: 'Gabionenzaun als moderner Sichtschutz für Haus und Garten', text: 'Ein Gabionenzaun verbindet Sichtschutz mit natürlicher Ästhetik und verleiht Ihrem Grundstück ein modernes, hochwertiges Erscheinungsbild. Die robusten Steinkörbe bieten zuverlässige Privatsphäre und wirken gleichzeitig einladend — ganz ohne die Massivität einer gemauerten Wand. Durch die Kombination verschiedener Füllmaterialien wie heller Jura-Kalkstein, dunkler Basalt oder Granitbruch gestalten Sie Ihren Gabionen-Sichtschutz ganz nach Ihrem persönlichen Geschmack. Unsere Kunden in Willich und am Niederrhein schätzen besonders die Möglichkeit, Gabionen mit Bepflanzung oder Beleuchtung zu ergänzen.' },
      { heading: 'Gabionen im Garten: Hochbeete, Mauern und Gestaltungsideen', text: 'Gabionen im Garten eröffnen nahezu unbegrenzte Gestaltungsmöglichkeiten. Als Hochbeet sorgen sie für komfortables Gärtnern auf angenehmer Arbeitshöhe und setzen gleichzeitig ein optisches Highlight. Eine freistehende Gabionenmauer gliedert große Gartenflächen in gemütliche Bereiche, während niedrige Gabionenbänke einladende Sitzgelegenheiten schaffen. Auch als Einfassung für Terrassen, Grillplätze oder Wasserspiele eignen sich die vielseitigen Steinkörbe hervorragend. ABZ-Zaunsysteme berät Sie gerne zu kreativen Lösungen für Ihr Projekt.' },
      { heading: 'Material und Aufbau: So sind unsere Steinkörbe konstruiert', text: 'Unsere Gabionen bestehen aus verschweißten Doppelstabmatten mit feuerverzinkter Oberfläche und zusätzlicher Galfan-Beschichtung für maximalen Korrosionsschutz. Die Drahtkörbe werden auf speziellen Pfosten montiert, die entweder einbetoniert oder mit unseren ABZ-Fix Produkten auf vorhandene Fundamente aufgedübelt werden. Je nach gewünschter Tiefe kommen Maschenweiten von 50 x 50 mm oder 50 x 100 mm zum Einsatz. Diese solide Konstruktion garantiert, dass Ihre Gabionen auch nach Jahrzehnten formstabil und optisch ansprechend bleiben.' },
      { heading: 'Gabionensteine und Füllmaterialien richtig wählen', text: 'Die Wahl des Füllmaterials bestimmt maßgeblich die Optik und Wirkung Ihrer Gabionen. Klassisch und zeitlos wirken Natursteine wie Granit, Basalt oder Kalkstein in verschiedenen Grautönen. Für warme Akzente eignen sich mediterrane Steine in Ocker- und Sandtönen. Wichtig ist, dass die Steingröße zur Maschenweite passt — in der Regel empfehlen wir eine Korngröße von 80 bis 150 mm. Auch Kombinationen mit Glasbruch, Cortenstahl-Elementen oder Holzscheiten sind möglich und schaffen besondere Blickfänge. Unsere Fachberater helfen Ihnen bei der Auswahl des passenden Materials.' },
      { heading: 'Gabionen montieren und pflegen — Tipps vom Fachbetrieb', text: 'Die Montage von Gabionen erfordert einen stabilen, ebenen Untergrund. Für höhere Gabionenwände ab 1,50 m empfehlen wir ein verdichtetes Schotterfundament oder ein Streifenfundament. Die Drahtkörbe werden anschließend aufgestellt, ausgerichtet und schichtweise mit dem gewählten Steinmaterial befüllt. In der Pflege sind Gabionen äußerst anspruchslos: Gelegentliches Abspritzen mit dem Gartenschlauch entfernt Staub und leichten Bewuchs. Die verzinkte Oberfläche schützt dauerhaft vor Korrosion — ein Nachstreichen ist nicht nötig. Unser Montageteam übernimmt auf Wunsch die komplette Installation in der Region.' },
    ],
    specs: [
      { label: 'Material', value: 'Geschweißte Stahldrahtmatten (Doppelstabkonstruktion)' },
      { label: 'Oberfläche', value: 'Feuerverzinkt mit Galfan-Beschichtung (Zink-Aluminium-Legierung)' },
      { label: 'Drahtstärke', value: '5 mm bzw. 6 mm je nach Ausführung' },
      { label: 'Maschenweite', value: '50 x 50 mm oder 50 x 100 mm' },
      { label: 'Höhen', value: '60 cm, 80 cm, 100 cm, 120 cm, 150 cm, 180 cm, 200 cm' },
      { label: 'Tiefen', value: '15 cm, 20 cm, 30 cm (Zaun) / ab 50 cm (freistehende Mauer)' },
      { label: 'Füllmaterial', value: 'Naturstein, Basalt, Granit, Kalkstein, Glasbruch, Holz (bauseits)' },
      { label: 'Empf. Steingröße', value: '80–150 mm (passend zur Maschenweite)' },
      { label: 'Pfostenmontage', value: 'Einbetonieren oder Aufdübeln (ABZ-Fix V / ABZ-Fix P)' },
    ],
    faqs: [
      {
        question: 'Was sind Gabionen und wofür werden sie verwendet?',
        answer:
          'Gabionen sind mit Steinen befüllte Drahtkörbe aus feuerverzinktem Stahl, die vielseitig im Garten- und Landschaftsbau eingesetzt werden. Sie dienen als Sichtschutz, Grundstücksbegrenzung, Stützmauer, Hochbeet, Schallschutz oder dekoratives Gestaltungselement. Durch die große Auswahl an Füllmaterialien — von Naturstein über Glasbruch bis Holz — passen sie sich jedem Stil an. Bei ABZ-Zaunsysteme in Willich-Neersen beraten wir Sie persönlich zu den besten Einsatzmöglichkeiten für Ihr Grundstück.',
      },
      {
        question: 'Brauchen Gabionen ein Fundament?',
        answer:
          'Ja, ein stabiler Untergrund ist wichtig. Für niedrige Gabionenzäune bis etwa 1,00 m genügt ein verdichtetes Schotterbett als Basis. Höhere Gabionenwände ab 1,50 m benötigen in der Regel ein Streifenfundament aus Beton, um dauerhaft standsicher zu bleiben. Die Pfosten werden entweder einbetoniert oder mit dem ABZ-Fix System auf vorhandene Fundamente aufgedübelt. Unser Team berät Sie vor Ort, welche Fundamentlösung für Ihre Situation die richtige ist.',
      },
      {
        question: 'Welche Steine eignen sich am besten für Gabionen?',
        answer:
          'Am besten eignen sich frostbeständige Natursteine wie Granit, Basalt, Kalkstein oder Dolomit in einer Korngröße von 80 bis 150 mm. Die Steine sollten größer als die Maschenöffnung sein, damit sie nicht herausfallen. Helle Steine wie Jura-Kalkstein wirken freundlich und mediterran, dunkler Basalt modern und elegant. Auch Mischungen verschiedener Steinsorten oder Akzente mit Glasbruch sind beliebt und schaffen ein individuelles Erscheinungsbild.',
      },
      {
        question: 'Wie langlebig sind Gabionen?',
        answer:
          'Hochwertige Gabionen halten bei fachgerechter Installation problemlos 30 Jahre und mehr. Die Kombination aus Feuerverzinkung und Galfan-Beschichtung schützt den Stahldraht zuverlässig vor Korrosion. Die Steinfüllung selbst ist praktisch unbegrenzt haltbar. Entscheidend für die Langlebigkeit sind die Qualität der Verzinkung und ein stabiles Fundament — beides gewährleisten wir bei ABZ-Zaunsysteme durch geprüfte Materialien und fachgerechte Montage.',
      },
      {
        question: 'Sind Gabionen als Sichtschutz geeignet?',
        answer:
          'Ja, Gabionen eignen sich hervorragend als Sichtschutz. Bereits ab einer Höhe von 1,50 m bieten dicht befüllte Steinkörbe einen vollständigen Blickschutz. Im Vergleich zu Holzzäunen oder Mauern wirken Gabionen natürlicher und sind deutlich langlebiger. Zusätzlich dämmen sie durch ihre Masse den Schall, was besonders an vielbefahrenen Straßen ein großer Vorteil ist. Gabionen-Sichtschutz lässt sich zudem wunderbar mit Bepflanzung kombinieren.',
      },
      {
        question: 'Wie pflegeleicht sind Gabionen?',
        answer:
          'Gabionen sind äußerst pflegeleicht und praktisch wartungsfrei. Die verzinkte Oberfläche muss nicht gestrichen oder nachbehandelt werden. Gelegentliches Abspritzen mit dem Gartenschlauch reicht aus, um Staub und leichten Bewuchs zu entfernen. Moos oder Flechten auf den Steinen sind rein optisch und beeinträchtigen die Stabilität nicht — viele Gartenbesitzer schätzen sogar die natürliche Patina, die sich mit der Zeit bildet.',
      },
      {
        question: 'Kann man Gabionen selbst aufbauen oder braucht man einen Fachbetrieb?',
        answer:
          'Niedrige Gabionenzäune bis etwa 1,00 m Höhe lassen sich mit handwerklichem Geschick und dem richtigen Zubehör in Eigenleistung aufbauen. Für höhere Konstruktionen, Hanglagen oder freistehende Gabionenmauern empfehlen wir die Montage durch einen Fachbetrieb, da hier statische Anforderungen beachtet werden müssen. Unser Montageteam bei ABZ-Zaunsysteme übernimmt Projekte jeder Größe in Willich und der gesamten Niederrhein-Region.',
      },
    ],
  },
  {
    slug: 'maschendrahtzaun',
    title: 'Maschendrahtzaun',
    shortDescription: 'Die wirtschaftliche Lösung für große Flächen',
    description:
      'Der Maschendrahtzaun ist der bewährte Klassiker unter den Zaunlösungen — flexibel, kostengünstig und vielseitig einsetzbar. ABZ-Zaunsysteme GmbH in Willich-Neersen bietet hochwertigen Maschendraht in verzinkter und kunststoffbeschichteter Ausführung für private Gärten, Tiergehege und gewerbliche Grundstücke. Ob als grüner Maschendrahtzaun im Garten oder als schlichte Grundstücksbegrenzung: Kein anderer Zaun verbindet Wirtschaftlichkeit und Funktionalität so überzeugend. Unsere Fachberater am Niederrhein beraten Sie persönlich — von der Planung bis zur fertigen Montage.',
    icon: 'Grid3x3',
    images: [
      { src: '/images/produkte/maschendrahtzaun/maschendrahtzaun-detail-anthrazit.jpg', alt: 'Maschendrahtzaun anthrazitgrau — Detailansicht Geflecht und Pfosten' },
      { src: '/images/produkte/maschendrahtzaun/maschendrahtzaun-anlage.jpg', alt: 'Maschendrahtzaun anthrazitgrau als langer Grundstückszaun an Gewerbefläche' },
    ],
    contentBlocks: [
      {
        heading: 'Maschendrahtzaun — der vielseitige Allrounder für Garten und Grundstück',
        text: 'Seit Jahrzehnten gehört der Maschendrahtzaun zu den meistverkauften Zauntypen in Deutschland — und das aus gutem Grund. Er bietet eine unkomplizierte, zuverlässige Grundstücksbegrenzung, ohne das Budget zu sprengen. Ob Sie Ihren Garten einfassen, ein Tiergehege absichern oder ein Firmengelände abgrenzen möchten: Maschendraht erfüllt diese Aufgaben solide und unauffällig. Im Gegensatz zum massiveren Doppelstabmattenzaun wirkt ein Maschendrahtzaun leicht und offen, was ihn besonders für naturnahe Gärten und ländliche Grundstücke attraktiv macht. Bei ABZ-Zaunsysteme GmbH in Willich-Neersen führen wir ein breites Sortiment an Maschendrahtzäunen in verschiedenen Höhen und Ausführungen — stets in geprüfter Qualität.',
      },
      {
        heading: 'Verzinkter oder grüner Maschendrahtzaun — welche Ausführung passt?',
        text: 'Beim Maschendrahtzaun kaufen stehen zwei Hauptvarianten zur Wahl: rein feuerverzinkt oder zusätzlich mit Kunststoff beschichtet. Die verzinkte Ausführung ist die günstigste Option und bietet bereits soliden Schutz gegen Rost. Wer mehr Langlebigkeit und ein ansprechenderes Erscheinungsbild wünscht, greift zum kunststoffbeschichteten Maschendrahtzaun — meist in Grün (RAL 6005), da er sich so dezent in die Gartenlandschaft einfügt. Ein grüner Maschendrahtzaun verschmilzt regelrecht mit der umgebenden Bepflanzung und wird von Hecken oder Kletterpflanzen schnell verdeckt. Beide Varianten finden Sie bei ABZ-Zaunsysteme in geprüfter Qualität und zu fairen Preisen.',
      },
      {
        heading: 'Maschendrahtzaun selbst montieren — Tipps für eine stabile Zaunanlage',
        text: 'Ein großer Vorteil des Maschendrahtzauns ist die einfache Montage, die viele Heimwerker problemlos selbst übernehmen können. Wichtig ist ein gleichmäßiger Pfostenabstand von ca. 2,50 m, damit das Geflecht straff gespannt bleibt. Verwenden Sie verzinkte Zaunpfosten und spannen Sie oben und unten einen Spanndraht ein — das sorgt für dauerhaften Halt und verhindert, dass der Zaun durchhängt. An Eck- und Endpfosten sollten Sie Streben setzen, um die Zugkräfte abzufangen. Für die Verankerung empfehlen wir Einbetonieren oder die Montage mit unseren ABZ-Fix Produkten (chemischer Injektionsmörtel). Natürlich steht Ihnen auch unser professionelles Montageteam in der Region Willich und am gesamten Niederrhein zur Verfügung.',
      },
      {
        heading: 'Maschendrahtzaun günstig kaufen — ehrliche Einordnung im Vergleich',
        text: 'Der Maschendrahtzaun ist die mit Abstand preiswerteste Zaunlösung pro laufendem Meter. Gerade bei langen Zaunstrecken macht sich der Kostenvorteil gegenüber einem Doppelstabmattenzaun oder Stabgitterzaun deutlich bemerkbar. Allerdings bietet ein Maschendrahtzaun weniger Einbruchschutz und Sichtschutz als stabilere Alternativen. Wer primär eine klare Grundstücksabgrenzung sucht — etwa als Gartenzaun, Weidezaun oder Einfriedung von Spielflächen — trifft mit dem Maschendrahtzaun eine kluge und wirtschaftliche Wahl. Für höhere Sicherheitsanforderungen empfehlen wir ergänzend unsere Doppelstabmattenzäune. ABZ-Zaunsysteme GmbH berät Sie ehrlich, welche Lösung für Ihr Projekt am sinnvollsten ist.',
      },
      {
        heading: 'Drahtgitterzaun für Tiergehege, Garten und Gewerbe',
        text: 'Als Drahtgitterzaun ist der Maschendrahtzaun in vielen Bereichen zu Hause: Er sichert Hühnergehege und Kaninchenställe, grenzt Gemüsegärten gegen Wildtiere ab und dient als kostengünstige Einfriedung von Gewerbegrundstücken, Sportplätzen und Kleingartenanlagen. Seine Flexibilität macht ihn auch für verwinkelte Grundstücke und hügeliges Gelände geeignet, wo starre Zaunelemente an ihre Grenzen stoßen. Durch die Kombination mit Hecken oder Sichtschutzstreifen lässt sich auch beim Maschendrahtzaun Privatsphäre schaffen. Sprechen Sie uns an — das Team von ABZ-Zaunsysteme GmbH in Willich-Neersen findet gemeinsam mit Ihnen die passende Lösung.',
      },
    ],
    benefits: [
      'Kostengünstigste Zaunlösung — ideal für große Flächen und lange Zaunstrecken',
      'Flexibles Drahtgeflecht passt sich mühelos an unebenes Gelände und Kurven an',
      'Verzinkt oder kunststoffbeschichtet — zuverlässiger Korrosionsschutz über viele Jahre',
      'Leichtes Material ermöglicht einfache Selbstmontage auch ohne Spezialwerkzeug',
      'Nahezu unsichtbar im Garten — lässt sich hervorragend mit Hecken und Kletterpflanzen kombinieren',
      'Verfügbar in Höhen von 80 cm bis 200 cm für jeden Einsatzzweck',
      'Schnelle Lieferung und persönliche Beratung durch ABZ-Zaunsysteme in Willich',
    ],
    specs: [
      { label: 'Material', value: 'Stahldraht, feuerverzinkt' },
      { label: 'Drahtstärke', value: '2,4 mm, 2,8 mm oder 3,1 mm' },
      { label: 'Maschenweite', value: '50 × 50 mm oder 60 × 60 mm' },
      { label: 'Höhen', value: '80 cm, 100 cm, 125 cm, 150 cm, 175 cm, 200 cm' },
      { label: 'Oberfläche', value: 'Feuerverzinkt, optional kunststoffbeschichtet (PVC)' },
      { label: 'Farben', value: 'Verzinkt (silber), Grün (RAL 6005), Anthrazit' },
      { label: 'Zubehör', value: 'Spanndrähte, Zaunpfosten (verzinkt), Streben, Spanner, Drahthalter' },
      { label: 'Pfostenmontage', value: 'Einbetonieren oder Aufdübeln (ABZ-Fix V / ABZ-Fix P)' },
    ],
    faqs: [
      {
        question: 'Wie lange hält ein Maschendrahtzaun?',
        answer:
          'Ein hochwertiger Maschendrahtzaun hält je nach Ausführung 15 bis 25 Jahre und länger. Rein verzinkte Modelle erreichen bei normaler Beanspruchung eine Lebensdauer von rund 15 Jahren, während kunststoffbeschichtete Ausführungen durch den zusätzlichen PVC-Schutz 20 Jahre und mehr problemlos überstehen. Die Lebensdauer hängt von der Umgebung ab — in salziger Küstenluft oder Industrienähe altert Zink schneller. ABZ-Zaunsysteme empfiehlt für maximale Haltbarkeit die kunststoffbeschichtete Variante.',
      },
      {
        question: 'Was ist besser: verzinkter oder kunststoffbeschichteter Maschendrahtzaun?',
        answer:
          'Kunststoffbeschichteter Maschendrahtzaun bietet den besseren Langzeitschutz, da die PVC-Schicht die Verzinkung zusätzlich vor Witterung und mechanischem Abrieb schützt. Gleichzeitig fügt sich ein grüner Maschendrahtzaun optisch unauffälliger in den Garten ein. Die rein verzinkte Variante ist günstiger und für weniger anspruchsvolle Einsatzzwecke völlig ausreichend. Beide Ausführungen finden Sie bei ABZ-Zaunsysteme GmbH in Willich-Neersen.',
      },
      {
        question: 'Kann ich einen Maschendrahtzaun selbst montieren?',
        answer:
          'Ja, die Selbstmontage ist beim Maschendrahtzaun besonders einfach und auch für engagierte Heimwerker gut machbar. Das leichte Geflecht lässt sich mit wenig Werkzeug verarbeiten — benötigt werden vor allem ein Spaten, eine Wasserwaage und ein Zaunspanner. Pfosten im Abstand von ca. 2,50 m setzen, Spanndrähte einziehen und das Geflecht einhängen. Detaillierte Montagehinweise erhalten Sie bei Ihrer Bestellung bei ABZ-Zaunsysteme, und auf Wunsch übernimmt unser Team die komplette Montage.',
      },
      {
        question: 'Für welche Einsatzbereiche eignet sich ein Maschendrahtzaun?',
        answer:
          'Der Maschendrahtzaun eignet sich hervorragend als Gartenzaun, Grundstückseinfriedung, Tiergehege (Hühner, Kaninchen, Hunde), Spielplatzbegrenzung, Kleingarteneinzäunung und als Einfriedung von Gewerbeflächen. Überall dort, wo eine klare Abgrenzung wichtiger ist als Sichtschutz oder maximale Einbruchsicherheit, ist er die wirtschaftlichste Wahl. Für höhere Sicherheitsanforderungen empfiehlt ABZ-Zaunsysteme ergänzend Doppelstabmattenzäune.',
      },
      {
        question: 'Welche Höhe sollte ein Maschendrahtzaun haben?',
        answer:
          'Für Gartenzäune sind 100 bis 150 cm die gängigsten Höhen. Zur Absicherung von Tiergehegen empfehlen sich je nach Tierart 125 bis 175 cm. Grundsätzlich gilt: Je höher der Zaun, desto stabiler müssen Pfosten und Verankerung dimensioniert sein. Unser Team bei ABZ-Zaunsysteme GmbH in Willich berät Sie zur optimalen Höhe für Ihren konkreten Einsatzzweck.',
      },
      {
        question: 'Wie pflege ich meinen Maschendrahtzaun?',
        answer:
          'Maschendrahtzäune sind äußerst pflegeleicht. Gelegentliches Abspritzen mit dem Gartenschlauch entfernt Schmutz, Moos und Ablagerungen. Kontrollieren Sie einmal jährlich die Spannung des Geflechts und ziehen Sie die Spanndrähte bei Bedarf nach. Bei beschädigten Stellen — etwa durch Astbruch — kann das Geflecht lokal repariert werden, ohne den gesamten Zaun austauschen zu müssen.',
      },
    ],
  },
  {
    slug: 'zierzaun',
    title: 'Zierzaun',
    shortDescription: 'Elegante Zäune mit dekorativem Charakter',
    description:
      'Ein Zierzaun von ABZ-Zaunsysteme GmbH in Willich-Neersen verbindet dekorative Eleganz mit solider Grundstückssicherung. Als hochwertiger Metallzaun mit geschwungenen Bögen, Ornamentspitzen oder Wellenformen setzt er stilvolle Akzente an Vorgarten, Einfahrt und Gartenanlage. Feuerverzinkt und pulverbeschichtet ist der Schmuckzaun dauerhaft witterungsbeständig und nahezu wartungsfrei. Unsere Fachberater am Niederrhein helfen Ihnen, den passenden dekorativen Zaun für Ihr Grundstück zu finden.',
    icon: 'Sparkles',
    images: [
      { src: '/images/produkte/zierzaun/zierzaun-anthrazit-einfahrt-wohnhaus.jpg', alt: 'Zierzaun anthrazit mit Zierspitzen und Doppeltor an Einfahrt eines Wohnhauses' },
      { src: '/images/produkte/zierzaun/zierzaun-anthrazit-garten-gruenanlage.jpg', alt: 'Zierzaun anthrazit mit Pinienzapfen-Pfosten und Lanzettspitzen im Garten' },
    ],
    contentBlocks: [
      {
        heading: 'Dekorativer Zaun für Vorgarten und Grundstück',
        text: 'Ein Zierzaun eignet sich besonders für Vorgärten, Wohnanlagen und repräsentative Einfriedungen, bei denen Ästhetik eine zentrale Rolle spielt. Im Gegensatz zum klassischen Doppelstabmattenzaun setzt der Schmuckzaun mit Bogenelementen, Ornamentspitzen und Wellenformen bewusst gestalterische Akzente. Dabei bleibt die Sicht auf Haus und Garten erhalten — ein entscheidender Vorteil gegenüber blickdichten Lösungen. ABZ-Zaunsysteme bietet Zierzäune in verschiedenen Designlinien an: von klassisch-elegant bis modern-geradlinig, passend zu jedem Architekturstil.',
      },
      {
        heading: 'Zierzaun kaufen — Designs und Ausführungen',
        text: 'Unsere Zierzäune sind in den Formgebungen Bogen oben, Bogen unten und Welle erhältlich und lassen sich in Höhe, Breite und Farbgebung individuell anpassen. Alle Modelle werden aus verzinktem Stahl gefertigt und erhalten eine zusätzliche Pulverbeschichtung für langanhaltenden Farbglanz. Passende Drehtore und Doppeldrehtore im gleichen Design sorgen für ein harmonisches Gesamtbild an Ihrem Grundstück. Auf Wunsch fertigen wir Maßanfertigungen — sprechen Sie unsere Fachberater in Willich-Neersen an.',
      },
      {
        heading: 'Montage und Pflege Ihres Metallzauns',
        text: 'Die Montage eines Zierzauns erfolgt je nach Untergrund durch Einbetonieren oder Aufdübeln der Pfosten mit unseren ABZ-Fix Produkten. Ob Selbstmontage oder professionelle Installation durch unser Montageteam — wir beraten Sie zur optimalen Lösung für Ihr Gelände. In der Pflege ist ein pulverbeschichteter Zierzaun besonders unkompliziert: Gelegentliches Abspritzen mit Wasser reicht aus, um den Zaun in bestem Zustand zu halten. Kleine Kratzer sollten zeitnah mit Lackstift versiegelt werden, um Korrosion vorzubeugen.',
      },
    ],
    benefits: [
      'Elegante Optik durch Bogen-, Wellen- und Ornamentdesigns — ideal als repräsentativer Vorgartenzaun',
      'Robuster Stahl, feuerverzinkt und pulverbeschichtet für dauerhaften Korrosionsschutz',
      'Verfügbar in verschiedenen Höhen für Vorgarten, Garten und Grundstückseinfriedung',
      'Individuelle Farbgestaltung durch hochwertige Pulverbeschichtung in RAL-Farben',
      'Kombinierbar mit passenden Toren im gleichen Design für ein einheitliches Gesamtbild',
      'Pflegeleicht — gelegentliches Reinigen mit Wasser genügt',
    ],
    specs: [
      { label: 'Material', value: 'Stahl, feuerverzinkt' },
      { label: 'Drahtstärke', value: '6/5/6 mm' },
      { label: 'Höhen', value: '80 cm, 100 cm, 120 cm, 140 cm, 160 cm' },
      { label: 'Designs', value: 'Bogen oben, Bogen unten, Welle' },
      { label: 'Oberfläche', value: 'Feuerverzinkt und pulverbeschichtet' },
      { label: 'Farben', value: 'RAL-Farbtöne nach Wahl (z.\u00a0B. Anthrazit, Moosgrün, Schwarz)' },
      { label: 'Pfostenmontage', value: 'Einbetonieren oder Aufdübeln (ABZ-Fix V / ABZ-Fix P)' },
    ],
    faqs: [
      {
        question: 'Welche Designs gibt es beim Zierzaun?',
        answer:
          'Unsere Zierzäune sind in den Formgebungen Bogen oben, Bogen unten und Welle erhältlich. Jede Variante verleiht Ihrem Grundstück einen eigenen Charakter — von klassisch-elegant bis modern-geschwungen. Zusätzlich lassen sich Höhe, Breite und Farbe individuell anpassen, sodass der Zaun optimal zu Ihrer Außenanlage passt.',
      },
      {
        question: 'Ist ein Zierzaun genauso stabil wie ein Doppelstabmattenzaun?',
        answer:
          'Ja, unsere Zierzäune bestehen aus dem gleichen feuerverzinkten Stahl und bieten eine vergleichbare Stabilität. Der Unterschied liegt in der Optik: Während der Doppelstabmattenzaun auf schlichte Funktionalität setzt, überzeugt der Zierzaun mit dekorativen Elementen wie Bögen und Ornamentspitzen. Für besonders sicherheitskritische Bereiche empfehlen wir dennoch den Doppelstabmattenzaun in verstärkter Ausführung.',
      },
      {
        question: 'Welche Höhe eignet sich für einen Vorgartenzaun?',
        answer:
          'Für Vorgärten sind Höhen von 80 bis 120 cm am beliebtesten, da sie eine elegante Abgrenzung schaffen, ohne die Sicht auf das Haus zu versperren. Für Garteneinfriedungen oder mehr Privatsphäre empfehlen wir 140 bis 160 cm. Unsere Berater bei ABZ-Zaunsysteme in Willich helfen Ihnen gerne bei der Wahl der passenden Höhe.',
      },
      {
        question: 'Wie pflegeleicht ist ein Zierzaun aus Metall?',
        answer:
          'Sehr pflegeleicht. Durch die Feuerverzinkung und zusätzliche Pulverbeschichtung ist der Metallzaun dauerhaft vor Rost geschützt. Gelegentliches Abspritzen mit Wasser entfernt Schmutz und Ablagerungen zuverlässig. Ein regelmäßiger Neuanstrich wie bei Holzzäunen entfällt komplett — das spart Zeit und Kosten über viele Jahre.',
      },
      {
        question: 'Kann ich zum Zierzaun ein passendes Tor bekommen?',
        answer:
          'Ja, ABZ-Zaunsysteme bietet Drehtore und Doppeldrehtore im gleichen Design wie den Zierzaun an. So entsteht ein einheitliches, harmonisches Gesamtbild an Ihrem Grundstück. Auch Schiebetore mit Torantrieb lassen sich integrieren. Sprechen Sie uns an — wir planen Zaun und Tor aus einer Hand.',
      },
    ],
  },
  {
    slug: 'frontgitterzaun',
    title: 'Frontgitterzaun',
    shortDescription: 'Elegante Einfriedung für Vorgarten und Hauseingang',
    description:
      'Ein Frontgitterzaun von ABZ-Zaunsysteme GmbH in Willich-Neersen vereint filigrane Eleganz mit solider Stabilität — die perfekte Wahl für Ihren Hauseingang und Vorgarten. Die schlanke Gitterkonstruktion wirkt modern und einladend, ohne bei der Sicherheit Kompromisse einzugehen. Ob als stilvoller Vorgartenzaun am Eigenheim oder als repräsentative Einfriedung für Gewerbeobjekte: Der Frontgitterzaun setzt Ihr Grundstück gekonnt in Szene. Unsere Fachberater am Niederrhein begleiten Sie von der Planung über die Farbwahl bis zur fertigen Montage.',
    icon: 'Shield',
    images: [
      {
        src: '/images/produkte/frontgitterzaun/frontgitterzaun-tannengruen-wohnhaus-mit-tor.jpg',
        alt: 'Frontgitterzaun in Tannengrün (RAL 6009) mit passendem Einfahrtstor an einem Wohnhaus',
      },
      {
        src: '/images/produkte/frontgitterzaun/frontgitterzaun-anthrazit-mauerpfeiler-hecke.jpg',
        alt: 'Frontgitterzaun Anthrazitgrau mit weißen Mauerpfeilern und Hecke – elegante Einfriedung',
      },
      {
        src: '/images/produkte/frontgitterzaun/frontgitterzaun-anthrazit-vorgarten-bepflanzung.jpg',
        alt: 'Frontgitterzaun Anthrazit im modernen Vorgarten mit Natursteinpflaster und Ziergräsern',
      },
      {
        src: '/images/produkte/frontgitterzaun/frontgitterzaun-schwarz-vierkantstab-gartentor.jpg',
        alt: 'Frontgitterzaun Schwarz mit Vierkantstab-Abschluss und Gartentor auf Rasenfläche',
      },
      {
        src: '/images/produkte/frontgitterzaun/frontgitterzaun-anthrazit-gewerbe-lange-reihe.jpg',
        alt: 'Frontgitterzaun Anthrazitgrau als lange Einfriedung an einem Gewerbeobjekt',
      },
      {
        src: '/images/produkte/frontgitterzaun/frontgitterzaun-schwarz-gehweg-lichtspiel.jpg',
        alt: 'Frontgitterzaun Schwarz entlang eines Gehwegs mit dekorativem Lichtspiel',
      },
    ],
    contentBlocks: [
      {
        heading: 'Frontgitterzaun für Vorgarten und Hauseingang',
        text: 'Der Frontgitterzaun ist die erste Wahl, wenn ein moderner Zaun am Hauseingang gefragt ist, der Offenheit und Sicherheit verbindet. Die filigrane Stabkonstruktion rahmt Ihren Vorgarten stilvoll ein und lässt dabei den Blick auf Haus und Bepflanzung frei. In niedrigeren Ausführungen dient er als dekorativer Vorgartenzaun, der Ihr Grundstück elegant abgrenzt. Unsere Kunden in Willich und am Niederrhein schätzen besonders die harmonische Wirkung des Frontgitters in Kombination mit gepflegten Gärten und modernen Fassaden.',
      },
      {
        heading: 'Gitterzaun für Gewerbe — Sicherheit mit repräsentativer Wirkung',
        text: 'Für Unternehmen bietet der Frontgitterzaun die ideale Balance zwischen professionellem Erscheinungsbild und zuverlässigem Schutz. In höheren Ausführungen sichert er Bürogebäude, Lagerflächen und Firmengelände wirkungsvoll ab, ohne dabei abweisend zu wirken. In Kombination mit unseren Schiebe- oder Drehflügeltoren entsteht ein kontrollierter Zugang, der sich auch mit einem automatischen Torantrieb ausstatten lässt. ABZ-Zaunsysteme GmbH setzt seit Jahren gewerbliche Zaunprojekte in der gesamten Region Niederrhein um.',
      },
      {
        heading: 'Frontgitterzaun kaufen — Farben und Ausführungen',
        text: 'Unsere Frontgitterzäune sind in Anthrazit (RAL 7016), Moosgrün (RAL 6005) und dem edlen Farbton DB703 Eisenglimmer erhältlich — Farben, die sich harmonisch in jede Umgebung einfügen. Anthrazit ist dabei die mit Abstand beliebteste Wahl für moderne Hauseingangs-Einfriedungen. Alle farbigen Ausführungen sind feuerverzinkt und zusätzlich pulverbeschichtet, was für langanhaltenden Farbglanz und zuverlässigen Korrosionsschutz sorgt. Selbstverständlich bieten wir auch rein feuerverzinkte Varianten an.',
      },
      {
        heading: 'Montage und Zubehör für Frontgitterzäune',
        text: 'Die Montage eines Frontgitterzauns ist unkompliziert und flexibel anpassbar. Die Pfosten werden je nach Untergrund einbetoniert oder mit unseren bewährten ABZ-Fix Produkten sicher aufgedübelt. Passende Befestigungselemente und Zubehör sorgen für eine stabile und dauerhafte Installation. Ob Sie den Zaun selbst montieren oder unseren professionellen Montageservice nutzen — unsere Fachberater in Willich-Neersen helfen Ihnen bei der Planung und Materialauswahl für Ihr Projekt.',
      },
      {
        heading: 'Warum Frontgitter von ABZ-Zaunsysteme?',
        text: 'Bei ABZ-Zaunsysteme GmbH erhalten Sie hochwertige Frontgitterzäune direkt vom Fachhandel — persönlich beraten, fair kalkuliert und auf Wunsch fachgerecht montiert. Wir bieten individuelle Lösungen für Privat- und Firmenkunden, abgestimmt auf die Gegebenheiten Ihres Grundstücks. Von der ersten Beratung über die Lieferung bis zur fertigen Zaunanlage bekommen Sie bei uns alles aus einer Hand. Besuchen Sie uns in Willich-Neersen oder fordern Sie Ihr unverbindliches Angebot an.',
      },
    ],
    benefits: [
      'Filigrane, elegante Optik — moderner Zaun für Hauseingang und Vorgarten',
      'Robuste Stabgitterkonstruktion aus feuerverzinktem Stahl',
      'Feuerverzinkt und pulverbeschichtet — witterungsbeständig und praktisch wartungsfrei',
      'Erhältlich in verschiedenen Höhen für private und gewerbliche Anforderungen',
      'Beliebte Farben: Anthrazit (RAL 7016), Moosgrün (RAL 6005) und DB703 Eisenglimmer',
      'Kombinierbar mit passenden Toren, Torantrieben und Beleuchtung',
      'Professionelle Montage oder Selbstmontage mit ABZ-Fix Befestigungssystem',
    ],
    specs: [
      { label: 'Material', value: 'Stabgitterelemente aus Stahldraht, feuerverzinkt' },
      { label: 'Drahtstärke', value: 'Je nach Modell (z. B. 6 mm Horizontalstäbe, 5 mm Vertikalstäbe)' },
      { label: 'Mattendimensionen', value: 'Standardbreite 2.510 mm, verschiedene Höhen' },
      { label: 'Höhen', value: 'Diverse Höhen für Vorgarten (niedrig) bis Gewerbezaun (hoch)' },
      { label: 'Oberfläche', value: 'Feuerverzinkt, optional zusätzlich pulverbeschichtet' },
      { label: 'Farben', value: 'RAL 7016 Anthrazitgrau, RAL 6005 Moosgrün, DB703 Eisenglimmer' },
      { label: 'Pfostensystem', value: 'Passende Zaunpfosten zum Einbetonieren oder Aufdübeln' },
      { label: 'Befestigung', value: 'Einbetonieren oder Aufdübeln (ABZ-Fix V / ABZ-Fix P)' },
    ],
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen einem Frontgitterzaun und einem Doppelstabmattenzaun?',
        answer:
          'Der wesentliche Unterschied liegt in der Optik und Konstruktion: Ein Frontgitterzaun hat eine filigranere, leichtere Stabkonstruktion, die besonders elegant wirkt und für repräsentative Eingangs- und Vorgartenbereiche konzipiert ist. Der Doppelstabmattenzaun hingegen besitzt eine massivere Doppelstab-Konstruktion mit verschweißten Horizontal- und Vertikalstäben, die maximale Stabilität bietet. Für Ihren Hauseingang empfehlen unsere Berater bei ABZ-Zaunsysteme oft den Frontgitterzaun, während für Garten und Gewerbe der Doppelstabmattenzaun die erste Wahl sein kann.',
      },
      {
        question: 'Eignet sich ein Frontgitterzaun als Vorgartenzaun?',
        answer:
          'Ja, der Frontgitterzaun ist geradezu ideal als Vorgartenzaun. Seine filigrane Bauweise grenzt Ihr Grundstück stilvoll ab, ohne es optisch abzuriegeln. Der Blick auf Haus und Vorgarten bleibt frei, während der Zaun gleichzeitig als klare Grundstücksgrenze dient. Besonders in niedrigeren Höhen wirkt er einladend und modern — eine Lösung, die unsere Kunden am Niederrhein besonders schätzen.',
      },
      {
        question: 'Welche Höhen und Farben sind beim Frontgitterzaun verfügbar?',
        answer:
          'Frontgitterzäune von ABZ-Zaunsysteme sind in verschiedenen Höhen erhältlich — von niedrigen Ausführungen für den Vorgarten bis zu hohen Varianten für Gewerbezwecke. Bei den Farben stehen Anthrazit (RAL 7016), Moosgrün (RAL 6005) und DB703 Eisenglimmer zur Auswahl. Alle farbigen Modelle sind feuerverzinkt und pulverbeschichtet. Gerne beraten wir Sie persönlich in Willich-Neersen zur passenden Höhe und Farbwahl.',
      },
      {
        question: 'Wie pflegeleicht ist ein Frontgitterzaun?',
        answer:
          'Sehr pflegeleicht. Dank Feuerverzinkung und optionaler Pulverbeschichtung sind Frontgitterzäune extrem witterungsbeständig und rostfrei. Gelegentliches Abspritzen mit Wasser genügt, um Staub und Ablagerungen zu entfernen. Ein aufwendiger Neuanstrich ist über viele Jahre hinweg nicht nötig — der Zaun behält sein gepflegtes Erscheinungsbild mit minimalem Aufwand.',
      },
      {
        question: 'Kann ich einen Frontgitterzaun selbst montieren?',
        answer:
          'Ja, die Selbstmontage ist mit etwas handwerklichem Geschick gut machbar. Die Zaunpfosten werden einbetoniert oder mit ABZ-Fix aufgedübelt, anschließend werden die Gitterelemente mit den mitgelieferten Befestigungen am Pfosten montiert. Eine ausführliche Montageanleitung erhalten Sie bei Bestellung. Alternativ übernimmt unser erfahrenes Montageteam die fachgerechte Installation in der Region Willich und am gesamten Niederrhein.',
      },
      {
        question: 'Lässt sich ein Frontgitterzaun mit einem Tor kombinieren?',
        answer:
          'Ja, selbstverständlich. Wir bieten passende Einzeldreh-, Doppeldreh- und Schiebetore an, die optisch und technisch perfekt zum Frontgitterzaun passen. Auf Wunsch rüsten wir Ihr Tor zusätzlich mit einem elektrischen Torantrieb aus, sodass Sie den Zugang bequem per Fernbedienung steuern können. So entsteht ein einheitliches und funktionales Gesamtbild.',
      },
    ],
  },
  {
    slug: 'ballfangzaun',
    title: 'Ballfangzaun',
    shortDescription: 'Zuverlässige Ballfanganlagen für Sport und Freizeit',
    description:
      'Ein Ballfangzaun von ABZ-Zaunsysteme GmbH in Willich-Neersen sorgt dafür, dass Bälle sicher auf dem Spielfeld bleiben — ob auf dem Fußballplatz, Tennisplatz oder Schulhof. Als Sportplatzzaun schützt die Ballfanganlage Zuschauer, angrenzende Grundstücke und Straßen zuverlässig vor verirrten Bällen. Ob als Doppelstabmattenkonstruktion oder mit reißfestem Ballfangnetz: Unsere Fachberater am Niederrhein planen Ihre individuelle Lösung und begleiten Sie bis zur fertigen Montage.',
    icon: 'Grid3x3',
    images: [
      { src: '/images/produkte/ballfangzaun/ballfangzaun-tennisplatz-anthrazit.jpg', alt: 'Ballfangzaun mit Doppelstabmattenfüllung in Anthrazitgrau an einem Tennisplatz' },
      { src: '/images/produkte/ballfangzaun/ballfangzaun-sportplatz-moosgruen.jpg', alt: 'Ballfangzaun mit Doppelstabmattenfüllung in Moosgrün mit Eingangstor an einem Sportplatz' },
    ],
    contentBlocks: [
      {
        heading: 'Ballfangzaun für Sportanlagen und Spielfelder',
        text: 'Auf öffentlichen Sportanlagen, Vereinsplätzen und Mehrzweckspielfeldern ist ein Ballfangzaun unverzichtbar. Er hält Bälle auf dem Spielfeld, verhindert Schäden an parkenden Fahrzeugen oder Fenstern und schützt Passanten. Je nach Sportart empfehlen wir unterschiedliche Höhen: Für Fußballplätze sind 4 bis 6 m Standard, hinter Toren oft 6 m. Tennisplätze kommen häufig mit 4 m aus. Unsere Ballfanganlagen bestehen aus robusten Doppelstabmatten oder einem reißfesten Netz, das auf einem stabilen Stahlrahmen gespannt wird — beides feuerverzinkt und pulverbeschichtet für maximale Lebensdauer.',
      },
      {
        heading: 'Ballfangnetz oder Doppelstabmatte — die richtige Wahl',
        text: 'Bei der Ausführung Ihres Sportplatzzauns haben Sie die Wahl zwischen zwei bewährten Systemen. Doppelstabmatten bieten maximale Stabilität und eignen sich besonders für stark beanspruchte Bereiche wie Bolzplätze und Schulhöfe. Ein Ballfangnetz aus hochfestem Polypropylen ist leichter, winddurchlässiger und wird häufig für Tennisplätze und Golfanlagen eingesetzt. Beide Varianten lassen sich auf Pfostenhöhen bis 6 m montieren. Unsere Fachberater bei ABZ-Zaunsysteme in Willich beraten Sie, welche Lösung für Ihren Einsatzzweck optimal ist.',
      },
      {
        heading: 'Montage und Service für Ihre Ballfanganlage',
        text: 'Die Montage eines Ballfangzauns erfordert stabile Fundamente und präzise ausgerichtete Pfosten — besonders bei Höhen von 4 bis 6 Metern. ABZ-Zaunsysteme GmbH übernimmt die komplette Installation: von der Vermessung und Fundamenterstellung über das Setzen der Pfosten bis zur Montage der Matten oder Netze. Alternativ liefern wir Ihnen alle Materialien mit detaillierter Montageanleitung für die Eigenmontage. In der Region Willich-Neersen und am gesamten Niederrhein sind wir regelmäßig vor Ort.',
      },
    ],
    benefits: [
      'Zugelassen in Höhen von 4 bis 6 m — passend für Fußball, Tennis, Basketball und mehr',
      'Wahlweise Doppelstabmatte oder reißfestes Ballfangnetz als Füllungselement',
      'Feuerverzinkt und pulverbeschichtet — witterungsbeständig und langlebig',
      'Reduziert Spielunterbrechungen und schützt Zuschauer sowie Anwohner',
      'Individuelle Planung und Maßanfertigung durch ABZ-Zaunsysteme',
      'Professioneller Montageservice oder Anleitung zur Selbstmontage',
    ],
    specs: [
      { label: 'Füllungstyp', value: 'Doppelstabmatte (6/5/6 oder 8/6/8 mm) oder Ballfangnetz (PP, knotenlos)' },
      { label: 'Drahtstärke Pfosten', value: '60 x 40 mm oder 80 x 40 mm Rechteckrohr, je nach Höhe' },
      { label: 'Höhen', value: '4,00 m, 5,00 m, 6,00 m (Sonderhöhen auf Anfrage)' },
      { label: 'Pfostenabstand', value: '2,51 m (Standard bei Doppelstabmatten)' },
      { label: 'Maschenweite Netz', value: '100 x 100 mm oder 45 x 45 mm (je nach Ballgröße)' },
      { label: 'Oberfläche', value: 'Feuerverzinkt und pulverbeschichtet (RAL-Farben nach Wahl)' },
      { label: 'Pfostenmontage', value: 'Einbetonieren in Punktfundamente' },
    ],
    faqs: [
      {
        question: 'Welche Höhe sollte ein Ballfangzaun haben?',
        answer:
          'Für Fußballplätze empfehlen sich 4 bis 6 Meter, hinter den Toren idealerweise 6 m. Tennisplätze kommen in der Regel mit 4 m Höhe aus. Die optimale Höhe hängt von der Sportart, der Spielfeldgröße und der Umgebung ab — etwa der Nähe zu Straßen oder Wohnhäusern. ABZ-Zaunsysteme berät Sie individuell und plant die passende Höhe für Ihre Anlage.',
      },
      {
        question: 'Welche Maschenweite ist beim Ballfangnetz richtig?',
        answer:
          'Für Fußball und Handball genügt eine Maschenweite von 100 x 100 mm. Bei kleineren Bällen wie Tennis- oder Golfbällen sollte die Maschenweite 45 x 45 mm betragen, damit kein Ball durchschlüpft. Alternativ bieten Doppelstabmatten mit 200 x 50 mm Maschenweite bei allen Ballgrößen sicheren Rückhalt. Wir beraten Sie zur passenden Ausführung.',
      },
      {
        question: 'Eignet sich ein Ballfangzaun auch für den privaten Garten?',
        answer:
          'Ja, auch im privaten Bereich ist ein Ballfangzaun sinnvoll — etwa um den eigenen Garten vor Bällen vom Nachbargrundstück oder einem angrenzenden Spielplatz zu schützen. Für private Anwendungen reichen oft Höhen von 3 bis 4 m aus. ABZ-Zaunsysteme GmbH plant auch kleinere Anlagen individuell und achtet auf eine optisch ansprechende Integration in Ihren Garten.',
      },
      {
        question: 'Wie pflegeleicht ist ein Ballfangzaun?',
        answer:
          'Sehr pflegeleicht. Dank Feuerverzinkung und Pulverbeschichtung sind die Stahlkomponenten dauerhaft vor Korrosion geschützt. Bei einem Ballfangnetz genügt gelegentliches Prüfen der Spannseile und Befestigungen. Eine aufwendige Wartung oder ein Neuanstrich ist über viele Jahre nicht nötig. So behalten Sie eine funktionsfähige Ballfanganlage mit minimalem Aufwand.',
      },
    ],
  },
  {
    slug: 'uebersteigschutz',
    title: 'Übersteigschutz',
    shortDescription: 'Effektiver Schutz gegen unbefugtes Überklettern',
    description:
      'Übersteigschutz von ABZ-Zaunsysteme GmbH in Willich-Neersen schützt Ihren Zaun wirksam vor unbefugtem Überklettern — für mehr Sicherheit auf Firmengeländen, öffentlichen Einrichtungen und privaten Grundstücken. Ob Stacheldraht, Y-Ausleger oder abgewinkelte Pfosten: Wir bieten maßgeschneiderte Lösungen, die sich problemlos an bestehende Zäune nachrüsten lassen. Unsere Fachberater am Niederrhein beraten Sie persönlich zur passenden Variante.',
    icon: 'Shield',
    images: [],
    contentBlocks: [
      {
        heading: 'Übersteigschutz — wirksame Sicherheit für Zaun und Grundstück',
        text: 'Ein Übersteigschutz besteht aus mechanischen Maßnahmen, die direkt auf bestehende Zäune aufgesetzt werden, um ein Überklettern zu verhindern oder erheblich zu erschweren. Besonders in sensiblen Bereichen wie Industrieanlagen, Lagergeländen, Schulen oder öffentlichen Einrichtungen ist ein zuverlässiger Übersteigschutz unverzichtbar. Aber auch private Grundstückseigentümer greifen zunehmend auf diese zusätzliche Sicherungsebene zurück. ABZ-Zaunsysteme GmbH bietet verschiedene Systeme an, die individuell auf Ihren Zaun und Ihre Sicherheitsanforderungen abgestimmt werden.',
      },
      {
        heading: 'Varianten: Stacheldraht, Y-Ausleger und abgewinkelte Pfosten',
        text: 'Die bewährteste Variante ist der Stacheldraht oder NATO-Draht, der als oberer Abschluss auf bestehende Zäune gespannt wird. Er erzeugt eine klare Barriere und wirkt bereits durch sein Erscheinungsbild abschreckend. Eine ästhetisch ansprechendere Lösung bieten Y-förmige Ausleger: Sie werden am Pfostenkopf montiert und verlängern den Zaun nach oben und innen, sodass eine Überkletterer-Sperre entsteht, die optisch dezenter wirkt als Stacheldraht. Abgewinkelte Pfosten (ca. 45°) sind besonders im gewerblichen Bereich verbreitet und bieten maximale Abschreckungswirkung. Für Privatgärten empfehlen wir häufig dezente Überkraglösungen, die Sicherheit ohne übermäßige optische Härte bieten.',
      },
      {
        heading: 'Einfache Nachrüstbarkeit an bestehenden Zäunen',
        text: 'Ein entscheidender Vorteil des Übersteigschutzes ist die flexible Nachrüstbarkeit: Die meisten Systeme lassen sich ohne große Umbaumaßnahmen direkt auf vorhandene Zaunpfosten montieren. Ob Doppelstabmattenzaun, Maschendrahtzaun oder Gitterzaun — ABZ-Zaunsysteme GmbH findet für nahezu jeden Zauntyp die passende Lösung. Das spart Kosten und Zeit, da kein neuer Zaun erforderlich ist. Wir beraten Sie, welche Nachrüstlösung sich für Ihren vorhandenen Zaun am besten eignet.',
      },
      {
        heading: 'Übersteigschutz für Gewerbe und Privatgrundstücke',
        text: 'Je nach Einsatzbereich unterscheiden sich die Anforderungen an den Übersteigschutz erheblich. Für Gewerbe- und Industriegelände gelten höhere Sicherheitsstandards — hier kommen häufig NATO-Draht in Verbindung mit hohen Zäunen und Y-Ausleger zum Einsatz. Im privaten Bereich reicht oft ein dezent abgewinkelter Pfostenaufsatz, der das Überklettern erschwert, ohne den Garten wie eine Sicherheitsanlage wirken zu lassen. ABZ-Zaunsysteme GmbH berät Sie ehrlich, welche Variante für Ihren konkreten Bedarf angemessen und verhältnismäßig ist.',
      },
    ],
    benefits: [
      'Wirksame Abschreckung durch sichtbaren Übersteigschutz am Zaun',
      'Erhöhte Sicherheit für Firmengelände, Schulen und öffentliche Einrichtungen',
      'Flexibel nachrüstbar an nahezu jedem bestehenden Zauntyp',
      'Verschiedene Varianten: Stacheldraht, Y-Ausleger, abgewinkelte Pfosten',
      'Kombinierbar mit Einbruchmeldeanlage und Videoüberwachung',
      'Professionelle Montage oder Selbstmontage mit ABZ-Fix Befestigungssystem',
      'Persönliche Beratung durch ABZ-Zaunsysteme GmbH in Willich-Neersen',
    ],
    specs: [
      { label: 'Varianten', value: 'Stacheldraht, NATO-Draht, Y-Ausleger, abgewinkelte Pfosten' },
      { label: 'Winkel (Ausleger)', value: '45° oder 90° nach innen/außen' },
      { label: 'Material', value: 'Verzinkter Stahl, optional pulverbeschichtet' },
      { label: 'Montagepunkt', value: 'Auf bestehenden Zaunpfosten nachrüstbar' },
      { label: 'Einsatzbereiche', value: 'Gewerbe, Industrie, öffentliche Einrichtungen, Privatgrundstücke' },
      { label: 'Befestigung', value: 'Klemm- oder Schraubmontage an Bestandspfosten' },
    ],
    faqs: [
      {
        question: 'Was ist ein Übersteigschutz und wie funktioniert er?',
        answer:
          'Ein Übersteigschutz besteht aus mechanischen Aufbauten am oberen Abschluss eines Zauns, die ein Übersteigen verhindern oder erheblich erschweren. Typische Varianten sind Stacheldraht, Y-Ausleger oder abgewinkelte Pfosten. Diese erzeugen eine physische Barriere und wirken gleichzeitig abschreckend auf potenzielle Eindringlinge.',
      },
      {
        question: 'Kann ich einen Übersteigschutz an meinem bestehenden Zaun nachrüsten?',
        answer:
          'Ja, in den meisten Fällen ist eine Nachrüstung problemlos möglich. Die gängigen Systeme lassen sich direkt auf vorhandene Zaunpfosten klemmen oder schrauben — egal ob Doppelstabmattenzaun, Maschendrahtzaun oder Gitterzaun. ABZ-Zaunsysteme GmbH prüft Ihren Bestand und empfiehlt die passende Lösung.',
      },
      {
        question: 'Welcher Übersteigschutz eignet sich für ein Privatgrundstück?',
        answer:
          'Für private Grundstücke empfehlen wir dezente Lösungen wie abgewinkelte Pfostenaufsätze oder Y-Ausleger ohne Stacheldraht. Diese erhöhen die Sicherheit wirksam, ohne den Garten wie ein Industriegelände wirken zu lassen. Stacheldraht ist im Privatbereich seltener angemessen und kann in manchen Kommunen eingeschränkt sein — sprechen Sie uns an.',
      },
      {
        question: 'Ist Stacheldraht am Zaun erlaubt?',
        answer:
          'Stacheldraht ist in Deutschland grundsätzlich erlaubt, unterliegt aber lokalen Satzungen und Verkehrssicherungspflichten. An öffentlich zugänglichen Bereichen (z. B. Straßengrenze) sind besondere Vorsichtsmaßnahmen erforderlich. Auf gewerblichen Geländen ohne öffentlichen Zugang ist Stacheldraht weit verbreitet. ABZ-Zaunsysteme GmbH berät Sie zu den rechtlichen Rahmenbedingungen in Ihrer Region.',
      },
    ],
  },
  {
    slug: 'torantriebe',
    title: 'Torantriebe',
    shortDescription: 'Komfort durch Automatisierung',
    description:
      'ABZ-Zaunsysteme GmbH in Willich-Neersen plant, liefert und montiert Torantriebe führender Hersteller für Schiebetore und Drehflügeltore bei Privat- und Gewerbekunden in der gesamten Region Niederrhein. Für Ditec-Antriebe sind wir exklusiver Gebietspartner — für andere Torhersteller setzen wir die jeweils empfohlenen oder mitgelieferten Antriebe fachgerecht um.',
    icon: 'Zap',
    images: [],
    contentBlocks: [
      {
        heading: 'Torantriebe führender Hersteller — Ditec mit exklusivem Gebietsschutz',
        text: 'Wir arbeiten mit den führenden Torantrieb-Herstellern zusammen — denn manche Torhersteller schreiben spezifische Antriebe vor oder empfehlen diese für ihr System. Für Ditec-Antriebe sind wir exklusiver Gebietspartner in der Region, was Ihnen optimalen Service und direkte Ersatzteilversorgung garantiert. Ditec steht für zuverlässige europäische Technik, lange Lebensdauer und einfache Bedienung — von kompakten Antrieben für private Drehtore bis zu leistungsstarken Systemen für schwere Schiebetore auf Gewerbegeländen.',
      },
      {
        heading: 'Schiebetorantrieb — reibungsloser Betrieb auch bei großen Toren',
        text: 'Für Schiebetore bietet Ditec Antriebe für Torgewichte bis zu mehreren Tonnen an. Der Antrieb treibt das Tor über eine Zahnstange oder Reibungsrolle an und sorgt für sanftes, gleichmäßiges Öffnen und Schließen. Besonders bei langen Einfahrten und häufiger Nutzung macht sich die Komfortsteigerung sofort bemerkbar — kein Aussteigen mehr, kein Kraftaufwand. Auf Wunsch integrieren wir Induktionsschleifen für automatisches Öffnen bei heranfahrenden Fahrzeugen.',
      },
      {
        heading: 'Drehflügeltorantrieb — elegant und platzsparend',
        text: 'Für Drehflügeltore bietet Ditec unterirdische Antriebe (im Boden versenkt) sowie aufgesetzte Armantriebe an. Unterflur-Antriebe sind nahezu unsichtbar und ideal für repräsentative Einfahrten, bei denen die Optik zählt. Armantriebe sind günstiger und einfacher zu montieren — sie eignen sich besonders für Privatkunden. ABZ-Zaunsysteme GmbH berät Sie zur optimalen Lösung für Ihr Tor und Ihre Einfahrt.',
      },
      {
        heading: 'Steuerung und Zubehör für Ihren Torantrieb',
        text: 'Moderne Ditec-Antriebe lassen sich per Funk-Fernbedienung, Schlüsselschalter, Codekeypad, Intercom oder Smartphone-App steuern. Für Mehrfamilienhäuser und Gewerbe empfehlen sich Zugangssysteme mit Transponder-Karten oder GSM-Modul, das eine Fernbedienung per Anruf ermöglicht. Sicherheits-Lichtschranken und Warnleuchten runden die Anlage ab. ABZ-Zaunsysteme GmbH plant Ihr gesamtes Zugangssystem aus einer Hand.',
      },
    ],
    benefits: [
      'Komfortables Öffnen per Fernbedienung oder Smartphone-App',
      'Ditec-Gebietspartner — optimaler Service und direkte Ersatzteilversorgung',
      'Für Schiebetore und Drehflügeltore aller Größen geeignet',
      'Sichere Hinderniserkennung und Abschaltsicherheit',
      'Manuelle Notentriegelung bei Stromausfall immer möglich',
      'Auch nachrüstbar an bestehende Tore — kein Torneubau nötig',
      'Planung, Lieferung und Montage aus einer Hand',
    ],
    specs: [
      { label: 'Hersteller', value: 'Ditec (exklusiver Gebietspartner) sowie weitere führende Hersteller' },
      { label: 'Tortypen', value: 'Schiebetore, Drehflügeltore (ein- und zweiflügelig)' },
      { label: 'Max. Torgewicht', value: 'bis 2.000 kg (je nach Modell)' },
      { label: 'Steuerung', value: 'Fernbedienung, Schlüsselschalter, Smartphone-App, GSM-Modul' },
      { label: 'Stromversorgung', value: '230 V Netz oder Solar (optional)' },
      { label: 'Sicherheit', value: 'Hinderniserkennung, Lichtschranke (optional), Notentriegelung' },
      { label: 'Zubehör', value: 'Codekeypad, Intercom, Warnleuchte, Induktionsschleife' },
    ],
    faqs: [
      {
        question: 'Kann ich meinen bestehenden Torantrieb nachrüsten?',
        answer:
          'In den meisten Fällen ja. Ditec-Antriebe lassen sich an nahezu alle gängigen Tor-Typen nachrüsten — vorausgesetzt, das Tor ist in einem technisch einwandfreien Zustand. ABZ-Zaunsysteme GmbH prüft gerne vor Ort, welches System sich für Ihr bestehendes Tor eignet.',
      },
      {
        question: 'Was passiert bei Stromausfall?',
        answer:
          'Alle Ditec-Torantriebe verfügen über eine manuelle Notentriegelung. Bei Stromausfall kann das Tor jederzeit von Hand geöffnet werden. Für kritische Anwendungen bieten wir auch Modelle mit integriertem Akku-Puffer an, die bei Stromausfall noch mehrere Öffnungszyklen ermöglichen.',
      },
      {
        question: 'Wie laut ist ein Torantrieb?',
        answer:
          'Moderne Ditec-Antriebe arbeiten sehr leise — die Lautstärke liegt typischerweise unter 55 dB, vergleichbar mit einem normalen Gespräch. Unterflur-Antriebe für Drehflügeltore sind besonders leise, da der Antrieb im Boden versenkt ist.',
      },
      {
        question: 'Kann ich den Torantrieb per Smartphone bedienen?',
        answer:
          'Ja. Ditec bietet Steuerungsmodule an, die eine Bedienung per Smartphone-App über WLAN oder GSM ermöglichen. Auch ein automatisches Öffnen beim Heranfahren mit Ihrem Fahrzeug ist über Induktionsschleifen realisierbar. ABZ-Zaunsysteme berät Sie zu den passenden Erweiterungsmodulen.',
      },
      {
        question: 'Wie lange hält ein Torantrieb?',
        answer:
          'Hochwertige Ditec-Antriebe sind auf Millionen Betätigungszyklen ausgelegt und erreichen bei normaler Nutzung eine Lebensdauer von 15 Jahren und mehr. Regelmäßige Wartung — Schmierung der Laufschienen, Prüfung der Sicherheitselemente — verlängert die Betriebsdauer erheblich. ABZ-Zaunsysteme GmbH bietet auch Wartungsverträge an.',
      },
    ],
  },
  {
    slug: 'alu-dichtzaun',
    title: 'Aluminium-Dichtzaun',
    shortDescription: 'Moderner Aluminium-Sichtschutzzaun für Garten und Terrasse',
    description:
      'Der Aluminium-Dichtzaun von ABZ-Zaunsysteme GmbH in Willich-Neersen bietet vollständigen Sichtschutz bei minimalem Pflegeaufwand. Die leichten, aber stabilen Aluminium-Profile rosten nicht, verblassen nicht und bleiben dauerhaft formschön — ideal für Gärten, Terrassen und Balkone. Erhältlich in den Ausführungen Glatt (140×20 mm) und Lamelle (140×8 mm), wahlweise dicht oder mit Abstand montiert.',
    icon: 'Layers',
    images: [
      { src: '/images/produkte/alu-dichtzaun/alu-dichtzaun-lamelle-140-8-1.jpg', alt: 'Aluminium-Sichtschutzzaun Lamelle 140×8 in modernem Garten' },
      { src: '/images/produkte/alu-dichtzaun/alu-dichtzaun-lamelle-140-8-2.jpg', alt: 'Alu-Dichtzaun Lamelle 140×8 — Detailansicht der Lamellenstruktur' },
      { src: '/images/produkte/alu-dichtzaun/alu-dichtzaun-glatt-140-20.jpg', alt: 'Alu-Sichtschutzzaun Glatt 140×20 — elegante flächige Optik' },
      { src: '/images/produkte/alu-dichtzaun/alu-dichtzaun-glatt-mit-abstand.jpg', alt: 'Alu-Dichtzaun Glatt 140×20 mit 10 mm Abstand — luftig und modern' },
      { src: '/images/produkte/alu-dichtzaun/alu-dichtzaun-balkonabtrennung.jpg', alt: 'Aluminium-Sichtschutzelement als Balkonabtrennung' },
      { src: '/images/produkte/alu-dichtzaun/alu-dichtzaun-lamelle-balkon.jpg', alt: 'Alu-Lamellenelemente als Balkonabtrennung — filigran und stabil' },
      { src: '/images/produkte/alu-dichtzaun/alu-dichtzaun-glatt-abstand-140-8.jpg', alt: 'Aluminium-Sichtschutzzaun Glatt mit Abstand 140×8' },
      { src: '/images/produkte/alu-dichtzaun/alu-dichtzaun-lamelle-140-8-3.jpg', alt: 'Alu-Dichtzaun Lamelle 140×8 — Seitenansicht am Gartenweg' },
      { src: '/images/produkte/alu-dichtzaun/alu-dichtzaun-lamelle-140-8-4.jpg', alt: 'Alu-Lamellenzaun 140×8 — Gesamtansicht mit Bepflanzung' },
      { src: '/images/produkte/alu-dichtzaun/alu-dichtzaun-lamelle-garten.jpg', alt: 'Aluminium-Lamellenzaun als Gartensichtschutz' },
      { src: '/images/produkte/alu-dichtzaun/alu-dichtzaun-lamelle-modern.jpg', alt: 'Moderner Alu-Sichtschutzzaun Lamelle in zeitgemäßer Gartenanlage' },
      { src: '/images/produkte/alu-dichtzaun/alu-dichtzaun-glatt-140-20-ausfuehrung.jpg', alt: 'Aluminium-Sichtschutzzaun Glatt 140×20 — Ausführung mit Pfosten' },
    ],
    contentBlocks: [
      {
        heading: 'Aluminium-Sichtschutzzaun — dauerhaft schön, wartungsfrei',
        text: 'Aluminium ist das ideale Material für einen hochwertigen Sichtschutzzaun: Es rostet nicht, verwittert nicht und behält seine Form dauerhaft bei — ohne Streichen, Lasieren oder Imprägnieren. Im Vergleich zu Holz-Sichtschutzzäunen ist der Alu-Dichtzaun langfristig erheblich günstiger im Unterhalt. Unsere Aluminium-Profile sind aus legiertem Strangpress-Aluminium gefertigt und pulverbeschichtet — für eine Oberfläche, die auch nach Jahren noch wie neu aussieht. Bei ABZ-Zaunsysteme GmbH in Willich-Neersen finden Sie Alu-Sichtschutzzäune in verschiedenen Ausführungen und Farben.',
      },
      {
        heading: 'Ausführungen: Glatt und Lamelle — dicht oder mit Abstand',
        text: 'Der Aluminium-Dichtzaun ist in zwei Grundausführungen erhältlich: Glatt (140×20 mm Vollprofil, massive flächige Optik) und Lamelle (140×8 mm Lamellenprofil, leichte luftige Wirkung). Beide Varianten können dicht gesetzt werden — für maximalen Sichtschutz — oder mit einem definierten Abstand von 10 mm montiert werden, was den Zaun optisch leichter wirken lässt und gleichzeitig eine dezente Luftzirkulation ermöglicht. Für Balkone und Terrassen empfehlen wir die Lamellen-Ausführung, die trotz Sichtschutz ein Gefühl von Offenheit bewahrt.',
      },
      {
        heading: 'Alu-Dichtzaun als Balkonabtrennung',
        text: 'Neben dem klassischen Einsatz als Gartenzaun eignen sich unsere Aluminium-Elemente hervorragend als Balkonabtrennung — insbesondere in Reihenhäusern und Mehrfamilienhäusern. Die schlanken Profile lassen sich leicht an bestehenden Balkonbrüstungen befestigen und schaffen privaten Freiraum ohne das Balkonklima zu beeinträchtigen. Das geringe Gewicht von Aluminium ist hier ein entscheidender Vorteil gegenüber Stahl- oder Betonlösungen. Sprechen Sie uns an — wir messen und planen auch für ungewöhnliche Balkonmaße.',
      },
      {
        heading: 'Farben, Montage und Individualplanung',
        text: 'Unsere Aluminium-Sichtschutzzäune sind in verschiedenen Pulverbeschichtungsfarben erhältlich — von klassischem Anthrazit über Weiß und Moosgrün bis zu Sonderfarben nach RAL-Fächer. Die Montage erfolgt in Aluminium- oder Stahl-Pfosten, die einbetoniert oder mit Bodenhülsen aufgestellt werden. ABZ-Zaunsysteme GmbH plant und montiert Ihren Alu-Sichtschutzzaun in der Region Willich-Neersen und am gesamten Niederrhein — auf Wunsch komplett aus einer Hand.',
      },
    ],
    benefits: [
      'Absolut wartungsfrei — kein Streichen, kein Rosten, kein Verwittern',
      'Wählen zwischen Glatt (140×20 mm) und Lamelle (140×8 mm)',
      'Dicht oder mit Abstand montierbar — für unterschiedliche Sichtschutz-Intensitäten',
      'Geeignet als Gartenzaun, Terrassenabtrennung und Balkonverkleidung',
      'Pulverbeschichtet in vielen RAL-Farben erhältlich',
      'Leichtes Aluminium erleichtert Transport und Montage',
      'Langlebig und dauerhaft wertsteigernd für Ihr Grundstück',
    ],
    specs: [
      { label: 'Material', value: 'Aluminium, stranggepress, pulverbeschichtet' },
      { label: 'Ausführung Glatt', value: '140 × 20 mm Vollprofil, dicht oder mit 10 mm Abstand' },
      { label: 'Ausführung Lamelle', value: '140 × 8 mm Lamellenprofil, dicht oder mit Abstand' },
      { label: 'Farben', value: 'Anthrazit, Weiß, Moosgrün, weitere RAL-Farben auf Anfrage' },
      { label: 'Pfostensystem', value: 'Aluminium- oder Stahl-Pfosten, einbetoniert oder Bodenhülse' },
      { label: 'Einsatzbereiche', value: 'Garten, Terrasse, Balkon, Carport-Verkleidung' },
      { label: 'Pflegeanforderung', value: 'Nahezu wartungsfrei — gelegentliches Abwischen genügt' },
    ],
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen Glatt und Lamelle beim Alu-Dichtzaun?',
        answer:
          'Die Ausführung Glatt (140×20 mm) besteht aus breiten Vollprofilen, die eine flächige, massive Optik erzeugen und maximalen Sichtschutz bieten. Die Lamelle (140×8 mm) verwendet schmalere, flachere Profile, die eine leichtere, strukturierte Optik haben. Beide sind auf Wunsch dicht oder mit 10 mm Abstand montierbar.',
      },
      {
        question: 'Muss ich einen Aluminium-Sichtschutzzaun streichen oder pflegen?',
        answer:
          'Nein — das ist der große Vorteil gegenüber Holz. Pulverbeschichtetes Aluminium rostet nicht, verwittert nicht und behält seine Farbe dauerhaft. Gelegentliches Abwischen mit einem feuchten Tuch genügt, um den Zaun sauber zu halten. Eine Nachbehandlung oder Neuanstrich ist über viele Jahre nicht erforderlich.',
      },
      {
        question: 'Kann ich einen Alu-Dichtzaun auch als Balkonabtrennung verwenden?',
        answer:
          'Ja, unsere Aluminium-Sichtschutzelemente sind ideal für Balkone geeignet. Das geringe Gewicht ist auf Balkonen ein entscheidender Vorteil. Die Elemente lassen sich an bestehenden Brüstungen befestigen. ABZ-Zaunsysteme plant und montiert auch individuelle Sonderlösungen für Balkone jeder Größe.',
      },
      {
        question: 'Welche Höhen sind beim Alu-Dichtzaun verfügbar?',
        answer:
          'Standardmäßig sind Höhen von 80 cm bis 200 cm erhältlich. Sonderhöhen sind auf Anfrage möglich. Für Vorgärten empfehlen wir 100–120 cm, für vollständigen Sichtschutz auf Terrassen und in Gärten 160–180 cm.',
      },
    ],
  },
  {
    slug: 'metall-dichtzaun',
    title: 'Metall-Dichtzaun',
    shortDescription: 'Massiver Metallzaun mit vollständigem Sichtschutz',
    description:
      'Der Metall-Dichtzaun von ABZ-Zaunsysteme GmbH in Willich-Neersen kombiniert solide Stabilität mit vollständigem Sichtschutz — ideal für Gärten, Grundstückseinfriedungen und gewerbliche Anlagen. Die robusten Stahlprofile sind feuerverzinkt und pulverbeschichtet und bieten dauerhaften Schutz vor Witterung und Korrosion. Als Alterative zum Holz- oder Alu-Sichtschutzzaun setzt der Metall-Dichtzaun auf maximale Stabilität und Langlebigkeit.',
    icon: 'Eye',
    images: [
      { src: '/images/produkte/metall-dichtzaun/metall-dichtzaun-aw10104.jpg', alt: 'Metall-Dichtzaun Modell AW.10.104 — robuster Stahl-Sichtschutzzaun' },
      { src: '/images/produkte/metall-dichtzaun/metall-dichtzaun-lamelle.jpg', alt: 'Metall-Dichtzaun Lamelle AW10.229 — strukturierte Lamellenoptik in Stahl' },
      { src: '/images/produkte/metall-dichtzaun/metall-dichtzaun-anlage.jpg', alt: 'Metall-Sichtschutzzaun an einer modernen Gartenanlage' },
      { src: '/images/produkte/metall-dichtzaun/metall-dichtzaun-modell.jpg', alt: 'Metall-Dichtzaun Modell AW.10.104 — Detailansicht des Stahlprofils' },
    ],
    contentBlocks: [
      {
        heading: 'Metall-Dichtzaun — Sichtschutz mit maximaler Stabilität',
        text: 'Der Metall-Dichtzaun ist die robusteste Variante unter den Sichtschutzzäunen. Massivere Stahlprofile, feuerverzinkt und pulverbeschichtet, bieten eine Standfestigkeit, die weder Holz noch Aluminium erreichen. Besonders auf windexponierten Grundstücken oder in Bereichen mit höherem Vandalismus-Risiko ist der Metall-Dichtzaun die zuverlässigste Wahl. Bei ABZ-Zaunsysteme GmbH in Willich-Neersen finden Sie Metall-Dichtzäune in verschiedenen Profilvarianten und Farben.',
      },
      {
        heading: 'Profilvarianten: AW.10.104 und Lamelle AW10.229',
        text: 'Unser Sortiment umfasst die bewährten AW-Profilsysteme: Das Modell AW.10.104 mit flächigen Stahlprofilen für eine cleane, moderne Optik und vollständigen Sichtschutz. Die Lamellen-Ausführung AW10.229 erzeugt durch ihre strukturierte Oberfläche einen lebendigen optischen Eindruck, der sich harmonisch in Gartenanlagen einfügt. Beide Systeme sind aus verzinktem Stahl gefertigt und werden auf Wunsch in RAL-Wunschfarben pulverbeschichtet — für ein individuelles Erscheinungsbild, das zu Ihrem Haus und Garten passt.',
      },
      {
        heading: 'Montage und Pflege des Metall-Dichtzauns',
        text: 'Die Montage erfolgt in Stahl-Pfosten, die einbetoniert oder mit ABZ-Fix Produkten aufgedübelt werden. Dank der Feuerverzinkung und Pulverbeschichtung ist der Pflegeaufwand minimal — gelegentliches Abwischen oder Abspritzen hält den Zaun in bestem Zustand. Im Gegensatz zu Holzzäunen entfällt das regelmäßige Streichen oder Ölen vollständig. ABZ-Zaunsysteme GmbH übernimmt die komplette Montage in der Region Willich-Neersen und am Niederrhein.',
      },
    ],
    benefits: [
      'Maximale Stabilität durch massive Stahlprofile — robust auch auf windexponierten Grundstücken',
      'Vollständiger Sichtschutz durch dicht gesetzte Profile',
      'Feuerverzinkt und pulverbeschichtet — dauerhafter Korrosionsschutz',
      'Wartungsarm — kein Streichen oder Ölen wie bei Holz',
      'Erhältlich in verschiedenen Profilvarianten (flach, Lamelle)',
      'Kombinierbar mit passenden Toren und Torantrieben',
      'Professionelle Planung und Montage durch ABZ-Zaunsysteme',
    ],
    specs: [
      { label: 'Material', value: 'Stahl, feuerverzinkt und pulverbeschichtet' },
      { label: 'Modelle', value: 'AW.10.104 (Flachprofil), AW10.229 (Lamelle)' },
      { label: 'Oberfläche', value: 'Feuerverzinkt + Pulverbeschichtung in RAL-Farben' },
      { label: 'Farben', value: 'Anthrazit, Schwarz, Moosgrün, weitere RAL-Farben auf Anfrage' },
      { label: 'Pfostensystem', value: 'Stahlpfosten, einbetoniert oder Aufdübeln (ABZ-Fix)' },
      { label: 'Einsatzbereiche', value: 'Garten, Grundstückseinfriedung, Gewerbe' },
    ],
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen Metall-Dichtzaun und Alu-Dichtzaun?',
        answer:
          'Der Metall-Dichtzaun ist aus Stahl gefertigt und damit deutlich schwerer und stabiler als der Aluminium-Dichtzaun. Er eignet sich besonders für windexponierte Lagen und Bereiche mit höheren Stabilitätsanforderungen. Der Alu-Dichtzaun ist leichter, rostfrei und pflegeleichter — ideal für Terrassen und Balkone. Welches Material besser passt, hängt von Ihrem Einsatzort und Ihren Anforderungen ab. Unsere Berater bei ABZ-Zaunsysteme helfen Ihnen bei der Entscheidung.',
      },
      {
        question: 'Rostet ein Metall-Dichtzaun?',
        answer:
          'Nein, nicht wenn er fachgerecht ausgeführt ist. Unsere Metall-Dichtzäune sind feuerverzinkt und zusätzlich pulverbeschichtet. Diese doppelte Schutzschicht verhindert Korrosion über viele Jahre zuverlässig. Bei mechanischen Beschädigungen (Kratzer, Schläge) sollten diese zeitnah mit Lackstift versiegelt werden, um Rostbildung an der Schadensstelle vorzubeugen.',
      },
      {
        question: 'Welche Höhen sind beim Metall-Dichtzaun verfügbar?',
        answer:
          'Standardhöhen reichen von 80 cm bis 200 cm. Für vollständigen Sichtschutz empfehlen wir mindestens 160–180 cm. Sonderhöhen sind auf Anfrage erhältlich. ABZ-Zaunsysteme GmbH berät Sie zur optimalen Höhe für Ihren konkreten Einsatzort.',
      },
    ],
  },
  {
    slug: 'zaunbeleuchtung',
    title: 'Zaunleuchten',
    shortDescription: 'Solar-Pfostenleuchten Modell Kappa für Zaun und Einfahrt',
    description:
      'Zaunleuchten von ABZ-Zaunsysteme GmbH in Willich-Neersen setzen Ihren Zaun, Ihre Einfahrt und Ihren Garten stimmungsvoll in Szene — ohne Stromanschluss und ohne laufende Energiekosten. Unser Highlight: die Solar-Pfostenleuchte Modell Kappa, die sich tagsüber selbst auflädt und automatisch in der Nacht leuchtet. Erhältlich in verschiedenen Farben und Ausführungen für Frontgitterzäune, Doppelstabmattenzäune und alle gängigen Pfostengrößen.',
    icon: 'Sparkles',
    images: [
      { src: '/images/produkte/zaunbeleuchtung/zaunbeleuchtung-solar-alle-farben.jpg', alt: 'Solar-Pfostenbeleuchtung in allen verfügbaren Farben — Übersicht' },
      { src: '/images/produkte/zaunbeleuchtung/zaunbeleuchtung-solar-frontgitterzaun.jpg', alt: 'Solar-Pfostenbeleuchtung montiert auf Frontgitterzaun — stimmungsvolles Licht' },
      { src: '/images/produkte/zaunbeleuchtung/zaunbeleuchtung-solar-weiss.jpg', alt: 'Solar-Pfostenleuchte in Weiß auf Zaunpfosten' },
      { src: '/images/produkte/zaunbeleuchtung/zaunbeleuchtung-solar-rot.jpg', alt: 'Solar-Pfostenleuchte in Rot — dekorativer Akzent am Zaun' },
      { src: '/images/produkte/zaunbeleuchtung/zaunbeleuchtung-solar-rot-weiss.jpg', alt: 'Solar-Pfostenbeleuchtung Rot-Weiß — farbige Akzentbeleuchtung' },
      { src: '/images/produkte/zaunbeleuchtung/zaunbeleuchtung-pfosten-1.jpg', alt: 'Zaunbeleuchtung auf Pfosten — nächtliche Stimmungsbeleuchtung' },
      { src: '/images/produkte/zaunbeleuchtung/zaunbeleuchtung-pfosten-garten.jpg', alt: 'Pfostenleuchte am Gartenzaun — dekoratives Nachtlicht' },
      { src: '/images/produkte/zaunbeleuchtung/zaunbeleuchtung-anlage.jpg', alt: 'Beleuchtete Zaunanlage im Abendlicht' },
      { src: '/images/produkte/zaunbeleuchtung/zaunbeleuchtung-solar-rot-2.jpg', alt: 'Solar-Pfostenleuchte Rot — Detailansicht' },
      { src: '/images/produkte/zaunbeleuchtung/zaunbeleuchtung-solar-weiss-2.jpg', alt: 'Solar-Pfostenleuchte Weiß — Detailansicht' },
      { src: '/images/produkte/zaunbeleuchtung/zaunbeleuchtung-kappa-alle-farben-collage.jpg', alt: 'Solar-Pfostenleuchte Kappa in allen Farben — Blau, Grün, Orange, Warmweiß, Rot' },
      { src: '/images/produkte/zaunbeleuchtung/zaunbeleuchtung-kappa-alle-farben-collage-2.jpg', alt: 'Kappa Zaunleuchten Farbübersicht — Orange, Blau, Warmweiß, Grün, Rot' },
      { src: '/images/produkte/zaunbeleuchtung/zaunbeleuchtung-zaun-nacht-atmosphaere.jpg', alt: 'Beleuchteter Frontgitterzaun in der Abenddämmerung mit mehreren Kappa-Leuchten' },
      { src: '/images/produkte/zaunbeleuchtung/zaunbeleuchtung-zaun-nacht-strasse.jpg', alt: 'Zaunanlage nachts beleuchtet — Kappa Solar-Pfostenleuchten an langer Zaunstrecke' },
      { src: '/images/produkte/zaunbeleuchtung/zaunbeleuchtung-kappa-detail-nacht.jpg', alt: 'Kappa Zaunleuchte Detailansicht — weißes LED-Licht in der Nacht' },
    ],
    contentBlocks: [
      {
        heading: 'Zaunleuchten Modell Kappa — Licht ohne Stromanschluss',
        text: 'Die Solar-Pfostenleuchte Modell Kappa ist die unkomplizierte Lösung für dekoratives Licht am Zaun, auf der Einfahrt oder im Garten — ganz ohne Erdkabel, Elektriker und Stromkosten. Die integrierten Solarpanels laden die Akkus tagsüber automatisch auf; sobald es dunkel wird, schaltet sich die Leuchte selbst ein. Bei ABZ-Zaunsysteme GmbH in Willich-Neersen führen wir das Modell Kappa in verschiedenen Farben und Ausführungen.',
      },
      {
        heading: 'Für alle gängigen Zaunpfosten — einfach aufstecken',
        text: 'Unsere Solar-Pfostenleuchten passen auf die gängigen Pfostenabmessungen von Doppelstabmattenzäunen, Frontgitterzäunen und anderen Zauntypen. Die Montage ist denkbar einfach: Leuchte aufstecken, fertig — kein Bohren, kein Kabel, kein Werkzeug nötig. Das macht sie auch ideal zum Nachrüsten an bestehenden Zaunanlagen. Für Ecken, Einfahrten und Hausnummernschilder empfehlen sich besonders helle Ausführungen; für die Gartengestaltung eignen sich farbige Varianten als stimmungsvoller Akzent.',
      },
      {
        heading: 'Farben und Ausführungen — von dezent bis bunt',
        text: 'Die Solar-Pfostenleuchten sind in verschiedenen Farben erhältlich: Warmweiß für gemütliches, neutrales Licht sowie dekoratives Rot, Blau, Grün und Orange für auffällige Farbakzente und atmosphärische Stimmung im Garten. Die Gehäuse sind aus witterungsbeständigem Material gefertigt und für den dauerhaften Außeneinsatz ausgelegt. ABZ-Zaunsysteme berät Sie zur passenden Auswahl für Ihren Garten und Zaun.',
      },
    ],
    benefits: [
      'Kein Stromanschluss nötig — vollständig solar betrieben',
      'Automatisches Ein- und Ausschalten bei Dunkelheit',
      'Passt auf alle gängigen Zaunpfosten — Montage ohne Werkzeug',
      'Ideal zum Nachrüsten an bestehenden Zaunanlagen',
      'Erhältlich in Warmweiß, Rot, Blau, Grün und Orange',
      'Modell Kappa — erprobt für den dauerhaften Außeneinsatz',
      'Dekoratives Licht für Zaun, Einfahrt und Garten',
    ],
    specs: [
      { label: 'Typ', value: 'Solar-Pfostenleuchte' },
      { label: 'Hersteller', value: 'Paulmann' },
      { label: 'Lichtquelle', value: 'LED (warmweiß / kaltweiß)' },
      { label: 'Energieversorgung', value: 'Integriertes Solarpanel + Akku' },
      { label: 'Steuerung', value: 'Automatisch (Dämmerungssensor)' },
      { label: 'Farben', value: 'Warmweiß, Rot, Blau, Grün, Orange' },
      { label: 'Montage', value: 'Aufstecken auf Zaunpfosten (ohne Werkzeug)' },
      { label: 'Einsatz', value: 'Außenbereich, witterungsbeständig' },
    ],
    faqs: [
      {
        question: 'Brauche ich einen Stromanschluss für die Zaunbeleuchtung?',
        answer:
          'Nein. Unsere Solar-Pfostenleuchten sind vollständig autark — sie laden sich tagsüber über das integrierte Solarpanel auf und leuchten automatisch in der Nacht. Weder Kabel noch Elektriker sind erforderlich. Das macht sie zur einfachsten Möglichkeit, nachträglich Licht an Ihren Zaun zu bringen.',
      },
      {
        question: 'Auf welche Zaunpfosten passen die Leuchten?',
        answer:
          'Unsere Leuchten sind für alle gängigen 60×40 mm Pfostendurchmesser von Doppelstabmattenzäunen und Frontgitterzäunen ausgelegt. Sie werden einfach aufgesteckt — ohne Bohren oder Schrauben. Sprechen Sie uns an, wenn Sie unsicher sind, ob Ihre Pfostengröße passt.',
      },
      {
        question: 'Wie lange leuchten die Solar-Pfostenleuchten pro Nacht?',
        answer:
          'Bei voller Ladung (ca. 8 Sonnenstunden) leuchten die Modelle mindestens 14 Stunden. Im Winter oder bei bewölktem Wetter ist die Leuchtdauer deutlich eingeschränkt. Die Leuchten schalten sich bei Dämmerung automatisch ein und gehen aus, wenn die Kapazität erschöpft ist oder es wieder hell wird.',
      },
      {
        question: 'Kann ich die Zaunbeleuchtung an bestehenden Zäunen nachrüsten?',
        answer:
          'Ja, das Nachrüsten ist denkbar einfach. Da keine Kabel oder Elektriker benötigt werden, können die Leuchten sofort auf bestehende Pfosten aufgesteckt werden. Das macht sie zu einem der beliebtesten Zubehörprodukte bei unseren Kunden.',
      },
      {
        question: 'Welche Farben sind bei der Solar-Pfostenbeleuchtung erhältlich?',
        answer:
          'Unsere Leuchten sind in Warmweiß, Rot, Blau, Grün und Orange erhältlich. Warmweiß eignet sich für neutrales, helles Licht an Einfahrten und Hauseingängen; Rot, Blau, Grün und Orange setzen dekorative Farbakzente im Garten und schaffen entsprechende Atmosphäre. ABZ-Zaunsysteme berät Sie gerne zur passenden Auswahl.',
      },
    ],
  },
  {
    slug: 'briefkastenanlagen',
    title: 'Briefkastenanlagen',
    shortDescription: 'Briefkästen und Multifunktionsboxen für Zaunanlagen',
    description:
      'Briefkastenanlagen von ABZ-Zaunsysteme GmbH in Willich-Neersen — passgenau integriert in Ihre Zaunanlage. Ob freistehende Briefkastensäule, Wandmontage oder direkte Integration in den Zaun: Wir beraten Sie zur passenden Lösung und liefern alles aus einer Hand. Weitere Produktinformationen folgen in Kürze — sprechen Sie uns gerne direkt an.',
    icon: 'Mail',
    images: [
      { src: '/images/produkte/briefkastenanlagen/briefkasten-zaunanlage.jpg', alt: 'Briefkasten integriert in Zaunanlage' },
      { src: '/images/produkte/briefkastenanlagen/briefkastensaeule.jpg', alt: 'Freistehende Briefkastensäule' },
      { src: '/images/produkte/briefkastenanlagen/briefkasten-montage.jpg', alt: 'Briefkasten Montage' },
      { src: '/images/produkte/briefkastenanlagen/multifunktionsbox-saule.jpg', alt: 'Multifunktionsbox-Säule mit Video-Gegensprechanlage, Briefkasten und Paketfach, integriert in Alu-Dichtzaun anthrazitgrau' },
      { src: '/images/produkte/briefkastenanlagen/multifunktionsbox-saule-2.jpg', alt: 'Integrierte Briefkastensäule in Alu-Dichtzaun anthrazitgrau mit Eingangstor' },
    ],
    contentBlocks: [
      {
        heading: 'Briefkastenanlagen — passgenau für Ihren Zaun',
        text: 'Eine Briefkastenanlage ist mehr als nur ein Postempfänger — sie ist das erste, was Besucher und Lieferanten an Ihrem Grundstück wahrnehmen. ABZ-Zaunsysteme GmbH bietet Briefkastenlösungen an, die sich nahtlos in Ihre Zaunanlage integrieren: als Teil des Einfahrtstors, als freistehende Säule oder zur Wandmontage. So entsteht ein harmonisches Gesamtbild vom Zaun bis zum Briefkasten — alles aus einer Hand, alles aufeinander abgestimmt.',
      },
      {
        heading: 'Multifunktionsbox — Briefkasten, Paketfach und Gegensprechanlage in einer Säule',
        text: 'Die Multifunktionsbox ist unsere Premium-Lösung für moderne Grundstückseingänge: Eine freistehende Säule in Anthrazitgrau vereint Briefkasteneinwurf, Paketfach, Video-Gegensprechanlage und Hausnummer — alles passgenau in Ihre Alu-Dichtzaun-Anlage integriert. Das Ergebnis ist ein cleaner, hochwertiger Eingang ohne Kabelchaos und ohne Kompromisse beim Design. Erhältlich als Kombination mit unseren Alu-Dichtzäunen und Toren in allen Standardfarben.',
      },
      {
        heading: 'Individuelle Beratung',
        text: 'Sprechen Sie uns gerne direkt an — wir beraten Sie persönlich zu allen verfügbaren Modellen, Größen und Integrationsmöglichkeiten. Unser Team in Willich-Neersen steht Ihnen MO–FR von 08:30–17:00 Uhr zur Verfügung.',
      },
    ],
    benefits: [
      'Nahtlose Integration in bestehende oder neue Zaunanlage',
      'Freistehend, wandmontiert oder in Einfahrtstor integrierbar',
      'Passende Farben und Materialien zum Zaundesign erhältlich',
      'Persönliche Beratung — Termin unter +49 21 56 774 50 50',
    ],
    specs: [
      { label: 'Ausführungen', value: 'Freistehend, Wandmontage, Zaunintegration' },
      { label: 'Beratung', value: 'MO–FR 08:30–17:00 Uhr in Willich-Neersen' },
    ],
    faqs: [
      {
        question: 'Kann ein Briefkasten direkt in mein Einfahrtstor integriert werden?',
        answer:
          'Ja, das ist möglich. ABZ-Zaunsysteme GmbH plant und fertigt Einfahrtstore, die Briefkästen oder Multifunktionsboxen direkt integrieren können. Sprechen Sie uns an — wir beraten Sie zu den Möglichkeiten und passenden Lösungen für Ihr Grundstück.',
      },
      {
        question: 'Welche Briefkasten-Modelle sind erhältlich?',
        answer:
          'Unser Sortiment wird derzeit auf dieser Seite ergänzt. Für eine aktuelle Übersicht aller verfügbaren Modelle kontaktieren Sie uns bitte direkt unter +49 21 56 774 50 50 oder per E-Mail an info@abz-zaun.de.',
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

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) {
    return { title: 'Produkt nicht gefunden' };
  }
  return {
    title: category.title,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);

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

      <ProductPageClient
        title={category.title}
        images={category.images}
        benefits={category.benefits}
        contentBlocks={category.contentBlocks}
        specs={category.specs}
        faqs={category.faqs}
        iconPlaceholder={<Icon className="mx-auto h-16 w-16 text-charcoal/10" />}
      />
    </>
  );
}
