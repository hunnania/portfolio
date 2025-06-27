"use client";

import HeroSection from '@/components/HeroSection';
import ProjectCard from '@/components/ProjectCard';
import ExperienceCard from '@/components/ExperienceCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { projectsData, experiencesData } from '@/data/portfolioData';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-theme-secondary via-white to-theme-primary/30">
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection
        name="Alifa Hanania Ardha"
        title="Software Engineer & Data Scientist"
        description="Final Year Computer Science student at University of Indonesia with a passion for building impactful software solutions. I specialize in full-stack development and data science, with experience delivering real-world applications for government and enterprise clients."
        profileImage="/foto-formal.jpg"
        email="hananiaardha@gmail.com"
        linkedin="https://www.linkedin.com/in/alifa-hanania/"
        github="https://github.com/hunnania"
        cvLink="/cv-alifa-hanania-ardha.pdf"
      />

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-br from-theme-secondary/50 via-white to-theme-primary/20 relative overflow-hidden">
        {/* Floating background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-theme-primary/20 rounded-full opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-theme-secondary/30 rounded-full opacity-25 animate-float-slow"></div>
        <div className="absolute top-40 right-32 w-20 h-20 bg-theme-primary/15 rounded-full opacity-40 animate-bounce-slow"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              My <span className="text-theme-primary">Projects</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some of the projects I've worked on, ranging from full-stack applications to data science solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                role={project.role}
                technologies={project.technologies}
                description={project.description}
                imageUrl={project.imageUrl}
                repositoryLink={project.repositoryLink}
                demoLink={project.demoLink}
                presentationLink={project.presentationLink}
                sourceCodeLink={project.sourceCodeLink}
              />
            ))}
          </div>
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
          
          <div className="grid md:grid-cols-2 gap-8">
            {experiencesData.map((experience, index) => (
              <ExperienceCard
                key={index}
                title={experience.title}
                organization={experience.organization}
                period={experience.period}
                description={experience.description}
                achievements={experience.achievements}
                type={experience.type}
              />
            ))}
          </div>
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
