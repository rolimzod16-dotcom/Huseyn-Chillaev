import React from 'react';
import { motion } from 'framer-motion';

interface CartoonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'default';
  size?: 'sm' | 'md';
  className?: string;
}

export const CartoonButton: React.FC<CartoonButtonProps> = ({
  children,
  onClick,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const base = 'cartoon-btn';
  const variantClass = variant === 'primary' ? 'cartoon-btn-primary' : '';
  const sizeClass = size === 'sm' ? 'text-xs px-5 py-2.5' : '';

  return (
    <motion.button
      onClick={onClick}
      className={`${base} ${variantClass} ${sizeClass} ${className}`}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
    >
      {children}
    </motion.button>
  );
};
