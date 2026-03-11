import type { Metadata } from 'next';
import Container from '@/components/Container';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
};

export default function DatenschutzPage() {
  return (
    <>
      <Section background="warm" className="py-12 sm:py-16">
        <Container>
          <h1 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Datenschutzerklärung
          </h1>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-3xl">

            {/* Verantwortlicher */}
            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              1. Verantwortlicher
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              ABZ-Zaunsysteme GmbH<br />
              Virmondstrasse 137<br />
              D-47877 Willich-Neersen<br />
              Telefon: +49-21 56-774 50 50<br />
              E-Mail: info@abz-zaun.de
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Vertretungsberechtigter Geschäftsführer: [Name des Geschäftsführers]
            </p>

            {/* Allgemeine Hinweise */}
            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              2. Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-2">
              Datenschutz
            </h3>
            <p className="text-body-text leading-relaxed mb-4">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
              Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den
              gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten
              möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name,
              Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf
              freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an
              Dritte weitergegeben.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.&nbsp;B. bei der
              Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz
              der Daten vor dem Zugriff durch Dritte ist nicht möglich.
            </p>

            <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-2">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="text-body-text leading-relaxed mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist die
              ABZ-Zaunsysteme GmbH (siehe oben). Verantwortliche Stelle ist die natürliche oder
              juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>

            <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-2">
              Speicherdauer
            </h3>
            <p className="text-body-text leading-relaxed mb-4">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
              wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
              Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen
              oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
              sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
              personenbezogenen Daten haben (z.&nbsp;B. steuer- oder handelsrechtliche
              Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser
              Gründe.
            </p>

            <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-2">
              Rechtsgrundlagen der Datenverarbeitung
            </h3>
            <p className="text-body-text leading-relaxed mb-4">
              Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung
              einholen, dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage. Bei der Verarbeitung
              zur Erfüllung eines Vertrages dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage.
              Für die Verarbeitung zur Erfüllung rechtlicher Verpflichtungen dient Art. 6 Abs. 1
              lit. c DSGVO, und für die Verarbeitung zur Wahrung berechtigter Interessen dient
              Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage.
            </p>

            {/* Datenerfassung */}
            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              3. Datenerfassung auf dieser Website
            </h2>

            <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-2">
              Cookies
            </h3>
            <p className="text-body-text leading-relaxed mb-4">
              Unsere Internetseiten verwenden teilweise sogenannte Cookies. Cookies richten auf
              Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu,
              unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind
              kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser
              speichert.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Die meisten der von uns verwendeten Cookies sind sogenannte „Session-Cookies". Sie
              werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf
              Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen es uns,
              Ihren Browser beim nächsten Besuch wiederzuerkennen.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies
              informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für
              bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der
              Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies
              kann die Funktionalität dieser Website eingeschränkt sein.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Wir setzen ein Cookie-Consent-Tool (Klaro) ein, das Ihnen die Möglichkeit gibt, über
              den Einsatz von Cookies auf unserer Website zu entscheiden. Die Einwilligung wird
              gemäß Art. 6 Abs. 1 lit. a DSGVO eingeholt.
            </p>

            <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-2">
              Kontaktformular
            </h3>
            <p className="text-body-text leading-relaxed mb-4">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
              aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten
              zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
              Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
              beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
              Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns
              zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
              für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere
              Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-2">
              Anfrage per E-Mail oder Telefon
            </h3>
            <p className="text-body-text leading-relaxed mb-4">
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller
              daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der
              Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben
              wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt. In allen übrigen
              Fällen beruht die Verarbeitung auf Ihrer Einwilligung bzw. unserem berechtigten
              Interesse (Art. 6 Abs. 1 lit. f DSGVO).
            </p>

            {/* Hosting */}
            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              4. Hosting
            </h2>

            <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-2">
              All-Inkl
            </h3>
            <p className="text-body-text leading-relaxed mb-4">
              Wir hosten unsere Website bei All-Inkl. Anbieter ist die ALL-INKL.COM - Neue Medien
              Münnich, Inh. René Münnich, Hauptstraße 68, 02742 Friedersdorf (nachfolgend
              All-Inkl). Details entnehmen Sie der Datenschutzerklärung von All-Inkl:{' '}
              <a
                href="https://all-inkl.com/datenschutzinformationen/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-abz-red hover:underline"
              >
                https://all-inkl.com/datenschutzinformationen/
              </a>
              .
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Die Verwendung von All-Inkl erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              Wir haben ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung
              unserer Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
              Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Wir haben
              einen Vertrag über Auftragsverarbeitung (AVV) mit dem genannten Anbieter
              geschlossen.
            </p>

            {/* Analyse-Tools */}
            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              5. Analyse-Tools
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              Zur statistischen Auswertung der Besucherzugriffe setzen wir ein
              datenschutzfreundliches Analysetool ein. Die Verarbeitung erfolgt auf Grundlage
              unseres berechtigten Interesses an der Analyse des Nutzerverhaltens zur Optimierung
              unseres Webangebots (Art. 6 Abs. 1 lit. f DSGVO). Es werden keine personenbezogenen
              Daten an Dritte übermittelt. Es werden keine Cookies zu Analysezwecken gesetzt, die
              einer Einwilligung bedürfen.
            </p>

            {/* Rechte der betroffenen Person */}
            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              6. Rechte der betroffenen Person
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit folgende
              Rechte:
            </p>

            <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-2">
              Recht auf Auskunft (Art. 15 DSGVO)
            </h3>
            <p className="text-body-text leading-relaxed mb-4">
              Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten
              verarbeitet werden, und auf Auskunft über diese Daten sowie auf weitere Informationen
              und Kopie der Daten.
            </p>

            <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-2">
              Recht auf Berichtigung (Art. 16 DSGVO)
            </h3>
            <p className="text-body-text leading-relaxed mb-4">
              Sie haben das Recht, die Vervollständigung der Sie betreffenden Daten oder die
              Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
            </p>

            <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-2">
              Recht auf Löschung (Art. 17 DSGVO)
            </h3>
            <p className="text-body-text leading-relaxed mb-4">
              Sie haben das Recht, zu verlangen, dass betreffende Daten unverzüglich gelöscht
              werden, sofern einer der gesetzlich vorgesehenen Gründe zutrifft und soweit die
              Verarbeitung nicht erforderlich ist.
            </p>

            <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-2">
              Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
            </h3>
            <p className="text-body-text leading-relaxed mb-4">
              Sie haben das Recht, die Einschränkung der Verarbeitung zu verlangen, wenn eine der
              gesetzlichen Voraussetzungen gegeben ist.
            </p>

            <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-2">
              Recht auf Datenübertragbarkeit (Art. 20 DSGVO)
            </h3>
            <p className="text-body-text leading-relaxed mb-4">
              Sie haben das Recht, die Sie betreffenden Daten in einem strukturierten, gängigen und
              maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen
              Verantwortlichen zu verlangen.
            </p>

            <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-2">
              Recht auf Widerspruch (Art. 21 DSGVO)
            </h3>
            <p className="text-body-text leading-relaxed mb-4">
              Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
              jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch
              einzulegen. Der Verantwortliche verarbeitet die personenbezogenen Daten dann nicht
              mehr, es sei denn, er kann zwingende schutzwürdige Gründe für die Verarbeitung
              nachweisen, die die Interessen, Rechte und Freiheiten der betroffenen Person
              überwiegen.
            </p>

            <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-2">
              Beschwerderecht bei einer Aufsichtsbehörde
            </h3>
            <p className="text-body-text leading-relaxed mb-4">
              Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen
              Rechtsbehelfs steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde zu,
              wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden
              personenbezogenen Daten gegen die DSGVO verstößt.
            </p>

            {/* SSL */}
            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              7. SSL- bzw. TLS-Verschlüsselung
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
              vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte
              Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://" auf
              „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL-
              bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln,
              nicht von Dritten mitgelesen werden.
            </p>

            {/* Werbe-E-Mails */}
            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              8. Widerspruch gegen Werbe-E-Mails
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur
              Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien
              wird hiermit widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich
              rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa
              durch Spam-E-Mails, vor.
            </p>

          </div>
        </Container>
      </Section>
    </>
  );
}
