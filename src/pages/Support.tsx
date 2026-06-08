import { StarBurst } from '../components/HandDrawn'

export function Support() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 pb-16">
      <div className="mb-10">
        <div className="uppercase tracking-[3px] font-bold text-xs mb-2">СПАСИБО, ЧТО СМОТРИТЕ</div>
        <h1 className="text-6xl font-black tracking-[-2px]">Поддержать</h1>
        <p className="mt-4 max-w-prose text-xl">Ваша поддержка помогает мне продолжать делать новые фильмы и комиксы.</p>
      </div>

      <div className="space-y-4">
        <a href="https://www.youtube.com/@Huseyn.Chillaev" target="_blank" rel="noopener noreferrer" className="comic-panel p-8 block hover:shadow-[6px_6px_0_var(--ink)] transition">
          <div className="flex gap-4 items-start">
            <StarBurst className="w-9 h-9 mt-1 shrink-0" />
            <div>
              <div className="font-black text-3xl tracking-[-1px]">Подписаться на YouTube</div>
              <p className="mt-1 text-[var(--ink-light)]">Включайте уведомления — новые истории выходят регулярно.</p>
            </div>
          </div>
        </a>

        <a href="https://t.me/HuseynChillaev" target="_blank" rel="noopener noreferrer" className="comic-panel p-8 block hover:shadow-[6px_6px_0_var(--ink)] transition">
          <div className="flex gap-4 items-start">
            <div className="text-4xl mt-0.5">💬</div>
            <div>
              <div className="font-black text-3xl tracking-[-1px]">Telegram-канал</div>
              <p className="mt-1 text-[var(--ink-light)]">Эксклюзивные кадры, процессы, анонсы и общение.</p>
            </div>
          </div>
        </a>

        <div className="comic-panel p-8">
          <div className="font-black text-3xl tracking-[-1px] mb-2">Рассказать другим</div>
          <p className="text-[var(--ink-light)] mb-4">Если вам нравится то, что я делаю — поделитесь с друзьями. Это очень помогает.</p>
          <div className="text-sm">Просто отправьте ссылку на этот сайт или на любой ролик.</div>
        </div>

        <div className="comic-panel p-8 bg-[var(--accent)] text-[var(--ink)] border-[var(--ink)]">
          <div className="font-black text-2xl mb-1">Хотите поддержать материально?</div>
          <p className="mb-4">Напишите мне в Telegram. Обсудим, как это можно сделать удобно для вас.</p>
          <a href="https://t.me/HuseynChillaev" target="_blank" rel="noopener noreferrer" className="comic-btn !border-[var(--ink)]">Написать в Telegram</a>
        </div>
      </div>
    </div>
  )
}
