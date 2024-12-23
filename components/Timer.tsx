'use client'

import React, { useState, useEffect } from 'react'
import FlipCard from './FlipCard'
import Link from 'next/link'

const Timer: React.FC = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning && time > 0) {
      interval = setInterval(() => setTime(time => time - 1), 1000)
    } else if (time === 0) {
      setIsRunning(false)
    }
    return () => clearInterval(interval)
  }, [isRunning, time])

  const formatTimeUnit = (unit: number) => unit.toString().padStart(2, '0')

  const hours = formatTimeUnit(Math.floor(time / 3600))
  const minutes = formatTimeUnit(Math.floor((time % 3600) / 60))
  const seconds = formatTimeUnit(time % 60)

  return (
    <div className="flex flex-col items-center min-h-screen justify-center bg-black relative p-4">
  
      {/* Timer Display */}
      <div className="flex flex-col xl:flex-row">
        {/* Hours and Minutes Section */}
        <div className="flex flex-col md:flex-row justify-center items-center bg-black p-4 pb-0 sm:pb-0 md:pb-2 sm:p-6 md:p-8 xl:pr-0 xl:py-0 rounded-xl">
          {/* Hours */}
          <div className="flex mb-4 md:mb-0">
            <FlipCard digit={hours[0]} />
            <FlipCard digit={hours[1]} />
          </div>
          {/* Colon */}
          <span className="hidden md:block text-2xl md:text-4xl mx-2 text-white">:</span>
          {/* Minutes */}
          <div className="flex mb-4 md:mb-0">
            <FlipCard digit={minutes[0]} />
            <FlipCard digit={minutes[1]} />
          </div>
          {/* Colon */}
          <span className="hidden xl:block text-2xl md:text-4xl mx-2 text-white">:</span>
        </div>
  
        {/* Seconds Section */}
        <div className="flex flex-col md:flex-row justify-center items-center bg-black p-4 pt-0 sm:pt-0 md:pt-2 sm:p-6 md:p-8 xl:pl-0 xl:py-0 rounded-xl">
          <div className="flex">
            <FlipCard digit={seconds[0]} />
            <FlipCard digit={seconds[1]} />
          </div>
        </div>
      </div>
  
      {/* Timer Adjustment Buttons */}
      <div className="mt-8 space-x-0 flex flex-wrap justify-start sm:space-x-2">
        <button
          className="bg-transparent border-2 border-transparent hover:border-green-500 text-white font-bold py-2 px-4 rounded m-1"
          onClick={() => setTime((time) => time + 60)}
        >
          + 1 m
        </button>
        <button
          className="bg-transparent border-2 border-transparent hover:border-green-500 text-white font-bold py-2 px-4 rounded m-1"
          onClick={() => setTime((time) => time + 300)}
        >
          + 5 m
        </button>
        <button
          className="bg-transparent border-2 border-transparent hover:border-green-500 text-white font-bold py-2 px-4 rounded m-1"
          onClick={() => setTime((time) => time + 600)}
        >
          + 10 m
        </button>
        <button
          className="bg-transparent border-2 border-transparent hover:border-green-500 text-white font-bold py-2 px-4 rounded m-1"
          onClick={() => setTime((time) => time + 3600)}
        >
          + 1 hr
        </button>
      </div>
  
      {/* Action Buttons */}
      <div className="fixed bottom-6 right-8 space-x-4 flex flex-wrap justify-end">
        <button
          className="bg-transparent border-2 border-transparent hover:border-green-500 text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0"
          onClick={() => setIsRunning(!isRunning)}
          disabled={time === 0}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          className="bg-transparent border-2 border-transparent hover:border-red-500 text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0"
          onClick={() => {
            setIsRunning(false);
            setTime(0);
          }}
        >
          Reset
        </button>
        <Link href="/" className="mt-2 sm:mt-0">
          <button className="bg-transparent text-white font-bold py-2 px-4 rounded border-2 border-transparent hover:border-sky-500">
            Back to Clock
          </button>
        </Link>
      </div>
    </div>
  );
}  

export default Timer

