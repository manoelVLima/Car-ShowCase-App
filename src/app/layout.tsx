import type { Metadata } from 'next'
import './globals.css'
import { Footer, NavigationBar } from '@/components'

export const metadata: Metadata = {
  title: 'Car Showcase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
