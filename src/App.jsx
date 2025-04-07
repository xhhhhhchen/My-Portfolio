import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './sections/hero';
import Projects from './sections/projects';
import About from './sections/about';
import Skills from './sections/skills';
import Contact from './sections/contact';
import Footer from './components/footer';
import Experience from './sections/experience';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './sections/landing';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Background elements data - can be moved to a separate file if needed
  const backgroundElements = [
    { icon: 'σ', size: 20, left: '10%', top: '20%', delay: 0.2 },
    { icon: '∑', size: 24, left: '85%', top: '30%', delay: 0.4 },
    { icon: '∫', size: 28, left: '15%', top: '70%', delay: 0.6 },
    { icon: 'π', size: 22, left: '80%', top: '80%', delay: 0.8 },
    { icon: 'β', size: 26, left: '25%', top: '40%', delay: 1.0 },
    { icon: 'θ', size: 30, left: '75%', top: '60%', delay: 1.2 },
    { icon: 'λ', size: 18, left: '40%', top: '20%', delay: 1.4 },
    { icon: '∇', size: 32, left: '60%', top: '85%', delay: 1.6 },
  ];

  // Floating graph nodes
  const [graphNodes] = useState(() => 
    Array.from({ length: 15 }).map((_, i) => ({
      size: Math.random() * 6 + 4,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: Math.random() * 10 + 10,
    }))
  );

  // Track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to calculate opacity based on scroll position
  const getOpacity = (scrollPos, elementOffsetTop) => {
    const distance = scrollPos - elementOffsetTop;
    if (distance < 0) return 1;
    if (distance > 500) return 0;
    return 1 - distance / 200;
  };

  // Background component to reuse across routes
  const DataScienceBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">

      {/* Subtle grid lines */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        <Route path="/main" element={
          <div className="relative min-h-screen">

            <DataScienceBackground />
            
            <Header />
            
            <motion.div
              style={{ opacity: getOpacity(scrollPosition, 900) }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
            </motion.div>

            <motion.div
              style={{ opacity: getOpacity(scrollPosition, 2300) }}
              transition={{ duration: 0.5 }}
            >
              <Projects />
            </motion.div>

            <motion.div
              style={{ opacity: getOpacity(scrollPosition, 3000) }}
              transition={{ duration: 0.5 }}
            >
              <About />
            </motion.div>

            <motion.div
              style={{ opacity: getOpacity(scrollPosition, 3500) }}
              transition={{ duration: 0.5 }}
            >
              <Skills />
            </motion.div>

            <motion.div
              style={{ opacity: getOpacity(scrollPosition, 3800) }}
              transition={{ duration: 0.5 }}
            >
              <Experience />
            </motion.div>

            <motion.div
              style={{ opacity: getOpacity(scrollPosition, 4000) }}
              transition={{ duration: 0.5 }}
            >
              <Contact />
            </motion.div>

            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;