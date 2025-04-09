import React, { useState } from 'react';
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

  //Background elements data
  const backgroundElements = [
    { icon: 'σ', size: 20, left: '10%', top: '20%', delay: 0.2 },
    { icon: '∑', size: 24, left: '85%', top: '30%', delay: 0.4 },
    { icon: '∫', size: 28, left: '15%', top: '70%', delay: 0.6 },
    { icon: 'π', size: 22, left: '80%', top: '80%', delay: 0.8 },
    { icon: 'β', size: 26, left: '25%', top: '40%', delay: 1.0 },
    { icon: 'θ', size: 30, left: '75%', top: '60%', delay: 1.2 },
    { icon: 'λ', size: 18, left: '40%', top: '20%', delay: 1.4 },
    { icon: '∇', size: 32, left: '60%', top: '85%', delay: 1.6 },
    ]

    // Floating graph nodes
    const graphNodes = Array.from({ length: 15 }).map((_, i) => ({
    size: Math.random() * 6 + 4,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    duration: 25,
    }))
    
    // Background component to reuse across routes
    const DataScienceBackground = () => (
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">

        {/* Background elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Mathematical symbols */}
                {backgroundElements.map((el, i) => (
                  <motion.div
                    key={`math-${i}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 0.3, y: 0 }}
                    transition={{ delay: el.delay, duration: 1 }}
                    className="absolute text-neutral-100"
                    style={{
                      left: el.left,
                      top: el.top,
                      fontSize: `${el.size}px`,
                    }}
                  >
                    {el.icon}
                  </motion.div>
                ))}
        
                {/* Floating graph nodes */}
                {graphNodes.map((node, i) => (
                  <motion.div
                    key={`node-${i}`}
                    initial={{ opacity: 0.1, y: 0 }}
                    animate={{
                      opacity: [0.3, 0.9, 0.1],
                      y: [0, -50],
                      x: [0, (Math.random() - 0.5) * 50],
                    }}
                    transition={{
                      delay: node.delay,
                      duration: node.duration,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                    className="absolute rounded-full bg-gradient-to-r from-teal-300 to-red-300"
                    style={{
                      left: node.left,
                      top: node.top,
                      width: `${node.size}px`,
                      height: `${node.size}px`,
                    }}
                  />
                ))}
        
        
              </div>
  
        {/* Subtle grid lines */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="5" />
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
            <Hero />
            <Projects />
            <About />
            <Skills />
            <Experience />
            <Contact />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;