import React from 'react';
import Title from '../components/title';
import { projects } from '../utils/constant';
import { Eye, Github,Mail,Linkedin, PresentationIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle } from '@fortawesome/free-brands-svg-icons';


const Projects = () => {
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
    <section id="projects" className="pt-32">
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
                    className="bg-gray-900 rounded-br-2xl rounded-bl-2xl px-4 py-6  flex flex-col"
                    whileHover={{ 
                      backgroundColor: "rgba(17, 24, 39, 0.8)",
                      transition: { duration: 0.3 },
                    }}
                  >
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="line-clamp-3 mb-6">{project.description}</p>

                    <motion.div 
                      className="mb-8 flex flex-wrap gap-2"
                      layout
                    >
                      {project.stack.map(tech => (
                        <motion.span 
                          key={tech} 
                          className="px-2 py-1 bg-blue-900 text-white rounded-full text-sm"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.div 
                      className="flex items-center gap-4 "
                      layout
                    >
                      {project.liveUrl && (
                        <motion.a
                          whileHover={{ 
                            scale: 1.05,
                            boxShadow: "0 4px 20px rgba(13, 148, 136, 1)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="  px-4 py-3 flex items-center gap-2 capitalize font-semibold bg-gradient-to-r from-sky-300 to-sky-200 text-white rounded-full md:rounded-lg shadow-lg"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Eye size={20} className='text-black' />
                          <p className="font-semibold text-black hidden lg:block">Live</p>
                        </motion.a>
                      )}

                      
                      {project.presentationURL && (
                        <motion.a
                          whileHover={{ 
                            scale: 1.05,
                             boxShadow: "0 4px 20px rgba(254, 172, 215, 0.4)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          className=" px-4 py-3 flex items-center gap-2 capitalize font-semibold bg-gradient-to-r from-violet-200 to-violet-300 text-black rounded-full md:rounded-lg"
                          href={project.presentationURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <PresentationIcon size={20} />
                          <p className="font-semibold hidden lg:block">Presentation</p>

                  
                        </motion.a>
                      )}

                      {project.sourceUrl && (
                        <motion.a
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "rgba(31, 41, 55, 0.8)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="border border-neutral-600 px-4 md:px-6 py-3 flex items-center gap-2 capitalize font-semibold bg-neutral-600 hover:bg-gray-900 duration-200 ease-in text-white rounded-full"
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={20} />
                      
                        </motion.a>
                      )}

                      {project.kaggleURL && (
                        <motion.a
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "rgba(31, 41, 55, 0.8)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="border border-neutral-600 px-4 md:px-6 py-3 flex items-center gap-2 capitalize font-semibold bg-neutral-600 hover:bg-gray-900 duration-200 ease-in text-white rounded-full"
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FontAwesomeIcon icon={faKaggle} className="text-white py-0.4" size="lg"  />
                      
                        </motion.a>
                      )}


                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
              
            </motion.div>
          ))}
        </motion.div>


        <div className = "flex  items-center gap-4 mb-6 justify-left ">

          <p className="text-sm text-gray-400">More projects on: </p>

          <a href = "https://github.com/xhhhhhchen" target = "_blank" rel="noreferrer" className='hover:-translate-y-2  transition-all duration=100 ease-in-out rounded-full  shadow-xl shadow-blue-200/100'>
              <Github className = "size-5"/>
          </a>
        

          <a href="https://www.kaggle.com/chenxiaoohongg" target="_blank" rel="noreferrer" className="hover:-translate-y-2 transition-all duration-100 ease-in-out  rounded-full shadow-xl shadow-blue-200/90">
              <FontAwesomeIcon icon={faKaggle} className="text-white" size="md"  />
          </a>

        
        </div>

        <div className="w-full md:w-full border-t-6 rounded-4xl border-gray-800 mx-auto my-6 md:my-9"></div>
      </div>
    </section>
  );
};

export default Projects;