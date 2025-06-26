import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/20 backdrop-blur-md border-b border-white/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-gray-800 hover:text-theme-primary transition-colors duration-300 cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              Alifa H. A.
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-700 hover:text-theme-primary font-medium transition-all duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-theme-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-theme-primary font-medium transition-all duration-300 relative group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-theme-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            <button
              onClick={() => scrollToSection('experience')}
              className="text-gray-700 hover:text-theme-primary font-medium transition-all duration-300 relative group"
            >
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-theme-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-theme-primary text-white px-6 py-2 rounded-full font-medium hover:bg-theme-primary/90 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-button-pulse"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-theme-primary transition-colors duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;