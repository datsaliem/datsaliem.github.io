import React from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  const { about, shortTermGoal, longTermGoal } = PERSONAL_INFO;
  const [ref, isVisible] = useAnimateOnScroll();

  return (
    <section 
      ref={ref} 
      id="about" 
      aria-labelledby="about-heading" 
      className={`py-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
      style={{ animationDelay: '100ms' }}
    >
      <h2 id="about-heading" className="text-3xl font-bold text-center text-white mb-4">
        Giới Thiệu
      </h2>
      <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
      
      <div className="max-w-4xl mx-auto text-lg text-slate-400 text-center leading-relaxed">
        <p className="mb-8">{about}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <h3 className="text-xl font-bold text-teal-400 mb-3">Mục Tiêu Ngắn Hạn</h3>
          <p className="text-slate-400">{shortTermGoal}</p>
        </div>
        <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
          <h3 className="text-xl font-bold text-teal-400 mb-3">Mục Tiêu Dài Hạn</h3>
          <p className="text-slate-400">{longTermGoal}</p>
        </div>
      </div>
    </section>
  );
};

export default About;