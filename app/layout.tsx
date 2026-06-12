import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quantum Immortality Research Institute",
  description:
    "Advanced research on Quantum Physics, Consciousness, Quasiparticles, Quantum Biology, and Quantum Immortality",
  manifest: "/manifest.json",
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav>
          <Link href="/">Home</Link>

          <Link href="/search">Search</Link>

          <Link href="/articles">Articles</Link>
          <Link href="/equations">Equations</Link>

          <Link href="/references">References</Link>

          <Link href="/categories">Categories</Link>

          <Link href="/publications">Publications</Link>

          <Link href="/scientists">Scientists</Link>
          <Link href="/timeline">Timeline</Link>
          <Link href="/mission">Mission</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {children}

        <footer
          style={{
            textAlign: "center",
            padding: "20px",
            borderTop: "1px solid #1e293b",
            marginTop: "50px",
          }}
        >
          Quantum Immortality Research Institute © 2026
        </footer>
      </body>
    </html>
  );
}