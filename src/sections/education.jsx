import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const EducationSection = () => {
  const [expandedSchool, setExpandedSchool] = useState(null);

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
      className="p-1 border-3 border-gray-700 rounded-2xl mt-8"
    >
      <motion.h3 variants={itemVariants} className="ml-2 text-2xl font-bold mt-3 mb-1 text-white">
        EDUCATION
      </motion.h3>
      
      <div className="px-6 py-6 relative overflow-hidden">
        {/* Vertical line */}
        <div className="absolute left-[31px] top-2 h-full w-0.5 bg-white"></div>

        {/* Ngee Ann Polytechnic */}
        <motion.div 
          ref={ngeeAnnRef}
          initial="hidden"
          animate={ngeeAnnInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="mb-8 relative pl-8"
        >
          <div className="absolute border-3 left-0 top-2 h-4 w-4 rounded-full bg-gray-900"></div>
          
          <div className="flex justify-between items-start mb-1">
            <h4 className="text-xl font-semibold text-white">Ngee Ann Polytechnic</h4>
            <span className="text-gray-400">2023 - Present</span>
          </div>
          <p className="text-sky-300 mb-2">Diploma in Data Science, UX minor</p>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => toggleSchool('ngeeAnn')}
            className="border border-gray-700 w-full flex justify-between items-center p-2 mt-7 hover:bg-gray-700 transition-colors rounded-lg"
          >
            <span className="font-medium text-gray-300">View Details</span>
            {expandedSchool === 'ngeeAnn' ? (
              <ChevronUp className="h-5 w-5 text-gray-300" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-300" />
            )}
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: expandedSchool === 'ngeeAnn' ? 1 : 0,
              height: expandedSchool === 'ngeeAnn' ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {expandedSchool === 'ngeeAnn' && (
              <div className="mt-4 p-4 rounded-lg">
                {/* <p className="text-gray-300 mb-2">CGPA: 3.9 / 4.0</p> */}
                
                <div className="mt-4">
                  <p className="text-gray-400 font-medium mb-2">Related coursework:</p>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-gray-300">
                    <li className="flex items-center">
                      <span className="w-1 h-1 mr-2 bg-gray-500 rounded-full"></span>
                      Data Discovery and Visualization
                    </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 mr-2 bg-gray-500 rounded-full"></span>
                    Data Exploration and Analysis
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 mr-2 bg-gray-500 rounded-full"></span>
                    Cloud Architecture and Technologies
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 mr-2 bg-gray-500 rounded-full"></span>
                    Database Management
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 mr-2 bg-gray-500 rounded-full"></span>
                    Data Wrangling and Machine Learning
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 mr-2 bg-gray-500 rounded-full"></span>
                    Intelligent Enterprise Systems
                  </li>
                  
                </ul>
              </div>

              <div className="mt-6">
                <p className="text-gray-400 font-medium mb-2">Co-Curricular Activities:</p>
                <ul className="text-gray-300">
                  <li className="flex items-center">
                    <span className="w-1 h-1 mr-2 bg-gray-500 rounded-full"></span>
                    Environmental Rangers Club (Executive Committee member)
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 mr-2 bg-gray-500 rounded-full"></span>
                    Artificial Intelligence Student Interest Group (Sub Committee member)
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 mr-2 bg-gray-500 rounded-full"></span>
                    ICT Society (Member)
                  </li>
                  <li className="flex items-center">
                    <span className="w-1 h-1 mr-2 bg-gray-500 rounded-full"></span>
                    Astronomy Club (Member)
                  </li>
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>

       {/* Orchid Park Secondary */}
       <motion.div 
          ref={opssRef}
          initial="hidden"
          animate={opssInView ? "visible" : "hidden"}
          variants={itemVariants}
          className="relative pl-8"
        >
          <div className="absolute border-3 left-0 top-2 h-4 w-4 rounded-full bg-gray-900"></div>
          
          <div className="flex justify-between items-start mb-1">
            <h4 className="text-xl font-semibold text-white">Orchid Park Secondary</h4>
            <span className="text-gray-400">2019-2022</span>
          </div>
          <p className="text-sky-300 mb-2">Cambridge 'O' Certificate</p>
      
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => toggleSchool('opss')}
            className="border border-gray-700 w-full flex justify-between items-center mt-7 p-2 hover:bg-gray-700 transition-colors rounded-lg"
          >
            <span className="font-medium text-gray-300">View Details</span>
            {expandedSchool === 'opss' ? (
              <ChevronUp className="h-5 w-5 text-gray-300" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-300" />
            )}
          </motion.button>
          
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: expandedSchool === 'opss' ? 1 : 0,
              height: expandedSchool === 'opss' ? 'auto' : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {expandedSchool === 'opss' && (
              <div className="mt-4 p-4 rounded-lg">
                <p className="text-gray-300">L1R4 nett: 7 | L1R5 nett: 8</p>
               
                <div className="mt-6">
                  <p className="text-gray-400 font-medium mb-2">Co-Curricular Activities:</p>
                  <ul className="text-gray-300">
                    <li className="flex items-center">
                      <span className="w-1 h-1 mr-2 bg-gray-500 rounded-full"></span>
                      Concert Band (Section Leader)
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-5"></div>
    </motion.div>
  );
};

export default EducationSection;