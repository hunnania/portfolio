import React from 'react';

interface HeroSectionProps {
  name: string;
  title: string;
  description: string;
  profileImage: string;
  email: string;
  linkedin: string;
  github: string;
  cvLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name,
  title,
  description,
  profileImage,
  email,
  linkedin,
  github,
  cvLink
}) => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-theme-secondary via-white to-theme-primary/30 pt-20 pb-20 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-theme-primary/30 rounded-full opacity-30 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-theme-secondary/50 rounded-full opacity-25 animate-float-slow"></div>
      <div className="absolute bottom-32 left-16 w-12 h-12 bg-theme-primary/40 rounded-full opacity-40 animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-theme-secondary/40 rounded-full opacity-20 animate-pulse"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight animate-slide-bounce">
                Hi, I'm{' '}
                <span className="text-theme-primary animate-text-glow hover-pulse">
                  {name}
                </span>
                <span className="inline-block ml-2 animate-wave hover-bounce">👋</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-gray-600 font-light mb-6">
                {title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl animate-fade-in-left">
                {description}
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-6 animate-fade-in-right">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-gray-700 hover:text-theme-primary transition-all duration-300 group transform hover:scale-110 px-4 py-3 rounded-xl hover:bg-white/50 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-theme-secondary/30 to-theme-primary/30 rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 animate-pulse-glow">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
              </a>
              
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 hover:text-theme-primary transition-all duration-300 group transform hover:scale-110 px-4 py-3 rounded-xl hover:bg-white/50 backdrop-blur-sm"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-theme-secondary/30 to-theme-primary/30 rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 animate-pulse-glow">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </div>
              </a>
              
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-all duration-300 group transform hover:scale-110"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cream-200 to-pastel-blue-200 rounded-full shadow-lg flex items-center justify-center group-hover:shadow-xl group-hover:from-pastel-blue-200 group-hover:to-pastel-purple-200 transition-all duration-300 animate-pulse-glow">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </a>
            </div>
            
            {/* CV Download Button */}
            <div className="animate-fade-in-up">
              <a
                href={cvLink}
                download
                className="inline-flex items-center gap-3 bg-theme-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group animate-border-glow"
              >
                <svg className="w-5 h-5 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="12" y1="18" x2="12" y2="12"/>
                  <polyline points="9,15 12,18 15,15"/>
                </svg>
                Download CV
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white animate-float relative">
                <img
                  src={profileImage}
                  alt={name}
                  className="w-full h-full object-cover"
                />
                {/* Sparkle effects on image */}
                <div className="absolute top-8 right-8 w-4 h-4 bg-pastel-purple-400 rounded-full animate-sparkle"></div>
                <div className="absolute bottom-12 left-12 w-3 h-3 bg-pastel-pink-400 rounded-full animate-sparkle" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-16 left-16 w-2 h-2 bg-cream-400 rounded-full animate-sparkle" style={{animationDelay: '0.5s'}}></div>
              </div>
              {/* Decorative morphing background elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-pastel-blue-200 to-pastel-purple-200 rounded-full opacity-50 animate-morph"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-cream-200 to-pastel-pink-200 rounded-full opacity-30 animate-morph" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-pastel-green-200 to-pastel-blue-200 rounded-full opacity-40 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;