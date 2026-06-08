import React from 'react';

export const Donations: React.FC = () => {
  const options = [
    { icon: "✉", label: "ТЕЛЕГРАМ", desc: "Напишите привет и получайте наброски в почту", href: "https://t.me/huseynchillaev" },
    { icon: "♥", label: "ПАТРЕОН", desc: "Ежемесячные наброски, закулисье и обои", href: "https://patreon.com/huseynchillaev" },
    { icon: "☕", label: "КУПИ МНЕ КОФЕ", desc: "Одноразовая благодарность, чтобы чернила продолжали течь", href: "https://buymeacoffee.com/huseynchillaev" },
    { icon: "✎", label: "ЗАКАЖИТЕ РАБОТУ", desc: "Давайте создадим вместе кастомный мультфильм", href: "#contact" },
  ];

  return (
    <section id="donations" className="bg-white py-16 border-t-4 border-[#111111]">
      <div className="max-w-4xl mx-auto px-5">
        <div className="max-w-lg mb-8">
          <div className="text-xs tracking-[3px] text-[#14b8a6] font-bold">ГЛАВА 5 — ПОДДЕРЖКА РАБОТЫ</div>
          <h2 className="comic-title text-6xl tracking-[-2px]">Пожертвования и поддержка</h2>
          <p className="mt-3 text-lg">Если мои нарисованные от руки анимации и комиксы принесли вам радость, вот способы поддержать работу.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {options.map((opt, i) => (
            <a key={i} href={opt.href} target="_blank" rel="noopener noreferrer" className="donation-card p-6 flex gap-4 items-start">
              <div className="text-4xl text-[#14b8a6] mt-0.5">{opt.icon}</div>
              <div>
                <div className="font-bold text-2xl tracking-tight">{opt.label}</div>
                <div className="mt-1 text-[#111111]/80 text-[15px]">{opt.desc}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-9 text-center text-sm text-[#111111]/60">Спасибо. Ваша поддержка помогает продолжать нарисованные истории.</div>
      </div>
    </section>
  );
};
