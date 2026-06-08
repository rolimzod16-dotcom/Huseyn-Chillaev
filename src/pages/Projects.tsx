import { useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data'
import type { Project } from '../data'
import { PencilBuddy } from '../components/HandDrawn'

const categories = ['Все', 'Короткометражный', 'Клип', 'Сериал']

export function Projects() {
  const [active, setActive] = useState('Все')
  const [search, setSearch] = useState('')

  const filtered = projects.filter((p: Project) => {
    const matchesCat = active === 'Все' || p.category === active || p.tags.includes(active)
    const matchesSearch = 
      p.title.toLowerCase().includes(search.toLowerCase()) || 
      p.description.toLowerCase().includes(search.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-16">
      <div className="mb-8">
        <div className="uppercase tracking-widest text-xs font-bold mb-1">РАБОТЫ</div>
        <h1 className="text-6xl font-black tracking-[-2px]">Проекты</h1>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`filter-pill ${active === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Поиск по проектам..."
          className="flex-1 max-w-xs border-2 border-[var(--ink)] bg-[var(--paper)] px-4 py-2 text-base placeholder:text-[var(--ink-light)] focus:outline-none focus:border-[var(--accent)]"
        />
      </div>

      <div className="projects-grid">
        {filtered.length === 0 && (
          <div className="col-span-full py-12 text-center text-[var(--ink-light)]">Ничего не найдено.</div>
        )}
        
        {filtered.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: Math.min(index * 0.025, 0.2) }}
            className="project-card flex flex-col"
          >
            <div className="h-44 bg-[#111] relative flex items-center justify-center">
              <div className="text-[var(--paper)] opacity-60">
                <PencilBuddy className="w-20 h-24" />
              </div>
              <div className="absolute top-3 left-3 text-xs px-3 py-0.5 bg-[var(--paper)] border border-[var(--ink)] text-[var(--ink)]">{project.year}</div>
              <div className="absolute bottom-3 right-3 text-xs px-3 py-0.5 bg-[var(--accent)] border border-[var(--ink)] text-[var(--ink)] font-bold">{project.category}</div>
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
              <div className="font-black text-[27px] tracking-[-1.1px] mb-2 leading-tight">{project.title}</div>
              <p className="text-[var(--ink-light)] flex-1 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs border border-[var(--ink)] px-2.5 py-px">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-xs text-[var(--ink-light)] max-w-prose">
        Здесь представлены примеры работ. Полный список и актуальные проекты — в Telegram и на YouTube.
      </div>
    </div>
  )
}
