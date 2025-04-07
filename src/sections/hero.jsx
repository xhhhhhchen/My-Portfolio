import React from 'react'
import HeroImg from '../assets/hero-image.png'
import {SquareArrowOutUpRight, Home, Settings, User, Mail, Plus } from 'lucide-react'
import {motion} from 'framer-motion'


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
    duration: Math.random() * 10 + 10,
    }))
    

  return (
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

      <section id='home'>
        <div className='z-40'>
          <div className="container h-screen flex items-center justify-center text-center">
            <motion.div 
              className='max-w-[800] mx-auto'
              variants={container}
              initial="hidden"
              animate="show"
            >
              {/* image */}
              <motion.div className='mb-6' variants={scaleUp}>
                <img 
                  className='size-[200px] rounded-full mx-auto bg-gradient-to-r from-teal-300 to-red-300 object-cover' 
                  src={HeroImg} 
                  alt="hero image"
                />
              </motion.div>

              <div>
                {/* content */}
                <motion.h1 className='mb-2 text-3xl font-extrabold capitalize leading-[1.2] md:text-5xl' variants={itemFromLeft}>
                  Turning data into {' '} 
                  <span className="bg-gradient-to-r from-teal-300 to-red-300 bg-clip-text text-transparent">Insights</span> 
                </motion.h1>

                <motion.h2 className='text-2xl font-extrabold' variants={itemFromTop}>
                  &
                </motion.h2>

                <motion.h1 className='mb-2 text-3xl font-extrabold capitalize leading-[1.2] md:text-5xl' variants={itemFromRight}>
                  and {' '} 
                  <span className="bg-gradient-to-r from-teal-300 to-red-300 bg-clip-text text-transparent">insights</span> {' '} 
                  into {' '}
                  <span className="bg-sky-900 px-2 rounded-lg">Actions</span>
                </motion.h1>

                <motion.div 
                  className="w-1/4 border-t-2 border-fill border-white mx-auto my-9" 
                  variants={itemFromBottom}
                />

                <motion.p className='mt-9 mb-4 md:text-lg' variants={itemFromLeft}>
                  <span className="bg-indigo-900 px-2 text-xl rounded-lg">Data Science Major</span> {" "} {" "}
                  <span className="bg-blue-900 px-2 text-xl rounded-lg">User Experience Minor</span>
                </motion.p>

                <motion.p className='mt-4 mb-4 md:text-lg' variants={itemFromRight}>
                  Focused on using data to derive practical, user-friendly solutions, especially to tackle sustainability challenges.
                </motion.p>

                <motion.div 
                  className='mt-20 flex items-center justify-center gap-9'
                  variants={itemFromBottom}
                >
                  <a 
                    className='px-6 py-3 inline-block capitalize font-semibold bg-gradient-to-r from-teal-600 to-violet-400 text-white rounded-md hover:scale-105 transition-transform duration-200'
                    href='#projects'
                  >
                    view my work
                  </a>

                  <a 
                    className='inline-flex items-center px-6 py-3 capitalize font-semibold bg-neutral-500 hover:bg-blue-300 duration-200 ease-in text-white rounded-md hover:scale-105 transition-transform duration-200'
                    href='https://drive.google.com/file/d/1oYgXmFmepd_nzleM7p-84FElz4m8trZk/view?usp=sharing'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <p className='font-semibold mr-2'>resume</p> 
                    <SquareArrowOutUpRight size={20} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      

      </section>
    </motion.div>
  )
}

export default Hero