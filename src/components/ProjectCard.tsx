"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  role: string;
  technologies: string[];
  description: string;
  imageUrl: string;
  repositoryLink?: string;
  demoLink?: string;
  presentationLink?: string;
  sourceCodeLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  role,
  technologies,
  description,
  imageUrl,
  repositoryLink,
  demoLink,
  presentationLink,
  sourceCodeLink,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div 
      className="group relative w-full h-96 perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-gradient-to-br from-theme-secondary via-white to-theme-primary/20 rounded-2xl shadow-lg border border-theme-secondary hover:shadow-2xl transition-all duration-500 overflow-hidden animate-slide-rotate">
          {/* Image Section */}
          <div className="relative overflow-hidden h-48">
            <div className="relative w-full h-full">
              {!imgError ? (
                <Image 
                  src={imageUrl}
                  alt={title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-110 transition-transform duration-700"
                  onError={() => {
                    console.error(`Failed to load image: ${imageUrl}`);
                    setImgError(true);
                  }}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  <div className="text-gray-500 text-sm text-center px-4">
                    <svg className="w-10 h-10 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4V5h12v10z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M8.5 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM6.5 13a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                    </svg>
                    {title}
                  </div>
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent hover:from-black/50 transition-all duration-500"></div>
            
            {/* Floating sparkles */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-theme-primary rounded-full animate-sparkle"></div>
            <div className="absolute top-8 right-12 w-2 h-2 bg-theme-secondary rounded-full animate-bounce-slow"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 bg-theme-primary/70 rounded-full animate-pulse opacity-70"></div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-theme-primary transition-colors duration-300">
              {title}
            </h3>
            
            <div className="mb-4">
              <span className="inline-block bg-theme-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                {role}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="text-xs bg-theme-secondary text-gray-800 px-3 py-1.5 rounded-lg border-2 border-theme-primary/30 font-medium hover:bg-theme-primary hover:text-white transition-all duration-300 hover:scale-105"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="text-xs bg-theme-primary text-white px-3 py-1.5 rounded-lg border-2 border-theme-primary font-medium hover:scale-105 transition-transform duration-300">
                  +{technologies.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* Hover indicator */}
          <div className="absolute bottom-4 right-4 bg-theme-primary/20 rounded-full p-2 opacity-70 animate-bounce-slow hover:bg-theme-primary hover:opacity-100 transition-all duration-300">
            <svg className="w-4 h-4 text-theme-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-theme-secondary/50 via-white to-theme-primary/20 rounded-2xl shadow-xl border-2 border-theme-primary/30 p-6">
          <div className="h-full flex flex-col">
            <h3 className="text-xl font-bold text-theme-primary mb-3">
              {title}
            </h3>
            
            {/* Scrollable description section */}
            <div className="mb-4 overflow-y-auto pr-2 custom-scrollbar flex-grow">
              <p className="text-gray-700 leading-relaxed text-sm">
                {description}
              </p>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-theme-primary mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-1">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs bg-theme-secondary text-gray-800 px-2 py-1 rounded-md border border-theme-primary/30 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-2 mt-auto">
              {repositoryLink && (
                <a
                  href={repositoryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-gray-800 bg-white/80 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-200 border-2 border-gray-300 hover:border-gray-400"
                >
                  <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Repo
                </a>
              )}
              
              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-gray-800 bg-white/80 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-200 border-2 border-gray-300 hover:border-gray-400"
                >
                  <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Demo
                </a>
              )}
              
              {presentationLink && (
                <a
                  href={presentationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-gray-800 bg-white/80 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-200 border-2 border-gray-300 hover:border-gray-400"
                >
                  <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 16V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z"/>
                    <path d="m2 16 10 6 10-6"/>
                  </svg>
                  Slides
                </a>
              )}
              
              {sourceCodeLink && (
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-2 text-xs font-medium text-gray-800 bg-white/80 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-200 border-2 border-gray-300 hover:border-gray-400"
                >
                  <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="currentColor">
                    <polyline points="16 18 22 12 16 6"/>
                    <polyline points="8 6 2 12 8 18"/>
                  </svg>
                  Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;