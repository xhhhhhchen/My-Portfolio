import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const greetings = ['你好！', 'Hello！', 'Hola!', 'Bonjour!', 'こんにちは!'];
  const [currentGreeting, setCurrentGreeting] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const navigate = useNavigate();

  // Typewriter Effect
  useEffect(() => {
    let timeoutId;
    
    if (isTyping) {
      // Typing out the current greeting
      if (currentGreeting.length < greetings[greetingIndex].length) {
        timeoutId = setTimeout(() => {
          setCurrentGreeting(greetings[greetingIndex].substring(0, currentGreeting.length + 1));
        }, 50); // Typing speed
      } else {
        // Finished typing, wait then start erasing
        timeoutId = setTimeout(() => {
          setIsTyping(false);
        }, 1000); // Pause after typing
      }
    } else {
      // Erasing the current greeting
      if (currentGreeting.length > 0) {
        timeoutId = setTimeout(() => {
          setCurrentGreeting(currentGreeting.substring(0, currentGreeting.length - 1));
        }, 30); // Erasing speed (faster than typing)
      } else {
        // Finished erasing, move to next greeting
        setGreetingIndex((prev) => (prev + 1) % greetings.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentGreeting, isTyping, greetingIndex, greetings]);

  useEffect(() => {
    // Set a timer to navigate after all greetings are shown
    const totalTime = (3000); // Approximate total time for all greetings
    const timer = setTimeout(() => {
      navigate('/main');
    }, totalTime);

    return () => clearTimeout(timer);
  }, [navigate, greetings.length]);

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.h1
        key={greetingIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="text-4xl font-bold"
      >
        {currentGreeting}
        <span className="animate-blink">|</span>

      </motion.h1>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center">

      </div>
    </div>
  );
};

export default Landing;