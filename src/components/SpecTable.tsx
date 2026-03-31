'use client';

import { motion } from 'framer-motion';

interface Spec {
  label: string;
  value: string;
}

interface SpecTableProps {
  specs: Spec[];
}

export default function SpecTable({ specs }: SpecTableProps) {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-warm-gray-dark/50">
      <table className="w-full text-left font-body">
        <tbody>
          {specs.map((spec, index) => (
            <motion.tr
              key={index}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className={index % 2 === 0 ? 'bg-white' : 'bg-warm-white'}
            >
              <td className="px-6 py-4 text-sm font-semibold text-charcoal whitespace-nowrap">
                {spec.label}
              </td>
              <td className="px-6 py-4 text-sm text-body-text">
                {spec.value}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
