'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductImageProps {
  src: string;
  alt: string;
  onClick?: () => void;
}

export default function ProductImage({ src, alt, onClick }: ProductImageProps) {
  return (
    <motion.div
      className="cursor-pointer overflow-hidden rounded-2xl"
      whileHover={{ boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    >
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          width={800}
          height={600}
          className="h-auto w-full object-cover aspect-[4/3]"
        />
      </motion.div>
    </motion.div>
  );
}
