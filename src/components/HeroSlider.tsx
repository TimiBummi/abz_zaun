'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

const heroImages = [
  {
    src: '/images/hero/hero-doppelstabmatten.jpg',
    alt: 'Doppelstabmattenzaun Bügelsystem Anthrazitgrau',
  },
  {
    src: '/images/hero/hero-sichtschutz.jpg',
    alt: 'Sichtschutz Delta Grün',
  },
  {
    src: '/images/hero/hero-zaunbeleuchtung.jpg',
    alt: 'Zaunanlage mit Beleuchtung',
  },
  {
    src: '/images/hero/hero-drehtor.jpg',
    alt: 'Einzeldrehtor Lamellenoptik',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={heroImages[current].src}
            alt={heroImages[current].alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
            priority={current === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Bild ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
