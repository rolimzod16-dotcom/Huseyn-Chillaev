import { useState } from 'react'
import { toast } from 'sonner'

const services = [
  { title: "Короткометражный анимационный фильм", desc: "Полный цикл: от идеи до готового фильма. Сценарий, раскадровка, анимация, звук." },
  { title: "Анимационный ролик / клип", desc: "Музыкальные клипы, рекламные и социальные ролики в авторском стиле." },
  { title: "Разработка персонажей", desc: "Дизайн и модель персонажей для анимации, комиксов или других проектов." },
  { title: "Комикс или история в картинках", desc: "Мини-комиксы, короткие истории и серии по вашему сценарию или на основе ваших событий." },
  { title: "Иллюстрации и раскадровка", desc: "Отдельные иллюстрации, сториборды, концепт-арты." },
]

const steps = [
  "Знакомство и обсуждение идеи",
  "Сценарий и раскадровка",
  "Эскизы и утверждение стиля",
  "Анимация и монтаж",
  "Правки и финализация",
  "Передача материалов",
]

const faqs = [
  { q: "Сколько стоит проект?", a: "Стоимость зависит от длительности, сложности и количества правок. После обсуждения задачи я подготовлю предложение." },
  { q: "Сколько времени занимает работа?", a: "От 3–4 недель на короткий ролик до нескольких месяцев на полноценный фильм. Сроки обсуждаем индивидуально." },
  { q: "Можно ли заказать что-то небольшое?", a: "Да. Я делаю и короткие ролики, и мини-комиксы, и отдельные иллюстрации." },
  { q: "Работаете ли вы с коммерческими заказами?", a: "Да, рассматриваю коммерческие проекты, рекламу и коллаборации. Пишите — обсудим." },
  { q: "Какой у вас процесс правок?", a: "Обычно 2–3 раунда правок включены. Дальше — по договорённости." },
]

export function ForClients() {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    service: '',
    desc: '',
    deadline: '',
    budget: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!form.name || !form.contact || !form.desc) {
      toast.error('Пожалуйста, заполните имя, контакты и описание')
      return
    }

    // "Send" the order
    console.log('Новая заявка:', form)
    
    toast.success('Заявка отправлена! Я свяжусь с вами в ближайшее время.', {
      description: 'Обычно отвечаю в течение 1–2 дней.',
    })

    // Reset
    setForm({ name: '', contact: '', service: '', desc: '', deadline: '', budget: '' })
  }

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }))

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-16">
      {/* Header */}
      <div>
        <div className="uppercase tracking-[3px] text-sm font-bold mb-2 text-[var(--accent)]">РАБОТАЕМ ВМЕСТЕ</div>
        <h1 className="text-6xl font-black tracking-[-2.2px]">Для заказчиков</h1>
        <p className="mt-3 max-w-2xl text-xl">Я беру ограниченное количество заказов, чтобы каждая история получалась настоящей.</p>
      </div>

      {/* УСЛУГИ */}
      <section>
        <h2 className="section-title text-3xl mb-6">Услуги</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((s, i) => (
            <div key={i} className="comic-panel p-6">
              <div className="font-black text-2xl mb-2 tracking-[-0.7px]">{s.title}</div>
              <p className="text-[var(--ink-light)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ПРОЦЕСС РАБОТЫ */}
      <section>
        <h2 className="section-title text-3xl mb-6">Процесс работы</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="comic-panel p-5 flex gap-4 items-start">
              <div className="step shrink-0 mt-0.5">{i + 1}</div>
              <div className="font-semibold leading-tight pt-1">{step}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-sm text-[var(--ink-light)]">На каждом этапе мы общаемся и согласуем результат. Вы всегда понимаете, что происходит.</p>
      </section>

      {/* ПОРТФОЛИО ДЛЯ КЛИЕНТОВ (коротко) */}
      <section>
        <h2 className="section-title text-3xl mb-6">Примеры работ для заказчиков</h2>
        <div className="text-[var(--ink-light)]">Полное портфолио — в разделе <a href="/projects" className="underline">Проекты</a> и <a href="/gallery" className="underline">Галерея</a>.</div>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Анимационный ролик", "Персонаж для проекта", "Короткий фильм", "Серия комиксов"].map((label, i) => (
            <div key={i} className="comic-panel p-4 text-center font-semibold text-sm tracking-wider border-[var(--ink)]">{label}</div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="section-title text-3xl mb-6">Частые вопросы</h2>
        <div className="faq max-w-3xl">
          {faqs.map((faq, i) => (
            <details key={i}>
              <summary>
                {faq.q}
                <span className="text-2xl leading-none ml-3 text-[var(--accent)]">+</span>
              </summary>
              <div className="answer">{faq.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ФОРМА ЗАКАЗА + КНОПКИ */}
      <section className="max-w-3xl">
        <h2 className="section-title text-3xl mb-6">Оставить заявку</h2>

        <form onSubmit={handleSubmit} className="order-form space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label>Ваше имя</label>
              <input value={form.name} onChange={e => update('name', e.target.value)} required placeholder="Иван Иванов" />
            </div>
            <div>
              <label>Telegram / Email / Телефон</label>
              <input value={form.contact} onChange={e => update('contact', e.target.value)} required placeholder="@username или почта" />
            </div>
          </div>

          <div>
            <label>Тип услуги</label>
            <select value={form.service} onChange={e => update('service', e.target.value)}>
              <option value="">Выберите услугу</option>
              {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
            </select>
          </div>

          <div>
            <label>Описание проекта</label>
            <textarea 
              rows={5} 
              value={form.desc} 
              onChange={e => update('desc', e.target.value)} 
              required 
              placeholder="Расскажите коротко: о чём история, примерная длительность, сроки, референсы..."
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label>Желаемые сроки</label>
              <input value={form.deadline} onChange={e => update('deadline', e.target.value)} placeholder="Например: до декабря 2025" />
            </div>
            <div>
              <label>Бюджет (примерно)</label>
              <input value={form.budget} onChange={e => update('budget', e.target.value)} placeholder="От … до …" />
            </div>
          </div>

          <button type="submit" className="comic-btn comic-btn-primary w-full sm:w-auto text-lg mt-2">
            Отправить заявку
          </button>
        </form>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="https://t.me/HuseynChillaev" target="_blank" rel="noopener noreferrer" className="comic-btn comic-btn-pop flex-1 sm:flex-none justify-center">
            Написать в Telegram
          </a>
          <a href="https://www.youtube.com/@Huseyn.Chillaev" target="_blank" rel="noopener noreferrer" className="comic-btn flex-1 sm:flex-none justify-center">
            Посмотреть работы на YouTube
          </a>
        </div>

        <p className="text-xs text-[var(--ink-light)] mt-4">Я отвечаю лично. Обычно в течение одного-двух дней.</p>
      </section>
    </div>
  )
}
