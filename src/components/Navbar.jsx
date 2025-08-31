// Navbar.js (updated with theme toggle)
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const navigation = [
    { title: "home", url: '#home' },
    { title: "projects", url: '#projects' },
    { title: "about", url: '#about' },
    { title: "skills", url: '#skills' },
    { title: "contact", url: '#contact' },
];

const Navbar = ({ isClicked, toggleNavClick }) => {
    const [activeLink, setActiveLink] = useState('home');
    const { isDark, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const sections = document.querySelectorAll('section[id]');

            sections.forEach(section => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && 
                        scrollPosition <= sectionTop + sectionHeight) {
                        setActiveLink(section.id);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* mobile nav */}
            <nav 
                className={`${isClicked ? 'translate-x-0' : '-translate-x-[190.25rem]'} 
                fixed left-0 top-0 h-screen w-full flex items-center justify-start transition-all duration-500 lg:hidden`}
            >
                <div className={`h-full w-[60%] ${isDark ? 'bg-gray-900/60' : 'bg-orange-100/60'} pl-4 pt-20 backdrop-blur-md backdrop-filter`}>
                    <ul className="mb-8">
                        {navigation.map((item) => (
                            <li 
                                key={item.title} 
                                className={`mb-4 text-lg font-medium capitalize`}
                            >
                                <a 
                                    className={`${activeLink === item.title ? 'text-emerald-200' : isDark ? 'text-white' : 'text-gray-900'} hover:text-blue-300 dark:hover:text-red-400 transition-colors duration-100 ease-in`}
                                    href={item.url}
                                    onClick={() => toggleNavClick()}
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    
                    {/* Theme Toggle for Mobile */}
                    <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-opacity-20 hover:rotate-12"
                    aria-label="Toggle theme"
                    style={{
                        backgroundColor: isDark ? 'rgba(225, 205, 109, 0.1)' : 'rgba(173, 112, 6, 0.1)'
                    }}
                >
                    {isDark ? (
                        // Moon icon for dark mode with glow effect
                        <svg 
                            className="w-6 h-6 text-yellow-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.7)]" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                        >
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    ) : (
                        // Sun icon for light mode with glow and pulse effect
                        <svg 
                            className="w-6 h-6 text-amber-500 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.7)] animate-pulse" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                        >
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                    )}
                </button>       
                </div>
            </nav>

            {/* Desktop nav */}
            <nav className='hidden md:flex items-center gap-10'>
                <ul className='flex gap-10 capitalize'>
                    {navigation.map((item) => (
                        <li key={item.title} className='inline-block'>
                            <a 
                            className={`relative font-medium after:absolute after:bottom-[-0.2rem] after:left-0 after:h-[3px] after:w-[20px] after:rounded-xl after:transition-all after:duration-300 after:ease-in hover:after:bg-teal-200 dark:hover:after:bg-teal-600 hover:after:w-full
                                ${activeLink === item.title ? 
                                'relative after:absolute after:bottom-[-0.2rem] after:left-0 after:h-[3px] after:w-full after:rounded-xl ' +
                                (isDark 
                                    ? 'text-red-200 after:bg-teal-300' 
                                    : 'text-red-400 after:bg-teal-600'
                                ) : 
                                (isDark ? 'text-white' : 'text-gray-900')
                                } 
                                transition-colors duration-100 ease-in
                                ${isDark ? 'hover:text-amber-100 ' : 'hover:text-orange-300 '}`}
                                 href={item.url}
                            >
                            {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
                
                {/* Theme Toggle for Desktop */}
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-opacity-20 hover:rotate-12"
                    aria-label="Toggle theme"
                    style={{
                        backgroundColor: isDark ? 'rgba(225, 205, 109, 0.1)' : 'rgba(180, 117, 7, 0.1)'
                    }}
                >
                    {isDark ? (
                        // Moon icon for dark mode with glow effect
                        <svg 
                            className="w-6 h-6 text-yellow-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.7)]" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                        >
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    ) : (
                        // Sun icon for light mode with glow and pulse effect
                        <svg 
                            className="w-6 h-6 text-yellow-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(245,158,11,0.7)] animate-pulse" 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                        >
                            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 01-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                        </svg>
                    )}
                </button>       
            </nav>
        </>
    );
}

export default Navbar;