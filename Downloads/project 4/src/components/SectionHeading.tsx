import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  children: React.ReactNode;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4';
}

export default function SectionHeading({ children, className = '', tag = 'h2' }: SectionHeadingProps) {
  const MotionTag = motion(tag as any);

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 18, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </MotionTag>
  );
}
