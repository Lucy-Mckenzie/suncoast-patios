import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-theme='light'>
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
