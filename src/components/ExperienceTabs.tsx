"use client";

import { useState, useRef, useEffect } from 'react';
import ExperienceCard from './ExperienceCard';

interface ExperienceTabsProps {
  experiences: {
    title: string;
    organization: string;
    period: string;
    description: string;
    achievements: string[];
    type: string;
  }[];
  categories: {
    id: string;
    label: string;
  }[];
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
  
  // Update the active tab indicator position
  useEffect(() => {
    // Small timeout to ensure DOM is fully rendered
    const timer = setTimeout(() => {
      updateActiveTabPosition();
    }, 100);
    
    // Handle window resize
    window.addEventListener('resize', updateActiveTabPosition);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateActiveTabPosition);
    };
  }, [activeTab, categories]);

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex relative p-1.5 bg-gray-100 rounded-full shadow-md">
          {categories.map((category, index) => (
            <button
              key={category.id}
              ref={(el) => { tabsRef.current[index] = el; }}
              className={`px-6 py-2 rounded-full text-gray-700 relative z-10 transition-colors duration-300 ${
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

      {/* Experiences Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredExperiences.map((experience, index) => (
          <div key={index} className="tab-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <ExperienceCard
              title={experience.title}
              organization={experience.organization}
              period={experience.period}
              description={experience.description}
              achievements={experience.achievements}
              type={experience.type}
            />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredExperiences.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">
            No experiences found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default ExperienceTabs;