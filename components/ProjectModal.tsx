import React from 'react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ModalSection: React.FC<{ title: string; items: string[] }> = ({ title, items }) => {
    if (!items || items.length === 0) return null;
    return (
        <div className="mt-6">
            <h4 className="text-lg font-bold text-teal-400 mb-2">{title}</h4>
            <ul className="list-disc list-inside text-slate-300 space-y-1 pl-2">
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
};

// New component for staggered content animation
const AnimatedContent: React.FC<{ children: React.ReactNode; delay: number }> = ({ children, delay }) => (
    <div className="animate-fade-in-up" style={{ animationDelay: `${delay}ms` }}>
        {children}
    </div>
);


const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4 transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="bg-slate-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-slate-700 relative transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        <AnimatedContent delay={100}>
            <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>
        </AnimatedContent>
        <AnimatedContent delay={150}>
            <p className="font-semibold text-teal-500 mb-1">{project.organization}</p>
            <p className="text-sm text-slate-500 mb-6">{project.period}</p>
        </AnimatedContent>
        
        <AnimatedContent delay={200}>
            <div className="w-16 h-0.5 bg-slate-700 my-4"></div>
        </AnimatedContent>

        <AnimatedContent delay={250}>
            <p className="text-slate-300 leading-relaxed">{project.description}</p>
        </AnimatedContent>
        
        <AnimatedContent delay={300}>
            <ModalSection title="Thành Tựu Nổi Bật" items={project.achievements} />
        </AnimatedContent>
        <AnimatedContent delay={350}>
            <ModalSection title="Thách Thức & Giải Pháp" items={project.challenges} />
        </AnimatedContent>
        <AnimatedContent delay={400}>
            <ModalSection title="Chiến Lược & Công Nghệ" items={project.strategies} />
        </AnimatedContent>
      </div>
    </div>
  );
};

export default ProjectModal;