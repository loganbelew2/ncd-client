import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/Nav/Nav-Bar";
import { Footer } from "./components/Footer/Footer";
import Analytics from "./components/Analytics/Analytics";
import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}
export const metadata: Metadata = {
  title: "Nashville Car Detail - Premium Mobile Auto Detailing",
  description:
    "Nashville Car Detail offers top-notch mobile auto detailing services in the Nashville area. Book your appointment today!",
  keywords:
    "Nashville car detailing, mobile car detailing, auto detailing, car cleaning services, car waxing, Nashville auto detailing, car detail",
  authors: [{ name: "Nashville Car Detail" }],
  robots: "index, follow",
  openGraph: {
    title: "Nashville Car Detail - Premium Mobile Auto Detailing",
    description:
      "Nashville Car Detail offers top-notch mobile auto detailing services in the Nashville area. Book your appointment today!",
    type: "website",
    url: "https://www.nashvillecardetail.com",
    images: "/images/NCDLogoTransBig.png",
  },
  twitter: {
    card: "summary_large_image",
    site: "@NashvilleCarDetail",
    title: "Nashville Car Detail - Premium Mobile Auto Detailing",
    description:
      "Nashville Car Detail offers top-notch mobile auto detailing services in the Nashville area. Book your appointment today!",
    images: "/images/NCDLogoTransBig.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className="body">
        <Analytics />
        <div className="container">
          <header>
            <nav className="nav">
              <NavBar />
            </nav>
          </header>
          <main className="main">{children}</main>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
