
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const { email, linkedin, location } = PERSONAL_INFO;
  return (
    <section id="contact" className="py-20 text-center">
       <h2 className="text-3xl font-bold text-center text-white mb-4">
        Liên Hệ
      </h2>
      <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
      <p className="max-w-2xl mx-auto text-lg text-slate-400 mb-8">
        Em luôn sẵn sàng trao đổi về các cơ hội hợp tác hoặc các dự án thú vị.
        Hãy kết nối với em!
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-lg">
        <div className="flex items-center">
            <svg className="w-6 h-6 mr-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            <a href={`mailto:${email}`} className="text-slate-300 hover:text-teal-400 transition-colors duration-300">
                {email}
            </a>
        </div>
        <div className="flex items-center">
             <svg className="w-6 h-6 mr-3 text-teal-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-teal-400 transition-colors duration-300">
                LinkedIn
            </a>
        </div>
        <div className="flex items-center">
            <svg className="w-6 h-6 mr-3 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
            <span className="text-slate-300">{location}</span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
