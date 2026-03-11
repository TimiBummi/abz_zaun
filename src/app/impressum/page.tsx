import type { Metadata } from 'next';
import Container from '@/components/Container';
import Section from '@/components/Section';

export const metadata: Metadata = {
  title: 'Impressum',
};

export default function ImpressumPage() {
  return (
    <>
      <Section background="warm" className="py-12 sm:py-16">
        <Container>
          <h1 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Impressum
          </h1>
        </Container>
      </Section>

      <Section background="white">
        <Container>
          <div className="max-w-3xl">

            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              ABZ-Zaunsysteme GmbH<br />
              Virmondstrasse 137<br />
              D-47877 Willich-Neersen
            </p>

            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              Kontakt
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              Telefon: +49-21 56-774 50 50<br />
              E-Mail: info@abz-zaun.de
            </p>

            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              Vertretungsberechtigter Geschäftsführer
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              [Name des Geschäftsführers]
            </p>

            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              Registereintrag
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              Handelsregister: Amtsgericht Krefeld<br />
              Handelsregisternummer: HRB [XXXXX]
            </p>

            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              Umsatzsteuer-ID
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              DE[XXXXXXXXX]
            </p>

            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              [Name des Geschäftsführers]<br />
              ABZ-Zaunsysteme GmbH<br />
              Virmondstrasse 137<br />
              D-47877 Willich-Neersen
            </p>

            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              Haftungsausschluss
            </h2>

            <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-2">
              Haftung für Inhalte
            </h3>
            <p className="text-body-text leading-relaxed mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen
              Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
              als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
              umgehend entfernen.
            </p>

            <h3 className="font-heading text-lg font-semibold text-charcoal mt-6 mb-2">
              Haftung für Links
            </h3>
            <p className="text-body-text leading-relaxed mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
              Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
              Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h2 className="font-heading text-xl font-semibold text-charcoal mt-8 mb-3">
              Urheberrecht
            </h2>
            <p className="text-body-text leading-relaxed mb-4">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
              und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
              dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="text-body-text leading-relaxed mb-4">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
              gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
              werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>

          </div>
        </Container>
      </Section>
    </>
  );
}
