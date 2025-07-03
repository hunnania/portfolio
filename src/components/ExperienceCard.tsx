"use client";

import { useState } from 'react';

interface ExperienceCardProps {
  title: string;
  organization: string;
  period: string;
  description: string;
  achievements: string[];
  type: string; // Changed from enum to string to match with the data
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  organization,
  period,
  description,
  achievements,
  type,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`bg-gradient-to-br from-white via-white to-theme-secondary/10 rounded-2xl p-6 shadow-lg border border-theme-secondary/20 transition-all duration-500 ${
        isExpanded ? 'scale-[1.02] shadow-xl' : ''
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-800">
          {title}
        </h3>
        <span 
          className={`text-xs px-3 py-1 rounded-full ${
            type === 'teaching' 
              ? 'bg-blue-100 text-blue-800' 
              : type === 'organizational'
                ? 'bg-purple-100 text-purple-800'
                : 'bg-green-100 text-green-800'
          }`}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </div>
      
      <div className="mb-4">
        <div className="text-theme-primary font-medium mb-1">
          {organization}
        </div>
        <div className="text-sm text-gray-500">
          {period}
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">
        {description}
      </p>
      
      <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
        {achievements.length > 0 && (
          <div className="mt-4">
            <h4 className="font-medium text-theme-primary mb-2">Key Achievements:</h4>
            <ul className="list-disc pl-5 space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-gray-700">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <button 
        className="mt-4 inline-flex items-center text-sm font-medium text-theme-primary hover:text-theme-primary/80 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? 'Show Less' : 'Show More'}
        <svg 
          className={`ml-1 w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
        </svg>
      </button>
    </div>
  );
};

export default ExperienceCard;