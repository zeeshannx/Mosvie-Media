import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import BeforeAfterSlider from './BeforeAfterSlider';
import { SHOWCASE_ITEMS, CLIENTS } from '../constants';
import ComicButton from './ComicButton';
import ComicBackground from './ComicBackground';
import { Filter, Mic, Video, Briefcase, Smile, Clapperboard, LayoutGrid, Globe } from 'lucide-react';
import { DoodleX, DoodleZigzag, DoodleStar } from './ComicDoodles';

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const resultsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Derive unique categories from items
  const categories = ['All', ...Array.from(new Set(SHOWCASE_ITEMS.map(item => item.category)))];

  // Filter items based on category and hide items marked as hidden from home
  const filteredItems = useMemo(() => {
    return SHOWCASE_ITEMS.filter(item => {
      const catMatch = activeCategory === 'All' || item.category === activeCategory;
      const visible = !item.isHiddenFromHome;
      return catMatch && visible;
    });
  }, [activeCategory]);

  const handleFilterChange = (value: string) => {
    setActiveCategory(value);
    
    // Smooth scroll for better UX
    setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Entertainment': return <Clapperboard size={20} />;
      case 'Vlogs': return <Video size={20} />;
      case 'Entrepreneur': return <Briefcase size={20} />;
      case 'Comedian': return <Smile size={20} />;
      case 'Podcast': return <Mic size={20} />;
      case 'IRL': return <Globe size={20} />;
      case 'All': return <LayoutGrid size={20} />;
      default: return <Filter size={20} />;
    }
  };

  return (
    <section id="work" className="py-24 bg-comic-sunburst text-black border-b-4 border-black relative overflow-hidden">
      {/* Enhanced Background with Sunburst and Overlay */}
      <div className="absolute inset-0 bg-white/10 pointer-events-none"></div>
      <ComicBackground opacity={0.05} />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 relative">
            <DoodleX className="absolute -top-10 left-10 w-12 h-12 text-comic-blue opacity-80" color="#4DC9FF" delay={0.2} />
            <DoodleX className="absolute top-10 right-10 w-8 h-8 text-black opacity-50" color="#000000" delay={0.4} />

          <motion.h2 
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.6 }}
            className="font-comic text-6xl text-black mb-6 uppercase text-shadow-comic relative inline-block"
          >
            The <span className="text-comic-red relative inline-block">
                Mosvie
                <DoodleZigzag className="absolute -bottom-2 left-0 w-full h-6 text-black" color="#000000" delay={0.6} />
            </span> Effect
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-xl max-w-2xl text-gray-900 font-bold mb-8 bg-white/50 inline-block px-4 py-1 rounded border-2 border-black/10 backdrop-blur-sm"
          >
            Explore our archive of high-performance thumbnails. Organized for your viewing pleasure.
          </motion.p>
        </div>

        {/* Organized Filter Panel */}
        <div className="max-w-4xl mx-auto mb-16">
            <div className="bg-white border-4 border-black shadow-comic p-8 relative">
                {/* Decorative Label */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-comic-blue border-4 border-black px-8 py-2 rotate-[-2deg] z-10 shadow-[4px_4px_0_0_#000]">
                    <span className="font-comic text-2xl text-white uppercase tracking-wider">Mission Control</span>
                </div>

                <div className="flex flex-col items-center gap-8 mt-6">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => handleFilterChange(cat)}
                                className={`
                                    font-comic text-xl uppercase px-8 py-3 border-4 border-black transition-all relative
                                    ${activeCategory === cat 
                                        ? 'bg-comic-yellow text-black shadow-[4px_4px_0_0_#000] -translate-y-2 -rotate-1 z-10' 
                                        : 'bg-white text-gray-500 hover:text-black hover:bg-gray-50 hover:shadow-[4px_4px_0_0_#000] hover:-translate-y-1'
                                    }
                                `}
                            >
                                {activeCategory === cat && (
                                    <div className="absolute -top-2 -right-2 text-comic-red bg-white border-2 border-black rounded-full p-1 z-20">
                                        {getCategoryIcon(cat)}
                                    </div>
                                )}
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>

        {/* Results Grid - Strict Layout */}
        <div ref={resultsRef} className="min-h-[600px] scroll-mt-32 max-w-7xl mx-auto relative">
             <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <AnimatePresence mode="popLayout">
                    {filteredItems.map((item, index) => {
                        // Find matching client data to use the official avatar if available
                        const clientData = CLIENTS.find(c => c.name === item.client);
                        const avatarUrl = item.clientAvatarUrl || (clientData ? clientData.avatarUrl : `https://picsum.photos/seed/${item.client}/50`);
                        
                        return (
                        <motion.div 
                            layout
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30, transition: { duration: 0.2 } }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="group relative"
                        >
                            {/* Comic Card Frame */}
                            <div className="bg-white p-4 border-4 border-black shadow-comic group-hover:shadow-comic-lg transition-all duration-300 relative z-10 h-full flex flex-col">
                                
                                {/* Card Header */}
                                <div className="flex justify-between items-end mb-3 px-1">
                                    <h3 className="font-comic text-3xl text-black uppercase leading-none truncate pr-4">
                                        {item.title}
                                    </h3>
                                     <span className="font-body text-xs font-bold text-gray-400 uppercase tracking-widest border border-gray-200 px-1 rounded">
                                        #{String(item.id).padStart(3, '0')}
                                    </span>
                                </div>

                                {/* Slider Container */}
                                <div className="border-4 border-black relative overflow-hidden bg-black mb-4">
                                    <BeforeAfterSlider item={item} hideLabels={true} className="border-0 shadow-none" />
                                </div>

                                {/* Card Footer / Metadata */}
                                <div className="mt-auto flex items-center justify-between pt-3 border-t-2 border-gray-100 border-dashed">
                                     <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-black overflow-hidden">
                                            <img src={avatarUrl} alt="avatar" className="w-full h-full object-cover" />
                                        </div>
                                        <span className="font-comic text-lg text-black">{item.client}</span>
                                     </div>
                                     
                                     <div className="flex gap-2">
                                         <span className="bg-comic-blue text-white border-2 border-black px-2 py-0.5 font-comic uppercase text-xs shadow-[2px_2px_0_0_rgba(0,0,0,0.2)]">
                                            {item.category}
                                         </span>
                                         {item.size === 'Mega' && (
                                             <span className="bg-comic-red text-white border-2 border-black px-2 py-0.5 font-comic uppercase text-xs shadow-[2px_2px_0_0_rgba(0,0,0,0.2)]">
                                                Mega
                                             </span>
                                         )}
                                     </div>
                                </div>
                            </div>
                            
                            {/* Featured Star for the very first item if unfiltered */}
                            {index === 0 && activeCategory === 'All' && (
                                 <div className="absolute -top-8 -right-8 z-20 pointer-events-none rotate-12">
                                    <DoodleStar className="w-20 h-20 text-comic-red drop-shadow-md" color="#FF3C38" />
                                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-comic text-xs text-white text-center leading-tight">TOP<br/>PICK</span>
                                 </div>
                            )}
                        </motion.div>
                    )})}
                </AnimatePresence>
            </motion.div>
            
            <AnimatePresence>
                {filteredItems.length === 0 && (
                    <motion.div 
                        key="empty-state"
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-0 left-0 right-0 z-10 text-center py-20 bg-white/90 border-4 border-black border-dashed max-w-2xl mx-auto shadow-comic"
                    >
                        <p className="font-comic text-3xl text-black">No thumbnails found for this category.</p>
                        <button 
                            onClick={() => setActiveCategory('All')}
                            className="mt-4 text-comic-blue underline font-comic text-xl hover:text-black transition-colors"
                        >
                            Reset Filters
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

        <div className="mt-20 text-center">
            <ComicButton 
                variant="accent" 
                className="text-2xl px-12 hover:scale-105"
                onClick={() => {
                    navigate('/portfolio');
                    window.scrollTo(0, 0);
                }}
            >
                See Full Archive
            </ComicButton>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;