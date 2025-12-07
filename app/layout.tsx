import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aniri | Gaze from Bali',
  description: 'Original artwork and commissions by Aniri. Sacred mandalas and contemporary art from Bali.',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        {children}
      </body>
    </html>
  )
}
