import { motion } from 'framer-motion'

// Reusable hand-drawn style SVG components
// All strokes are deliberately slightly imperfect for organic cartoon feel

interface SVGProps {
  className?: string
  animate?: boolean
}

// Big friendly animator character for hero
export function HeroCharacter({ className = '', animate = true }: SVGProps) {
  return (
    <svg viewBox="0 0 420 380" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Paper / desk surface */}
      <rect x="40" y="260" width="340" height="90" rx="4" fill="var(--panel)" stroke="var(--ink)" strokeWidth="5"/>
      
      {/* Body / shirt - loose hand-drawn */}
      <path d="M170 195 Q 145 290 138 335" stroke="var(--ink)" strokeWidth="18" strokeLinecap="round" />
      <path d="M250 195 Q 275 290 282 335" stroke="var(--ink)" strokeWidth="18" strokeLinecap="round" />
      <path d="M155 208 Q 210 222 265 208" stroke="var(--ink)" strokeWidth="22" strokeLinecap="round" fill="none"/>
      
      {/* Head - big cartoon style */}
      <ellipse cx="210" cy="148" rx="62" ry="68" fill="var(--paper)" stroke="var(--ink)" strokeWidth="7"/>
      
      {/* Hair tufts - messy hand-drawn */}
      <path d="M155 105 Q 138 82 162 95" stroke="var(--ink)" strokeWidth="9" strokeLinecap="round"/>
      <path d="M168 92 Q 175 68 198 88" stroke="var(--ink)" strokeWidth="8" strokeLinecap="round"/>
      <path d="M252 92 Q 260 65 278 95" stroke="var(--ink)" strokeWidth="9" strokeLinecap="round"/>
      <path d="M200 82 Q 215 58 245 85" stroke="var(--ink)" strokeWidth="7" strokeLinecap="round"/>
      
      {/* Eyebrows */}
      <path d="M175 125 Q 185 120 192 126" stroke="var(--ink)" strokeWidth="3.5" strokeLinecap="round"/>
      <path d="M228 126 Q 235 120 245 125" stroke="var(--ink)" strokeWidth="3.5" strokeLinecap="round"/>
      
      {/* Eyes - expressive */}
      <ellipse cx="182" cy="140" rx="9" ry="11" fill="var(--ink)"/>
      <ellipse cx="238" cy="140" rx="9" ry="11" fill="var(--ink)"/>
      {/* eye highlights */}
      <circle cx="186" cy="136" r="2.5" fill="var(--paper)"/>
      <circle cx="242" cy="136" r="2.5" fill="var(--paper)"/>
      
      {/* Nose simple */}
      <path d="M210 148 Q 214 158 210 164" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round"/>
      
      {/* Big smile */}
      <path d="M178 170 Q 210 188 242 170" stroke="var(--ink)" strokeWidth="4.5" strokeLinecap="round"/>
      
      {/* Arms drawing */}
      <path d="M155 222 Q 92 255 68 310" stroke="var(--ink)" strokeWidth="15" strokeLinecap="round"/>
      <path d="M265 222 Q 328 255 352 310" stroke="var(--ink)" strokeWidth="15" strokeLinecap="round"/>
      
      {/* Left hand holding pencil */}
      <ellipse cx="72" cy="318" rx="16" ry="9" transform="rotate(-35 72 318)" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3"/>
      
      {/* Pencil - important! */}
      <g>
        <rect x="48" y="302" width="58" height="7" rx="1" transform="rotate(-28 78 305)" fill="#f59e0b" stroke="var(--ink)" strokeWidth="2"/>
        <path d="M55 300 L 48 305" stroke="#111" strokeWidth="3" strokeLinecap="round"/>
      </g>
      
      {/* Right hand relaxed */}
      <ellipse cx="345" cy="305" rx="13" ry="8" fill="var(--paper)" stroke="var(--ink)" strokeWidth="3"/>
      
      {/* Sketch lines on paper - meta */}
      <path d="M95 285 Q 160 278 210 290" stroke="var(--ink)" strokeWidth="1.5" strokeOpacity="0.35"/>
      <path d="M100 300 Q 175 295 250 305" stroke="var(--ink)" strokeWidth="1.5" strokeOpacity="0.35"/>
      <path d="M110 315 Q 190 308 280 318" stroke="var(--ink)" strokeWidth="1.5" strokeOpacity="0.35"/>
      
      {/* Little star / spark */}
      <motion.g 
        animate={animate ? { rotate: [0, 8, -6, 0] } : {}}
        transition={{ duration: 3.5, repeat: Infinity }}
        style={{ originX: '0.5', originY: '0.5' }}
      >
        <path d="M310 120 L316 135 L332 136 L320 147 L325 163 L310 153 L295 163 L300 147 L288 136 L304 135 Z" fill="var(--accent)" stroke="var(--ink)" strokeWidth="2"/>
      </motion.g>
    </svg>
  )
}

// Smaller portrait for About page - self portrait style
export function AnimatorPortrait({ className = '' }: SVGProps) {
  return (
    <svg viewBox="0 0 300 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="145" r="78" fill="var(--panel)" stroke="var(--ink)" strokeWidth="8"/>
      
      {/* Hair */}
      <path d="M78 92 Q 85 58 150 62" stroke="var(--ink)" strokeWidth="12" strokeLinecap="round" fill="none"/>
      <path d="M150 62 Q 215 58 225 95" stroke="var(--ink)" strokeWidth="12" strokeLinecap="round" fill="none"/>
      
      {/* Face lines for character */}
      <ellipse cx="150" cy="145" rx="62" ry="66" fill="var(--paper)" stroke="var(--ink)" strokeWidth="6"/>
      
      {/* Brows */}
      <path d="M108 118 Q 122 113 133 119" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round"/>
      <path d="M167 119 Q 178 113 192 118" stroke="var(--ink)" strokeWidth="4" strokeLinecap="round"/>
      
      {/* Eyes */}
      <circle cx="118" cy="133" r="8" fill="var(--ink)"/>
      <circle cx="182" cy="133" r="8" fill="var(--ink)"/>
      <circle cx="121" cy="130" r="2" fill="var(--paper)"/>
      <circle cx="185" cy="130" r="2" fill="var(--paper)"/>
      
      {/* Smile */}
      <path d="M115 162 Q 150 178 185 162" stroke="var(--ink)" strokeWidth="5" strokeLinecap="round" fill="none"/>
      
      {/* Neck + shoulders suggestion */}
      <path d="M105 205 Q 150 220 195 205" stroke="var(--ink)" strokeWidth="14" strokeLinecap="round"/>
      
      {/* Little pencil behind ear */}
      <rect x="198" y="95" width="34" height="5" rx="1" transform="rotate(32 215 97)" fill="var(--accent)" stroke="var(--ink)" strokeWidth="1.5"/>
    </svg>
  )
}

// Cute pencil character
export function PencilBuddy({ className = '' }: SVGProps) {
  return (
    <svg viewBox="0 0 120 160" className={className} fill="none">
      {/* Body pencil */}
      <rect x="42" y="38" width="36" height="88" rx="2" fill="#fde047" stroke="var(--ink)" strokeWidth="6"/>
      {/* Metal band */}
      <rect x="44" y="118" width="32" height="10" fill="#d1d5db" stroke="var(--ink)" strokeWidth="4"/>
      {/* Eraser */}
      <rect x="44" y="20" width="32" height="20" rx="2" fill="#fb7185" stroke="var(--ink)" strokeWidth="5"/>
      {/* Tip */}
      <path d="M42 126 L 60 152 L 78 126" fill="#f59e0b" stroke="var(--ink)" strokeWidth="5"/>
      <path d="M54 140 L 60 152 L 66 140" fill="#111" stroke="var(--ink)" strokeWidth="2"/>
      
      {/* Eyes on pencil */}
      <circle cx="52" cy="68" r="5" fill="var(--ink)"/>
      <circle cx="68" cy="68" r="5" fill="var(--ink)"/>
      <path d="M50 82 Q 60 88 70 82" stroke="var(--ink)" strokeWidth="3" strokeLinecap="round"/>
    </svg>
  )
}

// Comic panel frame with slight wobble
export function ComicPanel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`comic-panel p-4 ${className}`}>
      {children}
    </div>
  )
}

// Decorative film strip element
export function FilmStrip({ className = '' }: SVGProps) {
  return (
    <svg viewBox="0 0 280 42" className={className} fill="none">
      <rect x="2" y="2" width="276" height="38" rx="3" stroke="var(--ink)" strokeWidth="4" fill="var(--ink)"/>
      {[0,1,2,3,4,5].map((i) => (
        <g key={i}>
          <rect x={16 + i*44} y="8" width="18" height="26" fill="var(--paper)" stroke="var(--ink)" strokeWidth="2"/>
        </g>
      ))}
    </svg>
  )
}

// Speech bubble component usable inline
export function Speech({ text, className = '' }: { text: string; className?: string }) {
  return (
    <div className={`speech-bubble inline-block max-w-[260px] text-sm font-medium ${className}`}>
      {text}
    </div>
  )
}

// Star burst / emphasis
export function StarBurst({ className = '' }: SVGProps) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none">
      <path d="M30 4 L35 22 L54 22 L38 34 L44 52 L30 40 L16 52 L22 34 L6 22 L25 22 Z" fill="var(--accent)" stroke="var(--ink)" strokeWidth="3"/>
    </svg>
  )
}

// Simple waving hand
export function WavingHand({ className = '' }: SVGProps) {
  return (
    <svg viewBox="0 0 80 70" className={className} fill="none">
      <path d="M22 38 Q 12 18 26 12" stroke="var(--ink)" strokeWidth="8" strokeLinecap="round"/>
      <path d="M32 42 Q 24 20 36 16" stroke="var(--ink)" strokeWidth="7" strokeLinecap="round"/>
      <path d="M42 44 Q 36 22 46 20" stroke="var(--ink)" strokeWidth="7" strokeLinecap="round"/>
      <path d="M52 43 Q 48 25 56 24" stroke="var(--ink)" strokeWidth="7" strokeLinecap="round"/>
      <ellipse cx="58" cy="38" rx="12" ry="17" transform="rotate(-25 58 38)" fill="var(--paper)" stroke="var(--ink)" strokeWidth="6"/>
    </svg>
  )
}
