import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {}

const navLinks = [
  { label: 'Главная', href: '#home' },
  { label: 'Обо мне', href: '#about' },
  { label: 'Проекты', href: '#projects' },
  { label: 'Комиксы', href: '#comics' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'Видео', href: '#videos' },
  { label: 'Поддержка', href: '#donations' },
  { label: 'Контакты', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 70;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between">
        {/* Logo - hand drawn style */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-2.5"
        >
          <div className="w-7 h-7 rounded border-[2.5px] border-[#111111] flex items-center justify-center bg-white">
            <span className="text-[#111111] text-base font-black tracking-[-1px]">H</span>
          </div>
          <div className="font-black text-lg tracking-[-0.5px] text-[#111111]">Хусейн Чиллаев</div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1 text-sm">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="px-4 py-1.5 rounded hover:bg-[#f0fdfa] text-[#111111] font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#111111]"
          aria-label="Переключить меню"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t-2 border-[#111111] bg-white"
          >
            <div className="px-5 py-2 flex flex-col">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="py-3 text-left text-base font-medium border-b border-[#111111]/10 last:border-none text-[#111111]"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
