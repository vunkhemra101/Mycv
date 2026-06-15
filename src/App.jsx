import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';
// import ContactForm from './client/ContactForm';


export default function App() {

  // Tow langauge
  
  const [currentLang, setCurrentLang] = useState('EN');
  return (
    <div className={`bg-slate-950 text-slate-100 min-h-screen antialiased selection:bg-cyan-500/30 selection:text-cyan-200 scroll-smooth transition-all duration-300 ${currentLang === 'KH' ? 'font-khmer' : ''
      }`}>
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px]" />
      </div>
      <div className="relative z-10">
        <Navbar currentLang={currentLang} setCurrentLang={setCurrentLang} />
        <main>
          <Hero currentLang={currentLang} />
          <About currentLang={currentLang} />
          <Skills currentLang={currentLang} />
          <Projects currentLang={currentLang} />
          <Services currentLang={currentLang} />
          <Contact currentLang={currentLang} />
        {/* <ContactForm/> */}
        </main>
        <footer className="relative z-10">
          <Footer currentLang={currentLang} />
        </footer>
        <ScrollToTop currentLang={currentLang} />
        <Analytics/>
      </div>
    </div>
  );
}