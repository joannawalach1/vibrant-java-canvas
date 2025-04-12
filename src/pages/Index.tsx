
import React, { useEffect } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Initialize animations on scroll
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('[class*="animate-"]');
      
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
        
        if (isVisible) {
          element.classList.add('animate-fill-both');
        }
      });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, []);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          
          <main className="flex-grow">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default Index;
