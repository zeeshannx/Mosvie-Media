import React from 'react';
import { motion } from 'framer-motion';

interface ComicButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

const ComicButton: React.FC<ComicButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  className = ''
}) => {
  // Changed transition-all to transition-colors to allow Framer Motion to handle geometry/shadow smoothly
  const baseStyle = "font-comic text-2xl px-8 py-3 border-4 border-black transition-colors duration-200 relative z-10 uppercase tracking-wide";
  
  const variants = {
    primary: "bg-comic-yellow text-black hover:bg-yellow-300",
    secondary: "bg-white text-black hover:bg-gray-100",
    accent: "bg-comic-red text-white hover:bg-red-500",
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.05, 
        x: -6, 
        y: -6, 
        boxShadow: '14px 14px 0px 0px rgba(0,0,0,1)',
        transition: { type: "spring", stiffness: 400, damping: 15 }
      }}
      whileTap={{ scale: 0.95, x: 0, y: 0, boxShadow: '0px 0px 0px 0px rgba(0,0,0,1)' }}
      className={`${baseStyle} ${variants[variant]} shadow-comic ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default ComicButton;