import React from 'react';
import HeroImg from '../assets/hero-image.png';
import { SquareArrowOutUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants (unchanged)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemFromLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const itemFromRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  const itemFromBottom = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const itemFromTop = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  // Background elements (unchanged)
  const backgroundElements = [ /* ... */ ];
  const graphNodes = [ /* ... */ ];

  return (
    <motion.div 
      initial={{opacity: 0}} 
      animate={{opacity: 1}} 
      exit={{opacity: 0}} 
      transition={{duration: 0.5}}
      className="relative overflow-hidden"
    >
      {/* Background elements (unchanged) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* ... */}
      </div>

      <section id='home' className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <motion.div 
            className="w-full max-w-4xl mx-auto py-12 md:py-24"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Image - Smaller on mobile */}
            <motion.div className='mb-6 md:mb-8' variants={scaleUp}>
              <img 
                className='size-32 md:size-48 lg:size-56 rounded-full mx-auto bg-gradient-to-r from-teal-300 to-red-300 object-cover' 
                src={HeroImg} 
                alt="Profile"
              />
            </motion.div>

            {/* Text Content */}
            <div className="text-center">
              {/* Main Headline - Responsive text sizing */}
              <motion.h1 
                className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight md:leading-[1.2] mb-2 md:mb-4'
                variants={itemFromLeft}
              >
                Turning data into {' '} 
                <span className="bg-gradient-to-r from-teal-300 to-red-300 bg-clip-text text-transparent">
                  Insights
                </span> 
              </motion.h1>

              <motion.h2 
                className='text-xl sm:text-2xl font-extrabold my-2 md:my-4'
                variants={itemFromTop}
              >
                &
              </motion.h2>

              <motion.h1 
                className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight md:leading-[1.2] mb-4 md:mb-6'
                variants={itemFromRight}
              >
                <span className="bg-gradient-to-r from-teal-300 to-red-300 bg-clip-text text-transparent">
                  insights
                </span> {' '} 
                into {' '}
                <span className="bg-sky-900 px-2 rounded-lg">Actions</span>
              </motion.h1>

              {/* Divider - Responsive margin */}
              <motion.div 
                className="w-1/3 md:w-1/4 border-t-2 border-white mx-auto my-6 md:my-9" 
                variants={itemFromBottom}
              />

              {/* Tags - Stack on small screens */}
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-2 md:gap-4 mb-4 md:mb-6"
                variants={itemFromLeft}
              >
                <span className="bg-indigo-900 px-3 py-1 text-sm md:text-base rounded-lg inline-block">
                  Data Science Major
                </span>
                <span className="bg-blue-900 px-3 py-1 text-sm md:text-base rounded-lg inline-block">
                  User Experience Minor
                </span>
              </motion.div>

              {/* Description - Responsive text and padding */}
              <motion.p 
                className='text-sm sm:text-base md:text-lg px-4 sm:px-0 mb-8 md:mb-12 max-w-2xl mx-auto'
                variants={itemFromRight}
              >
                Focused on using data to derive practical, user-friendly solutions, especially to tackle sustainability challenges.
              </motion.p>

              {/* Buttons - Stack on mobile, flex on larger screens */}
              <motion.div 
                className='flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8'
                variants={itemFromBottom}
              >
                <a 
                  className='px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto text-center capitalize font-semibold bg-gradient-to-r from-teal-600 to-violet-400 text-white rounded-md hover:scale-105 transition-transform duration-200'
                  href='#projects'
                >
                  View My Work
                </a>

                <a 
                  className='flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto text-center capitalize font-semibold bg-neutral-500 hover:bg-blue-300 duration-200 ease-in text-white rounded-md hover:scale-105 transition-transform duration-200'
                  href='https://drive.google.com/file/d/1oYgXmFmepd_nzleM7p-84FElz4m8trZk/view?usp=sharing'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span className='font-semibold mr-2'>Resume</span> 
                  <SquareArrowOutUpRight size={16} className="inline" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Hero;