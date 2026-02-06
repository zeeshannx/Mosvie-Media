import React from 'react';

interface ComicBackgroundProps {
  variant?: 'light' | 'dark';
  opacity?: number;
}

const ComicBackground: React.FC<ComicBackgroundProps> = ({ variant = 'dark', opacity = 0.05 }) => {
  const color = variant === 'light' ? '%23ffffff' : '%23000000';
  
  // Hand-drawn style SVG pattern
  const svg = `
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <g fill="none" fill-rule="evenodd">
    <path d="M10 10l5 5 5-5" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="35" cy="35" r="2" fill="${color}"/>
    <path d="M60 15l5-5 5 5" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M85 35l8-8m-8 0l8 8" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
    <path d="M15 65l5-5 5 5" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M40 80q5-5 10 0t10 0" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
    <rect x="75" y="75" width="5" height="5" stroke="${color}" stroke-width="2" />
    <path d="M25 40l5 5" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
    <circle cx="90" cy="10" r="1.5" fill="${color}"/>
    <path d="M50 50l3 3" stroke="${color}" stroke-width="2"/>
  </g>
</svg>
  `.trim();

  return (
    <div 
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(svg)}")`,
        backgroundSize: '100px 100px',
        opacity: opacity
      }}
    />
  );
};

export default ComicBackground;