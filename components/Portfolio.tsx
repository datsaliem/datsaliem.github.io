import React, { useState } from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { PROJECTS_DATA } from '../constants';
import type { Project } from '../types';
import ProjectModal from './ProjectModal';

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => (
    <div 
        className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex flex-col h-full transform hover:shadow-xl hover:shadow-teal-900/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        onClick={onClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onClick()}
      >
    <div className="flex-grow relative">
      <div className="absolute top-0 right-0 w-12 h-12 bg-slate-900/70 p-2 rounded-lg flex items-center justify-center border border-slate-700 opacity-75 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
          <img src={project.clientLogo} alt={`${project.organization} logo`} className="max-w-full max-h-full object-contain" />
      </div>
      <div className="pr-16">
        <h3 className="text-xl font-bold text-teal-400 mb-2">{project.title}</h3>
        <p className="font-semibold text-slate-400 mb-1">{project.organization}</p>
      </div>
      <p className="text-sm text-slate-500 mb-4">{project.period}</p>
      <p className="text-slate-300 leading-relaxed">{project.description}</p>
    </div>
    <div className="mt-4 text-right font-semibold text-teal-500 group-hover:text-teal-400">
        Xem Chi Tiết &rarr;
    </div>
  </div>
);

const Portfolio: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [ref, isVisible] = useAnimateOnScroll();

    const handleOpenModal = (project: Project) => {
      setSelectedProject(project);
    };
  
    const handleCloseModal = () => {
      setSelectedProject(null);
    };

  return (
    <>
        <section 
          ref={ref} 
          id="portfolio" 
          aria-labelledby="portfolio-heading" 
          className={`py-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
        <h2 id="portfolio-heading" className="text-3xl font-bold text-center text-white mb-4">
            Dự Án & Giải Thưởng
        </h2>
        <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={index} project={project} onClick={() => handleOpenModal(project)}/>
            ))}
        </div>
        </section>
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
};

export default Portfolio;
