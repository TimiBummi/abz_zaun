import type { Metadata } from 'next';
import Container from '@/components/Container';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen',
};

export default function AGBPage() {
  return (
    <>
      <Section background="warm" className="py-12 sm:py-16">
        <Container>
          <h1 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Allgemeine Geschäftsbedingungen
          </h1>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-3xl">

            <p className="text-body-text leading-relaxed mb-4">
              der ABZ-Zaunsysteme GmbH, Virmondstrasse 137, D-47877 Willich-Neersen
              (nachfolgend „ABZ" oder „Auftragnehmer" genannt)
            </p>

            {/* § 1 Geltungsbereich */}
            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              § 1 Geltungsbereich
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der
              ABZ-Zaunsysteme GmbH und ihren Kunden (nachfolgend „Auftraggeber" genannt) über
              die Lieferung von Zaunsystemen, Toren, Sichtschutzelementen und Zubehör sowie die
              Erbringung von Montage- und Serviceleistungen.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Abweichende Geschäftsbedingungen des Auftraggebers werden nicht anerkannt, es sei
              denn, ABZ stimmt ihrer Geltung ausdrücklich schriftlich zu. Diese AGB gelten auch dann,
              wenn ABZ in Kenntnis entgegenstehender oder abweichender Bedingungen des
              Auftraggebers die Leistung vorbehaltlos ausführt.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Für Bestellungen über unseren Online-Shop unter zaunhandel.online gelten gesonderte
              AGB, die dort einsehbar sind.
            </p>

            {/* § 2 Vertragsschluss */}
            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              § 2 Vertragsschluss
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              Unsere Angebote sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch
              unsere schriftliche Auftragsbestätigung oder durch die tatsächliche Ausführung der
              Leistung zustande.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Der Auftraggeber ist an seine Bestellung als Vertragsangebot für die Dauer von zwei
              Wochen nach Zugang bei uns gebunden. Die in Prospekten, Katalogen und auf der
              Website enthaltenen Angaben über Produkte (z.&nbsp;B. Abbildungen, Maße, Gewichte)
              sind nur annähernd maßgeblich, soweit sie nicht ausdrücklich als verbindlich
              gekennzeichnet sind.
            </p>

            {/* § 3 Preise und Zahlung */}
            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              § 3 Preise und Zahlung
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              Alle Preise verstehen sich in Euro zuzüglich der jeweils gültigen gesetzlichen
              Mehrwertsteuer. Individuelle Angebote basieren auf den bei der Besichtigung
              festgestellten örtlichen Gegebenheiten. Ändern sich diese bis zur Ausführung, behält
              sich ABZ eine Preisanpassung vor.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zahlbar,
              sofern nicht schriftlich etwas anderes vereinbart wurde. Bei Montageaufträgen ist eine
              Anzahlung in Höhe von 50 % des Auftragswertes bei Auftragserteilung fällig. Der
              Restbetrag ist nach Abnahme der Leistung zu zahlen.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Kommt der Auftraggeber in Zahlungsverzug, ist ABZ berechtigt, Verzugszinsen in
              gesetzlicher Höhe zu berechnen. Die Geltendmachung eines weitergehenden
              Verzugsschadens bleibt vorbehalten.
            </p>

            {/* § 4 Lieferung */}
            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              § 4 Lieferung
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              Liefertermine und -fristen sind nur verbindlich, wenn sie von ABZ ausdrücklich
              schriftlich bestätigt wurden. Die Lieferfrist beginnt mit dem Zugang der
              Auftragsbestätigung, jedoch nicht vor Klärung aller technischen und gestalterischen
              Einzelheiten sowie vor Eingang einer vereinbarten Anzahlung.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Teillieferungen sind zulässig, soweit sie dem Auftraggeber zumutbar sind. Höhere
              Gewalt und unvorhersehbare Hindernisse, die ABZ nicht zu vertreten hat, berechtigen
              ABZ, die Lieferung um die Dauer der Behinderung zu verschieben.
            </p>

            {/* § 5 Montage */}
            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              § 5 Montage
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              Soweit eine Montage vereinbart ist, hat der Auftraggeber sicherzustellen, dass die
              Montagestelle frei zugänglich, eben und für die Montage vorbereitet ist. Der genaue
              Verlauf der Zaunlinie ist vom Auftraggeber vor Montagebeginn festzulegen und zu
              kennzeichnen.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Der Auftraggeber ist verpflichtet, vor Montagebeginn über vorhandene Leitungen,
              Kanäle und sonstige unterirdische Einrichtungen zu informieren. Schäden, die auf
              fehlende oder fehlerhafte Angaben des Auftraggebers zurückzuführen sind, gehen zu
              dessen Lasten.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Die Abnahme der Montageleistung erfolgt nach Fertigstellung. Der Auftraggeber ist
              zur Abnahme verpflichtet, sobald ABZ die Fertigstellung anzeigt. Unwesentliche Mängel
              berechtigen nicht zur Verweigerung der Abnahme.
            </p>

            {/* § 6 Gewährleistung */}
            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              § 6 Gewährleistung
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              Mängelansprüche des Auftraggebers setzen voraus, dass dieser erkennbare Mängel
              unverzüglich, spätestens innerhalb von zwei Wochen nach Lieferung bzw. Abnahme,
              schriftlich anzeigt. Bei berechtigten Mängelrügen leistet ABZ nach eigener Wahl
              Nachbesserung oder Ersatzlieferung.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Die Gewährleistungsfrist beträgt bei Lieferungen zwei Jahre ab Übergabe, bei
              Montageleistungen fünf Jahre ab Abnahme. Für gebrauchte Waren ist die
              Gewährleistung auf ein Jahr begrenzt, soweit gesetzlich zulässig.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Gewährleistungsansprüche bestehen nicht bei natürlichem Verschleiß, unsachgemäßer
              Behandlung oder eigenmächtigen Veränderungen durch den Auftraggeber oder Dritte.
            </p>

            {/* § 7 Haftung */}
            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              § 7 Haftung
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              ABZ haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder
              der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung
              beruhen, sowie für sonstige Schäden, die auf einer vorsätzlichen oder grob
              fahrlässigen Pflichtverletzung beruhen.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten (Kardinalpflichten)
              ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt. Im Übrigen
              ist die Haftung für leichte Fahrlässigkeit ausgeschlossen.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Die vorstehenden Haftungsbeschränkungen gelten nicht für Ansprüche nach dem
              Produkthaftungsgesetz sowie bei Übernahme von Garantien.
            </p>

            {/* § 8 Eigentumsvorbehalt */}
            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              § 8 Eigentumsvorbehalt
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              Die gelieferte Ware bleibt bis zur vollständigen Bezahlung aller Forderungen aus der
              Geschäftsbeziehung Eigentum von ABZ. Der Auftraggeber ist verpflichtet, die Ware
              pfleglich zu behandeln und bis zur vollständigen Bezahlung gegen Feuer-, Wasser- und
              Diebstahlschäden ausreichend zum Neuwert zu versichern.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Bei vertragswidrigem Verhalten des Auftraggebers, insbesondere bei Zahlungsverzug,
              ist ABZ berechtigt, die Ware auf Kosten des Auftraggebers zurückzunehmen. Die
              Zurücknahme stellt keinen Rücktritt vom Vertrag dar, es sei denn, ABZ erklärt dies
              ausdrücklich.
            </p>

            {/* § 9 Widerrufsrecht */}
            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              § 9 Widerrufsrecht für Verbraucher
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              Verbrauchern steht bei außerhalb von Geschäftsräumen geschlossenen Verträgen und
              bei Fernabsatzverträgen ein gesetzliches Widerrufsrecht zu. Die ausführliche
              Widerrufsbelehrung wird dem Auftraggeber bei Vertragsschluss gesondert mitgeteilt.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Das Widerrufsrecht erlischt bei Verträgen zur Lieferung von Waren, die nach
              Kundenspezifikation angefertigt werden oder eindeutig auf die persönlichen Bedürfnisse
              zugeschnitten sind. Dies betrifft insbesondere maßgefertigte Zaunanlagen und
              individuell angepasste Torlösungen.
            </p>

            {/* § 10 Schlussbestimmungen */}
            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              § 10 Schlussbestimmungen
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des
              UN-Kaufrechts. Gerichtsstand für alle Streitigkeiten aus dem Vertragsverhältnis ist,
              soweit gesetzlich zulässig, der Sitz von ABZ.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so wird die
              Wirksamkeit der übrigen Bestimmungen hiervon nicht berührt. An die Stelle der
              unwirksamen Bestimmung tritt eine Regelung, die dem wirtschaftlichen Zweck der
              unwirksamen Bestimmung am nächsten kommt.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-abz-red hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              . Wir sind nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <p className="text-warm-brown leading-relaxed mt-12 text-sm">
              Stand: März 2026
            </p>

          </div>
        </Container>
      </Section>
    </>
  );
}
