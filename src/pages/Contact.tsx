import { toast } from 'sonner'

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    
    const name = formData.get('name') as string
    const message = formData.get('message') as string

    if (!name || !message) {
      toast.error('Заполните имя и сообщение')
      return
    }

    toast.success('Сообщение отправлено. Спасибо!', { description: 'Я отвечу в ближайшее время.' })
    form.reset()
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-20">
      <h1 className="text-6xl font-black tracking-[-2.5px] mb-3">Контакты</h1>
      <p className="text-xl mb-10 text-[var(--ink-light)]">Самый быстрый способ связаться — Telegram.</p>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <a href="https://t.me/HuseynChillaev" target="_blank" rel="noopener noreferrer" className="comic-btn comic-btn-pop text-xl py-6 justify-center">
          Написать в Telegram
        </a>
        <a href="https://www.youtube.com/@Huseyn.Chillaev" target="_blank" rel="noopener noreferrer" className="comic-btn text-xl py-6 justify-center">
          YouTube-канал
        </a>
      </div>

      <div className="comic-panel p-8">
        <div className="mb-6 font-bold text-lg">Или отправьте сообщение здесь</div>
        
        <form onSubmit={handleSubmit} className="order-form space-y-5">
          <div>
            <label>Имя</label>
            <input name="name" placeholder="Как вас зовут" required />
          </div>
          <div>
            <label>Контакт (Telegram / почта)</label>
            <input name="contact" placeholder="@ваш_ник или email" />
          </div>
          <div>
            <label>Сообщение</label>
            <textarea name="message" rows={6} placeholder="О чём хотите написать..." required />
          </div>
          <button type="submit" className="comic-btn comic-btn-primary">Отправить</button>
        </form>
      </div>

      <div className="mt-10 text-sm text-[var(--ink-light)]">
        Я читаю каждое сообщение. Обычно отвечаю в течение нескольких дней.
      </div>
    </div>
  )
}
