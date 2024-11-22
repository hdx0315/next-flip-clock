// components/clock.tsx

'use client'

import React, { useState, useEffect } from 'react'
import FlipCard from './FlipCard'

const Clock: React.FC = () => {
  const [time, setTime] = useState<Date | null>(null)

  useEffect(() => {
    setTime(new Date())
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  if (!time) return null

  const formatTimeUnit = (unit: number) => unit.toString().padStart(2, '0')

  const hours = formatTimeUnit(time.getHours())
  const minutes = formatTimeUnit(time.getMinutes())
  const seconds = formatTimeUnit(time.getSeconds())

  return (
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



  )
}

export default Clock

