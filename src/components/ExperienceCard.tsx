import React from 'react';

interface ExperienceCardProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements?: string[];
  type: 'teaching' | 'organizational' | 'work' | 'volunteer';
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  organization,
  period,
  description,
  achievements,
  type
}) => {
  const getTypeIcon = () => {
    switch (type) {
      case 'teaching':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
          </svg>
        );
      case 'organizational':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="m22 21-3-3"/>
            <circle cx="20" cy="8" r="3"/>
          </svg>
        );
      case 'work':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        );
      case 'volunteer':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-white via-theme-secondary/50 to-theme-primary/20 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 p-8 border-2 border-theme-secondary hover:border-theme-primary group transform hover:-translate-y-3 hover:scale-105 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-theme-primary/30 to-theme-secondary/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse blur-sm"></div>
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-theme-secondary/40 to-theme-primary/40 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-float-slow blur-sm"></div>
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-theme-primary/20 to-theme-secondary/20 border-2 border-theme-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 group-hover:shadow-xl group-hover:border-theme-secondary animate-bounce-scale">
              <div className="text-theme-primary group-hover:text-theme-secondary transition-colors duration-500">
                {getTypeIcon()}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-theme-primary transition-colors duration-500">
                {title}
              </h3>
              <p className="text-gray-600 font-semibold group-hover:text-theme-secondary transition-colors duration-500">{organization}</p>
            </div>
          </div>
          <span className={`text-sm px-4 py-2 rounded-full border-2 bg-blue-100 border-blue-300 text-blue-800 font-semibold transform group-hover:scale-110 transition-all duration-500 shadow-md group-hover:shadow-lg`}>
            {period}
          </span>
        </div>
        
        <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-500 text-base">
          {description}
        </p>
        
        {achievements && achievements.length > 0 && (
          <div>
            <h4 className="text-base font-bold text-gray-800 mb-3 group-hover:text-theme-primary transition-colors duration-500">Key Achievements:</h4>
            <ul className="space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-gray-700 flex items-start group-hover:text-gray-800 transition-colors duration-500">
                  <span className="text-theme-primary mr-3 mt-1 group-hover:text-theme-secondary transition-colors duration-500 text-lg">•</span>
                  <span className="text-base">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      {/* Decorative sparkles */}
      <div className="absolute top-4 right-4 w-3 h-3 bg-theme-primary rounded-full opacity-0 group-hover:opacity-60 transition-all duration-700 animate-sparkle"></div>
      <div className="absolute top-8 right-16 w-2 h-2 bg-theme-secondary rounded-full opacity-0 group-hover:opacity-70 transition-all duration-700 animate-bounce-slow"></div>
      <div className="absolute bottom-6 left-8 w-4 h-4 bg-theme-primary/70 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-700 animate-pulse"></div>
    </div>
  );
};

export default ExperienceCard;