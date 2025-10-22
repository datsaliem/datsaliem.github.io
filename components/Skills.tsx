
import React, { useState, useEffect, useRef } from 'react';

const SkillCard: React.FC<{ title: string; skills: string[]; index: number }> = ({ title, skills, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Animate when 10% of the card is visible
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={`bg-slate-800/50 p-6 rounded-lg border border-slate-700 transform hover:-translate-y-2 transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-xl font-bold text-teal-400 mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, skillIndex) => (
          <li key={skillIndex} className="flex items-center group">
            <svg className="w-4 h-4 mr-2 text-teal-500 transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="text-slate-300 group-hover:text-white transition-colors duration-300">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Tối ưu Website (SEO)",
      skills: ["Wordpress & Haravan", "Keyword Research", "On-Page & Technical SEO", "Content SEO Guideline", "Schema Markup"]
    },
    {
      title: "Quảng Cáo Google",
      skills: ["Budget Planning", "Conversion Tracking", "Ad Content Creation", "A/B Testing", "Performance Monitoring"]
    },
    {
      title: "Công Cụ & Nền Tảng",
      skills: ["Google Analytics (GA4)", "Google Data Studio", "Lark Suite (Docs, Base)", "Make.com Automation", "Canva"]
    },
    {
      title: "Kỹ Năng Mềm & Khác",
      skills: ["Process Optimization", "Problem Solving", "Teamwork & Collaboration", "Project Management", "Logical & Creative Thinking"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        Chuyên Môn & Kỹ Năng
      </h2>
      <div className="w-20 h-1 bg-teal-500 mx-auto mb-12"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {skillCategories.map((category, index) => (
          <SkillCard key={index} title={category.title} skills={category.skills} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
