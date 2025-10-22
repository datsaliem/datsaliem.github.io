
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Giới Thiệu', href: '#about' },
    { name: 'Kinh Nghiệm', href: '#experience' },
    { name: 'Kỹ Năng', href: '#skills' },
    { name: 'Dự Án', href: '#portfolio' },
    { name: 'Liên Hệ', href: '#contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white">
          Dắt Sa Liêm
        </a>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-teal-400 transition-colors duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>
        {/* Mobile menu could be added here */}
      </div>
    </header>
  );
};

export default Header;
