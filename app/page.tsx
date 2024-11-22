'use client'
import React from 'react'
import Link from 'next/link'
import Clock from '../components/Clock'
import './globals.css'
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black relative p-4">
      <Clock />
      <div className="fixed bottom-8 right-8 space-x-4 flex flex-wrap justify-end">
        <Link href="/timer">
          <button className="bg-transparent border-2 border-transparent hover:border-emerald-500 text-white font-bold py-2 px-4 rounded mb-2 sm:mb-0">
            Timer
          </button>
        </Link>
        <Link href="/countdown">
          <button className="bg-transparent border-2 border-transparent hover:border-emerald-500 text-white font-bold py-2 px-4 rounded">
            Countdown
          </button>
        </Link>
      </div>
      <Analytics />
    </div>
  )
}

