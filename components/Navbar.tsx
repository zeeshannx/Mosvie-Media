import React, { useState } from 'react';
import { motion, useScroll, useTransform, useAnimation } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ComicButton from './ComicButton';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();
  const navigate = useNavigate();
  const logoControls = useAnimation();

  const isHome = location.pathname === '/';

  // Subtly shift background colors based on scroll position
  const backgroundColor = useTransform(
    scrollY,
    [0, 600, 1200, 1800, 2400, 3000, 3600, 4200],
    ['#ffffff', '#FFE900', '#ffffff', '#4DC9FF', '#ffffff', '#FFE900', '#ffffff', '#FF3C38']
  );

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Clients', href: '#clients' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');

    if (isHome) {
      // If on home, scroll normally
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home then scroll
      navigate(`/${href}`);
      // Note: In a real app, you might need a useEffect in Home to check hash on load
      // But for simple SPA router, this often works or you use a library like react-router-hash-link
      // For this implementation, we will rely on standard behavior or handle it in Home
      setTimeout(() => {
          const element = document.getElementById(targetId);
          if(element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleBookCall = () => {
    setIsOpen(false);
    window.open('https://cal.com/mosvie-media/15', '_blank');
  };

  const handleLogoClick = () => {
    // Trigger comic burst/wiggle animation
    logoControls.start({
      scale: [1, 1.2, 0.9, 1.05, 1],
      rotate: [0, -5, 5, -3, 3, 0],
      transition: { duration: 0.5, ease: "easeInOut" }
    });

    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo(0, 0);
    }
  };

  // If not on home, default bg to white for readability, else animated
  const navStyle = isHome ? { backgroundColor } : { backgroundColor: '#ffffff' };

  return (
    <motion.nav 
      style={navStyle}
      className="fixed top-0 left-0 w-full border-b-4 border-black z-50 py-4 shadow-md transition-colors duration-200"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-2 cursor-pointer group origin-center select-none"
          onClick={handleLogoClick}
          animate={logoControls}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-10 h-10 bg-comic-purple border-4 border-black flex items-center justify-center -rotate-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-0 transition-transform">
            <span className="font-comic text-white text-2xl mt-1">M</span>
          </div>
          <span className="font-comic text-3xl tracking-wider text-black mt-1 drop-shadow-sm">
            MOSVIE<span className="text-comic-purple" style={{ WebkitTextStroke: '1px black' }}>MEDIA</span>
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-comic text-xl text-black hover:text-comic-red hover:scale-110 transition-all uppercase tracking-wide relative group"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all group-hover:w-full group-hover:bg-comic-red"></span>
            </a>
          ))}
          <ComicButton 
            variant="primary" 
            className="!px-6 !py-1 !text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            onClick={handleBookCall}
          >
            Book Call
          </ComicButton>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-black p-1 border-4 border-transparent active:border-black rounded hover:bg-black/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} strokeWidth={3} /> : <Menu size={32} strokeWidth={3} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-white border-b-4 border-black p-6 flex flex-col gap-6 shadow-comic-lg"
        >
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-comic text-2xl text-black hover:text-comic-red text-center uppercase"
            >
              {link.name}
            </a>
          ))}
          <div className="flex justify-center">
             <ComicButton onClick={handleBookCall} className="w-full">Book A Call</ComicButton>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;