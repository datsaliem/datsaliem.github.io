
import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        Học Vấn
      </h2>
      <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
      <div className="max-w-2xl mx-auto text-center bg-slate-800/50 p-8 rounded-lg border border-slate-700">
        <h3 className="text-2xl font-bold text-teal-400">Cao Đẳng FPT Polytechnic</h3>
        <p className="text-lg text-slate-300 mt-2">Chuyên ngành: Digital Marketing</p>
        <p className="text-slate-400 mt-1">Niên khóa: 08/2021 - 05/2024</p>
        <p className="text-slate-400 mt-1">GPA: 3.5/4</p>
      </div>
    </section>
  );
};

export default Education;
