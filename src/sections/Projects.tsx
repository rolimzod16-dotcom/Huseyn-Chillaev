import { useState } from 'react';
import { projects } from '../data';
import { Project } from '../types';
import { CartoonButton } from '../components/CartoonButton';
import { ProjectModal } from '../components/ProjectModal';
import { motion } from 'framer-motion';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Pure hand-drawn SVG covers - generic cartoon scenes for placeholders
  const getCover = (cover: string) => {
    const props = { className: "w-full h-full", viewBox: "0 0 320 190" };
    
    if (cover === 'project1') {
      return (
        <svg {...props}>
          <rect x="16" y="10" width="288" height="170" rx="2" fill="#fff" stroke="#111" strokeWidth="7"/>
          {/* Simple cartoon scene 1: character with window/light */}
          <rect x="110" y="48" width="100" height="90" fill="#5eead4" stroke="#111" strokeWidth="5" rx="3"/>
          <path d="M130 60 L190 60" stroke="#111" strokeWidth="4"/>
          <circle cx="160" cy="92" r="18" fill="#fff" stroke="#111" strokeWidth="4"/>
          <path d="M48 160 L36 110 L62 110 Z" fill="#fff" stroke="#111" strokeWidth="4"/>
          <path d="M270 160 L252 108 L282 108 Z" fill="#fff" stroke="#111" strokeWidth="4"/>
        </svg>
      );
    }
    if (cover === 'project2') {
      return (
        <svg {...props}>
          <rect x="14" y="12" width="292" height="166" rx="2" fill="#fff" stroke="#111" strokeWidth="7"/>
          {/* Simple cartoon scene 2: adventure / journey */}
          <path d="M40 148 L280 148 L265 170 L52 170 Z" fill="#fff" stroke="#111" strokeWidth="5"/>
          <ellipse cx="158" cy="88" rx="48" ry="24" fill="#5eead4" stroke="#111" strokeWidth="5"/>
          <circle cx="82" cy="62" r="14" fill="#fff" stroke="#111" strokeWidth="4"/>
          <circle cx="238" cy="70" r="12" fill="#fff" stroke="#111" strokeWidth="4"/>
          <path d="M110 78 L206 78" stroke="#111" strokeWidth="3"/>
        </svg>
      );
    }
    if (cover === 'project3') {
      return (
        <svg {...props}>
          <rect x="18" y="10" width="284" height="170" rx="2" fill="#fff" stroke="#111" strokeWidth="7"/>
          {/* Simple cartoon scene 3: many small doodles */}
          <circle cx="68" cy="72" r="16" fill="#5eead4" stroke="#111" strokeWidth="5"/>
          <circle cx="128" cy="58" r="10" fill="#fff" stroke="#111" strokeWidth="4"/>
          <rect x="178" y="62" width="32" height="26" rx="2" fill="#fff" stroke="#111" strokeWidth="4"/>
          <circle cx="238" cy="98" r="14" fill="#5eead4" stroke="#111" strokeWidth="5"/>
          <path d="M52 126 Q90 148 132 124" stroke="#111" strokeWidth="4" fill="none"/>
        </svg>
      );
    }
    // project4
    return (
      <svg {...props}>
        <rect x="16" y="10" width="288" height="170" rx="2" fill="#fff" stroke="#111" strokeWidth="7"/>
        {/* Simple cartoon scene 4: thoughtful character */}
        <ellipse cx="102" cy="102" rx="30" ry="40" fill="#fff" stroke="#111" strokeWidth="5"/>
        <circle cx="102" cy="72" r="16" fill="#fff" stroke="#111" strokeWidth="4"/>
        <circle cx="94" cy="68" r="3" fill="#111"/>
        <circle cx="110" cy="68" r="3" fill="#111"/>
        <path d="M180 58 L240 58 L240 110 L180 110 Z" fill="#5eead4" stroke="#111" strokeWidth="5"/>
      </svg>
    );
  };

  return (
    <section id="projects" className="bg-white py-16 border-t-4 border-[#111111]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="mb-9">
          <div className="text-[#14b8a6] text-xs font-bold tracking-[3px]">ГЛАВА 2 — АНИМАЦИОННЫЕ РАБОТЫ</div>
          <h2 className="comic-title text-6xl tracking-[-2.4px]">Проекты</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -2 }}
              onClick={() => setSelectedProject(project)}
              className="cartoon-card cursor-pointer overflow-hidden"
            >
              <div className="h-[196px] bg-white flex items-center justify-center border-b-[3px] border-[#111111]">
                {getCover(project.cover)}
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div className="font-bold text-[27px] tracking-[-0.6px] leading-none">{project.title}</div>
                  <div className="text-xs text-[#111111]/60 font-mono mt-1">{project.year}</div>
                </div>
                <p className="mt-3 text-[15px] text-[#111111]/80 pr-2 leading-tight">{project.description}</p>

                <div className="flex flex-wrap gap-x-2 gap-y-1 mt-4">
                  {project.tags.map(t => (
                    <span key={t} className="text-xs border border-[#111111] px-2.5 py-px">{t}</span>
                  ))}
                </div>

                <div className="mt-5">
                  <CartoonButton size="sm" onClick={() => setSelectedProject(project)}>
                    ПОСМОТРЕТЬ ПРОЕКТ
                  </CartoonButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
