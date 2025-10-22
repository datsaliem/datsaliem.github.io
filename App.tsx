
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import AIAdvisor from './components/AIAdvisor';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      <main className="container mx-auto px-6 md:px-12 py-8">
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
  );
};

export default App;