import { useState } from 'react'
import { motion } from 'framer-motion'
import { comics } from '../data'
import type { Comic } from '../data'
import { StarBurst } from '../components/HandDrawn'

const categories = ['Все', 'Мини-комикс', 'История']

export function Comics() {
  const [active, setActive] = useState('Все')

  const filtered = comics.filter((c: Comic) => active === 'Все' || c.category === active)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-16">
      <div className="mb-8 flex flex-col sm:flex-row sm:items-end gap-2">
        <div>
          <div className="uppercase tracking-widest text-xs font-bold mb-1">БУМАГА И ТУШЬ</div>
          <h1 className="text-6xl font-black tracking-[-2px]">Комиксы</h1>
        </div>
        <div className="sm:ml-auto text-[var(--ink-light)] max-w-xs text-sm">
          Короткие и длинные истории, нарисованные вручную. Можно читать по одной странице.
        </div>
      </div>

      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map(cat => (
          <button key={cat} onClick={() => setActive(cat)} className={`filter-pill ${active === cat ? 'active' : ''}`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="comics-grid">
        {filtered.map((comic, idx) => (
          <motion.div 
            key={comic.id}
            whileHover={{ rotate: idx % 2 === 0 ? 0.6 : -0.4 }}
            className="comic-card p-5 flex flex-col"
          >
            <div className="mb-4 aspect-[16/10] bg-[var(--paper)] border-[3px] border-[var(--ink)] relative overflow-hidden flex items-center justify-center">
              {/* Fake comic page preview using stacked rectangles */}
              <div className="absolute inset-3 border border-dashed border-[var(--ink)]/40" />
              <div className="text-center">
                <StarBurst className="w-9 h-9 mx-auto mb-1" />
                <div className="text-xs tracking-widest font-bold">{comic.panels} ПАНЕЛЕЙ</div>
              </div>
              <div className="absolute top-3 right-3 text-xs px-2 bg-[var(--paper)] border border-[var(--ink)]">{comic.year}</div>
            </div>

            <div className="font-black text-3xl tracking-[-1.5px] mb-1">{comic.title}</div>
            <div className="text-[var(--ink-light)] mb-4 flex-1">{comic.description}</div>
            
            <div className="text-xs flex gap-2">
              <span className="border border-[var(--ink)] px-2 py-px">{comic.category}</span>
              <span className="border border-[var(--ink)] px-2 py-px">{comic.panels} стр.</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 comic-panel p-8 text-center">
        <div className="font-bold text-xl mb-1">Хотите увидеть больше?</div>
        <p className="text-[var(--ink-light)] mb-4">Полные комиксы публикую в Telegram и иногда в виде печатных мини-изданий.</p>
        <a href="https://t.me/HuseynChillaev" target="_blank" rel="noopener noreferrer" className="comic-btn inline-flex">Перейти в Telegram</a>
      </div>
    </div>
  )
}
