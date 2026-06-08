import React from 'react';
import { CartoonFigure } from '../components/CartoonFigure';
import { SpeechBubble } from '../components/SpeechBubble';
import { timeline } from '../data';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  // Hand-drawn simple character reactions
  const getReaction = (type: string) => {
    if (type === 'excited') return <svg width="38" height="38" viewBox="0 0 38 38"><circle cx="19" cy="19" r="15" fill="#fff" stroke="#111" strokeWidth="3"/><circle cx="13" cy="15" r="2.5" fill="#111"/><circle cx="25" cy="15" r="2.5" fill="#111"/><path d="M12 24 Q19 29 26 24" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/></svg>;
    if (type === 'thinking') return <svg width="38" height="38" viewBox="0 0 38 38"><circle cx="19" cy="19" r="15" fill="#fff" stroke="#111" strokeWidth="3"/><circle cx="13" cy="15" r="2.5" fill="#111"/><circle cx="25" cy="15" r="2.5" fill="#111"/><path d="M14 25 Q19 27 24 25" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/></svg>;
    return <svg width="38" height="38" viewBox="0 0 38 38"><circle cx="19" cy="19" r="15" fill="#fff" stroke="#111" strokeWidth="3"/><circle cx="13" cy="15" r="2.5" fill="#111"/><circle cx="25" cy="15" r="2.5" fill="#111"/><path d="M13 25 Q19 25 25 25" stroke="#111" strokeWidth="2.5" strokeLinecap="round"/></svg>;
  };

  return (
    <section id="about" className="bg-white py-16 border-t-4 border-[#111111]">
      <div className="max-w-5xl mx-auto px-5">
        <div className="max-w-2xl mb-10">
          <div className="text-[#14b8a6] text-xs tracking-[3px] font-bold">ГЛАВА 1 — СКЕТЧБУК</div>
          <h2 className="comic-title text-6xl md:text-7xl tracking-[-2.5px] mt-1">Обо мне</h2>
        </div>

        {/* Intro with mascot + bubbles - hand drawn scene */}
        <div className="grid md:grid-cols-2 gap-9 items-center mb-14">
          <div>
            <div className="space-y-5 text-lg leading-snug">
              <p>Меня зовут Хусейн Чиллаев. Я создаю нарисованные от руки анимации и комиксы традиционным способом — чернилами, на бумаге и с множеством набросков.</p>
              <p>Я создаю 2D-анимационные истории и иллюстрированные миры. Всё начинается с рисунка в скетчбуке.</p>
            </div>

            <div className="mt-6">
              <SpeechBubble text="Я рисую каждый кадр от руки!" />
            </div>
          </div>

          <div className="flex justify-center md:justify-end relative mt-4 md:mt-0">
            <div>
              <CartoonFigure size={180} pose="sit" />
              <div className="absolute -right-1 top-8">
                <SpeechBubble text="Хусейн рисует каждый кадр." delay={0.3} />
              </div>
            </div>
          </div>
        </div>

        {/* Comic timeline */}
        <div className="mb-6">
          <div className="uppercase text-xs tracking-[2.5px] mb-4 font-bold text-[#14b8a6]">МОЯ ИСТОРИЯ В КОМИКС-ПАНЕЛЯХ</div>
        </div>

        <div className="relative pl-12 space-y-9">
          <div className="timeline-line" />

          {timeline.map((item, index) => (
            <motion.div 
              key={index} 
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <div className="w-11 flex-shrink-0">
                <div className="comic-panel px-2.5 py-0.5 text-sm font-bold inline-block bg-white border-2 border-[#111111]">
                  {item.year}
                </div>
              </div>

              <div className="flex-1 pt-0.5">
                <div className="font-bold text-2xl tracking-tight">{item.title}</div>
                <p className="text-[#111111]/80 mt-0.5 pr-4">{item.description}</p>
              </div>

              <div className="hidden sm:flex flex-shrink-0 pt-1">
                {getReaction(item.reaction)}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm italic text-[#111111]/60">
          "Каждый рисунок — это маленький мир, который начинается с линии на бумаге."
        </div>
      </div>
    </section>
  );
};
