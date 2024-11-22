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
    <div className="flex justify-center items-center bg-black p-8 rounded-xl">
      <FlipCard digit={hours[0]} />
      <FlipCard digit={hours[1]} />
      <span className="text-4xl mx-2 text-white">:</span>
      <FlipCard digit={minutes[0]} />
      <FlipCard digit={minutes[1]} />
      <span className="text-4xl mx-2 text-white">:</span>
      <FlipCard digit={seconds[0]} />
      <FlipCard digit={seconds[1]} />
    </div>
  )
}

export default Clock

