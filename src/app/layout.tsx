import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import ClientThemeWrapper from './context/ClientThemeWrapper'
import ThemeProvider from './context/ThemeContext'
import './globals.css'
import { Manrope } from 'next/font/google'
import { Metadata } from 'next'
import React from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Suncoast Patios',
    template: '%s | Suncoast Patios',
  },
  description:
  'Transform your outdoor spaces with Suncoast Patios Ltd, serving Hawkes Bay and Gisborne. Specialising in high-quality patio roofs, louvre roofs, and outdoor blinds, we provide Stratco and Ziptrak outdoor solutions for year-round comfort and style. Enhance your outdoor living today!'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={manrope.className}>
      <head>
        <meta name="google-site-verification" content="7n7fDJ_obqpCtqblox4csgEm0LJmtHraP_em5gnw8ic" />
        {/* Preconnect & DNS Prefetch for Google Tag Manager */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body>
        <ThemeProvider>
          <ClientThemeWrapper>
            <Navbar />
            <main>
              {children}
              <GoogleAnalytics gaId="G-YGMY099QWP" />
            </main>
            <Footer />
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
