import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../constants';
import ComicBackground from './ComicBackground';
import { DoodleUnderline } from './ComicDoodles';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white bg-comic-faq-pattern border-b-4 border-black relative overflow-hidden">
       {/* Background decoration */}
       <ComicBackground opacity={0.03} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
            <motion.div
                initial={{ rotate: -5, scale: 0.9 }}
                whileInView={{ rotate: 0, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block"
            >
                <div className="bg-comic-red text-white border-4 border-black px-6 py-2 shadow-comic mb-4 -rotate-2 inline-flex items-center gap-2">
                    <HelpCircle size={28} strokeWidth={3} />
                    <span className="font-comic text-2xl tracking-wide">FAQ</span>
                </div>
            </motion.div>
          <h2 className="font-comic text-5xl md:text-6xl uppercase mb-4 text-black">
            <span className="relative inline-block">
                Got
                <DoodleUnderline className="absolute -bottom-2 left-0 w-full h-4 text-comic-yellow" color="#FFE900" delay={0.4} />
            </span> <span className="text-comic-blue underline decoration-4 decoration-black">Questions?</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {FAQS.map((faq, index) => (
            <div key={index} className="relative group">
                {/* Shadow/Depth block for the card */}
                <div className={`absolute top-0 left-0 w-full h-full bg-black border-4 border-black transition-all duration-200 ${openIndex === index ? 'translate-x-2 translate-y-2' : 'translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3'}`}></div>
                
                <div 
                    className={`relative border-4 border-black bg-white transition-all cursor-pointer ${openIndex === index ? 'translate-x-2 translate-y-2' : ''}`}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                    <button className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none">
                        <span className="font-comic text-2xl uppercase select-none text-black">{faq.question}</span>
                        <div className={`border-2 border-black p-1 transition-colors flex-shrink-0 ${openIndex === index ? 'bg-comic-yellow text-black' : 'bg-gray-100 text-black group-hover:bg-comic-yellow'}`}>
                            {openIndex === index ? <Minus size={24} strokeWidth={3} /> : <Plus size={24} strokeWidth={3} />}
                        </div>
                    </button>
                    
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 border-t-2 border-dashed border-gray-300 mx-6 mt-2">
                                    <p className="font-body text-xl leading-relaxed pt-4 font-bold text-gray-900">{faq.answer}</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;