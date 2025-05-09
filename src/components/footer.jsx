import { Mail,Linkedin, Github} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle } from '@fortawesome/free-brands-svg-icons';

import Title from '../components/title'

const footer = () => {
  return (
    <footer className='pt-32 pb-6 text-center'>
        <div className='container'>
    
            
        <Title title = "Let's" highlight ="Connect!" subtitle ='' isCenter={true}/>

        
                       

        <div className = "flex  items-center gap-4 mb-6 justify-center ">
          <a href = "https://www.linkedin.com/in/xhhhhhhh/" target = "_blank" rel="noreferrer" className='hover:-translate-y-2 transition-all duration=100 ease-in-out'>
              <Linkedin className = "size-6"/>
          </a>
          

          <a href = "https://github.com/xhhhhhchen" target = "_blank" rel="noreferrer" className='hover:-translate-y-2  transition-all duration=100 ease-in-out'>
              <Github className = "size-6"/>
          </a>

          <a href="https://www.kaggle.com/chenxiaoohongg" target="_blank" rel="noreferrer" className="hover:-translate-y-2 transition-all duration-100 ease-in-out">
              <FontAwesomeIcon icon={faKaggle} className="text-white" size="lg"  />
          </a>

         
        </div>

        <div className="flex-row flex inline-flex justify-center gap-2 duration-100 ease-in-out text-gray-500">
              <Mail size="20"  />
             Email : xhhhhh7258@gmail.com
          </div>

            <p className='text-lg text-gray-700'>© {new Date().getFullYear()} Xiaohong Chen. All rights reserved.</p>
            <p className='text-sm text-gray-700'>Design & Developed by Xiaohong Chen</p>
        </div>
    </footer>
  )
}

export default footer