import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { to: '/', label: 'Главная' },
  { to: '/about', label: 'Обо мне' },
  { to: '/projects', label: 'Проекты' },
  { to: '/comics', label: 'Комиксы' },
  { to: '/gallery', label: 'Галерея' },
  { to: '/videos', label: 'Видео' },
  { to: '/clients', label: 'Для заказчиков' },
  { to: '/support', label: 'Поддержать' },
  { to: '/contact', label: 'Контакты' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Dark mode init + persist
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldDark = saved === 'dark' || (!saved && prefersDark)
    
    setIsDark(shouldDark)
    if (shouldDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDark = () => {
    const newDark = !isDark
    setIsDark(newDark)
    
    if (newDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-50 bg-[var(--paper)] border-b-[3px] border-[var(--ink)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        {/* Logo - hand-drawn style */}
        <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
          <div className="w-10 h-10 rounded-full border-[3px] border-[var(--ink)] bg-[var(--accent)] flex items-center justify-center shadow-[3px_3px_0_var(--ink)] group-active:translate-x-[1px] group-active:translate-y-[1px]">
            <span className="text-[var(--ink)] text-xl font-black tracking-[-1px]">ХЧ</span>
          </div>
          <div>
            <div className="font-black text-2xl tracking-[-1.5px] leading-none">ХУСЕЙН ЧИЛЛАЕВ</div>
            <div className="text-[10px] font-bold tracking-[2px] text-[var(--ink-light)] -mt-0.5">ХУДОЖНИК-АНИМАТОР</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link px-3 py-1.5 text-[15px] ${isActive ? 'active text-[var(--ink)]' : 'text-[var(--ink-light)] hover:text-[var(--ink)]'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Dark mode toggle - cartoonish */}
          <button
            onClick={toggleDark}
            aria-label={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
            className="comic-btn !p-3 !shadow-[3px_3px_0_var(--ink)] hidden sm:flex"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Меню"
            className="comic-btn !p-3 lg:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="mobile-menu lg:hidden border-t-[3px] border-[var(--ink)]"
          >
            {navItems.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block text-2xl font-bold py-3 px-2 border-b border-[var(--ink)]/30 ${isActive ? 'text-[var(--accent)]' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            <div className="pt-4 flex gap-3">
              <button onClick={toggleDark} className="comic-btn flex-1 justify-center">
                {isDark ? 'Светлая тема' : 'Тёмная тема'}
              </button>
              <Link to="/contact" onClick={closeMenu} className="comic-btn comic-btn-primary flex-1 justify-center">
                Написать мне
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
