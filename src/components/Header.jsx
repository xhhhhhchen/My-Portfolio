import React, { useEffect } from 'react'
import Navbar from './Navbar';
import {AlignLeft, X } from 'lucide-react';
import {useState} from 'react'; 

const Header = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [scrolling, setIsScrolling] = useState(false);

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

  return (<header className = {` ${scrolling 
  ? 'backdrop-blue-sm bg-gradient-to-r from neutral-900/50 via-neutral-900/50 to-gray-900/50 animate-in duration-500'
  : 'bg-transparent duration-500 animate-out'
  } fixed top-0 z-[500] w-full`}>  
  
    <div className = "container flex items-center justify-between py-4">
        {/* logo */}
        <div className = "z-10"> 
            <a className= 'font-bold text-white md:text-lg' href = "/"> XiaoHong {' '}
                <span className = "bg-gradient-to-r from-teal-300 to-red-300 bg-clip-text text-transparent"> 
             Chen 
                </span>   
            </a>
        </div>

        {/* nav */}
        <Navbar isClicked = {isClicked} to toggleNavClick ={toggleNavClick} />

        {/* menu buttons */}

        <button 
            onClick = {toggleNavClick} 
            className= "text-white cursor-pointer z-10 flex items-center md:hidden" >

            {isClicked ? <X size={28}/> :<AlignLeft size ={28}/> }

        </button>

    </div> 
    </header>

  );
  
}

export default Header