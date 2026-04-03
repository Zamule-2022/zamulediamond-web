import { Inter } from 'next/font/google'
import './globals.css'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zamule Diamond — Reparación de Llantas CNC Móvil | Mallorca',
  description: 'Servicio premium de reparación y pulido de llantas a domicilio en Mallorca. CNC móvil, resultados perfectos en 24h. Presupuesto gratis.',
  keywords: 'reparación llantas, CNC móvil, Mallorca, pulido llantas, Zamule Diamond, reparar llanta Mallorca',
  metadataBase: new URL('https://zamulediamond.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Zamule Diamond — Reparación de Llantas CNC Móvil',
    description: 'Reparación premium de llantas a domicilio en Mallorca. Sin desplazamientos. Resultados perfectos.',
    url: 'https://zamulediamond.com',
    siteName: 'Zamule Diamond',
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zamule Diamond — Llantas CNC Móvil · Mallorca',
    description: 'Reparación premium de llantas a domicilio en Mallorca.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <WhatsAppCTA />
      </body>
    </html>
  )
}
