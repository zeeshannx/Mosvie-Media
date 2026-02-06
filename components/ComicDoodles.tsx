import React from 'react';
import { motion } from 'framer-motion';

interface DoodleProps {
  className?: string;
  color?: string;
  delay?: number;
}

export const DoodleArrow: React.FC<DoodleProps> = ({ className = "", color = "currentColor", delay = 0 }) => (
  <svg viewBox="0 0 200 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M20,50 Q100,10 170,50 M160,35 L175,52 L155,65"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeInOut" }}
    />
  </svg>
);

export const DoodleCurvedArrow: React.FC<DoodleProps> = ({ className = "", color = "currentColor", delay = 0 }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M50,150 C50,50 150,50 150,150 M130,130 L150,155 L170,130"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeInOut" }}
    />
  </svg>
);

export const DoodleBurst: React.FC<DoodleProps> = ({ className = "", color = "currentColor", delay = 0 }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M100,20 L120,70 L170,60 L130,100 L180,140 L120,130 L100,180 L80,130 L20,140 L70,100 L30,60 L80,70 Z"
      fill={color}
      stroke="black"
      strokeWidth="3"
      initial={{ scale: 0, opacity: 0, rotate: -45 }}
      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", bounce: 0.6, delay }}
    />
  </svg>
);

export const DoodleUnderline: React.FC<DoodleProps> = ({ className = "", color = "currentColor", delay = 0 }) => (
  <svg viewBox="0 0 300 30" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M10,15 Q30,5 50,15 T90,15 T130,15 T170,15 T210,15 T250,15 T290,15"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeInOut" }}
    />
  </svg>
);

export const DoodleStar: React.FC<DoodleProps> = ({ className = "", color = "currentColor", delay = 0 }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M50,10 L60,40 L90,50 L60,60 L50,90 L40,60 L10,50 L40,40 Z"
      fill={color}
      stroke="black"
      strokeWidth="3"
      initial={{ scale: 0, rotate: 90 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", bounce: 0.7, delay }}
    />
  </svg>
);

export const DoodleSparkle: React.FC<DoodleProps> = ({ className = "", color = "currentColor", delay = 0 }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M50,0 L55,45 L100,50 L55,55 L50,100 L45,55 L0,50 L45,45 Z"
      fill={color}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", bounce: 0.5, delay }}
    />
  </svg>
);

export const DoodleSwirl: React.FC<DoodleProps> = ({ className = "", color = "currentColor", delay = 0 }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M100,100 m-75,0 a75,75 0 1,0 150,0 a75,75 0 1,0 -150,0 M100,100 m-50,0 a50,50 0 1,0 100,0 a50,50 0 1,0 -100,0 M100,100 m-25,0 a25,25 0 1,0 50,0 a25,25 0 1,0 -50,0"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeDasharray="10 10"
      initial={{ pathLength: 0, rotate: -180, opacity: 0 }}
      whileInView={{ pathLength: 1, rotate: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay, ease: "linear" }}
    />
  </svg>
);

export const DoodleCrown: React.FC<DoodleProps> = ({ className = "", color = "currentColor", delay = 0 }) => (
  <svg viewBox="0 0 100 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M5,70 L15,25 L35,55 L50,10 L65,55 L85,25 L95,70 L5,70 Z"
      stroke={color}
      strokeWidth="5"
      strokeLinejoin="round"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeInOut" }}
    />
  </svg>
);

export const DoodleX: React.FC<DoodleProps> = ({ className = "", color = "currentColor", delay = 0 }) => (
  <svg viewBox="0 0 50 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M10,10 L40,40 M40,10 L10,40"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
    />
  </svg>
);

export const DoodleSpring: React.FC<DoodleProps> = ({ className = "", color = "currentColor", delay = 0 }) => (
  <svg viewBox="0 0 100 50" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M10,25 C15,10 25,10 30,25 C35,40 45,40 50,25 C55,10 65,10 70,25 C75,40 85,40 90,25"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay, ease: "easeInOut" }}
    />
  </svg>
);

export const DoodleZigzag: React.FC<DoodleProps> = ({ className = "", color = "currentColor", delay = 0 }) => (
  <svg viewBox="0 0 200 30" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M5,15 L20,5 L40,20 L60,5 L80,20 L100,5 L120,20 L140,5 L160,20 L180,5"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeInOut" }}
    />
  </svg>
);
