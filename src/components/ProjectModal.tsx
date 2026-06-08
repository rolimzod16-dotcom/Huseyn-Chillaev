import React from 'react';
import { Project } from '../types';
import { CartoonButton } from './CartoonButton';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-[#111111]/80 z-[110] flex items-center justify-center p-4" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.97, y: 10 }}
          className="comic-panel w-full max-w-[620px] modal bg-white relative max-h-[88dvh] overflow-auto"
          onClick={e => e.stopPropagation()}
        >
          <button onClick={onClose} className="absolute top-3 right-3 p-2 text-[#111111]">
            <X size={22} />
          </button>

          <div className="p-7 md:p-8">
            <div className="text-xs tracking-[3px] text-[#14b8a6] font-bold">ПРОЕКТ ХУСЕЙНА ЧИЛЛАЕВА</div>
            <h3 className="comic-title text-4xl md:text-5xl tracking-[-1.6px] text-[#111111] mt-1 mb-1">{project.title}</h3>
            
            <div className="text-sm text-[#111111]/60 mb-5 flex gap-3">
              <span>{project.year}</span> • <span>{project.duration}</span> • <span>{project.role}</span>
            </div>

            <div className="text-[15.5px] leading-relaxed text-[#111111]">
              {project.longDescription}
            </div>

            <div className="mt-6 flex gap-2 flex-wrap">
              {project.tags.map((tag, i) => <div key={i} className="px-3 py-px border border-[#111111] text-xs">{tag}</div>)}
            </div>

            <div className="mt-8 flex gap-3">
              <CartoonButton variant="primary" onClick={onClose}>ЗАКРЫТЬ</CartoonButton>
              <CartoonButton onClick={() => window.open('https://youtube.com/@huseynchillaev', '_blank')}>СМОТРЕТЬ ФИЛЬМ</CartoonButton>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
