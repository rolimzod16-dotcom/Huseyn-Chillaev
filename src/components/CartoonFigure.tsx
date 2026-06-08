import React, { useState, useEffect } from 'react';

interface CartoonFigureProps {
  size?: number;
  pose?: 'wave' | 'sit' | 'excited';
  animated?: boolean;
}

// Generic hand-drawn cartoon artist figure for HUSEYN CHILLAEV's website.
// Stylized self-portrait style cartoon character (no specific fictional name).

export const CartoonFigure: React.FC<CartoonFigureProps> = ({ 
  size = 240, 
  pose = 'wave', 
  animated = true 
}) => {
  const [isBlinking, setIsBlinking] = useState(false);
  const [currentPose, setCurrentPose] = useState(pose);

  // Playful blink animation
  useEffect(() => {
    if (!animated) return;
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.55) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 150);
      }
    }, 4100);
    return () => clearInterval(blinkInterval);
  }, [animated]);

  // Occasional pose change for lively feel
  useEffect(() => {
    if (!animated || pose !== 'wave') return;
    const poseTimer = setInterval(() => {
      if (Math.random() > 0.7) {
        setCurrentPose('excited');
        setTimeout(() => setCurrentPose('wave'), 900);
      }
    }, 6800);
    return () => clearTimeout(poseTimer);
  }, [animated, pose]);

  const s = size / 240;
  const sw = 5 * s;

  return (
    <svg 
      width={size} 
      height={size * 0.95} 
      viewBox="0 0 240 226" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(2px 3px 0 #111111)' }}
    >
      {/* Shadow */}
      <ellipse cx="120" cy="208" rx="50" ry="7" fill="#111111" opacity="0.08" />

      {/* Body - simple cartoon shirt */}
      <rect x="82" y="118" width="76" height="72" rx="8" fill="#ffffff" stroke="#111111" strokeWidth={sw} />

      {/* Arms */}
      {/* Left arm (holding pencil or waving) */}
      <path 
        d={currentPose === 'wave' || currentPose === 'excited' ? "M88 128 Q62 92 50 102" : "M88 132 Q70 148 58 138"} 
        stroke="#111111" 
        strokeWidth={sw} 
        strokeLinecap="round" 
      />
      {/* Pencil in hand */}
      <line 
        x1={currentPose === 'wave' || currentPose === 'excited' ? "48" : "56"} 
        y1={currentPose === 'wave' || currentPose === 'excited' ? "98" : "134"} 
        x2={currentPose === 'wave' || currentPose === 'excited' ? "38" : "46"} 
        y2={currentPose === 'wave' || currentPose === 'excited' ? "82" : "118"} 
        stroke="#111111" 
        strokeWidth={sw - 1} 
      />
      <circle 
        cx={currentPose === 'wave' || currentPose === 'excited' ? "36" : "44"} 
        cy={currentPose === 'wave' || currentPose === 'excited' ? "80" : "116"} 
        r="3" 
        fill="#5eead4" 
        stroke="#111111" 
        strokeWidth="2" 
      />

      {/* Right arm */}
      <path 
        d="M158 130 Q178 148 192 138" 
        stroke="#111111" 
        strokeWidth={sw} 
        strokeLinecap="round" 
      />

      {/* Head - round cartoon style */}
      <ellipse 
        cx="120" cy="92" rx="34" ry="33" 
        fill="#ffffff" 
        stroke="#111111" 
        strokeWidth={sw} 
      />

      {/* Hair / cap style - simple hand-drawn hair */}
      <path 
        d="M88 68 Q100 52 120 58 Q140 52 152 68" 
        fill="#111111" 
        stroke="#111111" 
        strokeWidth={sw - 1} 
      />

      {/* Ears */}
      <ellipse cx="86" cy="90" rx="7" ry="10" fill="#ffffff" stroke="#111111" strokeWidth={sw - 1} />
      <ellipse cx="154" cy="90" rx="7" ry="10" fill="#ffffff" stroke="#111111" strokeWidth={sw - 1} />

      {/* Snout / face area */}
      <ellipse cx="120" cy="100" rx="12" ry="9" fill="#ffffff" stroke="#111111" strokeWidth={sw - 1.5} />

      {/* Nose */}
      <ellipse cx="120" cy="102" rx="3" ry="2" fill="#111111" />

      {/* Eyes - expressive cartoon eyes */}
      <g>
        <ellipse cx="105" cy="84" rx="5.5" ry="6.5" fill="#111111" />
        <ellipse cx="107" cy="82" rx="1.8" ry="2.2" fill="#ffffff" opacity="0.9" />
        {isBlinking && <rect x="99" y="81" width="12" height="5" rx="1" fill="#111111" />}
      </g>
      <g>
        <ellipse cx="135" cy="84" rx="5.5" ry="6.5" fill="#111111" />
        <ellipse cx="137" cy="82" rx="1.8" ry="2.2" fill="#ffffff" opacity="0.9" />
        {isBlinking && <rect x="129" y="81" width="12" height="5" rx="1" fill="#111111" />}
      </g>

      {/* Eyebrows for expression */}
      {currentPose === 'excited' && (
        <>
          <path d="M98 75 L107 78" stroke="#111111" strokeWidth={sw - 2.5} strokeLinecap="round" />
          <path d="M133 78 L142 75" stroke="#111111" strokeWidth={sw - 2.5} strokeLinecap="round" />
        </>
      )}

      {/* Cheek accent (light turquoise blush) */}
      <ellipse cx="97" cy="95" rx="4" ry="2" fill="#5eead4" opacity="0.3" />
      <ellipse cx="143" cy="95" rx="4" ry="2" fill="#5eead4" opacity="0.3" />

      {/* Smile */}
      <path 
        d={currentPose === 'excited' ? "M112 106 Q120 111 128 106" : "M112 105 Q120 109 128 105"} 
        stroke="#111111" 
        strokeWidth={sw - 2} 
        strokeLinecap="round" 
        fill="none" 
      />

      {/* Scarf / collar detail with turquoise accent */}
      <path d="M96 116 Q120 124 144 116" stroke="#5eead4" strokeWidth={sw - 1} strokeLinecap="round" fill="none" />

      {/* Legs */}
      <path d="M100 186 L92 208" stroke="#111111" strokeWidth={sw} strokeLinecap="round" />
      <path d="M140 186 L148 208" stroke="#111111" strokeWidth={sw} strokeLinecap="round" />
      <circle cx="92" cy="210" r="4" fill="#111111" />
      <circle cx="148" cy="210" r="4" fill="#111111" />
    </svg>
  );
};

export default CartoonFigure;
