'use client';

import { useState, type ReactNode } from 'react';
import { Check } from 'lucide-react';
import Section from './Section';
import Container from './Container';
import AnimateIn from './AnimateIn';
import ProductImage from './ProductImage';
import Lightbox from './Lightbox';
import FaqAccordion from './FaqAccordion';
import SpecTable from './SpecTable';
import CtaBanner from './CtaBanner';

interface ProductImageData {
  src: string;
  alt: string;
}

interface ContentBlock {
  heading: string;
  text: string;
}

interface ProductPageClientProps {
  title: string;
  images: ProductImageData[];
  benefits: string[];
  contentBlocks: ContentBlock[];
  specs: { label: string; value: string }[];
  faqs: { question: string; answer: string }[];
  iconPlaceholder: ReactNode;
}

export default function ProductPageClient({
  title,
  images,
  benefits,
  contentBlocks,
  specs,
  faqs,
  iconPlaceholder,
}: ProductPageClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* Benefits + First Image */}
      <Section background="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimateIn>
              <div>
                <h2 className="font-heading text-2xl font-bold text-charcoal">
                  Vorteile & Eigenschaften
                </h2>
                <ul className="mt-6 space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-abz-red/10">
                        <Check className="h-3.5 w-3.5 text-abz-red" />
                      </span>
                      <span className="text-body-text font-body">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateIn>

            <AnimateIn delay={0.2}>
              {images.length > 0 ? (
                <ProductImage
                  src={images[0].src}
                  alt={images[0].alt}
                  onClick={() => openLightbox(0)}
                />
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-warm-gray">
                  <div className="text-center">
                    {iconPlaceholder}
                    <p className="mt-3 text-sm font-medium text-warm-brown font-body">Produktbild</p>
                  </div>
                </div>
              )}
            </AnimateIn>
          </div>
        </Container>
      </Section>

      {/* Alternating Content Blocks with Images */}
      {contentBlocks.map((block, index) => {
        const imageIndex = index + 1;
        const image = images[imageIndex];
        if (!image) return null;
        const isImageLeft = index % 2 === 0;

        return (
          <Section key={index} background={index % 2 === 0 ? 'warm' : 'white'}>
            <Container>
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <AnimateIn
                  className={isImageLeft ? 'lg:order-2' : ''}
                  direction={isImageLeft ? 'right' : 'left'}
                >
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-charcoal">
                      {block.heading}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-body-text font-body">
                      {block.text}
                    </p>
                  </div>
                </AnimateIn>

                <AnimateIn
                  delay={0.15}
                  className={isImageLeft ? 'lg:order-1' : ''}
                  direction={isImageLeft ? 'left' : 'right'}
                >
                  <ProductImage
                    src={image.src}
                    alt={image.alt}
                    onClick={() => openLightbox(imageIndex)}
                  />
                </AnimateIn>
              </div>
            </Container>
          </Section>
        );
      })}

      {/* Specifications Table */}
      <Section background="warm">
        <Container>
          <AnimateIn>
            <h2 className="font-heading text-2xl font-bold text-charcoal">
              Technische Daten
            </h2>
          </AnimateIn>
          <SpecTable specs={specs} />
        </Container>
      </Section>

      {/* FAQ Section */}
      <Section background="white">
        <Container>
          <AnimateIn>
            <h2 className="font-heading text-2xl font-bold text-charcoal">
              Häufige Fragen zu {title}
            </h2>
          </AnimateIn>
          <FaqAccordion faqs={faqs} />
        </Container>
      </Section>

      {/* CTA */}
      <CtaBanner
        heading={`Jetzt Angebot für ${title} anfordern`}
        subtext="Wir erstellen Ihnen ein individuelles Angebot — kostenlos und unverbindlich. Kontaktieren Sie uns noch heute."
        buttonLabel="Angebot anfordern"
        buttonHref="/kontakt"
      />

      {/* Lightbox */}
      <Lightbox
        images={images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}
