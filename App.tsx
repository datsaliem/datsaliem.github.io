import React from 'react';
import Header from './components/Header';
import DesktopSidebar from './components/DesktopSidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import AIAdvisor from './components/AIAdvisor';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900">
      <div className="lg:flex lg:justify-between lg:gap-16 container mx-auto">
        <DesktopSidebar />
        <div className="flex-1">
          <Header /> 
          <main className="px-6 md:px-12 lg:px-0 py-8 lg:py-20">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Portfolio />
            <Education />
            <AIAdvisor />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
      <BackToTopButton />
    </div>
  );
};

export default App;