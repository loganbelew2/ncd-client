import "./globals.css";
import { NavBar } from "./components/Nav/Nav-Bar";
import { Footer } from "./components/Footer/Footer";
import Analytics from "./components/Analytics/Analytics";
import { GoogleTag } from "./components/Analytics/GoogleTag";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <GoogleTag/>
      <Analytics />
      <body className="body">
        <div className="container">
          <header className="header">
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
