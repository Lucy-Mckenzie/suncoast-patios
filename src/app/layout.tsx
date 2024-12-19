import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ClientThemeWrapper from "./context/ClientThemeWrapper";
import ThemeProvider from "./context/ThemeContext";
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
