import React, { useEffect } from 'react'
import Navbar from './Navbar';
import {AlignLeft, X } from 'lucide-react';
import {useState} from 'react'; 
import { useTheme } from '../context/ThemeContext';

const Header = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [scrolling, setIsScrolling] = useState(false);
    const { isDark } = useTheme();

    const toggleNavClick = () => {
        setIsClicked (!isClicked);
    }

    useEffect(()=> {
        const handleScroll=()=>{
            const scroll = window.scrollY;
            
            if (scroll>100){
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        }

        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[])

    return (
        <header className = {`${scrolling 
            ? (isDark 
                ? 'backdrop-blur-sm bg-neutral-900/20 shadow-md shadow-gray-900/30' 
                : 'backdrop-blur-sm bg-orange-100/50 shadow-md shadow-orange-100/50'
              )
            : 'bg-transparent'
          } fixed top-0 z-[500] w-full transition-all duration-500`}>  
  
            <div className = "container flex items-center justify-between py-4">
                {/* logo */}
                <div className = "flex gap-4 z-10"> 
                    <a className= {`font-bold md:text-lg ${isDark ? 'text-white' : 'text-gray-900'}`} href = "/"> 
                        XiaoHong{' '}
                        <span className = {isDark 
                            ? "bg-gradient-to-r from-teal-300 to-red-300 bg-clip-text text-transparent" 
                            : "bg-gradient-to-r from-teal-600 to-red-600 bg-clip-text text-transparent"
                        }> 
                            Chen 
                        </span>   
                    </a>
                </div>

                {/* nav */}
                <Navbar isClicked = {isClicked} toggleNavClick = {toggleNavClick} />

                {/* menu buttons */}
                <button 
                    onClick = {toggleNavClick} 
                    className= {`cursor-pointer z-10 flex items-center md:hidden ${isDark ? 'text-white' : 'text-gray-900'}`}
                >
                    {isClicked ? <X size={28}/> : <AlignLeft size={28}/>}
                </button>
            </div> 
        </header>
    );
}

export default Header