'use client'

import React, { useState, useEffect } from 'react'
import '../app/globals.css'

interface FlipCardProps {
  digit: string
  label?: string
}

const FlipCard: React.FC<FlipCardProps> = ({ digit, label }) => {
  const [flip, setFlip] = useState(false)

  useEffect(() => {
    setFlip(true)
    const timer = setTimeout(() => setFlip(false), 500)
    return () => clearTimeout(timer)
  }, [digit])

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-36 md:w-36 md:h-52 lg:w-40 lg:h-72 xl:w-52 xl:h-96 mx-1">
        <div className={`flip-card ${flip ? 'flipped' : ''}`}>
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <span className={`text-9xl lg:text-11xl xl:text-13xl font-NimbusSansTBold ${flip ? 'text-transparent ' : 'text-white'}`}>{digit}</span>
            </div>
            <div className="flip-card-back">
              <span className="text-9xl xl:text-13xl font-bold font-NimbusSansTBold text-white">{digit}</span>
            </div>
          </div>
        </div>
      </div>
      {label && <span className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">{label}</span>}
    </div>
  )
}

export default FlipCard

