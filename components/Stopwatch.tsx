'use client'

import React, { useState, useEffect } from 'react'
import FlipCard from './FlipCard'
import Link from 'next/link'

const Stopwatch: React.FC = () => {
  const [time, setTime] = useState(35940)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning) {
      interval = setInterval(() => setTime(time => time + 1), 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const formatTimeUnit = (unit: number) => unit.toString().padStart(2, '0')

  const hours = formatTimeUnit(Math.floor(time / 3600))
  const minutes = formatTimeUnit(Math.floor((time % 3600) / 60))
  const seconds = formatTimeUnit(time % 60)

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center items-center bg-black p-8 rounded-xl">
        <FlipCard digit={hours[0]} label="" />
        <FlipCard digit={hours[1]} />
        <span className="text-4xl mx-2 text-white">:</span>
        <FlipCard digit={minutes[0]} label="" />
        <FlipCard digit={minutes[1]} />
        <span className="text-4xl mx-2 text-white">:</span>
        <FlipCard digit={seconds[0]} label="" />
        <FlipCard digit={seconds[1]} />
      </div>
      <div className="absolute bottom-8 right-8 space-x-4">
        <button
          className="bg-transparent border-2 border-transparent hover:border-green-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          className="bg-transparent border-2 border-transparent hover:border-red-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setIsRunning(false)
            setTime(0)
          }}
        >
          Reset
        </button>
        
      <Link href="/" className="mt-8">
        <button className="bg-transparent text-white font-bold py-2 px-4 rounded  border-2 border-transparent hover:border-sky-500 ">
          Back to Clock
        </button>
      </Link>
      </div>
    </div>
  )
}

export default Stopwatch

