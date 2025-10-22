
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  const { name, title, email, linkedin } = PERSONAL_INFO;

  return (
    <section id="hero" className="flex flex-col md:flex-row items-center justify-between py-20 md:py-32">
      <div className="md:w-2/3 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          {name}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold gradient-text mb-6">
          {title}
        </h2>
        <p className="max-w-xl text-lg text-slate-400 mb-8 mx-auto md:mx-0">
          Chuyên gia SEO & Google Ads với niềm đam mê tăng trưởng traffic và tối ưu hiệu quả quảng cáo.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href={`mailto:${email}`}
            className="bg-teal-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-600 transition-transform transform hover:scale-105 duration-300 shadow-lg"
          >
            Liên Hệ
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-600 transition-transform transform hover:scale-105 duration-300 shadow-lg"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="mt-12 md:mt-0 md:w-1/3 flex justify-center">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-teal-500 shadow-2xl">
          <img
            src="https://i.imgur.com/eB95n4h.png"
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
