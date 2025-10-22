import React, { useState, useEffect, useRef } from 'react';
import { useAnimateOnScroll } from '../hooks/useAnimateOnScroll';

const SkillCard: React.FC<{ title: string; skills: { name: string; tooltip: string }[]; index: number }> = ({ title, skills, index }) => {
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
          <li key={skillIndex} className="relative flex items-center group">
            <svg className="w-4 h-4 mr-2 text-teal-500 transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="text-slate-300 group-hover:text-white transition-colors duration-300">{skill.name}</span>
            <span
              role="tooltip"
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap px-3 py-1.5 bg-slate-700 text-white text-xs font-medium rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
            >
              {skill.tooltip}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skills: React.FC = () => {
  const [ref, isVisible] = useAnimateOnScroll();
  const skillCategories = [
    {
      title: "Tối ưu Website (SEO)",
      skills: [
        { name: "Wordpress & Haravan", tooltip: "Nền tảng CMS & E-commerce phổ biến" },
        { name: "Keyword Research", tooltip: "Sử dụng Ahrefs, SEMrush, Keyword Planner" },
        { name: "On-Page & Technical SEO", tooltip: "Tối ưu nội dung, meta tags, tốc độ, schema" },
        { name: "Content SEO Guideline", tooltip: "Xây dựng nội dung theo Google Helpful Content" },
        { name: "Schema Markup", tooltip: "Triển khai dữ liệu có cấu trúc để tăng CTR" }
      ]
    },
    {
      title: "Quảng Cáo Google",
      skills: [
        { name: "Budget Planning", tooltip: "Lập kế hoạch và phân bổ ngân sách hiệu quả" },
        { name: "Conversion Tracking", tooltip: "Thiết lập theo dõi chuyển đổi qua GTM & GA4" },
        { name: "Ad Content Creation", tooltip: "Viết nội dung quảng cáo hấp dẫn, CTR cao" },
        { name: "A/B Testing", tooltip: "Thử nghiệm các biến thể để tối ưu hiệu suất" },
        { name: "Performance Monitoring", tooltip: "Theo dõi và báo cáo hiệu suất chiến dịch" }
      ]
    },
    {
      title: "Công Cụ & Nền Tảng",
      skills: [
        { name: "Google Analytics (GA4)", tooltip: "Phân tích traffic và hành vi người dùng" },
        { name: "Google Data Studio", tooltip: "Xây dựng dashboard báo cáo tự động" },
        { name: "Lark Suite (Docs, Base)", tooltip: "Quản lý công việc và quy trình đội nhóm" },
        { name: "Make.com Automation", tooltip: "Tự động hóa các quy trình marketing" },
        { name: "Canva", tooltip: "Thiết kế hình ảnh cơ bản cho social, ads" }
      ]
    },
    {
      title: "Kỹ Năng Mềm & Khác",
      skills: [
        { name: "Process Optimization", tooltip: "Cải tiến quy trình làm việc để tăng hiệu quả" },
        { name: "Problem Solving", tooltip: "Phân tích và giải quyết vấn đề logic" },
        { name: "Teamwork & Collaboration", tooltip: "Phối hợp hiệu quả với các thành viên" },
        { name: "Project Management", tooltip: "Quản lý và triển khai dự án đúng tiến độ" },
        { name: "Logical & Creative Thinking", tooltip: "Tư duy logic kết hợp sáng tạo trong marketing" }
      ]
    }
  ];

  return (
    <section 
      ref={ref} 
      id="skills" 
      aria-labelledby="skills-heading" 
      className={`py-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
    >
      <h2 id="skills-heading" className="text-3xl font-bold text-center text-white mb-4">
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
