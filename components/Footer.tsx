import React from 'react';
import { Twitter, Instagram, Mail } from 'lucide-react';
import ComicBackground from './ComicBackground';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black bg-comic-grid-white bg-comic-grid-size text-white py-12 border-t-4 border-black relative overflow-hidden">
      <ComicBackground variant="light" opacity={0.05} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h2 className="font-comic text-4xl text-comic-yellow mb-2">MOSVIE MEDIA</h2>
            <p className="font-body text-gray-400">Making the internet click, one pixel at a time.</p>
          </div>

          <div className="flex gap-6">
            <a 
              href="https://x.com/mosviemedia" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-black p-3 border-2 border-black hover:bg-comic-red hover:text-white transition-colors shadow-[4px_4px_0_0_#FFF] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
                <Twitter size={24} />
            </a>
            <a 
              href="https://www.instagram.com/mosviemedia/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-black p-3 border-2 border-black hover:bg-comic-red hover:text-white transition-colors shadow-[4px_4px_0_0_#FFF] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
            >
                <Instagram size={24} />
            </a>
             <a 
               href="mailto:info@mosviemedia.com" 
               className="bg-white text-black p-3 border-2 border-black hover:bg-comic-red hover:text-white transition-colors shadow-[4px_4px_0_0_#FFF] hover:shadow-none hover:translate-x-1 hover:translate-y-1"
             >
                <Mail size={24} />
            </a>
          </div>

        </div>
        
        <div className="mt-16 flex justify-center">
            <div className="bg-white border-2 border-black px-6 py-2 shadow-[4px_4px_0_0_#555] -rotate-1 hover:rotate-0 transition-transform duration-300 transform-gpu">
                <p className="font-comic text-xl text-black uppercase tracking-wide">
                    &copy; {new Date().getFullYear()} Mosvie Media. All rights reserved.
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;