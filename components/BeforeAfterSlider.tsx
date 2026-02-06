import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';
import { ShowcaseItem } from '../types';

interface BeforeAfterSliderProps {
  item: ShowcaseItem;
  className?: string;
  hideLabels?: boolean;
}

// Utility to optimize images via free CDN proxy
const optimizeImage = (url: string, width = 1000) => {
    if (!url || url.includes('data:')) return url;
    if (url.includes('wsrv.nl')) return url;
    // Skip YouTube thumbnails from proxy to avoid 403s or failures
    if (url.includes('youtube.com') || url.includes('ytimg.com')) return url;
    
    // Using wsrv.nl (images.weserv.nl) for on-the-fly optimization
    return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=80&output=webp`;
};

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ 
    item, 
    className,
    hideLabels = false 
}) => {
  // Use MotionValue for high-performance updates without triggering React re-renders
  const x = useMotionValue(50);
  
  // Apply spring physics for that "satisfying" comic-book feel (bounce/overshoot)
  // stiffness 400, damping 28 creates a snappy but slightly bouncy feel
  const springX = useSpring(x, { stiffness: 400, damping: 28 });

  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Transform spring value directly into CSS styles
  const clipPath = useTransform(springX, (value) => `inset(0 ${100 - value}% 0 0)`);
  const left = useTransform(springX, (value) => `${value}%`);

  // Optimize URLs
  const optimizedBefore = useMemo(() => optimizeImage(item.beforeUrl), [item.beforeUrl]);
  const optimizedAfter = useMemo(() => optimizeImage(item.afterUrl), [item.afterUrl]);

  const handleMove = useCallback((event: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = event.clientX;
    }

    // Calculate percentage 0-100
    const position = ((clientX - containerRect.left) / containerRect.width) * 100;
    x.set(Math.min(Math.max(position, 0), 100));
  }, [x]);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', handleEnd);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, handleMove, handleEnd]);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    
    // Immediate update on click/start
    if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        let clientX;
        if ('touches' in e) {
            clientX = e.touches[0].clientX;
        } else {
            clientX = (e as React.MouseEvent).clientX;
        }
        const position = ((clientX - containerRect.left) / containerRect.width) * 100;
        x.set(Math.min(Math.max(position, 0), 100));
    }
  };

  const defaultClasses = "border-4 border-black shadow-comic";
  const appliedClasses = className !== undefined ? className : defaultClasses;

  return (
    <div 
        ref={containerRef}
        className={`relative w-full aspect-video bg-black overflow-hidden group select-none cursor-ew-resize ${appliedClasses}`}
        onMouseDown={handleStart}
        onTouchStart={handleStart}
    >
      {!hideLabels && (
          <>
            {/* Label Badge: Client Name - Swing In */}
            <motion.div 
                initial={{ x: -100, rotate: -45, scale: 0.5, opacity: 0 }}
                whileInView={{ x: 0, rotate: -3, scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.2 }}
                className="absolute top-6 left-6 z-40 bg-white border-4 border-black px-4 py-2 pointer-events-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] origin-bottom-left"
            >
                <p className="font-comic text-xl uppercase text-black leading-none tracking-wide">{item.client}</p>
            </motion.div>

            {/* Label Badge: Title - Slam Down */}
            <motion.div 
                initial={{ y: -100, rotate: 45, scale: 1.5, opacity: 0 }}
                whileInView={{ y: 0, rotate: 2, scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.4 }}
                className="absolute top-6 right-6 z-40 bg-comic-yellow border-4 border-black px-4 py-2 pointer-events-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] origin-top-right"
            >
                <p className="font-comic text-xl uppercase text-black leading-none tracking-wide">{item.title}</p>
            </motion.div>
          </>
      )}
      
      {/* After Image (Background) */}
      <img 
        src={optimizedAfter} 
        alt={`After transformation: ${item.title}`} 
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        draggable={false}
        className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 ease-out hover:scale-105 hover:contrast-125 hover:rotate-1 origin-center pointer-events-none" 
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          // Fallback chain: Proxy -> Original(MaxRes) -> HQ -> MQ
          if (target.src.includes('wsrv.nl')) {
              target.src = item.afterUrl;
          } else if (target.src.includes('maxresdefault')) {
              target.src = target.src.replace('maxresdefault', 'hqdefault');
          } else if (target.src.includes('hqdefault')) {
              target.src = target.src.replace('hqdefault', 'mqdefault');
          }
        }}
      />

      {/* AFTER Label - Positioned absolute, z-10 (Behind Before Layer) */}
      <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
        <motion.div 
            initial={{ scale: 3, opacity: 0, rotate: 25 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 3 }}
            whileHover={{ scale: 1.1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.8 }}
            className="cursor-pointer bg-comic-red text-white px-3 py-1 font-comic text-xl border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] pointer-events-auto"
        >
            AFTER
        </motion.div>
      </div>
      
      {/* Before Image (Clipped) - z-20 (Covers After Label) */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-20 will-change-[clip-path]"
        style={{ clipPath }}
      >
        <img 
          src={optimizedBefore} 
          alt={`Before transformation: ${item.title}`} 
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          draggable={false}
          className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-300 ease-out hover:scale-110 hover:border-4 hover:border-comic-yellow box-border origin-center"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            // Fallback chain: Proxy -> Original(MaxRes) -> HQ -> MQ
            if (target.src.includes('wsrv.nl')) {
                target.src = item.beforeUrl;
            } else if (target.src.includes('maxresdefault')) {
                target.src = target.src.replace('maxresdefault', 'hqdefault');
            } else if (target.src.includes('hqdefault')) {
                target.src = target.src.replace('hqdefault', 'mqdefault');
            }
          }}
        />
        {/* BEFORE Label - Inside clipped div */}
        <div className="absolute bottom-4 left-4">
            <motion.div 
                initial={{ scale: 3, opacity: 0, rotate: -25 }}
                whileInView={{ scale: 1, opacity: 1, rotate: -3 }}
                whileHover={{ scale: 1.1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.8 }}
                className="cursor-pointer bg-white text-black px-3 py-1 font-comic text-xl border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] pointer-events-auto"
            >
                BEFORE
            </motion.div>
        </div>
      </motion.div>

      {/* Slider Handle - z-30 */}
      <motion.div 
        className="absolute top-0 bottom-0 w-1 bg-black z-30 touch-none will-change-[left]"
        style={{ left }}
      >
        <motion.div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-lg ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            animate={{ 
                scale: isDragging ? 1.3 : 1,
                rotate: isDragging ? 15 : 0 
            }}
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <ArrowLeftRight size={20} className="text-black" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BeforeAfterSlider;