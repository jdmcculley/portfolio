'use client';

import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function ScrollReveal({ children, delay = 0, className }: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={variants}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
