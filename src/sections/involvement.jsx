import React, { useRef, useState } from 'react';
import Title from '../components/title';
import { involvements } from "../utils/constant";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2.5,
    partialVisibilityGutter: 60
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2.5,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 700 },
    items: 2,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 700, min: 0 },
    items: 1,
    partialVisibilityGutter: 20
  }
};


const imageCarouselResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1
  }
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

const ImageCarouselDot = ({ onClick, ...rest }) => {
  const { active } = rest;
  return (
    <button
      className={`mx-1 h-2 w-2 mb-1.5  rounded-full transition-all duration-300 ${
        active ? 'bg-white w-4' : 'bg-gray-300'
      }`}
      onClick={() => onClick()}
    />
  );
};

const Involvements = () => {
  const carouselRef = useRef(null);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  return (
    <div className="mt-32 container scroll-mt-32" id="involvements">
      <Title title='my' highlight="Involvements" subtitle="Some of the activites I participate in during my free time!" />

      <div className="w-full m-auto relative group">
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="px-2 py-4"
          partialVisible={true}
          customLeftArrow={
            <button 
              className="absolute hover:bg-blue-900/60 left--4 z-10 hidden md:block bg-gray-900 bg-opacity-70 cursor-pointer text-white p-3 rounded-full hover:bg-opacity-100 transition-all duration-300 opacity-0 group-hover:opacity-100"
              onClick={() => carouselRef.current.previous()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          }
          customRightArrow={
            <button 
              className="absolute hover:bg-blue-900/60 right-0 z-10 hidden md:block bg-gray-900 cursor-pointer bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-100 transition-all duration-300 opacity-0 group-hover:opacity-100"
              onClick={() => carouselRef.current.next()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          }
          customDot={<CustomDot />}
          showDots={true}
          dotListClass="mt-40"
        >
          {involvements.map((involvement, index) => (
            <div 
              key={index} 
              className="bg-gray-800 h-[525px] text-white rounded-2xl transition-all duration-500 transform hover:scale-103 "
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="rounded-t-2xl h-90 overflow-hidden relative">
                <Carousel
                  responsive={imageCarouselResponsive}
                  infinite={true}
                  autoPlay={true}
                  keyBoardControl={true}
                  customTransition="transform 1000ms ease-in-out"
                  transitionDuration={900}
                  arrows={false}
                  className="image-carousel"
                  renderButtonGroupOutside={true}
                  customLeftArrow={
                    <button className="absolute left-2 z-50  pointer-events-aut bg-gray-400/30 bg-opacity-30 hover:bg-gray-400 text-white p-2 cursor-pointer rounded-full hover:bg-opacity-100 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  }
                  customRightArrow={
                    <button className="absolute right-2 z-50  pointer-events-auto bg-gray-400/30 bg-opacity-30 hover:bg-gray-400 text-white p-2 cursor-pointer rounded-full hover:bg-opacity-100 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  }
                  
                  customDot= {<ImageCarouselDot />}
                  showDots={true}
                  dotListClass="bottom-2"
                >
                  {involvement.images.map((imgObj, imgIndex) => (
                    <div 
                      key={imgIndex} 
                      className="h-90 w-full relative"
                      onMouseEnter={() => setHoveredImageIndex(imgIndex)}
                      onMouseLeave={() => setHoveredImageIndex(null)}
                    >
                      <img 
                        src={imgObj.image} 
                        alt={`${involvement.title} ${imgIndex + 1}`} 
                        className="h-full w-full object-cover rounded-t-2xl"
                      />
                      {/* Image description overlay */}
                      <div className={`absolute  pointer-events-none  bottom-0 left-0 right-0 bg-gray-900/40 bg-opacity-70 text-white pt-3 pb-4 transition-opacity duration-300`}>
                        <p className="px-1.5 text-sm ">{imgObj.description}</p>
                      </div>

                    </div>
                  ))}
                </Carousel>
              </div>

              <div className="p-6 flex flex-col gap-4 items-center flex-1 h-[calc(550px-15rem)]">
                <h3 className="text-xl font-extrabold text-center">{involvement.title}</h3>
                <p className="text-sm text-gray-300 text-center line-clamp-4">
                  {involvement.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Involvements;