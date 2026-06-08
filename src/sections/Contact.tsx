import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-white py-14 border-t-4 border-[#111111]">
      <div className="max-w-4xl mx-auto px-5 text-center">
        <div className="text-[#14b8a6] text-xs tracking-[3px] font-bold">ПОСЛЕДНЯЯ СТРАНИЦА (ПОКА ЧТО)</div>
        <h2 className="comic-title text-6xl tracking-[-1.5px] mt-1 mb-7">Связаться</h2>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 text-left">
          <a href="mailto:huseyn@huseynchillaev.com" className="block">
            <div className="text-xs tracking-widest text-[#14b8a6]">ПОЧТА</div>
            <div className="font-bold text-2xl">huseyn@huseynchillaev.com</div>
          </a>
          <a href="https://t.me/huseynchillaev" target="_blank" className="block">
            <div className="text-xs tracking-widest text-[#14b8a6]">ТЕЛЕГРАМ</div>
            <div className="font-bold text-2xl">@huseynchillaev</div>
          </a>
          <a href="https://youtube.com/@huseynchillaev" target="_blank" className="block">
            <div className="text-xs tracking-widest text-[#14b8a6]">ЮТУБ</div>
            <div className="font-bold text-2xl">Хусейн Чиллаев</div>
          </a>
          <a href="https://instagram.com/huseynchillaev" target="_blank" className="block">
            <div className="text-xs tracking-widest text-[#14b8a6]">ИНСТАГРАМ</div>
            <div className="font-bold text-2xl">@huseynchillaev</div>
          </a>
        </div>

        <div className="mt-12 text-xs text-[#111111]/50 tracking-wider">© {new Date().getFullYear()} ХУСЕЙН ЧИЛЛАЕВ — НАРИСОВАННАЯ ОТ РУКИ АНИМАЦИЯ И КОМИКСЫ</div>
      </div>
    </section>
  );
};
