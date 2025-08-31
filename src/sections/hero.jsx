import React from 'react'
import HeroImg from '../assets/hero-image.png'
import {SquareArrowOutUpRight, Home, Settings, User, Mail, Plus } from 'lucide-react'
import {motion} from 'framer-motion'
import { Linkedin, Github} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle } from '@fortawesome/free-brands-svg-icons';
import PageTransition from '../components/pageTransition';
import { useTheme } from '../context/ThemeContext';


const Hero = () => {
  const { isDark } = useTheme();
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemFromLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  }

  const itemFromRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  }

  const itemFromBottom = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const itemFromTop = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  }

  // Background elements data
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
    duration: Math.random() * 10+5,
  }))
  

  return (
    <PageTransition>
    <motion.div 
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      exit={{opacity: 0}} 
      transition={{duration: 0.5}}
      className={`relative overflow-hidden min-h-screen `}
    >
        {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Mathematical symbols */}
        {backgroundElements.map((el, i) => (
          <motion.div
            key={`math-${i}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 0.3, y: 0 }}
            transition={{ delay: el.delay, duration: 1 }}
            className="absolute"
            style={{
              left: el.left,
              top: el.top,
              fontSize: `${el.size}px`,
              color: isDark ? 'rgb(245 245 245 / 0.6)' : 'rgb(23 23 23 / 0.8)',
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
              opacity: [0.3, 0.9, 0],
              y: [0, -50],
              x: [0, (Math.random() - 0.5) * 50],
            }}
            transition={{
              delay: node.delay,
              duration: node.duration,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            className={`absolute rounded-full ${isDark 
              ? 'bg-gradient-to-r from-teal-300 to-red-300' 
              : 'bg-gradient-to-r from-teal-600 to-red-500'}`}
            style={{
              left: node.left,
              top: node.top,
              width: `${node.size}px`,
              height: `${node.size}px`,
            }}
          />
        ))}
      </div>

      <section id='home' className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-6 h-full flex items-center justify-center">
          <motion.div 
            className="w-full max-w-4xl mx-auto py-12 md:py-24"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Image - Smaller on mobile */}
            <motion.div className='mt-10 mb-6 md:mb-8' 
            variants={scaleUp}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            >
              <img 
                className='size-32 md:size-32 lg:size-40 rounded-full mx-auto bg-gradient-to-r from-teal-300 to-red-300 object-cover border-4 border-white shadow-lg' 
                src={HeroImg} 
                alt="Profile"
              />
            </motion.div>

            <div className='flex items-center justify-center gap-4 mt-8 mb-4'>
                <a href = "https://www.linkedin.com/in/xhhhhhhh/" target = "_blank" rel="noreferrer" 
                  className={`hover:-translate-y-2 transition-all duration-300 ease-in-out p-2 rounded-full ${
                    isDark ? 'hover:bg-neutral-800' : 'hover:bg-gray-200'
                  }`}>
                  <Linkedin className = {`size-5 ${isDark ? 'text-white' : 'text-gray-800'}`}/>
                </a>
            
                <a href = "https://github.com/xhhhhhchen/" target = "_blank" rel="noreferrer" 
                  className={`hover:-translate-y-2 transition-all duration-300 ease-in-out p-2 rounded-full ${
                    isDark ? 'hover:bg-neutral-800' : 'hover:bg-gray-200'
                  }`}>
                  <Github className = {`size-5 ${isDark ? 'text-white' : 'text-gray-800'}`}/>
                </a>

                <a href="https://www.kaggle.com/chenxiaoohongg" target="_blank" rel="noreferrer" 
                  className={`hover:-translate-y-2 transition-all duration-300 ease-in-out p-2 rounded-full ${
                    isDark ? 'hover:bg-neutral-800' : 'hover:bg-gray-200'
                  }`}>
                  <FontAwesomeIcon 
                    icon={faKaggle} 
                    className={isDark ? "text-white" : "text-gray-800"} 
                    size="md"  
                  />
                </a>
            </div>

            {/* Text Content */}
            <div className="text-center">
              {/* Main Headline - Responsive text sizing */}
              <motion.h1 
                className={`text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight md:leading-[1.2] mb-2 md:mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                variants={itemFromLeft}
              >
                Turning data into {' '} 
                <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
    isDark 
      ? 'from-teal-300 to-red-300' 
      : 'from-teal-600 to-purple-600'
  }`}>
    Insights
  </span>
              </motion.h1>

              <motion.h2 
                className={`text-l sm:text-xl font-bold my-2 md:my-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                variants={itemFromTop}
              >
                &
              </motion.h2>

              <motion.h1 
                className={`text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight md:leading-[1.2] mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
                variants={itemFromRight}
              >
               <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
    isDark 
      ? 'from-teal-300 to-red-300' 
      : 'from-teal-600 to-purple-600'
  }`}>
    Insights
  </span>{' '} 
                into {' '}
                <span className={`px-2 rounded-lg ${
                  isDark ? 'bg-sky-900 text-white' : 'bg-sky-200 text-sky-900'
                }`}>
                  Actions
                </span>
              </motion.h1>

              {/* Divider - Responsive margin */}
              <motion.div 
                className={`w-1/3 md:w-1/4 border-t-2 mx-auto my-6 md:my-7 ${
                  isDark ? 'border-neutral-700' : 'border-gray-300'
                }`} 
                variants={itemFromBottom}
              />

              {/* Tags - Stack on small screens */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:mb-4 flex-shrink-0 max-w-full">
                <motion.div 
                  variants={itemFromLeft}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* First Tag - Data Science Major */}
                  <span className={`px-3 py-1 text-xs rounded-lg inline-block truncate ${
                    isDark 
                      ? 'bg-indigo-900 text-white' 
                      : 'bg-purple-100 text-indigo-800'
                  }`}>
                    Data Science Major
                  </span>
                </motion.div>
                
                <motion.div 
                  variants={itemFromRight}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Second Tag - User Experience Minor */}              
                  <span className={`px-3 py-1 text-xs rounded-lg inline-block truncate ${
                    isDark 
                      ? 'bg-blue-900 text-white' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    User Experience Minor
                  </span>
                </motion.div>
              </div>

              {/* Description - Responsive text and padding */}
              <motion.p 
                className={`hidden md:block text-sm sm:text-base md:text-md px-4 sm:px-0 mb-8 md:mb-12 max-w-2xl mx-auto ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
                variants={itemFromBottom}
              >
                Focused on using data to derive practical, user-friendly solutions, especially to tackle sustainability challenges.
              </motion.p>

              {/* Buttons - Stack on mobile, flex on larger screens */}
              <motion.div 
                className='flex flex-col sm:flex-row mt-10 items-center justify-center gap-4 md:gap-8'
                variants={itemFromBottom}
              >
                <a 
                  className={`px-6 py-3 w-full sm:w-auto text-center capitalize font-semibold text-white rounded-md hover:scale-105 transition-transform duration-300 shadow-lg ${
                    isDark
                      ? 'bg-gradient-to-r from-teal-400 to-purple-500 hover:shadow-teal-300/20'
                      : 'bg-gradient-to-r from-teal-500 to-purple-500 hover:shadow-teal-400/30'
                  }`}
                  href='#projects'
                >
                  View My Work
                </a>

             <a 
  className="group relative px-6 py-3 w-full sm:w-auto text-center capitalize font-semibold rounded-md hover:scale-105 transition-transform duration-300 overflow-hidden"
  href='https://drive.google.com/file/d/1dmJgOdrmcsBq9maGzZNLMj4fUEA7wYG-/view?usp=sharing'
  target='_blank'
  rel='noopener noreferrer'
>
  {/* Animated gradient background */}
  <span className={`absolute inset-0 transition-all duration-700 group-hover:animate-pulse ${
    isDark 
      ? 'bg-gradient-to-r from-teal-300 to-red-300' 
      : 'bg-gradient-to-r from-teal-400 to-red-300'
  }`}></span>
  
  {/* Solid background that reveals the gradient on hover */}
  <span className={`absolute inset-0.5 rounded-md transition-all duration-300 group-hover:opacity-0 ${
    isDark ? 'bg-slate-800' : 'bg-orange-50'
  }`}></span>
  
  {/* Text content */}
  <span className={`relative flex items-center justify-center ${
    isDark ? 'text-white' : 'text-gray-900'
  }`}>
    <span className='font-semibold mr-2'>Resume</span> 
    <SquareArrowOutUpRight size={16} className="inline transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
  </span>
</a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
    </PageTransition>
  );
};

export default Hero;