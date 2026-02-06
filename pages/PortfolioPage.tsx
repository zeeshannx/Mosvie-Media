import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronLeft, Filter, X, Eye, ArrowUpDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SHOWCASE_ITEMS, CLIENTS } from '../constants';
import ComicButton from '../components/ComicButton';
import ComicBackground from '../components/ComicBackground';
import { DoodleBurst, DoodleStar } from '../components/ComicDoodles';

// Utility to optimize images via free CDN proxy (same as used in BeforeAfterSlider)
const optimizeImage = (url: string, width = 1000) => {
    if (!url || url.includes('data:')) return url;
    // Don't double-optimize if already optimized
    if (url.includes('wsrv.nl')) return url;
    // Skip YouTube thumbnails from proxy to avoid 403s or failures as they are already CDN'd
    if (url.includes('youtube.com') || url.includes('ytimg.com')) return url;
    
    return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&q=80&output=webp`;
};

// Helper to parse view counts (e.g. "1.2M" -> 1200000)
const parseViews = (viewsStr?: string) => {
    if (!viewsStr) return 0;
    const cleanStr = viewsStr.toUpperCase().replace(/,/g, '');
    let multiplier = 1;
    if (cleanStr.includes('M')) multiplier = 1000000;
    else if (cleanStr.includes('K')) multiplier = 1000;
    
    const numPart = parseFloat(cleanStr.replace(/[MK]/g, ''));
    return isNaN(numPart) ? 0 : numPart * multiplier;
};

const PortfolioPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<'default' | 'views-desc' | 'views-asc'>('default');

  const categories = ['All', ...Array.from(new Set(SHOWCASE_ITEMS.map(item => item.category)))];

  const filteredItems = useMemo(() => {
    let items = SHOWCASE_ITEMS.filter(item => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.client.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sortOrder !== 'default') {
        items = [...items].sort((a, b) => {
            const valA = parseViews(a.views);
            const valB = parseViews(b.views);
            return sortOrder === 'views-desc' ? valB - valA : valA - valB;
        });
    }
    
    return items;
  }, [activeCategory, searchQuery, sortOrder]);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative py-16 bg-comic-purple border-b-4 border-black overflow-hidden">
        <ComicBackground opacity={0.1} variant="light" />
        <div className="container mx-auto px-4 relative z-10 text-center">
            
          <motion.button
            whileHover={{ x: -5 }}
            onClick={() => navigate('/')}
            className="absolute top-0 left-4 md:left-8 flex items-center gap-2 text-white font-comic text-xl hover:text-comic-yellow transition-colors"
          >
            <ChevronLeft size={24} strokeWidth={3} />
            Back to Base
          </motion.button>

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block relative"
          >
             <h1 className="font-comic text-6xl md:text-8xl text-white uppercase drop-shadow-[6px_6px_0_#000]">
                The Vault
             </h1>
             <div className="absolute -top-6 -right-12">
                <DoodleBurst className="w-20 h-20 text-comic-yellow" color="#FFE900" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-comic text-black text-sm rotate-12">SECRET!</span>
             </div>
          </motion.div>
          <p className="font-body text-xl text-white/90 max-w-2xl mx-auto mt-4 font-bold">
            Authorized Personnel Only. Browsing {SHOWCASE_ITEMS.length} viral assets.
          </p>
        </div>
      </section>

      {/* Control Bar */}
      <div className="sticky top-[76px] z-40 bg-white border-b-4 border-black shadow-md">
        <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                
                {/* Search */}
                <div className="relative w-full lg:w-96 group shrink-0">
                    <input 
                        type="text" 
                        placeholder="Search client or title..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-gray-50 border-4 border-black py-2 pl-12 pr-4 font-body text-lg text-black focus:outline-none focus:shadow-comic-hover transition-shadow placeholder-gray-400"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-black" size={24} />
                    {searchQuery && (
                        <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-black hover:bg-gray-200 rounded p-1">
                            <X size={16} />
                        </button>
                    )}
                </div>

                {/* Controls Group */}
                <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto overflow-hidden">
                    
                    {/* Sort Dropdown */}
                    <div className="relative shrink-0">
                        <select 
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value as any)}
                            className="w-full md:w-auto appearance-none bg-white border-2 border-black pl-4 pr-10 py-2 font-comic text-lg uppercase cursor-pointer hover:bg-gray-50 focus:outline-none focus:shadow-[2px_2px_0_0_#000] transition-all text-black"
                        >
                            <option value="default" className="text-black">Sort: Newest</option>
                            <option value="views-desc" className="text-black">Views: High to Low</option>
                            <option value="views-asc" className="text-black">Views: Low to High</option>
                        </select>
                        <ArrowUpDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-black" size={16} strokeWidth={3} />
                    </div>

                    {/* Divider for Desktop */}
                    <div className="hidden md:block w-0.5 bg-gray-200 self-stretch mx-2"></div>

                    {/* Filter Toggle (Mobile) / Desktop Pills */}
                    <div className="flex items-center gap-2 w-full overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                        <span className="md:hidden font-comic text-xl mr-2 text-black whitespace-nowrap"><Filter size={20} className="inline mr-1"/>Filter:</span>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`
                                    font-comic text-lg uppercase px-4 py-1 border-2 border-black whitespace-nowrap transition-all
                                    ${activeCategory === cat 
                                        ? 'bg-comic-yellow text-black shadow-[2px_2px_0_0_#000] -translate-y-1' 
                                        : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-black'
                                    }
                                `}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Grid Content */}
      <section className="py-12 md:py-16 bg-gray-50 bg-comic-grid bg-comic-grid-size min-h-[50vh] relative overflow-hidden">
        {/* Subtle Doodle Pattern Overlay */}
        <ComicBackground opacity={0.03} />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 xl:gap-16">
                <AnimatePresence mode="popLayout">
                    {filteredItems.map((item, index) => {
                         const clientData = CLIENTS.find(c => c.name === item.client);
                         const avatarUrl = item.clientAvatarUrl || (clientData ? clientData.avatarUrl : `https://picsum.photos/seed/${item.client}/50`);

                        return (
                        <motion.div
                            layout
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            className="bg-white border-4 border-black shadow-comic hover:shadow-comic-lg transition-all flex flex-col h-full group w-full transform-gpu"
                        >
                            <div className="relative border-b-4 border-black bg-black overflow-hidden">
                                <img 
                                    src={optimizeImage(item.afterUrl)} 
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
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
                                <div className="absolute top-2 right-2 z-30">
                                    <span className="bg-white/90 backdrop-blur border-2 border-black px-2 py-0.5 font-comic text-xs uppercase shadow-sm text-black">
                                        {item.category}
                                    </span>
                                </div>
                                {item.views && (
                                    <div className="absolute top-2 left-2 z-30">
                                        <span className="bg-comic-yellow border-2 border-black px-2 py-1 font-comic text-xs md:text-sm uppercase shadow-[2px_2px_0_0_rgba(0,0,0,1)] text-black flex items-center gap-1.5 transform -rotate-2 hover:rotate-0 transition-transform">
                                            <Eye size={14} strokeWidth={3} />
                                            {item.views}
                                        </span>
                                    </div>
                                )}
                            </div>
                            
                            <div className="p-4 flex-1 flex flex-col">
                                <h3 className="font-comic text-xl md:text-2xl uppercase leading-none mb-3 line-clamp-2 text-black" title={item.title}>
                                    {item.title}
                                </h3>
                                
                                <div className="mt-auto pt-4 flex items-center justify-between border-t-2 border-gray-100 border-dashed">
                                    <div className="flex items-center gap-2">
                                        <img src={avatarUrl} className="w-8 h-8 rounded-full border border-black bg-gray-100 object-cover" alt="client" />
                                        <span className="font-body text-sm font-bold text-gray-600 truncate max-w-[140px]">{item.client}</span>
                                    </div>
                                    {item.size === 'Mega' && <DoodleStar className="w-5 h-5 text-comic-yellow" color="#FFE900" />}
                                </div>
                            </div>
                        </motion.div>
                    )})}
                </AnimatePresence>
            </motion.div>

            {filteredItems.length === 0 && (
                <div className="text-center py-20">
                    <p className="font-comic text-3xl text-gray-400">Classified Intel Not Found.</p>
                    <button onClick={() => {setSearchQuery(''); setActiveCategory('All'); setSortOrder('default');}} className="text-comic-blue underline font-bold mt-2">Reset Filters</button>
                </div>
            )}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-comic-yellow border-t-4 border-black text-center relative overflow-hidden">
        <ComicBackground opacity={0.05} />
        <div className="relative z-10">
            <h2 className="font-comic text-5xl mb-6 text-black">Seen Enough?</h2>
            <ComicButton onClick={() => window.open('https://cal.com/mosvie-media/15', '_blank')}>
                Start Your Project
            </ComicButton>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;