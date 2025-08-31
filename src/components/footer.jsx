import { Mail, Linkedin, Github } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKaggle } from '@fortawesome/free-brands-svg-icons';
import Title from '../components/title';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`pt-32 pb-6 text-center`}>
      <div className='container'>
        <Title title="Let's" highlight="Connect!" subtitle='' isCenter={true}/>

        <div className="flex items-center gap-4 mb-6 justify-center">
          <a 
            href="https://www.linkedin.com/in/xhhhhhhh/" 
            target="_blank" 
            rel="noreferrer" 
            className='hover:-translate-y-2 transition-all duration-100 ease-in-out'
          >
            <Linkedin className="size-6" color={isDark ? 'white' : 'black'} />
          </a>
          
          <a 
            href="https://github.com/xhhhhhchen" 
            target="_blank" 
            rel="noreferrer" 
            className='hover:-translate-y-2 transition-all duration-100 ease-in-out'
          >
            <Github className="size-6" color={isDark ? 'white' : 'black'} />
          </a>

          <a 
            href="https://www.kaggle.com/chenxiaoohongg" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:-translate-y-2 transition-all duration-100 ease-in-out"
          >
            <FontAwesomeIcon 
              icon={faKaggle} 
              className={isDark ? "text-white" : "text-gray-800"} 
              size="lg"  
            />
          </a>
        </div>

        <div className="flex-row flex inline-flex justify-center gap-2 duration-100 ease-in-out mb-4">
          <Mail size="20" color={isDark ? 'white' : 'gray'} />
          <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>
            Email : xhhhhh7258@gmail.com
          </span>
        </div>

        <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          © {new Date().getFullYear()} Xiaohong Chen. All rights reserved.
        </p>
        <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
          Design & Developed by Xiaohong Chen
        </p>
      </div>
    </footer>
  )
}

export default Footer;