'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimateIn from './AnimateIn';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  faqs: FaqItem[];
}

function FaqItemComponent({ faq }: { faq: FaqItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-xl border border-warm-gray-dark transition-colors ${
        isOpen ? 'bg-white' : 'bg-warm-white'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left font-heading font-semibold text-charcoal"
        aria-expanded={isOpen}
      >
        <span className="pr-4">{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-warm-brown"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-body-text font-body leading-relaxed">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  return (
    <div className="mt-8 space-y-4">
      {faqs.map((faq, index) => (
        <AnimateIn key={index} delay={index * 0.1}>
          <FaqItemComponent faq={faq} />
        </AnimateIn>
      ))}
    </div>
  );
}
