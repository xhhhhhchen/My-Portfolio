import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import PageTransition from '../components/pageTransition'; // Adjust path as needed

const Landing = () => {
  const greetings = ['你好！', 'Hello！', 'Bonjour!', 'こんにちは!'];
  const [currentGreeting, setCurrentGreeting] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();

  // Typewriter Effect
  useEffect(() => {
    let timeoutId;
    
    if (isTyping) {
      if (currentGreeting.length < greetings[greetingIndex].length) {
        timeoutId = setTimeout(() => {
          setCurrentGreeting(greetings[greetingIndex].substring(0, currentGreeting.length + 1));
        }, 50);
      } else {
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 900);
      }
    } else {
      if (currentGreeting.length > 0) {
        timeoutId = setTimeout(() => {
          setCurrentGreeting(currentGreeting.substring(0, currentGreeting.length - 1));
        }, 30);
      } else {
        setGreetingIndex((prev) => (prev + 1) % greetings.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentGreeting, isTyping, greetingIndex, greetings]);

  useEffect(() => {
    const totalTime = 5000; // Adjust this based on your greetings timing
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => navigate('/main'), 500); // Wait for exit animation
    }, totalTime);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <PageTransition>
      <div className="flex justify-center items-center h-screen">
        <motion.h1
          key={greetingIndex}
          initial={{ opacity: 0 }}
          animate={isExiting ? { opacity: 0, scale: 0.9 } : { opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="text-4xl font-bold"
        >
          {currentGreeting}
          <span className="animate-blink">|</span>
        </motion.h1>
      </div>
    </PageTransition>
  );
};

export default Landing;