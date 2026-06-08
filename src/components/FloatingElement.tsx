import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const FloatingElement: React.FC<Props> = ({ children, className = '', delay = 0 }) => (
  <motion.div
    className={className}
    animate={{ y: [0, -11, 0], rotate: [-0.6, 1.2, -0.6] }}
    transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay }}
  >
    {children}
  </motion.div>
);
