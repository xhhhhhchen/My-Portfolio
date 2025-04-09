import React from 'react'

const title = ({title, highlight, subtitle, isCenter = true}) => {
  return (
    <div className = {`${isCenter ? 'text-center' :'text-left'} mb-6`}>
    <h2 className = 'capitalize text-2xl  font-bold mb-2 md:text-3xl lg:text-4xl'>
        {title} {' '} <span className = "bg-gradient-to-r from-teal-300 to-violet-400  bg-clip-text text-transparent"> {highlight} </span> {' '} 
    </h2>

    <p className = "text-gray-400 ">
        {subtitle}
    </p>
</div>
  )
}

export default title