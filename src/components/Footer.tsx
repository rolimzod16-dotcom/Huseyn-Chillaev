import { Link } from 'react-router-dom'

export function Footer() {
  const year = new Date().getFullYear()
  
  return (
    <footer className="border-t-[3px] border-[var(--ink)] bg-[var(--paper)] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 text-sm">
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
          <div>
            <div className="font-black text-xl tracking-[-1px] mb-2">ХУСЕЙН ЧИЛЛАЕВ</div>
            <p className="text-[var(--ink-light)] max-w-[22ch]">
              Художник-аниматор. Рисую истории от руки.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-y-1 text-[15px]">
            <Link to="/" className="hover:underline">Главная</Link>
            <Link to="/about" className="hover:underline">Обо мне</Link>
            <Link to="/projects" className="hover:underline">Проекты</Link>
            <Link to="/comics" className="hover:underline">Комиксы</Link>
            <Link to="/gallery" className="hover:underline">Галерея</Link>
            <Link to="/videos" className="hover:underline">Видео</Link>
            <Link to="/clients" className="hover:underline">Для заказчиков</Link>
            <Link to="/support" className="hover:underline">Поддержать</Link>
            <Link to="/contact" className="hover:underline">Контакты</Link>
          </div>

          <div className="space-y-3 text-[var(--ink-light)]">
            <div>
              <a href="https://www.youtube.com/@Huseyn.Chillaev" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)] underline">
                YouTube
              </a>
            </div>
            <div>
              <a href="https://t.me/HuseynChillaev" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--ink)] underline">
                Telegram
              </a>
            </div>
            <div className="pt-2 text-xs">
              © {year} Хусейн Чиллаев. Все права защищены.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
