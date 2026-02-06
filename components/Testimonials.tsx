import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { DoodleSparkle, DoodleUnderline } from './ComicDoodles';
import ComicBackground from './ComicBackground';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-comic-blue bg-comic-dots-pop bg-comic-dots-size border-b-4 border-black relative overflow-hidden">
      {/* Background Pattern */}
      <ComicBackground opacity={0.05} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <div className="relative inline-block">
             <h2 className="font-comic text-5xl md:text-6xl uppercase mb-4 text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] relative z-10">
                <span className="relative inline-block">
                    Word on the
                    <DoodleUnderline className="absolute -bottom-2 left-0 w-full h-4 text-comic-dark opacity-50" color="#000" delay={0.4} />
                </span> <span className="text-comic-yellow text-outline-black" style={{ WebkitTextStroke: '2px black' }}>Street</span>
            </h2>
            <DoodleSparkle className="absolute -top-8 -right-8 w-16 h-16 text-comic-yellow z-0" color="#FFE900" delay={0.2} />
            <DoodleSparkle className="absolute -bottom-4 -left-10 w-12 h-12 text-white z-0" color="#fff" delay={0.4} />
          </div>
          
          <div className="block mt-2">
            <div className="inline-block bg-white border-2 border-black px-4 py-1 rotate-1 shadow-comic">
                <p className="font-body font-bold text-xl text-black">Real Creators. Real Results.</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.8, rotate: index % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", bounce: 0.5 }}
              whileHover={{ 
                scale: 1.03, 
                rotate: index % 2 === 0 ? 1 : -1, 
                y: -10,
                boxShadow: "10px 10px 0px 0px rgba(0,0,0,1)",
                zIndex: 10 
              }}
              className="relative bg-white border-4 border-black p-8 shadow-comic flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 -left-4 bg-comic-red text-white p-2 border-4 border-black shadow-sm rotate-12">
                <Quote size={24} fill="currentColor" />
              </div>

              {/* Content */}
              <div className="mb-6">
                <p className="font-body text-xl italic font-bold leading-relaxed text-black">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center gap-4 border-t-2 border-gray-200 pt-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-black shrink-0">
                  <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-comic text-xl uppercase leading-none text-black">{testimonial.name}</h4>
                  <p className="font-body text-sm font-bold text-gray-500">{testimonial.channel}</p>
                </div>
              </div>

              {/* Speech Bubble Tail Effect (CSS Triangle) */}
              <div className="absolute -bottom-4 right-8 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-black border-r-[0px] border-r-transparent transform rotate-12 md:hidden"></div>
               <div className="absolute -bottom-[14px] right-[34px] w-0 h-0 border-l-[16px] border-l-transparent border-t-[16px] border-t-white border-r-[0px] border-r-transparent transform rotate-12 md:hidden"></div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;