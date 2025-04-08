import React from 'react'
import AboutImg from '../assets/about-img.jpg'
import Title from '../components/title'
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const About = () => {
  const [expandedSection, setExpandedSection] = useState(null);

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
            <Title title="Hello! I'm" highlight="XiaoHong" subtitle='Get to know me better' isCenter={false} />

            <div className="leading-7 flex flex-col gap-6 mt-6 max-w-prose">
              <p>Currently a penultimate Data Science Student at Ngee Ann Polytechnic.</p>

              <div className="flex flex-col gap-4">
                {/* Academic Section */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('academic')}
                    className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="font-medium">Academic Achievements</span>
                    {expandedSection === 'academic' ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                  
                  {expandedSection === 'academic' && (
                    <div className="p-4 bg-white dark:bg-gray-900">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Dean's List 2022-2023</li>
                        <li>Data Science Competition Winner</li>
                        <li>Relevant Coursework: Machine Learning, Statistics, Data Visualization</li>
                      </ul>
                    </div>
                  )}
                </div>

                {/* Non-Academic Section */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleSection('nonAcademic')}
                    className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <span className="font-medium">Non-Academic Activities</span>
                    {expandedSection === 'nonAcademic' ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>
                  
                  {expandedSection === 'nonAcademic' && (
                    <div className="p-4 bg-white dark:bg-gray-900">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>President of Data Science Club</li>
                        <li>Volunteer at Tech for Good Initiative</li>
                        <li>Hackathon Participant (3x)</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;