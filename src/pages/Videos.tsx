import { useState } from 'react'
import { videos } from '../data'
import { FilmStrip } from '../components/HandDrawn'
import { Play } from 'lucide-react'

export function Videos() {
  const [activeVideo, setActiveVideo] = useState<null | { title: string; link: string; youtubeId?: string }>(null)

  const closeVideo = () => setActiveVideo(null)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-16">
      <div className="mb-8">
        <div className="uppercase tracking-[3.5px] text-xs font-bold">ДВИЖЕНИЕ И ЗВУК</div>
        <h1 className="text-6xl font-black tracking-[-2.2px]">Видео</h1>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {videos.map((vid) => (
          <div 
            key={vid.id} 
            onClick={() => setActiveVideo({ title: vid.title, link: vid.link, youtubeId: vid.youtubeId })}
            className="video-card group aspect-video flex flex-col"
          >
            <div className="flex-1 relative bg-[#1a1a1a] flex items-center justify-center">
              <FilmStrip className="absolute top-4 w-[78%] opacity-30" />
              <div className="play group-active:scale-90 transition">
                <Play />
              </div>
            </div>
            <div className="p-4 bg-[var(--paper)] border-t-[3px] border-[var(--ink)]">
              <div className="font-bold text-xl tracking-[-0.6px]">{vid.title}</div>
              <div className="text-sm text-[var(--ink-light)] mt-1 flex justify-between">
                <span>{vid.year}</span>
                <span className="group-hover:underline">Смотреть →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a href="https://www.youtube.com/@Huseyn.Chillaev" target="_blank" rel="noopener noreferrer" className="comic-btn comic-btn-primary">
          Открыть весь YouTube-канал
        </a>
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center p-4" onClick={closeVideo}>
          <div className="w-full max-w-4xl" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-3 px-1">
              <div className="font-bold text-white text-xl">{activeVideo.title}</div>
              <button onClick={closeVideo} className="text-white text-3xl leading-none pr-1">×</button>
            </div>

            {activeVideo.youtubeId ? (
              <div className="aspect-video bg-black">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${activeVideo.youtubeId}`} 
                  title={activeVideo.title}
                  allowFullScreen 
                />
              </div>
            ) : (
              <div className="aspect-video bg-[#111] border-[4px] border-white flex flex-col items-center justify-center text-center p-8">
                <p className="text-white/90 mb-6 text-lg">Видео доступно на YouTube</p>
                <a 
                  href={activeVideo.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="comic-btn bg-white text-black border-white"
                >
                  Открыть на YouTube
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
