import React from 'react';
import { motion } from 'framer-motion';
import ComicButton from './ComicButton';
import ComicBackground from './ComicBackground';
import { DoodleSpring, DoodleZigzag } from './ComicDoodles';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-comic-sunburst-red relative overflow-hidden">
        {/* Background Patterns */}
        <ComicBackground opacity={0.06} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-comic-lg max-w-4xl mx-auto rotate-1 text-black">
            <div className="text-center mb-8">
                <motion.h2 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.7 }}
                    className="font-comic text-5xl md:text-6xl uppercase mb-4"
                >
                    Ready to <span className="text-comic-red relative inline-block">
                        Dominate?
                        <DoodleZigzag className="absolute -bottom-2 left-0 w-full h-6 text-black" color="#000" delay={0.6} />
                    </span>
                </motion.h2>
                <p className="font-body text-xl font-bold">Book a free strategy call. We'll audit your channel live.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="font-comic text-xl uppercase">Your Name</label>
                        <input type="text" className="w-full bg-gray-50 border-4 border-black p-3 font-body text-lg focus:outline-none focus:shadow-comic-hover transition-shadow text-black" placeholder="Mr. Beast" />
                    </div>
                    <div className="space-y-2">
                        <label className="font-comic text-xl uppercase">Channel Link</label>
                        <input type="text" className="w-full bg-gray-50 border-4 border-black p-3 font-body text-lg focus:outline-none focus:shadow-comic-hover transition-shadow text-black" placeholder="youtube.com/@..." />
                    </div>
                </div>
                
                <div className="space-y-2">
                    <label className="font-comic text-xl uppercase">What's your goal?</label>
                    <textarea className="w-full bg-gray-50 border-4 border-black p-3 font-body text-lg h-32 focus:outline-none focus:shadow-comic-hover transition-shadow text-black" placeholder="I want to double my CTR..."></textarea>
                </div>

                <div className="text-center pt-4 relative">
                    <ComicButton className="w-full md:w-auto text-2xl py-4 px-12 relative z-10">
                        Send Request
                    </ComicButton>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2">
                         <DoodleSpring className="w-32 h-12 text-comic-blue rotate-3" color="#4DC9FF" delay={0.5} />
                    </div>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;