import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const EducationSection = () => {
  const [expandedSchool, setExpandedSchool] = useState(null);
  const { isDark } = useTheme();

  const toggleSchool = (school) => {
    setExpandedSchool(expandedSchool === school ? null : school);
  };

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  // Inner content animation
  const innerContentVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2,
        delay: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: {
        duration: 0.15
      }
    }
  };

  // Intersection Observer hooks for each section
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [ngeeAnnRef, ngeeAnnInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [opssRef, opssInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div 
      ref={sectionRef}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`p-1 border-3 rounded-2xl mt-8 ${isDark ? 'border-gray-700' : 'border-gray-300'}`}
    >
      <motion.h3 
        variants={itemVariants} 
        className={`ml-2 text-2xl font-bold mt-3 mb-1 ${isDark ? 'text-white' : 'text-gray-800'}`}
      >
        EDUCATION
      </motion.h3>
      
      <div className="px-6 py-6 relative overflow-hidden">
        {/* Vertical line */}
        <div className={`absolute left-[31px] top-2 h-full w-0.5 ${isDark ? 'bg-gray-600' : 'bg-gray-400'}`}></div>

        {/* Ngee Ann Polytechnic */}
        <motion.div 
          ref={ngeeAnnRef}
          initial="hidden"
          animate={ngeeAnnInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="mb-8 relative pl-8"
        >
          <div className={`absolute border-3 left-0 top-2 h-4 w-4 rounded-full ${isDark ? 'bg-gray-800 border-white' : 'bg-white border-gray-600'}`}></div>
          
          <div className="flex justify-between items-start mb-1">
            <h4 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Ngee Ann Polytechnic
            </h4>
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>2023 - 2026</span>
          </div>
          <p className={isDark ? 'text-sky-300 mb-2' : 'text-sky-600 mb-2'}>
            Diploma in Data Science, UX minor
          </p>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => toggleSchool('ngeeAnn')}
            className={`w-full flex justify-between items-center p-2 mt-7 rounded-lg transition-colors ${
              isDark 
                ? 'border border-gray-700 hover:bg-gray-700' 
                : 'border border-gray-300 hover:bg-orange-100'
            }`}
          >
            <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              View Details
            </span>
            {expandedSchool === 'ngeeAnn' ? (
              <ChevronUp className={`h-5 w-5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
            ) : (
              <ChevronDown className={`h-5 w-5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
            )}
          </motion.button>
          
          <AnimatePresence>
            {expandedSchool === 'ngeeAnn' && (
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="overflow-hidden"
              >
                <motion.div
                  variants={innerContentVariants}
                  className={`mt-4 p-4 rounded-lg`}
                >
                  <div className="mt-2">
                    <p className={`font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Related coursework:
                    </p>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-1">
                      <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className={`w-1 h-1 mr-2 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                        Data Discovery and Visualization
                      </li>
                      <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className={`w-1 h-1 mr-2 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                        Data Exploration and Analysis
                      </li>
                      <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className={`w-1 h-1 mr-2 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                        Cloud Architecture and Technologies
                      </li>
                      <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className={`w-1 h-1 mr-2 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                        Database Management
                      </li>
                      <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className={`w-1 h-1 mr-2 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                        Data Wrangling and Machine Learning
                      </li>
                      <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className={`w-1 h-1 mr-2 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                        Intelligent Enterprise Systems
                      </li>
                    </ul>
                  </div>

                  <div className="mt-6">
                    <p className={`font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Co-Curricular Activities:
                    </p>
                    <ul>
                      <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className={`w-1 h-1 mr-2 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                        Environmental Rangers Club (Executive Committee member)
                      </li>
                      <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className={`w-1 h-1 mr-2 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                        Artificial Intelligence Student Interest Group (Sub Committee member)
                      </li>
                      <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className={`w-1 h-1 mr-2 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                        ICT Society (Member)
                      </li>
                      <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className={`w-1 h-1 mr-2 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                        Astronomy Club (Member)
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Orchid Park Secondary */}
        <motion.div 
          ref={opssRef}
          initial="hidden"
          animate={opssInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="relative pl-8"
        >
          <div className={`absolute border-3 left-0 top-2 h-4 w-4 rounded-full ${isDark ? 'bg-gray-800 border-white' : 'bg-white border-gray-600'}`}></div>
          
          <div className="flex justify-between items-start mb-1">
            <h4 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>
              Orchid Park Secondary
            </h4>
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>2019-2022</span>
          </div>
          <p className={isDark ? 'text-sky-300 mb-2' : 'text-sky-600 mb-2'}>
            Cambridge 'O' Certificate
          </p>
      
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => toggleSchool('opss')}
            className={`w-full flex justify-between items-center mt-7 p-2 rounded-lg transition-colors ${
              isDark 
                ? 'border border-gray-700 hover:bg-gray-700' 
                : 'border border-gray-300 hover:bg-orange-100'
            }`}
          >
            <span className={`font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              View Details
            </span>
            {expandedSchool === 'opss' ? (
              <ChevronUp className={`h-5 w-5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
            ) : (
              <ChevronDown className={`h-5 w-5 ${isDark ? 'text-gray-300' : 'text-gray-700'}`} />
            )}
          </motion.button>
          
          <AnimatePresence>
            {expandedSchool === 'opss' && (
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="overflow-hidden"
              >
                <motion.div
                  variants={innerContentVariants}
                  className={`mt-4 p-4 rounded-lg`}
                >
                  <p className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                    L1R4 nett: 7 | L1R5 nett: 8
                  </p>
                
                  <div className="mt-6">
                    <p className={`font-medium mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Co-Curricular Activities:
                    </p>
                    <ul>
                      <li className={`flex items-center ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        <span className={`w-1 h-1 mr-2 rounded-full ${isDark ? 'bg-gray-500' : 'bg-gray-400'}`}></span>
                        Concert Band (Section Leader)
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="mt-5"></div>
    </motion.div>
  );
};

export default EducationSection;