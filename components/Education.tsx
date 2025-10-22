import React from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const Education: React.FC = () => {
  const [ref, isVisible] = useAnimateOnScroll();
  return (
    <section 
      ref={ref} 
      id="education" 
      aria-labelledby="education-heading" 
      className={`py-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <h2 id="education-heading" className="text-3xl font-bold text-center text-white mb-4">
        Học Vấn
      </h2>
      <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
      <div className="max-w-2xl mx-auto text-center bg-slate-800/50 p-6 sm:p-8 rounded-lg border border-slate-700">
        <h3 className="text-2xl font-bold text-teal-400">Cao Đẳng FPT Polytechnic</h3>
        <p className="text-lg text-slate-300 mt-2">Chuyên ngành: Digital Marketing</p>
        <p className="text-slate-400 mt-1">Niên khóa: 08/2021 - 05/2024</p>
        <p className="text-slate-400 mt-1">GPA: 3.5/4</p>
      </div>
    </section>
  );
};

export default Education;
