import React from 'react'
import HeroImg from '../assets/hero-image.png'
import {SquareArrowOutUpRight, Home, Settings, User, Mail, Plus } from 'lucide-react'
import {motion} from 'framer-motion'
import { Linkedin, Github} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle } from '@fortawesome/free-brands-svg-icons';
import PageTransition from '../components/pageTransition';


const Hero = () => {
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
      className="relative overflow-hidden"
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

      {/* Your existing content */}


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
                className='size-32 md:size-32 lg:size-40 rounded-full mx-auto bg-gradient-to-r from-teal-300 to-red-300 object-cover' 
                src={HeroImg} 
                alt="Profile"
              />
              
            </motion.div>

            <div className=' flex items-center justify-center gap-4 mt-8'>
                <a href = "https://www.linkedin.com/in/alex-carter-7258/" target = "_blank" rel="noreferrer" className=' hover:-translate-y-2 transition-all duration=100 ease-in-out'>
                <Linkedin className = "size-5"/>
                </a>
            

                <a href = "https://www.linkedin.com/in/alex-carter-7258/" target = "_blank" rel="noreferrer" className='hover:-translate-y-2  transition-all duration=100 ease-in-out'>
                <Github className = "size-5"/>
                </a>

                <a href="https://www.kaggle.com/your-profile" target="_blank" rel="noreferrer" className="hover:-translate-y-2 transition-all duration-100 ease-in-out">
                <FontAwesomeIcon icon={faKaggle} className="text-white" size="md"  />
                </a>
            </div>

            

            {/* Text Content */}
            <div className="text-center">
              {/* Main Headline - Responsive text sizing */}
              <motion.h1 
                className='text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight md:leading-[1.2] mb-2 md:mb-3'
                variants={itemFromLeft}
              >
                Turning data into {' '} 
                <span className="bg-gradient-to-r from-teal-300 to-red-300 bg-clip-text text-transparent">
                  Insights
                </span> 
              </motion.h1>

              <motion.h2 
                className='text-l sm:text-xl font-bold my-2 md:my-4'
                variants={itemFromTop}
              >
                &
              </motion.h2>

              <motion.h1 
                className='text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight md:leading-[1.2] mb-3'
                variants={itemFromRight}
              >
                <span className="bg-gradient-to-r from-teal-300 to-red-300 bg-clip-text text-transparent">
                  Insights
                </span> {' '} 
                into {' '}
                <span className="bg-sky-900 px-2 rounded-lg">Actions</span>
              </motion.h1>

              {/* Divider - Responsive margin */}
              <motion.div 
                className="w-1/3 md:w-1/4 border-t-2 border-white mx-auto my-6 md:my-7" 
                variants={itemFromBottom}
              />

              {/* Tags - Stack on small screens */}
              <div className="flex flex-col flex-row items-center justify-center gap-2 md:mb-4 flex-shrink-0 max-w-full">
              <motion.div 
                variants={itemFromLeft}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* First Tag - Data Science Major */}
                  <span className="bg-indigo-900 px-3 py-1 text-xs rounded-lg inline-block truncate">
                    Data Science Major
                  </span>
           
                </motion.div>
                
                <motion.div 
                variants={itemFromLeft}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Second Tag - User Experience Minor */}              
                  <span className="bg-blue-900 px-3 py-1 text-xs rounded-lg inline-block truncate">
                    User Experience Minor
                  </span>
                
                </motion.div>
            </div>


               {/* Divider - Responsive margin */}
              


              {/* Description - Responsive text and padding */}
              <motion.p 
                className='hidden md:block text-sm sm:text-base md:text-md px-4 sm:px-0 mb-8 md:mb-12 max-w-2xl mx-auto '
                variants={itemFromRight}
              >
                Focused on using data to derive practical, user-friendly solutions, especially to tackle sustainability challenges.
              </motion.p>

              {/* Buttons - Stack on mobile, flex on larger screens */}
              <motion.div 
                className='flex mt-10 items-center justify-center gap-4 md:gap-8'
                variants={itemFromBottom}
              >
                <a 
                  className='px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto text-center capitalize font-semibold bg-gradient-to-r from-teal-600 to-violet-400 text-white rounded-md hover:scale-105 transition-transform duration-200 shadow-xl  hover:shadow-teal-300/20'
                  href='#projects'
                >
                  View My Work
                </a>

                <a 
                  className='flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto text-center capitalize font-semibold bg-blue-300 hover:bg-blue-300 duration-200 ease-in text-white rounded-md hover:scale-105  shadow-xl   hover:shadow-teal-300/30 transition-transform duration-200'
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
    </PageTransition>
  );
};

export default Hero;