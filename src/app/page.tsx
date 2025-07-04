"use client";

import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProjectTabs from '@/components/ProjectTabs';
import ExperienceTabs from '@/components/ExperienceTabs';
import { projectsData, experiencesData } from '@/data/portfolioData';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-secondary via-white to-theme-primary/30">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-theme-secondary/50 via-white to-theme-primary/20 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-theme-primary/20 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-theme-secondary/30 rounded-full opacity-25 animate-float-slow"></div>
        <div className="absolute top-40 right-32 w-20 h-20 bg-theme-primary/15 rounded-full opacity-40 animate-bounce-slow"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              My <span className="text-theme-primary">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of the projects I've worked on, ranging from full-stack applications to data science solutions.
            </p>
          </div>
          
          {/* Project Filter Tabs */}
          <ProjectTabs 
            projects={projectsData} 
            categories={[
              { id: "all", label: "All" },
              { id: "SE", label: "Software Engineering" },
              { id: "DS", label: "Data Science" }
            ]} 
          />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-theme-primary/20 via-white to-theme-secondary/50 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-32 right-16 w-28 h-28 bg-theme-primary/20 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-32 left-20 w-36 h-36 bg-theme-secondary/30 rounded-full opacity-25 animate-float-slow"></div>
        <div className="absolute top-16 left-32 w-16 h-16 bg-theme-primary/15 rounded-full opacity-30 animate-bounce-slow"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Additional <span className="text-theme-primary">Experience</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond technical projects, I'm actively involved in teaching, mentoring, and contributing to the tech community.
            </p>
          </div>
          
          {/* Experience Filter Tabs */}
          <ExperienceTabs 
            experiences={experiencesData} 
            categories={[
              { id: "all", label: "All" },
              { id: "teaching", label: "Teaching" },
              { id: "organizational", label: "Organizational" }
            ]}
          />
        </div>
      </section>

      {/* Closing Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-theme-secondary/50 via-white to-theme-primary/50 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-16 left-16 w-24 h-24 bg-theme-primary/20 rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-16 right-24 w-32 h-32 bg-theme-secondary/30 rounded-full opacity-15 animate-float-slow"></div>
        
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's connect and create impact.
              I'm always open to discussing new opportunities and innovative projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hananiaardha@gmail.com"
                className="inline-flex items-center justify-center gap-2 bg-theme-primary text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group animate-button-pulse"
              >
                <svg className="w-5 h-5 group-hover:animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Get In Touch
              </a>
              <a
                href="https://github.com/hunnania"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group hover:bg-gray-700"
              >
                <svg className="w-5 h-5 group-hover:animate-pulse" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/alifa-hanania/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-theme-primary/30 hover:border-theme-primary group"
              >
                <svg className="w-5 h-5 group-hover:animate-wiggle" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
