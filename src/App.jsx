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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        
        <Route path="/main" element={
          <div className="relative min-h-screen">
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