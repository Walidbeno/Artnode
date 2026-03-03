import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Artnode | Design Studio',
  description: 'Design studio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
