import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "./ui/Nav/Nav-Bar";
import { Footer } from "./ui/Footer/Footer";
import Image from "next/image";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nashville Car Detail",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link href={"/"}>
              <Image
                className="logo"
                src="/images/NCDLogoTransBig.png"
                alt="NCD Logo"
                width={170}
                height={150}
                layout="intrinsic"
              />
          </Link>
          <NavBar />
          <button className="btn--primary">Book now</button>
          <button className="btn--secondary">Learn more</button>
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
