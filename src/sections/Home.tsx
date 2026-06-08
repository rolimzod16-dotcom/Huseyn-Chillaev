import { CartoonFigure } from '../components/CartoonFigure';
import { CartoonButton } from '../components/CartoonButton';
import { FloatingElement } from '../components/FloatingElement';
import { SpeechBubble } from '../components/SpeechBubble';

export const Home: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-[100dvh] pt-14 bg-white relative overflow-hidden flex items-center">
      {/* Subtle sketchbook paper lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]" 
           style={{ backgroundImage: 'repeating-linear-gradient(0deg, #111111 0px, #111111 1px, transparent 1px, transparent 26px)' }} />

      {/* Floating hand-drawn doodles */}
      <FloatingElement className="absolute top-[15%] left-[6%] text-[#111111] hidden lg:block" delay={0.1}>
        <svg width="36" height="36" viewBox="0 0 36 36" className="hand-drawn"><path d="M6 18 Q12 6 18 18 Q24 30 30 18" /></svg>
      </FloatingElement>
      <FloatingElement className="absolute top-[22%] right-[7%] hidden md:block" delay={1.2}>
        <svg width="28" height="28" viewBox="0 0 28 28" className="hand-drawn"><circle cx="14" cy="14" r="9" /></svg>
      </FloatingElement>

      <div className="max-w-6xl mx-auto px-5 relative z-10 pt-8 pb-10">
        <div className="grid md:grid-cols-12 gap-x-6 items-center">
          {/* Text content */}
          <div className="md:col-span-7">
            <div className="inline px-3 py-px border-2 border-[#111111] text-xs tracking-[1.5px] mb-5 inline-block">НАРИСОВАННЫЕ ОТ РУКИ МУЛЬТФИЛЬМЫ</div>

            <h1 className="comic-title text-[68px] md:text-[82px] leading-[0.9] tracking-[-3.8px] text-[#111111] mb-4">
              Привет, я<br />Хусейн Чиллаев.
            </h1>

            <p className="text-xl md:text-2xl max-w-lg text-[#111111]/90 mb-8">
              Я создаю нарисованные от руки 2D-анимации и комиксы чернилами на бумаге.
            </p>

            <div className="flex flex-wrap gap-3">
              <CartoonButton onClick={() => scrollTo('projects')} variant="primary">
                ПОСМОТРЕТЬ ПРОЕКТЫ
              </CartoonButton>
              <CartoonButton onClick={() => scrollTo('comics')}>
                ЧИТАТЬ КОМИКСЫ
              </CartoonButton>
              <CartoonButton onClick={() => scrollTo('donations')}>
                КУПИТЬ КАРАНДАШ
              </CartoonButton>
            </div>
          </div>

          {/* Big mascot illustration */}
          <div className="md:col-span-5 mt-8 md:mt-0 flex justify-center">
            <div className="relative">
              <CartoonFigure size={290} pose="wave" animated />

              {/* Multiple speech bubbles around the mascot for living cartoon feel */}
              <div className="absolute -top-3 -left-6 hidden md:block">
                <SpeechBubble text="Привет!" delay={0.4} />
              </div>
              <div className="absolute -bottom-2 right-0 hidden lg:block">
                <SpeechBubble text="Давай что-нибудь создадим вместе." delay={0.9} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom hand-drawn banner */}
        <div className="mt-12 flex items-center justify-center gap-3 text-xs tracking-[2px] text-[#111111]/60">
          <div className="flex-1 h-px bg-[#111111]/20 max-w-[80px]" />
          ПРОКРУТИТЕ ВНИЗ, ЧТОБЫ ИССЛЕДОВАТЬ РАБОТЫ
          <div className="flex-1 h-px bg-[#111111]/20 max-w-[80px]" />
        </div>
      </div>

      {/* Hand-drawn bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#111111]" />
    </section>
  );
};
