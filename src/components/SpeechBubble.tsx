import React from 'react';
import { motion } from 'framer-motion';

interface Props { text: string; delay?: number; className?: string; }

export const SpeechBubble: React.FC<Props> = ({ text, delay = 0, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.6, y: 6 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, type: 'spring', bounce: 0.4, duration: 0.4 }}
    className={`speech-bubble text-sm leading-tight max-w-[190px] ${className}`}
  >
    {text}
  </motion.div>
);
