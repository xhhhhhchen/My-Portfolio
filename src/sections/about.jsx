import React from 'react'
import AboutImg from '../assets/about-img.jpg'
import Title from '../components/title'
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import EducationSection from './education';
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const { isDark } = useTheme();

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <section id='about' className='pt-32'>
      <div className="container">
        <div className='md:grid md:grid-cols-2 md:gap-8 items-center'>
          <div className='mb-8 md:mb-0'>
            <img className="object-cover rounded-2xl" src={AboutImg} alt="About Img" />
          </div>

          <div>
            <div className='text-left mb-6'>
              <h2 className={`capitalize text-2xl font-bold mb-2 md:text-3xl lg:text-4xl ${isDark ? 'text-white' : 'text-gray-800'}`}>
                Hello! I'm {' '} 
                 <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
              isDark 
                ? 'from-teal-300 to-red-300' 
                : 'from-teal-400 to-red-400'
            }`}>
              Xiaohong
             </span>
                <span className={`text-xl font-mono ${isDark ? 'text-gray-300' : 'text-gray-600'}`}> | 陈筱虹 </span> 
              </h2>

              <div className="flex items-center gap-2 mt-5 flex-shrink-0 flex-wrap">
                <motion.div  
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className={`px-3 py-1 text-xs rounded-lg inline-block truncate ${isDark ? 'bg-indigo-800 text-white' : 'bg-indigo-100 text-indigo-800'}`}>
                    NP Environmental Impact Scholar
                  </span>
                </motion.div>

                <motion.div  
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className={`px-3 py-1 text-xs rounded-lg inline-block truncate ${isDark ? 'bg-teal-800 text-white' : 'bg-teal-100 text-teal-800'}`}>
                    MBTI : ESTJ
                  </span>
                </motion.div>

                <motion.div  
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className={`px-3 py-1 text-xs rounded-lg inline-block truncate ${isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-800'}`}>
                    Based in Singapore
                  </span>
                </motion.div>
              </div>

              <div>
                <EducationSection/>
              </div>
            </div>

            <div className="leading-7 flex flex-col gap-6 mt-6 max-w-prose">
              {/* Add your about content here with theme-aware styling
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                Your about content goes here. Make sure to use conditional styling like above.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// // might not be needed anymore

// <div className="flex flex-col gap-4">
// {/* Academic Section */}
// <div className="border dark:border-gray-700 rounded-lg overflow-hidden">
//   <button
//     onClick={() => toggleSection('academic')}
//     className="w-full flex justify-between items-center p-4  hover:bg-gray-700 transition-colors"
//   >
//     <span className="font-medium">Academic </span>
//     {expandedSection === 'academic' ? (
//       <ChevronUp className="h-5 w-5" />
//     ) : (
//       <ChevronDown className="h-5 w-5" />
//     )}
//   </button>
  
//   {expandedSection === 'academic' && (
//     <div className="p-4 bg-gray-900">
    
//       <EducationSection/>

//     </div>
//   )}
// </div>

// {/* Non-Academic Section */}
// <div className="border border-gray-700 rounded-lg overflow-hidden">
//   <button
//     onClick={() => toggleSection('nonAcademic')}
//     className="w-full flex justify-between items-center p-4  hover:bg-gray-700 transition-colors"
//   >
//     <span className="font-medium">Non-Academic Activities</span>
//     {expandedSection === 'nonAcademic' ? (
//       <ChevronUp className="h-5 w-5" />
//     ) : (
//       <ChevronDown className="h-5 w-5" />
//     )}
//   </button>
  
//   {expandedSection === 'nonAcademic' && (
//     <div className="p-4 bg-white dark:bg-gray-900">
//       <ul className="list-disc pl-5 space-y-2">
//         <li>President of Data Science Club</li>
//         <li>Volunteer at Tech for Good Initiative</li>
//         <li>Hackathon Participant (3x)</li>
//       </ul>
//     </div>
//   )}
// </div>

// {/* Experience Section */}
// <div className="border border-gray-700 rounded-lg overflow-hidden">
//   <button
//     onClick={() => toggleSection('experience')}
//     className="w-full flex justify-between items-center p-4  hover:bg-gray-700 transition-colors"
//   >
//     <span className="font-medium">Experience</span>
//     {expandedSection === 'experience' ? (
//       <ChevronUp className="h-5 w-5" />
//     ) : (
//       <ChevronDown className="h-5 w-5" />
//     )}
//   </button>
  
//   {expandedSection === 'experience' && (
//     <div className="p-4 bg-white dark:bg-gray-900">
//       <ul className="list-disc pl-5 space-y-2">
//         <li>President of Data Science Club</li>
//         <li>Volunteer at Tech for Good Initiative</li>
//         <li>Hackathon Participant (3x)</li>
//       </ul>
//     </div>
//   )}
// </div>

// </div>