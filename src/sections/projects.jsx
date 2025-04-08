import React from 'react';
import Title from '../components/title';
import { projects } from '../utils/constant';
import { Eye, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="pt-32">
      <div className="container">
        <Title
          title="my"
          highlight="projects"
          subtitle="Here are some of the projects I've worked on"
        />

        <div className="grid space-y-10 md:space-y-10 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {projects.map(project => (
            <motion.div
              key={project.id}
              whileHover={{
                scale: 1.05,  // Scale the project card to 105% when hovered
                transition: {
                  duration: 0.3,  // Smooth transition
                  ease: "easeInOut",  // Use easeInOut for smooth pop effect
                },
              }}

              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [100, 0] }}  // Fade and slide-in animation
              transition={{ duration: 0.5 }}
            >


              <div>
                <img
                  className="rounded-tr-3xl rounded-tl-2xl"
                  src={project.image}
                  alt={project.title}
                />
                <div className="bg-gray-900 rounded-br-2xl rounded-bl-2xl px-4 py-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="line-clamp-3 mb-6">{project.description}</p>

                  <div className="mb-8 flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-gray-800 text-white rounded-full mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      className="px-6 py-3 flex items-center gap-2 capitalize font-semibold bg-gradient-to-r from-teal-600 to-violet-400 text-white rounded-md"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Eye size={20} />
                      <p className="font-semibold">Live</p>
                    </a>

                    <a
                      className="px-6 py-3 flex items-center gap-2 capitalize font-semibold bg-neutral-500 hover:bg-lime-600 duration-200 ease-in text-white rounded-md"
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                      <p className="font-semibold">Sources</p>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
