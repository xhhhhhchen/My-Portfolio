import React, { useRef } from 'react';
import Title from '../components/title';
import { involvements } from "../utils/constant";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    partialVisibilityGutter: 60
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

export const CustomDot = ({ onClick, ...rest }) => {
  const { active } = rest;
  return (
    <button
      className={`mx-1 h-3 w-3 rounded-full transition-all duration-300 ${active ? 'bg-sky-200 w-6' : 'bg-gray-500'}`}
      onClick={() => onClick()}
    />
  );
};

const Involvements = () => {
  const carouselRef = useRef(null);

  return (
    <div className="mt-32 container scroll-mt-32" id="involvements">
      <Title title='my' highlight="Involvements" subtitle="" />

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
          removeArrowOnDeviceType={["mobile"]}
          itemClass="px-2 py-4"
          partialVisible={true}
          customLeftArrow={
            <button 
              className="absolute hover:bg-gray-600 left--4 z-10 hidden md:block bg-gray-900 bg-opacity-70 cursor-pointer text-white p-3 rounded-full hover:bg-opacity-100 transition-all duration-300 opacity-0 group-hover:opacity-100"
              onClick={() => carouselRef.current.previous()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          }
          customRightArrow={
            <button 
              className="absolute hover:bg-gray-600 right-0 z-10 hidden md:block bg-gray-900 cursor-pointer bg-opacity-70 text-white p-3 rounded-full hover:bg-opacity-100 transition-all duration-300 opacity-0 group-hover:opacity-100"
              onClick={() => carouselRef.current.next()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          }
          customDot={<CustomDot />}
          showDots={true}
          dotListClass="mt-8"
        >
          {involvements.map((involvement, index) => (
            <div 
              key={index} 
              className="bg-gray-800 h-[550px] text-white rounded-2xl transition-all duration-500 transform hover:scale-103 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="rounded-t-2xl h-60 overflow-hidden relative">
                <Carousel
                  responsive={imageCarouselResponsive}
                  infinite={true}
                  autoPlay={true}
                  keyBoardControl={true}
                  customTransition="transform 1000ms ease-in-out"
                  transitionDuration={900}
                  arrows={true}
                  className="image-carousel"
                  renderButtonGroupOutside={true}
                  customLeftArrow={
                    <button className="absolute  left-2 z-10 bg-gray-400/30 bg-opacity-30  hover:bg-gray-400 text-white p-2 cursor-pointer rounded-full hover:bg-opacity-100 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                  }
                  customRightArrow={
                    <button className="absolute right-2 z-10 bg-gray-400/30 bg-opacity-30 hover:bg-gray-400 text-white p-2 cursor-pointer rounded-full hover:bg-opacity-100 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  }
                  showDots={true}
                  dotListClass="bottom-2"
                >
                  {involvement.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="h-60 w-full">
                      <img 
                        src={img} 
                        alt={`${involvement.title} ${imgIndex + 1}`} 
                        className="h-full w-full object-cover rounded-t-2xl"
                      />
                    </div>
                  ))}
                </Carousel>
              </div>

              <div className="p-6 flex flex-col gap-4 items-center h-[calc(550px-15rem)]">
                <h3 className="text-xl font-extrabold text-center">{involvement.title}</h3>
                <p className="text-sm text-gray-300 text-center line-clamp-4">
                  {involvement.description}
                </p>
                <button className="mt-auto bg-gradient-to-r font-bold from-teal-300 to-red-200 text-gray-900 px-6 py-2 rounded-xl hover:scale-105 transition-all duration-300 ease-in-out  shadow-lg hover:shadow-teal-300/30">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Involvements;