import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Clients from '../components/Clients';
import Features from '../components/Features';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling on initial load if present
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
    </>
  );
};

export default Home;