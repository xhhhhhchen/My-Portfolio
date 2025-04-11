import React from 'react'
import Title from '../components/title'
import Form from '../components/form'
import { Phone ,Mail,Linkedin, Github} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle } from '@fortawesome/free-brands-svg-icons';




const contact = () => {
  return (
    <section id = 'contact'>
        <div className = 'container pt-32'>
            <Title title = 'contact' highlight ="me" subtitle ='Get in touch' isCenter={false}/>

            <div className='md:grid md:grid-cols-2 md:gap-16 items-center'>
                
            <Form/> 
      

                <div className='mb-16 mt-8'>

                
             </div>

                </div>

            </div>

        
    </section>
  )
}

export default contact