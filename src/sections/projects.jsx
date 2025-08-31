import React from 'react';
import Title from '../components/title';
import { projects } from '../utils/constant';
import { Eye, Github, PresentationIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const { isDark } = useTheme();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="pt-32" >
      <div className="container">
        <Title
          title="my"
          highlight="projects"
          subtitle="Here are some of the projects I've worked on"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid space-y-10 md:space-y-10 md:grid-cols-2 md:gap-6 2xl:grid-cols-3"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: {
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="h-full">
                <motion.div
                  initial={{ scale: 0.95 }}
                  whileHover={{ scale: 1 }}
                  className="h-full flex flex-col"
                >
                  <motion.img
                    className="rounded-tr-3xl rounded-tl-2xl w-full h-60 object-cover"
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <motion.div 
                    className={`rounded-br-2xl rounded-bl-2xl px-4 py-6 flex flex-col ${isDark ? 'bg-gray-800' : 'bg-white'}`}
                    whileHover={{ 
                      backgroundColor: isDark ? "rgba(30, 41, 59, 0.95)" : "rgba(255, 255, 255, 0.95)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                      {project.title}
                    </h3>
                    <p className={`line-clamp-3 mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>

                    <motion.div 
                      className="mb-8 flex flex-wrap gap-2"
                      layout
                    >
                      {project.stack.map(tech => (
                        <motion.span 
                          key={tech} 
                          className={`px-2 py-1 rounded-full text-sm ${isDark ? 'bg-blue-700 text-white' : 'bg-blue-100 text-blue-800'}`}
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.div 
                      className="flex items-center gap-4"
                      layout
                    >
                      {project.liveUrl && (
                        <div className="relative group">
                          <motion.a
                            whileHover={{ 
                              scale: 1.05,
                              boxShadow: isDark ? "0 4px 20px rgba(13, 148, 136, 0.7)" : "0 4px 20px rgba(13, 148, 136, 1)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-3 flex items-center gap-2 capitalize font-semibold bg-gradient-to-r from-sky-300 to-sky-200 text-white rounded-full md:rounded-lg shadow-lg"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Eye size={20} className='text-black' />
                            <p className="font-semibold text-black hidden lg:block">Live</p>
                          </motion.a>

                          <span className={`absolute whitespace-nowrap bottom-full mb-1 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-800 text-white'}`}>
                            Live website
                          </span> 
                        </div>
                      )}

                      {project.presentationURL && (
                        <div className="relative group">
                          <motion.a
                            whileHover={{ 
                              scale: 1.05,
                              boxShadow: isDark ? "0 4px 20px rgba(254, 172, 215, 0.4)" : "0 4px 20px rgba(254, 172, 215, 0.7)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-3 flex items-center gap-2 capitalize font-semibold bg-gradient-to-r from-violet-200 to-violet-300 text-black rounded-full md:rounded-lg"
                            href={project.presentationURL}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <PresentationIcon size={20} />
                            <p className="font-semibold hidden lg:block">Presentation</p>
                          </motion.a>
                          
                          <span className={`absolute whitespace-nowrap bottom-full mb-1 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-800 text-white'}`}>
                            Presentation deck
                          </span> 
                        </div>
                      )}

                      {project.sourceUrl && (
                        <div className="relative group">
                          <motion.a
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: isDark ? "rgba(55, 65, 81, 0.9)" : "rgba(243, 244, 246, 0.9)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 md:px-6 py-3 flex items-center gap-2 capitalize font-semibold rounded-full ${isDark ? 'border border-gray-600 bg-gray-700 text-white' : 'border border-gray-300 bg-gray-100 text-gray-800'}`}
                            href={project.sourceUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={20} color={isDark ? 'white' : 'black'} />
                          </motion.a>
                          
                          <span className={`absolute whitespace-nowrap bottom-full mb-1 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-800 text-white'}`}>
                            Github repository
                          </span> 
                        </div>
                      )}

                      {project.kaggleURL && (
                        <div className="relative group">
                          <motion.a
                            whileHover={{ 
                              scale: 1.05,
                              backgroundColor: isDark ? "rgba(55, 65, 81, 0.9)" : "rgba(243, 244, 246, 0.9)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-4 md:px-6 py-3 flex items-center gap-2 capitalize font-semibold rounded-full ${isDark ? 'border border-gray-600 bg-gray-700 text-white' : 'border border-gray-300 bg-gray-100 text-gray-800'}`}
                            href={project.kaggleURL}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FontAwesomeIcon 
                              icon={faKaggle} 
                              className={isDark ? "text-white" : "text-gray-800"} 
                              size="lg"  
                            />
                          </motion.a>
                          
                          <span className={`absolute whitespace-nowrap bottom-full mb-1 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-800 text-white'}`}>
                            Kaggle notebook
                          </span> 
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex items-center gap-4 mb-6 justify-left">
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            More projects on:
          </p>

          <a 
            href="https://github.com/xhhhhhchen" 
            target="_blank" 
            rel="noreferrer" 
            className={`hover:-translate-y-2 transition-all duration-100 ease-in-out rounded-full ${isDark ? 'shadow-blue-500/30' : 'shadow-gray-400/50'} shadow-xl p-2 ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}
          >
            <Github className="size-5" color={isDark ? 'white' : 'black'} />
          </a>

          <a 
            href="https://www.kaggle.com/chenxiaoohongg" 
            target="_blank" 
            rel="noreferrer" 
            className={`hover:-translate-y-2 transition-all duration-100 ease-in-out rounded-full ${isDark ? 'shadow-blue-500/30' : 'shadow-gray-400/50'} shadow-xl p-2 ${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}
          >
            <FontAwesomeIcon 
              icon={faKaggle} 
              className={isDark ? "text-white" : "text-gray-800"} 
              size="md"  
            />
          </a>
        </div>

        <div className={`w-full md:w-full border-t-6 rounded-4xl ${isDark ? 'border-gray-700' : 'border-gray-300'} mx-auto my-6 md:my-9`}></div>
      </div>
    </section>
  );
};

export default Projects;