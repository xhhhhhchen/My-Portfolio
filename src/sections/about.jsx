import React from 'react'
import AboutImg from '../assets/about-img.jpg'
import Title from '../components/title'

const About = () => {
  return (<section id = 'about' className='pt-32'>

    <div className = "container">
        <div className = 'md:grid md:grid-cols-2 md:gap-8 items-center'>
            <div className='mb-8 md:mb-0'>
                <img className="object-cover rounded-2xl" src={AboutImg} alt= "About Img" />
            </div>

            <div>
                <Title title = 'about' highlight ="me" subtitle ='Get to know me better' isCenter={false}/>

                <p className = 'leading-7 flex flex-col gap-4 mt-6 max-w-prose overflow-hidden break-words '>
                    faafafafafaaadffadfhjfhajfhajfhfdafajfahajfdafjahjfajffafjajdfajfhadjfhajf ife fef effqfqkef afajfafafda fa af adf af afaf adf afa dfdf asdf ad ad af afaf a ffaafafafafaaadffadfhjfhajfhajfhfdafajfahajfdafjahjfajffafjajdfajfhadjfhajf ife fef effqfqkef afajfafafda fa af adf af afaf adf afa dfdf asdf ad ad af afaf a ffaafafafafaaadffadfhjfhajfhajfhfdafajfahajfdafjahjfajffafjajdfajfhadjfhajf ife fef effqfqkef afajfafafda fa af adf af afaf adf afa dfdf asdf ad ad af afaf a f
                </p>
            </div>
        </div>
    </div>
  </section>
 
  )
}

export default About