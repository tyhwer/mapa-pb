import './globals.css'
import { Overpass } from 'next/font/google'

const over = Overpass({ subsets: ['latin'] })

export const metadata = {
  title: 'Mapa orográfico de Pedro Bernardo',
  description: 'Una toponimia singular',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={over.className}>{children}</body>
    </html>
  )
}
