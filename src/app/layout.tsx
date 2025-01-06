import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import ClientThemeWrapper from './context/ClientThemeWrapper';
import ThemeProvider from './context/ThemeContext';
import './globals.css';
import Script from 'next/script';
import { Manrope } from 'next/font/google'
import Head from 'next/head';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={manrope.className}>
        <Head>
        <title>Suncoast Patios</title>
        <meta name="description" content="Transform your outdoor spaces with Suncoast Patios Ltd, serving Hawke's Bay and Gisborne. Specializing in high-quality patio roofs, louvre roofs, and outdoor blinds, we provide Stratco and Ziptrak solutions for year-round comfort and style. Enhance your outdoor living today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    <body>
    <Script
          src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_KEY}`}
          strategy='beforeInteractive'
        />
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
  );
}
