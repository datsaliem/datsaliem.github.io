
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-slate-300 hover:text-teal-400 transition-colors duration-300 font-medium text-lg md:text-base"
  >
    {children}
  </a>
);

const MobileMenu: React.FC<{ navLinks: { name: string; href: string }[]; onClose: () => void }> = ({ navLinks, onClose }) => (
  <div className="fixed inset-0 bg-slate-900/95 z-50 flex flex-col items-center justify-center md:hidden animate-fade-in" aria-modal="true" role="dialog">
    <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-white" aria-label="Close menu">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
    <nav className="flex flex-col space-y-8 text-center">
      {navLinks.map((link) => (
        <NavLink key={link.name} href={link.href} onClick={onClose}>
          {link.name}
        </NavLink>
      ))}
    </nav>
  </div>
);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
        window.removeEventListener('scroll', handleScroll);
        document.body.style.overflow = 'unset'; // cleanup on component unmount
    };
  }, [isMobileMenuOpen]);

  const navLinks = NAV_LINKS;

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className={`lg:hidden sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
          <a href="#" className="text-lg sm:text-xl font-bold text-white">
            Dắt Sa Liêm
          </a>
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={toggleMobileMenu} className="text-slate-300 hover:text-white" aria-label="Open menu" aria-expanded={isMobileMenuOpen}>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && <MobileMenu navLinks={navLinks} onClose={toggleMobileMenu} />}
    </>
  );
};

export default Header;
