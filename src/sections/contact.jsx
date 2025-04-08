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
                    <div className='mn-2 flex flex-wrap items-left gap-2 mb-6 justify-start '>

                        <Phone className ="size-5"/>
                        <a href="tel: 0167923232" className='text-lg font-semibold text-white-900 hover:text-blue-600 transition-colors duration-3=100 ease-in'>
                        1234567890 </a>
                    </div>

                    <div className='mn-2 flex flex-wrap items-center gap-2 mb-6 justify-start '>

                        <Mail className ="size-5"/>
                        <a href="mailto: xhhhhh7258@gmail.com" className='text-lg font-semibold text-white-900 hover:text-blue-600 transition-colors duration-3=100 ease-in'>
                        xhhhhh7258@gmail.com </a>
                    </div>

                    <div className = "flex  items-center gap-4 mb-6 justify-start ">
                        <a href = "https://www.linkedin.com/in/alex-carter-7258/" target = "_blank" rel="noreferrer" className='hover:-translate-y-2 transition-all duration=100 ease-in-out'>
                            <Linkedin className = "size-6"/>
                            </a>
                        

                        <a href = "https://www.linkedin.com/in/alex-carter-7258/" target = "_blank" rel="noreferrer" className='hover:-translate-y-2  transition-all duration=100 ease-in-out'>
                            <Github className = "size-6"/>
                            </a>

                        <a href="https://www.kaggle.com/your-profile" target="_blank" rel="noreferrer" className="hover:-translate-y-2 transition-all duration-100 ease-in-out">
                            <FontAwesomeIcon icon={faKaggle} className="text-white" size="lg"  />
                            </a>


                            
                           
                            </div>

                    </div>

                </div>

            </div>

        
    </section>
  )
}

export default contact