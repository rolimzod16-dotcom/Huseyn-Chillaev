import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './sections/Home';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Comics } from './sections/Comics';
import { Gallery } from './sections/Gallery';
import { Videos } from './sections/Videos';
import { Donations } from './sections/Donations';
import { Contact } from './sections/Contact';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simple hand-drawn cartoon loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111111] overflow-x-hidden font-['Comic_Neue',system-ui,sans-serif]">
      {/* Hand-drawn style loading screen */}
      <AnimatePresence>
        {isLoading && (
          <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
            <div className="text-center">
              <div className="comic-panel mx-auto w-60 h-24 flex items-center justify-center mb-4 border-[3px] border-[#111111]">
                <div>
                  <div className="comic-title text-[#111111] text-4xl tracking-[-1.5px]">Хусейн Чиллаев</div>
                  <div className="text-[10px] text-[#14b8a6] tracking-[2px] -mt-1">РИСУЮ МИР...</div>
                </div>
              </div>
              {/* Sketchy loading dots */}
              <div className="flex justify-center gap-2.5">
                {[0,1,2].map(i => (
                  <motion.div 
                    key={i} 
                    className="w-2.5 h-2.5 border-2 border-[#111111] rounded-full" 
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      <Navbar />

      <main>
        <Home />
        <About />
        <Projects />
        <Comics />
        <Gallery />
        <Videos />
        <Donations />
        <Contact />
      </main>
    </div>
  );
}

export default App;
