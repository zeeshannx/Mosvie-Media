import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate, useScroll } from 'framer-motion';
import ComicButton from './ComicButton';
import { DoodleArrow, DoodleBurst, DoodleSpring, DoodleZigzag, DoodleStar, DoodleSparkle, DoodleX } from './ComicDoodles';
import ComicBackground from './ComicBackground';

const AnimatedCounter = ({ from, to }: { from: number; to: number }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    if (latest >= 1000000) {
      const val = (latest / 1000000).toFixed(1).replace('.0', '');
      return `+${val}M`;
    }
    if (latest >= 1000) {
      return `+${Math.floor(latest / 1000)}K`;
    }
    return `+${Math.floor(latest)}`;
  });

  useEffect(() => {
    const controls = animate(count, to, { duration: 3, ease: "circOut", delay: 0.8 });
    return controls.stop;
  }, [count, to]);

  return <motion.span>{rounded}</motion.span>;
};

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Parallax Effects
  // Background moves slowest (highest y offset) to create depth
  const bgY = useTransform(scrollY, [0, 1000], [0, 400]);
  const doodlesY = useTransform(scrollY, [0, 1000], [0, 200]);
  const illustrationY = useTransform(scrollY, [0, 1000], [0, 100]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-comic-sunburst border-b-4 border-black">
      {/* Pattern Overlay - Parallax Layer 1 (Furthest) */}
      <motion.div 
        style={{ y: bgY }} 
        className="absolute inset-0 pointer-events-none z-0"
      >
        <ComicBackground opacity={0.08} />
      </motion.div>

      {/* Ambient Energy Doodles - Parallax Layer 2 (Mid-ground) */}
      <motion.div 
        style={{ y: doodlesY }}
        className="absolute inset-0 pointer-events-none overflow-hidden z-0"
      >
         {/* Floating Star Top Left */}
         <motion.div 
            className="absolute top-[15%] left-[5%] md:left-[10%]"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, type: "spring" }}
         >
            <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <DoodleStar className="w-14 h-14 text-comic-blue opacity-80" color="#4DC9FF" />
            </motion.div>
         </motion.div>

         {/* Sparkle Mid Right */}
         <motion.div 
            className="absolute top-[40%] right-[5%] md:right-[15%]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
         >
             <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
             >
                <DoodleSparkle className="w-20 h-20 text-comic-yellow opacity-90" color="#FFE900" />
             </motion.div>
         </motion.div>

         {/* X Mark Bottom Left */}
         <motion.div 
            className="absolute bottom-[20%] left-[8%]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
         >
             <motion.div
                animate={{ rotate: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             >
                <DoodleX className="w-12 h-12 text-black opacity-40" color="#000" />
             </motion.div>
         </motion.div>

         {/* Small Burst Top Right */}
         <motion.div 
             className="absolute top-[20%] right-[8%]"
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ delay: 1.2, type: "spring" }}
         >
              <DoodleBurst className="w-16 h-16 text-comic-red opacity-60" color="#FF3C38" />
         </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", bounce: 0.5 }}
            >
                <div className="inline-block bg-white border-4 border-black px-6 py-2 mb-6 -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-comic text-xl md:text-2xl uppercase text-comic-red">Warning: High CTR Inside</span>
                </div>
            </motion.div>
            
            <motion.h1 
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-comic text-6xl md:text-8xl leading-[0.9] uppercase text-black mb-6 drop-shadow-[5px_5px_0_#FFF] relative"
            >
              We Make Your <br/>
              <span className="relative inline-block">
                <span className="text-white text-outline-black relative z-10" style={{ WebkitTextStroke: '3px black' }}>Thumbnails</span>
                <DoodleZigzag className="absolute -bottom-4 left-0 w-full h-8 text-comic-blue z-0" color="#4DC9FF" delay={0.6} />
              </span> <br/>
              <span className="text-comic-red italic relative z-10 inline-block">
                POP!
                <DoodleBurst className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] -z-10 text-white opacity-90" color="#fff" />
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="font-body text-xl md:text-2xl mb-8 font-bold max-w-lg mx-auto md:mx-0 text-black"
            >
              Stop getting ignored. Start getting clicked.
            </motion.p>

            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col md:flex-row gap-4 justify-center md:justify-start relative"
            >
              <ComicButton className="text-2xl" onClick={() => scrollToSection('pricing')}>Get Viral Now</ComicButton>
              <ComicButton variant="secondary" className="text-xl" onClick={() => scrollToSection('work')}>View Portfolio</ComicButton>
              
              {/* Doodle Arrow pointing to CTA */}
              <div className="hidden md:block absolute -right-24 -bottom-10 rotate-[-15deg]">
                <DoodleArrow className="w-24 h-24 text-black" color="black" delay={1} />
                <span className="font-comic text-xl absolute top-full left-0 whitespace-nowrap -rotate-12">Click Me!</span>
              </div>

               {/* New Doodle Spring */}
               <div className="absolute -left-12 bottom-0 hidden lg:block">
                  <DoodleSpring className="w-16 h-8 text-black opacity-60" color="black" delay={1.2} />
               </div>

            </motion.div>
          </div>

          {/* Hero Image / Illustration - Parallax Layer 3 (Foreground) */}
          <div className="w-full md:w-1/2 relative">
             <motion.div
                initial={{ rotate: 10, scale: 0.8, opacity: 0 }}
                animate={{ rotate: 3, scale: 1, opacity: 1 }}
                style={{ y: illustrationY }}
                transition={{ type: "spring", delay: 0.4 }}
                className="relative z-10"
             >
                {/* Simulated Thumbnail Stack */}
                <div className="relative aspect-video w-full bg-white border-4 border-black shadow-comic-lg rotate-3 z-20">
                    <img src="https://i.ibb.co/Zp4P7Vkj/thumbnail-48.jpg" alt="Hero Thumb" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute -bottom-6 -right-6 bg-comic-red text-white border-4 border-black px-4 py-2 font-comic text-2xl -rotate-6 whitespace-nowrap flex items-center gap-1">
                        <AnimatedCounter from={0} to={1000000} /> VIEWS
                    </div>
                </div>
                <div className="absolute top-4 -left-4 w-full h-full bg-comic-blue border-4 border-black -z-10 -rotate-3"></div>
             </motion.div>
          </div>

        </div>
      </div>
      
      {/* Bottom Jagged Edge */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-white z-20" style={{
        clipPath: 'polygon(0% 100%, 5% 0%, 10% 100%, 15% 0%, 20% 100%, 25% 0%, 30% 100%, 35% 0%, 40% 100%, 45% 0%, 50% 100%, 55% 0%, 60% 100%, 65% 0%, 70% 100%, 75% 0%, 80% 100%, 85% 0%, 90% 100%, 95% 0%, 100% 100%)'
      }}></div>
    </section>
  );
};

export default Hero;