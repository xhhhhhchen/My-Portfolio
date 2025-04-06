import React from 'react'
import Header from './components/Header'
import Hero from './sections/hero';
import Projects from './sections/projects';
import About from './sections/about';
import Skills from './sections/skills'
import Contact from './sections/contact';
import Footer from './components/footer';

const App = ()=> {
  return (

    <>  
   {/* header section */}
    <Header/>

   {/* hero section*/}
   <Hero/>

   {/* Projects section */}
   <Projects/>

   {/* about section */}
   <About/>

   {/*  skills secction*/}
   <Skills/>

    {/* contact section */}
    <Contact/>

    {/* footer section */}
    <Footer/>

    </>
  )
};

export default App;