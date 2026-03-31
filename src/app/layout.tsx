import type { Metadata } from "next";
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';
import '@fontsource/dm-sans/600.css';
import '@fontsource/dm-sans/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import JsonLd from "@/components/JsonLd";
import CookieConsent from "@/components/CookieConsent";
import MatomoAnalytics from "@/components/MatomoAnalytics";

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': 'https://www.abz-zaun.de/#business',
  name: 'ABZ-Zaunsysteme GmbH',
  url: 'https://www.abz-zaun.de',
  logo: 'https://www.abz-zaun.de/images/logo.png',
  image: 'https://www.abz-zaun.de/images/logo.png',
  telephone: '+49-2156-7745050',
  email: 'info@abz-zaun.de',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Virmondstrasse 137',
    addressLocality: 'Willich-Neersen',
    postalCode: '47877',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.3167,
    longitude: 6.4167,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
  ],
  areaServed: ['Krefeld', 'Mönchengladbach', 'Düsseldorf', 'Duisburg', 'Neuss', 'Willich'],
  priceRange: '€€',
};

export const metadata: Metadata = {
  title: {
    default: 'ABZ-Zaunsysteme GmbH - Zäune, Tore & Sichtschutz',
    template: '%s | ABZ-Zaunsysteme',
  },
  description: 'ABZ-Zaunsysteme GmbH in Willich - Ihr Experte für Doppelstabmattenzäune, Tore, Sichtschutz und Gabionen. Kostenlose Beratung und professionelle Montage.',
  metadataBase: new URL('https://abz-zaun.de'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        <JsonLd data={localBusinessSchema} />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <CookieConsent />
        <MatomoAnalytics />
      </body>
    </html>
  );
}
