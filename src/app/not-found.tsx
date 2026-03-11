import Link from 'next/link';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { Home, ShoppingBag } from 'lucide-react';

export default function NotFound() {
  return (
    <Section background="warm" className="min-h-[60vh] flex items-center">
      <Container className="text-center">
        <p className="font-heading text-[10rem] font-bold leading-none text-charcoal/5 select-none sm:text-[14rem]">
          404
        </p>
        <div className="-mt-20 sm:-mt-28">
          <h1 className="font-heading text-3xl font-bold text-charcoal sm:text-4xl">
            Seite nicht gefunden
          </h1>
          <p className="mt-4 text-lg text-charcoal/70 max-w-md mx-auto">
            Die angeforderte Seite existiert leider nicht oder wurde verschoben.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-abz-red px-6 py-3 font-semibold text-white transition-colors hover:bg-abz-red/90"
            >
              <Home className="h-5 w-5" />
              Zur Startseite
            </Link>
            <Link
              href="/produkte"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-charcoal px-6 py-3 font-semibold text-charcoal transition-colors hover:bg-charcoal hover:text-white"
            >
              <ShoppingBag className="h-5 w-5" />
              Produkte ansehen
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
