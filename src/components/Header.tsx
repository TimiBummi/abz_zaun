'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ExternalLink } from 'lucide-react';
import Container from './Container';

const navLinks = [
  { href: '/produkte', label: 'Produkte' },
  { href: '/referenzen', label: 'Referenzen' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/montage', label: 'Montage & Service' },
  { href: '/faq', label: 'FAQ' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-warm-gray-dark/30">
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            {/* Image logo — drop file at public/images/logo.png to activate */}
            <Image
              src="/images/logo.png"
              alt="ABZ-Zaunsysteme GmbH"
              width={180}
              height={48}
              className="h-10 sm:h-12 w-auto"
              priority
            />
            {/* Text logo (fallback — restore by swapping comments)
            <span className="flex items-baseline gap-1">
              <span className="text-2xl sm:text-3xl font-bold italic text-abz-red font-heading">
                ABZ<span className="relative -top-[3px] text-base sm:text-lg">-</span>
              </span>
              <span className="text-lg sm:text-xl font-medium text-charcoal font-heading">
                Zaunsysteme
              </span>
            </span>
            */}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal-light hover:text-abz-red transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://zaunhandel.online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-charcoal-light hover:text-abz-red transition-colors"
            >
              Shop
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Right */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-charcoal hover:bg-warm-gray/50 transition-colors"
              aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 sm:top-20 z-40 bg-white lg:hidden">
          <nav className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-3 text-lg font-medium text-charcoal hover:text-abz-red border-b border-warm-gray/50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://zaunhandel.online"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 py-3 text-lg font-medium text-charcoal hover:text-abz-red border-b border-warm-gray/50 transition-colors"
              >
                Shop
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="p-4 border-t border-warm-gray">
              <Link
                href="/kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-3.5 bg-abz-red hover:bg-abz-red-dark text-white text-center text-lg font-semibold rounded-lg transition-colors"
              >
                Angebot anfordern
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
