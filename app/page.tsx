'use client'
import React from 'react'
import Link from 'next/link'
import Clock from '../components/Clock'
import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black relative">
      <Clock />
      <div className="absolute bottom-8 right-8 space-x-4">
        <Link href="/stopwatch">
          <button className="bg-transparent border-2 border-transparent hover:border-emerald-500 text-white font-bold py-2 px-4 rounded">
            Stopwatch
          </button>
        </Link>
        <Link href="/timer">
          <button className="bg-transparent border-2 border-transparent hover:border-emerald-500 text-white font-bold py-2 px-4 rounded">
            Timer
          </button>
        </Link>
      </div>
    </div>
  )
}