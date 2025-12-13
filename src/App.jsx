import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';

import Footer from './components/Footer';
// import BackgroundAnimation from './components/BackgroundAnimation';
import DarkVeil from './components/ui/DarkVeil';
import WelcomeScreen from './components/WelcomeScreen';
import LogoLoop from './components/LogoLoop';
import Education from './components/Education';
import ScrollProgress from './components/ui/ScrollProgress';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="relative min-h-screen">
      <ScrollProgress />
      {/* <BackgroundAnimation /> */}
      <div className="fixed inset-0 z-0">
        <DarkVeil />
      </div>

      <WelcomeScreen isActive={showWelcome} onEnter={() => setShowWelcome(false)} />

      <main className={`relative z-10 transition-opacity duration-1000 ${showWelcome ? 'opacity-0' : 'opacity-100'}`}>
        <Hero />
        <LogoLoop />

        {/* IDs matched to Navbar links */}
        <Projects />
        <Experience />
        <Education />
        <About />
        <Skills />


        <Footer />
      </main>

      {/* Floating Navbar at the bottom */}
      <div className={`transition-opacity duration-1000 delay-500 ${showWelcome ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Navbar />
      </div>
    </div>
  );
}

export default App;
