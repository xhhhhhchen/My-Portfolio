import React, { useState } from 'react';
import Title from '../components/title';
import { programming, analytics, datascience } from "../utils/constant";
import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const carouselRef = React.createRef();
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const categories = [
    { title: "Programming Languages", skills: programming },
    { title: "Data Analytics and Visualisation", skills: analytics },
    { title: "Data Science & Machine Learning", skills: datascience }
  ];

  const handleHeaderClick = (index) => {
    setActiveCategory(index);
    carouselRef.current.goToSlide(index);
  };

  const handleBeforeChange = (nextSlide) => {
    setActiveCategory(nextSlide);
  };

 const CustomDot = ({ onClick, ...rest }) => {
   const { active } = rest;
   return (
     <button
       className={`mx-1 h-3 w-3 rounded-full transition-all duration-300 ${active ? 'bg-sky-200 w-6' : 'bg-gray-500'}`}
       onClick={() => onClick()}
     />
   );
 };


  const SkillCategory = ({ skills }) => (
    <div className="mb-16 px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill) => (
          <div 
            key={skill.id} 
            className="flex items-center gap-3 flex-col p-4 rounded-lg transition-all duration-300"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img 
                className="size-12 md:size-14" 
                src={skill.icon} 
                alt={skill.name} 
              />
            </motion.div>
            <span className="font-bold text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="pt-32">
      <div className="container">
        <Title 
          title="my" 
          highlight="Skills" 
          subtitle="Here are some of the technologies I've worked with recently." 
        />

        {/* Static Category Headers */}
        <div className="flex justify-center gap-4 md:gap-8 mb-8 flex-wrap">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleHeaderClick(index)}
              className={`text-lg md:text-sm font-bold transition-colors duration-300 px-2 py-1 rounded-md  ${
                activeCategory === index 
                  ? 'text-blue-200 underline underline-offset-10 decoration-2 decoration-gray-600 shadow-xl  shadow-teal-300/20 bg-none'
                  : 'text-gray-600  hover:text-white '
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite={false}
          beforeChange={handleBeforeChange}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="transform 700ms ease-in-out"
          transitionDuration={700}
          containerClass="carousel-container"
          itemClass="px-2 py-4"
          showDots={true}
          dotListClass="mt-8"
          customDot={<CustomDot />}
          arrows={true}
          renderButtonGroupOutside={true}
        >
          {categories.map((category, index) => (
            <SkillCategory 
              key={index}
              skills={category.skills}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Skills;