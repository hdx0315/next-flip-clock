import './globals.css'
import './flipcard.css'
import { Inter } from 'next/font/google'
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Flipping Clock',
  description: 'A flipping clock with stopwatch and timer functionality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body>
      {children}
      <Analytics />
    </body>
    </html>
  )
}

