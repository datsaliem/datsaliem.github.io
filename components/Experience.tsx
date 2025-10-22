import React from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { EXPERIENCE_DATA } from '../constants';
import type { ExperienceItem } from '../types';

const ExperienceCard: React.FC<{ item: ExperienceItem }> = ({ item }) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-700 sm:before:ml-26 before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-teal-400 after:border-4 after:box-content after:border-slate-800 after:rounded-full sm:after:ml-26 after:-translate-x-1/2 after:translate-y-1.5">
      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 h-6 mb-3 sm:mb-0 text-teal-300 bg-teal-900/50 rounded-full">{item.period}</time>
      <div className="text-lg sm:text-xl font-bold text-white">{item.role}</div>
    </div>
    <div className="pl-0 sm:pl-32">
      <h4 className="font-semibold text-teal-500 mb-2">{item.company}</h4>
      <p className="text-slate-400 mb-4">{item.description}</p>
      <ul className="list-disc list-inside text-slate-400 space-y-1">
        {item.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience: React.FC = () => {
  const [ref, isVisible] = useAnimateOnScroll();
  return (
    <section 
      ref={ref} 
      id="experience" 
      aria-labelledby="experience-heading" 
      className={`py-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <h2 id="experience-heading" className="text-3xl font-bold text-center text-white mb-4">
        Kinh Nghiệm Làm Việc
      </h2>
      <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
      <div className="max-w-4xl mx-auto">
        {EXPERIENCE_DATA.map((item, index) => (
          <ExperienceCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
