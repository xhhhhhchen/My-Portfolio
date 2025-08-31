import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Title = ({title, highlight, subtitle, isCenter = true}) => {
  const { isDark } = useTheme()

  return (
    <div className={`${isCenter ? 'text-center' : 'text-left'} mb-6`}>
      <h2 className={`capitalize text-2xl font-bold mb-2 md:text-3xl lg:text-4xl ${isDark ? 'text-white' : 'text-gray-800'}`}>
          {title} {' '} 
          <span className="bg-gradient-to-r from-teal-300 to-violet-400 bg-clip-text text-transparent">
            {highlight}
          </span>
      </h2>

      <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
          {subtitle}
      </p>
    </div>
  )
}

export default Title