'use client'

import React from 'react'
import Link from 'next/link'
import Timer from '../../components/Timer'

export default function TimerPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <Timer />
    </div>
  )
}

