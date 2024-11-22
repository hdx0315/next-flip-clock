'use client'

import React from 'react'
import Link from 'next/link'
import Stopwatch from '../../components/Stopwatch'

export default function StopwatchPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <Stopwatch />
    </div>
  )
}

