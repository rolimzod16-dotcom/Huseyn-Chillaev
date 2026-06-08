import React, { useState } from 'react';
import { videos } from '../data';
import { CartoonButton } from '../components/CartoonButton';

export const Videos: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const video = videos[idx];

  const go = (next: number) => setIdx((next + videos.length) % videos.length);

  return (
    <section id="videos" className="bg-white py-16 border-t-4 border-[#111111]">
      <div className="max-w-5xl mx-auto px-5">
        <div className="mb-8">
          <div className="text-xs tracking-[3px] text-[#14b8a6] font-bold">ГЛАВА 4 — ДВИЖУЩИЕСЯ РИСУНКИ</div>
          <h2 className="comic-title text-6xl tracking-[-2.4px]">Видео и анимации</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="video-frame mb-3">
            <div className="bg-white aspect-video">
              <iframe 
                className="w-full h-full" 
                src={`https://www.youtube.com/embed/${video.youtubeId}`} 
                title={video.title}
                allowFullScreen 
              />
            </div>
          </div>

          <div className="comic-panel p-5">
            <div className="flex justify-between gap-4">
              <div>
                <div className="font-bold text-2xl tracking-tight">{video.title}</div>
                <div className="text-[#111111]/80">{video.description}</div>
              </div>
              <div className="text-right text-xs font-mono text-[#111111]/60 whitespace-nowrap pt-1">{video.duration}<br/>{video.year}</div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a href={`https://youtube.com/watch?v=${video.youtubeId}`} target="_blank" rel="noopener noreferrer">
                <CartoonButton size="sm">СМОТРЕТЬ НА ЮТУБЕ</CartoonButton>
              </a>
              <button onClick={() => go(idx + 1)} className="text-sm underline">СЛЕДУЮЩАЯ АНИМАЦИЯ →</button>
            </div>
          </div>

          {/* Simple dot pagination */}
          <div className="flex justify-center gap-2 mt-5">
            {videos.map((_, i) => (
              <button key={i} onClick={() => go(i)} className={`w-2.5 h-2.5 rounded-full border-2 border-[#111111] ${i === idx ? 'bg-[#14b8a6]' : 'bg-white'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
