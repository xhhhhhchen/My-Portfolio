import React from 'react'
import Title from '../components/title'
import {skills} from "../utils/constant"

// import { OrbitingCircles } from "../components/orbiting circles.jsx";
// import { File, Settings, Search } from "lucide-react";

const Skills = () => {
  return (
    <section id = 'skills' className = 'pt-32'>
        <div className = "container">
            < Title title = 'my' highlight = "Skills" subtitle = " Here are some of the technologies I've worked with recently." />


            <div className = 'grid grid-cols-2 md:grid-cols-4 gap-4'>
                {skills.map(skill => (
                    <div key = {skill.id} className = "flex items-center gap-2 flex-col">
                        <img className = 'size-12 hover:-translate-y-2 transition-transform duration-500 ease-in-out md:size-16' src={skill.icon} alt={skill.name} />
                        <span className='font-bold'>
                            {skill.name}
                        </span>

                    </div>

                ))}
            </div>

          

        </div>

        
   
    </section>
  )
}

export default Skills