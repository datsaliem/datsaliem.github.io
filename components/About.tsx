
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  const { about, shortTermGoal, longTermGoal } = PERSONAL_INFO;

  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-4">
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
