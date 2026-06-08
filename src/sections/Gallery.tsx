import React, { useState } from 'react';
import { galleryItems } from '../data';
import { GalleryItem } from '../types';
import { GalleryLightbox } from '../components/GalleryLightbox';
import { motion } from 'framer-motion';

export const Gallery: React.FC = () => {
  const [selected, setSelected] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState('Все');

  const cats = ['Все', ...Array.from(new Set(galleryItems.map(g => g.category)))];
  const filtered = filter === 'Все' ? galleryItems : galleryItems.filter(g => g.category === filter);

  const getArt = (item: GalleryItem) => {
    if (item.category === 'Персонаж') {
      return <svg viewBox="0 0 140 120" className="w-full"><ellipse cx="70" cy="68" rx="34" ry="36" fill="#fff" stroke="#111" strokeWidth="6"/><circle cx="70" cy="44" r="20" fill="#fff" stroke="#111" strokeWidth="6"/><circle cx="56" cy="40" r="3.5" fill="#111"/><circle cx="84" cy="40" r="3.5" fill="#111"/><path d="M58 62 Q70 68 82 62" stroke="#111" strokeWidth="4" fill="none"/></svg>;
    }
    if (item.category === 'Окружение') {
      return <svg viewBox="0 0 140 120" className="w-full"><rect x="4" y="18" width="132" height="82" fill="#5eead4" stroke="#111" strokeWidth="6"/><path d="M22 80 L38 42 L58 80" fill="#fff" stroke="#111" strokeWidth="5"/><path d="M78 80 L102 36 L124 80" fill="#fff" stroke="#111" strokeWidth="5"/></svg>;
    }
    return <svg viewBox="0 0 140 120" className="w-full"><rect x="12" y="14" width="116" height="92" fill="#fff" stroke="#111" strokeWidth="6"/><circle cx="70" cy="60" r="26" fill="#5eead4" stroke="#111" strokeWidth="5"/></svg>;
  };

  return (
    <section id="gallery" className="bg-white py-16 border-t-4 border-[#111111]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-wrap items-end gap-3 mb-7">
          <div>
            <div className="text-xs tracking-[3px] text-[#14b8a6] font-bold">ГЛАВА 6 — СТРАНИЦЫ СКЕТЧБУКА</div>
            <h2 className="comic-title text-6xl tracking-[-2.2px]">Галерея</h2>
          </div>
          <div className="flex gap-1 flex-wrap">
            {cats.map(c => (
              <button key={c} onClick={() => setFilter(c)} className={`px-3 py-0.5 text-xs border-2 ${filter === c ? 'bg-[#5eead4] border-[#111111]' : 'border-[#111111]'} font-bold`}>{c}</button>
            ))}
          </div>
        </div>

        <div className="masonry-grid">
          {filtered.map((item) => (
            <motion.div key={item.id} onClick={() => setSelected(item)} className="masonry-item cursor-pointer" whileHover={{ scale: 1.01 }}>
              <div className="p-3">{getArt(item)}</div>
              <div className="px-3 pb-3 text-sm">
                <div className="font-bold tracking-tight">{item.title}</div>
                <div className="text-xs text-[#111111]/70">{item.medium} • {item.year}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <GalleryLightbox item={selected} onClose={() => setSelected(null)} />
    </section>
  );
};
