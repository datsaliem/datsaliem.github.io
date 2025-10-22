
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12 py-6 text-center text-slate-500">
        <p>&copy; {currentYear} Dắt Sa Liêm. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
