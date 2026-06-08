import React, { useState } from 'react';
import { comics } from '../data';
import { Comic } from '../types';
import { ComicReader } from '../components/ComicReader';
import { motion } from 'framer-motion';

export const Comics: React.FC = () => {
  const [selectedComic, setSelectedComic] = useState<Comic | null>(null);

  const getComicCover = (cover: string) => {
    if (cover === 'comic1') {
      return <svg viewBox="0 0 300 180" className="w-full h-full"><rect x="10" y="8" width="280" height="164" rx="1" fill="#fff" stroke="#111" strokeWidth="7"/><rect x="58" y="38" width="184" height="104" rx="4" fill="#5eead4" stroke="#111" strokeWidth="6"/><text x="150" y="100" textAnchor="middle" fill="#111" fontSize="16" fontWeight="700" fontFamily="Comic Neue">ПУТЬ</text></svg>;
    }
    if (cover === 'comic2') {
      return <svg viewBox="0 0 300 180" className="w-full h-full"><rect x="10" y="8" width="280" height="164" rx="1" fill="#fff" stroke="#111" strokeWidth="7"/><polygon points="150,26 170,78 226,78 182,112 198,162 150,132 102,162 118,112 74,78 130,78" fill="#5eead4" stroke="#111" strokeWidth="6"/></svg>;
    }
    return <svg viewBox="0 0 300 180" className="w-full h-full"><rect x="10" y="8" width="280" height="164" rx="1" fill="#fff" stroke="#111" strokeWidth="7"/><path d="M52 46 L248 46 L248 134 L52 134 Z" fill="#fff" stroke="#111" strokeWidth="5"/><path d="M72 64 L228 64 L228 116 L72 116 Z" fill="#5eead4" stroke="#111" strokeWidth="4"/></svg>;
  };

  return (
    <section id="comics" className="bg-white py-16 border-t-4 border-[#111111]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-8">
          <div className="text-[#14b8a6] text-xs tracking-[3px] font-bold">ГЛАВА 3 — ПАНЕЛЬ ЗА ПАНЕЛЬЮ</div>
          <h2 className="comic-title text-6xl tracking-[-2.2px]">Комиксы</h2>
          <p className="max-w-sm mt-1 text-lg">Нарисованные от руки комикс-истории. Нажмите на любую обложку, чтобы прочитать.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {comics.map((comic) => (
            <motion.div 
              key={comic.id} 
              onClick={() => setSelectedComic(comic)} 
              className="cartoon-card cursor-pointer overflow-hidden"
              whileHover={{ y: -1 }}
            >
              <div className="aspect-[300/180] bg-white border-b-[3px] border-[#111111] flex items-center justify-center">
                {getComicCover(comic.cover)}
              </div>
              <div className="p-5">
                <div className="font-bold text-[26px] tracking-tight leading-none">{comic.title}</div>
                <div className="text-sm text-[#14b8a6] mt-0.5">{comic.subtitle} • {comic.year}</div>
                <p className="mt-3 text-sm text-[#111111]/80">{comic.description}</p>
                <div className="text-xs mt-4 text-[#111111]/50 font-medium">{comic.pages} СТРАНИЦ — НАЖМИТЕ, ЧТОБЫ ПРОЧИТАТЬ →</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ComicReader comic={selectedComic} onClose={() => setSelectedComic(null)} />
    </section>
  );
};
