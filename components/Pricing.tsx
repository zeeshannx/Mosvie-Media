import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { PRICING_TIERS } from '../constants';
import ComicButton from './ComicButton';
import { DoodleCurvedArrow, DoodleStar, DoodleZigzag } from './ComicDoodles';
import ComicBackground from './ComicBackground';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white bg-comic-crosshatch border-b-4 border-black overflow-hidden relative">
      <ComicBackground opacity={0.03} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
            initial={{ opacity: 0, scale: 0.5, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.6 }}
            className="font-comic text-6xl text-center mb-16 uppercase text-black"
        >
            <span className="relative inline-block">
                Invest in
                <DoodleZigzag className="absolute -bottom-2 left-0 w-full h-4 text-comic-blue" color="#4DC9FF" delay={0.5} />
            </span> <span className="bg-comic-yellow px-2 border-2 border-black inline-block -rotate-2">Growth</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end relative">
            
            {/* Doodle pointing to popular tier */}
            <div className="hidden xl:block absolute left-[18%] top-[10%] z-20">
                 <DoodleCurvedArrow className="w-32 h-32 text-black rotate-[30deg]" color="black" delay={0.5} />
                 <span className="absolute top-0 -left-10 font-comic text-xl rotate-[-15deg] bg-white border-2 border-black px-2 text-black">Best Value!</span>
            </div>

          {PRICING_TIERS.map((tier, index) => (
            <div 
                key={index} 
                className={`
                    relative p-8 border-4 border-black shadow-comic transition-all hover:scale-105 text-black
                    ${tier.color} 
                    ${tier.popular ? 'z-10 md:-translate-y-8 md:py-12' : ''}
                `}
            >
              {tier.popular && (
                <>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-comic-red text-white font-comic text-xl px-4 py-1 border-4 border-black rotate-3 whitespace-nowrap">
                    MOST POPULAR
                    </div>
                    {/* Stars around the popular card */}
                    <DoodleStar className="absolute -top-10 -right-6 w-12 h-12 text-comic-yellow" color="#FFE900" delay={0.8} />
                    <DoodleStar className="absolute -top-4 -left-8 w-8 h-8 text-comic-blue" color="#4DC9FF" delay={1} />
                </>
              )}
              
              <h3 className="font-comic text-4xl mb-2 uppercase">{tier.name}</h3>
              <div className="flex items-baseline mb-8">
                <span className="font-comic text-6xl">{tier.price}</span>
                <span className="font-body font-bold text-gray-700 ml-2">/mo</span>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="bg-black text-white p-1 rounded-sm mt-1">
                        <Check size={16} strokeWidth={4} />
                    </div>
                    <span className="font-body text-lg font-bold">{feat}</span>
                  </li>
                ))}
              </ul>

              <ComicButton 
                variant={tier.popular ? 'accent' : 'secondary'} 
                className="w-full"
                onClick={() => {
                  if (tier.paymentUrl) {
                    window.open(tier.paymentUrl, '_blank');
                  } else {
                     window.open('https://cal.com/mosvie-media/15', '_blank');
                  }
                }}
              >
                Choose {tier.name}
              </ComicButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;