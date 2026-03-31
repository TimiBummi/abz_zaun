'use client';

import { motion } from 'framer-motion';

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** Slide direction: 'up' (default), 'left', or 'right' */
  direction?: 'up' | 'left' | 'right';
}

export default function AnimateIn({ children, className = '', delay = 0, direction = 'up' }: AnimateInProps) {
  const initialValues = {
    up: { opacity: 0, y: 15, x: 0 },
    left: { opacity: 0, x: -30, y: 0 },
    right: { opacity: 0, x: 30, y: 0 },
  };

  return (
    <motion.div
      initial={initialValues[direction]}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
