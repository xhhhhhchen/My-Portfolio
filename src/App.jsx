import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './sections/hero';
import Projects from './sections/projects';
import About from './sections/about';
import Skills from './sections/skills';
import Contact from './sections/contact';
import Footer from './components/footer';
import Involvements from './sections/involvement';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './sections/landing';

import { ThemeProvider, useTheme } from './context/ThemeContext';

// Background component that uses the theme context
// Background component to reuse across routes
const DataScienceBackground = () => {
  const { isDark } = useTheme();
  
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
  const graphNodes = Array.from({ length: 20 }).map((_, i) => ({
    size: Math.random() * 6 + 4,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    duration: 25,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Background color based on theme */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gray-900' : 'bg-orange-50'}`}></div>

      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mathematical symbols */}
        {backgroundElements.map((el, i) => (
          <motion.div
            key={`math-${i}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isDark ? 0.3 : 0.1, y: 0 }}
            transition={{ delay: el.delay, duration: 1 }}
            className="absolute"
            style={{
              left: el.left,
              top: el.top,
              fontSize: `${el.size}px`,
              color: isDark ? '#f5f5f5' : '#4b5563', // Light in dark mode, gray-600 in light mode
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
              opacity: isDark ? [0.3, 0.9, 0.5] : [0.1, 0.4, 0.2],
              y: [0, -50],
              x: [0, (Math.random() - 0.5) * 50],
            }}
            transition={{
              delay: node.delay,
              duration: node.duration,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className="absolute rounded-full"
            style={{
              left: node.left,
              top: node.top,
              width: `${node.size}px`,
              height: `${node.size}px`,
              background: isDark 
                ? 'linear-gradient(to right, #5eead4, #fca5a5)' // teal-300 to red-300 for dark
                : 'linear-gradient(to right, #0d9488, #dc2626)', // teal-600 to red-600 for light
            }}
          />
        ))}
      </div>

      {/* Subtle grid lines */}
      <div className="absolute inset-0" style={{ opacity: isDark ? 0.05 : 0.03 }}>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path 
                d="M 40 0 L 0 0 0 40" 
                fill="none" 
                stroke={isDark ? '#f5f5f5' : '#4b5563'} 
                strokeWidth="5" 
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};
const MainApp = () => {
  return (
    <div className="relative min-h-screen">
      <DataScienceBackground />
      <Header />
      <Hero />
      <Projects />
      <About />
      <Involvements />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/main" element={<MainApp />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;