import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HeroCharacter, PencilBuddy, StarBurst } from '../components/HandDrawn'
import { projects } from '../data'

export function Home() {
  const featured = projects.slice(0, 3)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-16">
      {/* HERO */}
      <div className="grid lg:grid-cols-12 gap-8 items-center pb-12">
        <div className="lg:col-span-7">
          <div className="inline-block mb-4 px-4 py-1 border-2 border-[var(--ink)] bg-[var(--accent)] text-sm font-bold tracking-widest">
            ОФИЦИАЛЬНЫЙ САЙТ
          </div>
          
          <h1 className="text-[64px] lg:text-[76px] leading-[0.9] font-black tracking-[-3.5px] mb-4">
            ХУСЕЙН<br />ЧИЛЛАЕВ
          </h1>
          
          <p className="max-w-[42ch] text-2xl font-semibold mb-8">
            Художник-аниматор.<br />Рисую истории, которые остаются в памяти.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="comic-btn comic-btn-primary text-lg px-9">
              Смотреть проекты
            </Link>
            <Link to="/clients" className="comic-btn text-lg px-9">
              Для заказчиков
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-4 text-sm">
            <a href="https://www.youtube.com/@Huseyn.Chillaev" target="_blank" rel="noopener" className="underline font-semibold">YouTube</a>
            <span className="text-[var(--ink-light)]">•</span>
            <a href="https://t.me/HuseynChillaev" target="_blank" rel="noopener" className="underline font-semibold">Telegram</a>
          </div>
        </div>

        {/* Big hand-drawn hero SVG */}
        <div className="lg:col-span-5 -mb-6 lg:mb-0">
          <div className="relative">
            <HeroCharacter className="w-full max-w-[420px] mx-auto" />
            <div className="absolute -top-3 -right-2">
              <StarBurst className="w-14 h-14" />
            </div>
          </div>
        </div>
      </div>

      {/* QUICK INTRO STRIP */}
      <div className="my-12 p-8 comic-panel flex flex-col md:flex-row gap-8 md:items-center">
        <div className="flex-1">
          <div className="uppercase tracking-[3px] text-xs font-bold mb-2">Коротко обо мне</div>
          <p className="text-[21px] leading-tight font-semibold">
            Я создаю авторские анимационные фильмы и комиксы от руки. 
            Главные герои — обычные люди и их настоящие истории.
          </p>
        </div>
        <Link to="/about" className="comic-btn shrink-0">Подробнее обо мне</Link>
      </div>

      {/* FEATURED PROJECTS */}
      <div>
        <div className="flex items-baseline justify-between mb-6">
          <h2 className="section-title text-4xl">Избранные проекты</h2>
          <Link to="/projects" className="hidden sm:block font-bold underline">Все проекты →</Link>
        </div>

        <div className="projects-grid">
          {featured.map((p) => (
            <motion.div 
              key={p.id} 
              whileHover={{ y: -3 }}
              className="project-card p-5 flex flex-col"
            >
              <div className="h-40 mb-4 bg-[var(--paper)] border-2 border-[var(--ink)] flex items-center justify-center relative overflow-hidden">
                <PencilBuddy className="w-16 h-20 opacity-70" />
                <div className="absolute top-3 right-3 px-3 py-px text-xs border border-[var(--ink)] bg-[var(--paper)]">{p.year}</div>
              </div>
              <div className="font-black text-2xl tracking-[-1px] mb-1.5">{p.title}</div>
              <div className="text-[var(--ink-light)] text-[15px] flex-1 mb-3">{p.description}</div>
              <div className="flex gap-2 flex-wrap">
                {p.tags.map(t => (
                  <span key={t} className="text-xs px-3 py-px border border-[var(--ink)]">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 sm:hidden">
          <Link to="/projects" className="font-bold underline">Все проекты →</Link>
        </div>
      </div>

      {/* TEASERS */}
      <div className="mt-16 grid md:grid-cols-3 gap-5">
        <Link to="/comics" className="comic-panel p-6 group block">
          <div className="text-[var(--accent)] font-bold tracking-widest text-sm mb-1">КОМИКСЫ</div>
          <div className="font-black text-3xl group-hover:underline">Читать комиксы</div>
          <p className="mt-2 text-[var(--ink-light)]">Короткие истории в картинках. Рисую от руки.</p>
        </Link>
        
        <Link to="/videos" className="comic-panel p-6 group block">
          <div className="text-[var(--accent)] font-bold tracking-widest text-sm mb-1">ВИДЕО</div>
          <div className="font-black text-3xl group-hover:underline">Смотреть анимацию</div>
          <p className="mt-2 text-[var(--ink-light)]">Анимационные фильмы и ролики на YouTube.</p>
        </Link>
        
        <Link to="/gallery" className="comic-panel p-6 group block">
          <div className="text-[var(--accent)] font-bold tracking-widest text-sm mb-1">ГАЛЕРЕЯ</div>
          <div className="font-black text-3xl group-hover:underline">Посмотреть работы</div>
          <p className="mt-2 text-[var(--ink-light)]">Кадры, скетчи и иллюстрации.</p>
        </Link>
      </div>
    </div>
  )
}
