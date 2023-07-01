import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'StreamFighters 2',
  description: 'El evento del año en Colombia, streamers y famosos boxeando en el Movistar Arena en Bogotá Colombia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
