import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { galleryItems } from '../data'
import { HeroCharacter, AnimatorPortrait, PencilBuddy, StarBurst, WavingHand } from '../components/HandDrawn'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const illustrations = [
  HeroCharacter,
  AnimatorPortrait,
  PencilBuddy,
  StarBurst,
  WavingHand,
  HeroCharacter,
  AnimatorPortrait,
  PencilBuddy,
]

export function Gallery() {
  const [selected, setSelected] = useState<number | null>(null)

  const open = (id: number) => setSelected(id)
  const close = () => setSelected(null)

  const currentIndex = galleryItems.findIndex(g => g.id === selected)
  const current = galleryItems[currentIndex]

  const goPrev = () => {
    const prev = (currentIndex - 1 + galleryItems.length) % galleryItems.length
    setSelected(galleryItems[prev].id)
  }
  const goNext = () => {
    const next = (currentIndex + 1) % galleryItems.length
    setSelected(galleryItems[next].id)
  }

  // Keyboard navigation
  useEffect(() => {
    if (selected === null) return
    
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [selected, currentIndex])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-16">
      <div className="mb-8">
        <div className="text-xs tracking-[3px] font-bold mb-1">КАДРЫ • СКЕТЧИ • ИЛЛЮСТРАЦИИ</div>
        <h1 className="text-6xl font-black tracking-[-2px]">Галерея</h1>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item, idx) => {
          const Illust = illustrations[idx % illustrations.length]
          return (
            <div 
              key={item.id} 
              onClick={() => open(item.id)}
              className="gallery-item aspect-[4/3] relative flex items-center justify-center bg-[var(--paper)]"
            >
              <div className="w-[72%]">
                <Illust className="w-full" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-[var(--ink)] text-[var(--paper)] px-4 py-2.5 text-sm font-semibold flex justify-between">
                <span>{item.caption}</span>
                <span className="opacity-60">{item.type}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected !== null && current && (
          <div className="lightbox" onClick={close}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 8 }}
              transition={{ type: 'spring', bounce: 0.02, duration: 0.2 }}
              className="lightbox-content max-w-[1100px] w-full"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={close} className="lightbox-close" aria-label="Закрыть">
                <X size={22} />
              </button>

              <div className="bg-[var(--paper)] p-3 sm:p-8 flex justify-center">
                <div className="max-h-[68vh] w-full max-w-[780px]">
                  {(() => {
                    const Illust = illustrations[(currentIndex) % illustrations.length]
                    return <Illust className="w-full" />
                  })()}
                </div>
              </div>

              <div className="px-4 pb-5 pt-1 flex items-center justify-between text-sm border-t-2 border-[var(--ink)] bg-[var(--panel)]">
                <div>
                  <div className="font-bold">{current.caption}</div>
                  <div className="text-xs text-[var(--ink-light)]">{current.type}</div>
                </div>

                <div className="flex gap-2">
                  <button onClick={goPrev} className="comic-btn !px-4 !py-2" aria-label="Предыдущее"><ChevronLeft size={18} /></button>
                  <button onClick={goNext} className="comic-btn !px-4 !py-2" aria-label="Следующее"><ChevronRight size={18} /></button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
