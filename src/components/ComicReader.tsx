import React, { useState } from 'react';
import { Comic } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface ComicReaderProps {
  comic: Comic | null;
  onClose: () => void;
}

export const ComicReader: React.FC<ComicReaderProps> = ({ comic, onClose }) => {
  const [pageIndex, setPageIndex] = useState(0);

  if (!comic) return null;

  const page = comic.pagesContent[pageIndex];
  const total = comic.pagesContent.length;

  const next = () => setPageIndex(Math.min(pageIndex + 1, total - 1));
  const prev = () => setPageIndex(Math.max(pageIndex - 1, 0));

  return (
    <div className="fixed inset-0 z-[120] bg-[#111111]/85 flex items-center justify-center p-3" onClick={onClose}>
      <div 
        className="comic-page w-full max-w-[780px] bg-white text-[#111111] relative" 
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b-[3px] border-[#111111]">
          <div>
            <div className="font-black text-xl tracking-[-0.5px]">{comic.title}</div>
            <div className="text-xs text-[#14b8a6]">{comic.subtitle}</div>
          </div>
          <button onClick={onClose}><X size={22} /></button>
        </div>

        <div className="p-8 md:p-9 min-h-[420px] relative">
          <AnimatePresence mode="wait">
            <motion.div key={pageIndex} initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-8}} className="space-y-3">
              <div className="uppercase text-xs tracking-[2.5px] text-[#14b8a6]">ПАНЕЛЬ {page.panel}</div>

              {page.caption && <div className="comic-title text-3xl md:text-[38px] leading-[1.05] tracking-[-1.2px] max-w-[20ch]">{page.caption}</div>}

              {page.dialogue && (
                <div className="max-w-xs mt-8">
                  <div className="speech-bubble text-xl">{page.dialogue}</div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Hand-drawn page decoration */}
          <div className="absolute bottom-8 right-8 opacity-10 pointer-events-none">
            <svg width="80" height="80" viewBox="0 0 80 80"><circle cx="40" cy="40" r="28" stroke="#111" strokeWidth="5"/></svg>
          </div>
        </div>

        <div className="flex items-center px-5 py-3 border-t-[3px] border-[#111111] bg-white text-sm">
          <button onClick={prev} disabled={pageIndex === 0} className="flex items-center gap-1 disabled:opacity-30 font-bold tracking-wider"><ChevronLeft size={16}/> НАЗАД</button>
          <div className="flex-1 text-center font-mono text-xs text-[#111111]/50">СТРАНИЦА {pageIndex + 1} ИЗ {total}</div>
          <button onClick={next} disabled={pageIndex === total-1} className="flex items-center gap-1 disabled:opacity-30 font-bold tracking-wider">ДАЛЕЕ <ChevronRight size={16}/></button>
        </div>
      </div>
    </div>
  );
};
