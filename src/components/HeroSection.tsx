"use client";

import { useState, useEffect } from 'react';
import AnimatedDots from './AnimatedDots';

const HeroSection: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const roles = [
    "Software Engineer",
    "Full-Stack Developer", 
    "Data Enthusiast"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTransitioning(false);
      }, 300); // Half of transition duration for fade out
      
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      <AnimatedDots />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* Profile Section */}
        <div className="mb-12 flex flex-col items-center">
          {/* Avatar */}
          <div className="relative mb-6">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-theme-primary to-theme-secondary p-1 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img 
                  src="foto-formal.jpg" 
                  alt="Alifa Hanania Ardha"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Status dot */}
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-theme-secondary rounded-full border-4 border-white shadow-lg animate-pulse-gentle"></div>
          </div>
          
          {/* Name & Greeting */}
          <div className="space-y-2">
            <p className="text-lg md:text-xl text-gray-600 font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-4">
              Alifa Hanania Ardha
            </h1>
          </div>
        </div>

        {/* Dynamic Role Section */}
        <div className="mb-8 min-h-[60px] flex items-center justify-center">
          <div className="relative">
            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-semibold text-theme-primary transition-all duration-600 ease-in-out ${
              isTransitioning ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'
            }`}>
              {roles[currentRole]}
            </h2>
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-theme-primary to-theme-secondary rounded-full transform scale-x-0 animate-scale-x"></div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Final Year Computer Science student at Universitas Indonesia with a passion for building impactful software solutions. I specialize in full-stack development and data science, with experience delivering real-world applications for government and enterprise clients.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-theme-primary text-white font-bold rounded-full hover:bg-theme-primary/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl border-2 border-theme-primary/80"
          >
            View My Work
          </button>
          
          <a
            href="/cv-alifa-hanania-ardha.pdf"
            download
            className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-theme-primary text-theme-primary font-semibold rounded-full hover:bg-theme-primary hover:text-white transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-theme-primary text-theme-primary font-semibold rounded-full hover:bg-theme-primary hover:text-white transition-all duration-300 cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;