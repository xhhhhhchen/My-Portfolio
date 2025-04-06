import React from 'react'

const footer = () => {
  return (
    <footer className='pt-32 pb-6 text-center'>
        <div className='container'>
    
            <h2 className='text-3xl font-bold text-white-900 mb-4'>Let's Connect!</h2>
            
            <p className='text-lg text-white-900'>© {new Date().getFullYear()} Xiaohong Chen. All rights reserved.</p>
            <p className='text-sm text-white-900'>Design & Developed by Xiaohong Chen</p>
        </div>
    </footer>
  )
}

export default footer