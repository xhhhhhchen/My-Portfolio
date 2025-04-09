import { useEffect, useRef, useState } from 'react';

const EducationSection = () => {
  

  return (
    <div className="p-4" >
      <div className="border-2 border-gray-700 bg-gray-900 rounded-2xl px-6 py-8 relative overflow-hidden">
        {/* Animated line that grows with scroll */}
        <div 
          className="absolute left-0 top-0 h-full bg-teal-500 transition-all duration-300"
          style={{
            width: `10px`, // Adjust the multiplier for thickness
          }}
        ></div>

        <h3 className="text-2xl font-bold mb-6 text-white">EDUCATION</h3>
        
        {/* Ngee Ann Polytechnic */}
        <div className="mb-8 relative pl-8">
          <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-teal-500"></div>
          <div className="absolute left-[7px] top-2 h-full w-0.5 bg-gray-600"></div>
          
          <div className="flex justify-between items-start mb-1">
            <h4 className="text-xl font-semibold text-white">Ngee Ann Polytechnic</h4>
            <span className="text-gray-400">2023 - Present</span>
          </div>
          <p className="text-teal-400 mb-2">Diploma in Data Science, Minor in USER EXPERIENCE</p>
          <p className="text-gray-300 mb-2">C.G.P.A.: 3.9 / 4.0</p>
          
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
        </div>

        {/* Orchid Park Secondary */}
        <div className="relative pl-8">
          <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-teal-500"></div>
          
          <div className="flex justify-between items-start mb-1">
            <h4 className="text-xl font-semibold text-white">Orchid Park Secondary</h4>
            <span className="text-gray-400">2019-2022</span>
          </div>
          <p className="text-teal-400 mb-2">Cambridge 'O' Certificate</p>
          <p className="text-gray-300">L1R4 nett : 7 | L1R5 nett : 8</p>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;