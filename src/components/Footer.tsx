import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Clock, Heart } from 'lucide-react';
import Container from './Container';

const produkteLinks = [
  { href: '/produkte/doppelstabmattenzaun', label: 'Doppelstabmattenzaun' },
  { href: '/produkte/schiebetore', label: 'Schiebetore' },
  { href: '/produkte/sichtschutz', label: 'Sichtschutz' },
  { href: '/produkte', label: 'Alle Produkte →' },
];

const serviceLinks = [
  { href: '/montage', label: 'Montage' },
  { href: '/kontakt', label: 'Beratung' },
  { href: '/faq', label: 'FAQ' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/bedienungsanleitung.pdf', label: 'Bedienungsanleitung (PDF)' },
  { href: '/produktkatalog.pdf', label: 'Produktkatalog (PDF)' },
];

const rechtlichesLinks = [
  { href: '/impressum', label: 'Impressum' },
  { href: '/datenschutz', label: 'Datenschutz' },
  { href: '/agb', label: 'AGB' },
];

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-charcoal text-warm-gray">
        <Container className="py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Column 1: Company Info */}
            <div>
              {/* Image logo — drop file at public/images/logo.png to activate */}
              <div className="mb-4">
                <Image
                  src="/images/logo.png"
                  alt="ABZ-Zaunsysteme GmbH"
                  width={433}
                  height={312}
                  className="h-14 w-auto rounded-sm"
                />
              </div>
              {/* Text logo (fallback — restore by swapping comments)
              <div className="mb-4">
                <span className="text-2xl font-bold italic text-abz-red font-heading">ABZ<span className="relative -top-[3px] text-base">-</span></span>{' '}
                <span className="text-lg font-medium text-white font-heading">Zaunsysteme GmbH</span>
              </div>
              */}
              <address className="not-italic space-y-3 text-sm">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-warm-gray-dark" />
                  <span>
                    Virmondstrasse 137
                    <br />
                    D-47877 Willich-Neersen
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 shrink-0 text-warm-gray-dark" />
                  <a href="mailto:info@abz-zaun.de" className="hover:text-white transition-colors">
                    info@abz-zaun.de
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 shrink-0 text-warm-gray-dark" />
                  <span>MO-FR 9:00 - 17:00</span>
                </div>
              </address>
            </div>

            {/* Column 2: Produkte */}
            <div>
              <h3 className="text-white font-semibold font-heading mb-4">Produkte</h3>
              <ul className="space-y-2.5 text-sm">
                {produkteLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Service */}
            <div>
              <h3 className="text-white font-semibold font-heading mb-4">Service</h3>
              <ul className="space-y-2.5 text-sm">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    {link.href.endsWith('.pdf') ? (
                      <a href={link.href} download className="hover:text-white transition-colors">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="hover:text-white transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Rechtliches */}
            <div>
              <h3 className="text-white font-semibold font-heading mb-4">Rechtliches</h3>
              <ul className="space-y-2.5 text-sm">
                {rechtlichesLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <Container className="py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-warm-gray-dark">
              <p>&copy; 2026 ABZ-Zaunsysteme GmbH. Alle Rechte vorbehalten.</p>
              <p className="flex items-center gap-1">
                Made with <Heart className="w-3 h-3 text-abz-red fill-abz-red" /> in Willich
              </p>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
}
