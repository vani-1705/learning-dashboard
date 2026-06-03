/* Covers every page with loads fonts and sets page title */ 
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next-Gen Learning Dashboard',
  description: 'Your personal learning dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body> {children} </body>
    </html>
  )
}
