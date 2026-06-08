import { AnimatorPortrait, WavingHand } from '../components/HandDrawn'

export function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20">
      <div className="max-w-3xl">
        <div className="uppercase tracking-[4px] text-sm font-bold mb-2">ОБО МНЕ</div>
        <h1 className="text-6xl font-black tracking-[-2.5px] leading-none mb-6">Хусейн Чиллаев</h1>
        
        <p className="text-2xl font-semibold max-w-[36ch] mb-10">
          Я художник и аниматор. Создаю авторские анимационные фильмы и комиксы о жизни, детстве и повседневности.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-10 items-start">
        {/* Portrait */}
        <div className="md:col-span-5">
          <div className="comic-panel p-5 max-w-[340px]">
            <AnimatorPortrait className="w-full" />
          </div>
          <div className="mt-4 flex items-center gap-3 text-sm">
            <WavingHand className="w-9" />
            <span>Рад знакомству!</span>
          </div>
        </div>

        <div className="md:col-span-7 space-y-8 text-[17px]">
          <div>
            <p>Я рисую и анимирую от руки. Мне интересно передавать настоящие эмоции и ситуации, которые знакомы многим.</p>
          </div>
          
          <div>
            <p>Мои работы — это истории из жизни. Иногда смешные, иногда грустные, но всегда честные.</p>
          </div>

          <div className="pt-4 border-t-2 border-[var(--ink)]">
            <div className="font-bold mb-3">Чем я занимаюсь:</div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-[15px]">
              <li className="flex gap-2"><span className="font-mono text-[var(--accent)]">→</span> Короткометражные анимационные фильмы</li>
              <li className="flex gap-2"><span className="font-mono text-[var(--accent)]">→</span> Авторские комиксы и мини-комиксы</li>
              <li className="flex gap-2"><span className="font-mono text-[var(--accent)]">→</span> Разработка персонажей</li>
              <li className="flex gap-2"><span className="font-mono text-[var(--accent)]">→</span> Иллюстрация и раскадровка</li>
              <li className="flex gap-2"><span className="font-mono text-[var(--accent)]">→</span> Музыкальные и рекламные ролики</li>
              <li className="flex gap-2"><span className="font-mono text-[var(--accent)]">→</span> Персональные и коммерческие проекты</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Values / approach */}
      <div className="mt-16">
        <h2 className="section-title text-3xl mb-8">Как я работаю</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {[
            ["От руки", "Я не использую тяжёлые 3D-пакеты. Всё начинается с бумаги, карандаша и планшета."],
            ["История прежде всего", "Техника служит эмоции. Сначала история, потом движение."],
            ["Честность", "Я не выдумываю. Я рисую то, что чувствую и что пережил сам или вижу вокруг."]
          ].map(([title, desc], i) => (
            <div key={i} className="comic-panel p-6">
              <div className="font-black text-2xl mb-3">{title}</div>
              <p className="text-[var(--ink-light)]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
