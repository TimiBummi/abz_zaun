'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FileText } from 'lucide-react';

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop: Fixed bottom-right floating button */}
      <div
        className={`hidden md:flex fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <Link
          href="/kontakt"
          className="inline-flex items-center gap-2.5 px-4 py-3 bg-abz-red hover:bg-abz-red-dark text-white font-medium text-sm rounded-full shadow-lg hover:shadow-xl transition-all"
        >
          <FileText className="w-5 h-5" />
          <span>Angebot</span>
        </Link>
      </div>

      {/* Mobile: Fixed bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-warm-gray-dark/50 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-center">
          <Link
            href="/kontakt"
            className="flex flex-col items-center justify-center gap-1 py-3 text-abz-red hover:bg-abz-red/5 transition-colors"
          >
            <FileText className="w-5 h-5" />
            <span className="text-xs font-medium">Angebot</span>
          </Link>
        </div>
      </div>
    </>
  );
}
