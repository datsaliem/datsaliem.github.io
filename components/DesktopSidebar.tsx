import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO, NAV_LINKS } from '../constants';

const useScrollSpy = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // This threshold logic helps determine which section is "most" in view.
    // rootMargin offsets the "viewport" for intersection calculations.
    // -30% from the top and -70% from the bottom means the intersection is checked
    // against the middle 40% of the screen.
    const options = {
      rootMargin: '-30% 0px -70% 0px',
      threshold: 0,
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const { current: currentObserver } = observer;
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) currentObserver?.observe(el);
    });

    return () => {
        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) currentObserver?.unobserve(el);
          });
    };
  }, [sectionIds]);

  return activeSection;
};


const DesktopSidebar: React.FC = () => {
  const { name, title, email, linkedin } = PERSONAL_INFO;
  const sectionIds = NAV_LINKS.map(link => link.href.substring(1));
  const activeSection = useScrollSpy(sectionIds);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href) return;

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <aside className="hidden lg:flex flex-col justify-between h-screen sticky top-0 py-20 w-full max-w-xs">
      <div>
        <div className="mb-12">
            <h1 className="text-4xl font-extrabold text-white leading-tight mb-3">
              {name}
            </h1>
            <h2 className="text-xl font-semibold text-slate-300 mb-4">
              {title}
            </h2>
            <p className="max-w-xs text-slate-400">
              Chuyên gia SEO & Google Ads với niềm đam mê tăng trưởng traffic và tối ưu hiệu quả quảng cáo.
            </p>
        </div>

        <nav aria-label="In-page navigation">
          <ul className="space-y-4">
            {NAV_LINKS.map(link => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href}>
                  <a href={link.href} onClick={handleNavClick} className="group flex items-center gap-4 cursor-pointer rounded-md focus-visible:outline-none">
                    <span className={`h-px transition-all duration-300 ${isActive ? 'w-16 bg-slate-200' : 'w-8 bg-slate-500 group-hover:w-16 group-hover:bg-slate-400 group-focus-visible:w-16 group-focus-visible:bg-slate-400'}`}></span>
                    <span className={`text-xs font-bold uppercase tracking-widest transition-colors duration-300 ${isActive ? 'text-slate-200' : 'text-slate-500 group-hover:text-slate-400 group-focus-visible:text-slate-400'}`}>
                      {link.name}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      
      <div className="flex items-center gap-6">
        <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" xmlns="http://www.w.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <a href={`mailto:${email}`} aria-label="Email" className="text-slate-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w.org/2000/svg" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
        </a>
      </div>
    </aside>
  );
};

export default DesktopSidebar;