import React from 'react';
import Title from '../components/title';
import { projects } from '../utils/constant';
import { Eye, Github, PresentationIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
          className="grid space-y-10 md:space-y-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3"
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
                      transition: { duration: 0.3 }
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
                          className="px-2 py-1 bg-indigo-900 text-white rounded-full text-sm"
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
                            background: "linear-gradient(to right, #0d9488, #7c3aed)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="border border-neutral-600 px-6 py-3 flex items-center gap-2 capitalize font-semibold bg-gradient-to-r from-blue-600 to-violet-400 text-white rounded-md"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Eye size={20} />
                          <p className="font-semibold">Live</p>
                        </motion.a>
                      )}

                      {project.sourceUrl && (
                        <motion.a
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "rgba(31, 41, 55, 0.8)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="border border-neutral-600 px-6 py-3 flex items-center gap-2 capitalize font-semibold bg-neutral-600 hover:bg-gray-900 duration-200 ease-in text-white rounded-md"
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github size={20} />
                          <p className="font-semibold">Sources</p>
                        </motion.a>
                      )}

                      {project.presentationURL && (
                        <motion.a
                          whileHover={{ 
                            scale: 1.05,
                            background: "linear-gradient(to right, #0f766e, #6d28d9)"
                          }}
                          whileTap={{ scale: 0.95 }}
                          className="border border-neutral-600 px-6 py-3 flex items-center gap-2 capitalize font-semibold bg-gradient-to-r from-teal-700 to-violet-500 text-white rounded-md"
                          href={project.presentationURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <PresentationIcon size={20} />
                          <p className="font-semibold">Presentation</p>

                  
                        </motion.a>
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>


        <div className="w-1/3 md:w-1/4 border-t-2 border-white mx-auto my-6 md:my-9"></div>
      </div>
    </section>
  );
};

export default Projects;