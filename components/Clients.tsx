import React from 'react';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import { CLIENTS } from '../constants';
import { DoodleCrown, DoodleUnderline, DoodleBurst } from './ComicDoodles';

const VerifiedBadge = () => (
  <div className="relative w-8 h-8 md:w-10 md:h-10 flex-shrink-0 ml-1" title="Verified Titan">
      <div 
        className="w-full h-full relative"
        style={{ animation: 'badge-float 3s ease-in-out infinite' }}
      >
        {/* Shadow Layer for pop */}
        <div className="absolute top-0.5 left-0.5 w-full h-full text-black">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full opacity-40">
                <path d="M12 2L14.8 5.2L19 5.5L19.5 9.7L23 12L19.5 14.3L19 18.5L14.8 18.8L12 22L9.2 18.8L5 18.5L4.5 14.3L1 12L4.5 9.7L5 5.5L9.2 5.2L12 2Z" />
            </svg>
        </div>

        {/* Main Badge Layer - Gold for Titans */}
        <div className="absolute inset-0 text-comic-yellow drop-shadow-[1px_1px_0_rgba(0,0,0,1)]">
            <svg viewBox="0 0 24 24" fill="currentColor" stroke="black" strokeWidth="1.5" strokeLinejoin="round" className="w-full h-full">
                {/* 12-point jagged star/seal */}
                <path d="M12 1L14.2 4.2L18 3.5L18.5 7.5L22 9L19.5 12L22 15L18.5 16.5L18 20.5L14.2 19.8L12 23L9.8 19.8L6 20.5L5.5 16.5L2 15L4.5 12L2 9L5.5 7.5L6 3.5L9.8 4.2L12 1Z" />
            </svg>
        </div>
        
        {/* Checkmark - Thick Black for contrast on Gold */}
        <div className="absolute inset-0 flex items-center justify-center pt-0.5">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>

        {/* Shine effect */}
        <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-white rounded-full opacity-60"></div>
      </div>
  </div>
);

const ClientCard: React.FC<{ client: typeof CLIENTS[0] }> = ({ client }) => (
  // Optimization: Used 'will-change-transform' and 'backface-hidden' to promote to composite layer.
  // Set explicit width/height to avoid layout shifts.
  <div className="relative w-[18rem] h-[26rem] md:w-[24rem] md:h-[36rem] mx-4 md:mx-8 bg-white border-4 border-black rounded-[2rem] overflow-hidden flex flex-col shadow-comic hover:shadow-comic-lg transition-transform duration-300 transform hover:-translate-y-2 group cursor-pointer will-change-transform backface-hidden perspective-1000 flex-shrink-0 transform-gpu translate-z-0 my-4">
    
    {/* Image Section */}
    <div className="flex-1 relative bg-[#FDF6E3] overflow-hidden">
        {/* Decorative Background Pattern for the photo */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-200 via-orange-100 to-transparent"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 1h2v2H1V1zm4 0h2v2H5V1zm4 0h2v2H9V1zm4 0h2v2H9V1zm4 0h2v2h-2V1zm4 0h2v2h-2V1zm-8 4h2v2H9V5zm4 0h2v2h-2V5zm-8 4h2v2H5V9zm4 0h2v2H9V9zm4 0h2v2h-2V9zm-8 4h2v2H1v-2zm4 0h2v2H5v-2zm4 0h2v2H9v-2zm4 0h2v2h-2v-2zm-8 4h2v2H5v-2zm4 0h2v2H9v-2z\' fill=\'%23000000\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }}></div>
        
        <img 
            src={client.imageUrl} 
            alt={client.name} 
            loading="lazy"
            decoding="async"
            draggable="false"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 will-change-transform select-none" 
        />
    </div>

    {/* Footer Info Section */}
    <div className="h-24 md:h-28 bg-comic-purple border-t-4 border-black p-4 md:p-5 flex items-center gap-3 md:gap-5 relative z-10">
        {/* Avatar */}
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white overflow-hidden shrink-0 bg-gray-200 shadow-md">
            <img src={client.avatarUrl} alt="avatar" loading="lazy" decoding="async" draggable="false" className="w-full h-full object-cover select-none" />
        </div>

        {/* Text Info */}
        <div className="flex flex-col justify-center">
            <h4 className="font-comic text-white text-xl md:text-2xl uppercase leading-none flex items-center gap-1.5 drop-shadow-md">
                {client.name}
                <VerifiedBadge />
            </h4>
            <span className="font-body text-gray-200 text-sm md:text-base font-bold tracking-wide mt-0.5">{client.subscribers} Subscribers</span>
        </div>
    </div>
  </div>
);

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-24 border-b-4 border-black bg-gray-50 relative overflow-hidden">
      {/* Background Pattern - Rays with controlled opacity for better contrast */}
      <div className="absolute inset-0 bg-comic-rays opacity-25 pointer-events-none"></div>

      {/* Dynamic Background Element - Red Burst for energy */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] z-0 opacity-5 pointer-events-none">
          <DoodleBurst className="w-full h-full text-comic-red" color="#FF3C38" />
      </div>

      <div className="container mx-auto px-4 mb-10 relative z-10 text-center">
        <motion.h3 
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="font-comic text-5xl md:text-6xl text-center uppercase tracking-wider mb-2 relative inline-block w-full text-black"
        >
            <span className="relative inline-block mr-4">
                Trusted by the
                <DoodleUnderline className="absolute -bottom-2 left-0 w-full h-4 text-comic-blue" color="#4DC9FF" delay={0.2} />
            </span> 
            <span className="text-comic-red underline decoration-4 decoration-black relative inline-block">
                Titans
                <DoodleCrown className="absolute -top-16 -right-12 w-24 h-20 text-comic-yellow" color="#FFE900" delay={0.5} />
            </span>
        </motion.h3>

        {/* Subtitle */}
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6"
        >
            <span className="font-comic text-xl md:text-2xl text-black bg-white border-2 border-black px-6 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,0.1)] -rotate-1 inline-block hover:rotate-0 transition-transform">
                Our Partners in Viral Success
            </span>
        </motion.div>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full">
        {/* Gradient Fade Edges for smoother visual entry/exit */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none" />

        <Marquee 
          gradient={false} 
          speed={60} 
          pauseOnHover={true}
          className="overflow-y-hidden py-4"
        >
            {CLIENTS.map((client, index) => (
                <ClientCard key={`${client.name}-${index}`} client={client} />
            ))}
        </Marquee>
      </div>
      
    </section>
  );
};

export default Clients;