
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Sync theme with document class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-24 bg-slate-50/50 dark:bg-slate-900/20">
          <About />
        </section>
        
        <section id="skills" className="py-24">
          <Skills />
        </section>
        
        <section id="services" className="py-24 bg-slate-50/50 dark:bg-slate-900/20">
          <Services />
        </section>
        
        <section id="portfolio" className="py-24">
          <Portfolio />
        </section>
        
        <section id="resume" className="py-24 bg-slate-50/50 dark:bg-slate-900/20">
          <Resume />
        </section>
        
        <section id="contact" className="py-24">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
