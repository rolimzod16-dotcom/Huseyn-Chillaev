import React from 'react';
import { GalleryItem } from '../types';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props { item: GalleryItem | null; onClose: () => void; }

export const GalleryLightbox: React.FC<Props> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-[#111111]/80 z-[130] flex items-center justify-center p-4" onClick={onClose}>
        <motion.div 
          initial={{ scale: 0.96, opacity: 0 }} 
          animate={{ scale: 1, opacity: 1 }} 
          exit={{ scale: 0.97, opacity: 0 }} 
          className="comic-panel w-full max-w-2xl bg-white relative modal" 
          onClick={e => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute right-3 top-3"><X /></button>
          <div className="p-7">
            <div className="text-xs text-[#14b8a6] tracking-[2px]">{item.year} — {item.medium}</div>
            <div className="comic-title text-4xl tracking-tight mt-1">{item.title}</div>
            <div className="mt-1 text-[#111111]/80">{item.description}</div>

            <div className="comic-panel aspect-video mt-6 bg-white flex items-center justify-center border-2 border-[#111111]">
              <div className="text-center text-[#14b8a6]">
                <div className="text-[92px] leading-none">✏︎</div>
                <div className="text-xs tracking-widest text-[#111111]">НАРИСОВАНО ОТ РУКИ ОРИГИНАЛ</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
