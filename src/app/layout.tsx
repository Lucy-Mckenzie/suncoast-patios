import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import ClientThemeWrapper from './context/ClientThemeWrapper';
import ThemeProvider from './context/ThemeContext';
import './globals.css';

import { Manrope } from 'next/font/google'

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
  );
}
