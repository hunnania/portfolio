"use client";

import { useState, useRef, useEffect } from 'react';
import ExperienceCard from './ExperienceCard';

interface ExperienceTabsProps {
  experiences: Array<{
    title: string;
    organization: string;
    period: string;
    description: string;
    achievements: string[];
    type: string;
  }>;
  categories: Array<{
    id: string;
    label: string;
  }>;
}

const ExperienceTabs: React.FC<ExperienceTabsProps> = ({ experiences, categories }) => {
  const [activeTab, setActiveTab] = useState('all');
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const [activeTabStyle, setActiveTabStyle] = useState({ left: 0, width: 0 });

  const filteredExperiences = activeTab === 'all'
    ? experiences
    : experiences.filter(experience => experience.type === activeTab);
    
  // Update position function
  const updateActiveTabPosition = () => {
    const activeIndex = categories.findIndex(c => c.id === activeTab);
    if (tabsRef.current[activeIndex]) {
      const activeTabElement = tabsRef.current[activeIndex];
      if (activeTabElement && activeTabElement.parentElement) {
        // Calculate position relative to the container
        const containerRect = activeTabElement.parentElement.getBoundingClientRect();
        const tabRect = activeTabElement.getBoundingClientRect();
        
        setActiveTabStyle({
          left: tabRect.left - containerRect.left,
          width: tabRect.width
        });
      }
    }
  };

  useEffect(() => {
    updateActiveTabPosition();
    
    const handleResize = () => {
      updateActiveTabPosition();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeTab]);

  // Split experiences into left and right columns
  const leftColumnExperiences: typeof filteredExperiences = [];
  const rightColumnExperiences: typeof filteredExperiences = [];

  filteredExperiences.forEach((experience, index) => {
    if (index % 2 === 0) {
      leftColumnExperiences.push(experience);
    } else {
      rightColumnExperiences.push(experience);
    }
  });

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="relative inline-flex bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-lg border border-theme-primary/20">
          {categories.map((category, index) => (
            <button
              key={category.id}
              ref={el => { tabsRef.current[index] = el; }}
              className={`px-6 py-2 rounded-full text-gray-700 relative z-10 transition-colors duration-300 cursor-pointer ${
                activeTab === category.id ? 'text-white' : 'hover:text-gray-900'
              }`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.label}
            </button>
          ))}
          
          {/* Sliding background for active tab */}
          <div 
            className="absolute top-1.5 bottom-1.5 bg-theme-primary rounded-full transition-all duration-300 shadow-md"
            style={{
              left: `${activeTabStyle.left}px`,
              width: `${activeTabStyle.width}px`
            }}
          />
        </div>
      </div>

      {/* Two Column Layout for Desktop, Single Column for Mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Left Column - Desktop only */}
        <div className="space-y-8 hidden lg:block">
          {leftColumnExperiences.map((experience, index) => (
            <div
              key={`left-${index}`}
              className="tab-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>

        {/* Right Column - Desktop only */}
        <div className="space-y-8 hidden lg:block">
          {rightColumnExperiences.map((experience, index) => (
            <div
              key={`right-${index}`}
              className="tab-fade-in"
              style={{ animationDelay: `${(index + leftColumnExperiences.length) * 0.1}s` }}
            >
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>

        {/* Mobile Single Column Layout */}
        <div className="lg:hidden col-span-full space-y-6">
          {filteredExperiences.map((experience, index) => (
            <div
              key={`mobile-${index}`}
              className="tab-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ExperienceCard {...experience} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceTabs;