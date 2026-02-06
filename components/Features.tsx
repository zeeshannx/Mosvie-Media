import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Palette, TrendingUp } from 'lucide-react';
import { DoodleUnderline, DoodleSwirl } from './ComicDoodles';
import ComicBackground from './ComicBackground';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap size={40} />,
      title: "Visual Storytelling",
      desc: "We don't just design; we tell a story in a single frame that forces people to click.",
      color: "bg-comic-yellow"
    },
    {
      icon: <Target size={40} />,
      title: "Click Psychology",
      desc: "We use color theory and composition hacks used by the top 1% of YouTubers.",
      color: "bg-comic-blue"
    },
    {
      icon: <Palette size={40} />,
      title: "High-End Photobashing",
      desc: "Seamless blending of elements. No cheap cutouts. Cinema quality compositing.",
      color: "bg-comic-red"
    },
    {
      icon: <TrendingUp size={40} />,
      title: "CTR Optimization",
      desc: "Our thumbnails are A/B test ready. Designed to stop the scroll dead in its tracks.",
      color: "bg-green-400"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 bg-comic-grid bg-comic-grid-size relative overflow-hidden">
        {/* Background Decorative Elements */}
        <ComicBackground opacity={0.03} />
        <div className="absolute bottom-20 left-10 opacity-30 pointer-events-none">
          <DoodleSwirl className="w-48 h-48 text-comic-blue" color="#4DC9FF" />
        </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
             <h2 className="font-comic text-5xl md:text-7xl mb-4 uppercase drop-shadow-[4px_4px_0_rgba(0,0,0,1)] relative inline-block text-black">
              The <span className="text-comic-red relative">
                Secret Sauce
                <DoodleUnderline className="absolute -bottom-4 left-0 w-full h-6 text-comic-red" color="#FF3C38" delay={0.5} />
              </span>
            </h2>
            <p className="font-body text-xl text-gray-700 max-w-2xl mx-auto border-2 border-black p-4 shadow-comic bg-white rotate-1 mt-6">
              Why do big YouTubers choose us? Because we understand the algorithm as much as we understand art.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 border-4 border-black shadow-comic transition-transform hover:-translate-y-2 hover:shadow-comic-lg bg-white group`}
            >
              <div className={`absolute -top-6 -left-6 w-16 h-16 ${feature.color} border-4 border-black flex items-center justify-center shadow-sm group-hover:rotate-12 transition-transform`}>
                <div className="text-black">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-comic text-3xl mt-4 mb-3 uppercase text-black">{feature.title}</h3>
              <p className="font-body text-lg leading-relaxed text-black">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;