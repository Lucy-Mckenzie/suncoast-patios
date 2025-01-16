import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import ClientThemeWrapper from './context/ClientThemeWrapper'
import ThemeProvider from './context/ThemeContext'
import './globals.css'
import { Manrope } from 'next/font/google'
import { Metadata } from 'next'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Suncoast Patios',
    template: '%s - Suncoast Patios',
  },
  description:
    "Transform your outdoor spaces with Suncoast Patios Ltd, serving Hawke's Bay and Gisborne. Specializing in high-quality patio roofs, louvre roofs, and outdoor blinds, we provide Stratco and Ziptrak solutions for year-round comfort and style. Enhance your outdoor living today!"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
  <html lang='en' className={manrope.className}>
    <body>
      <ThemeProvider>
        <ClientThemeWrapper>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </ClientThemeWrapper>
      </ThemeProvider>
    </body>
  </html>
  )
}
