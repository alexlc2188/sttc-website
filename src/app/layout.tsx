import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ import the footer

export const metadata: Metadata = {
  title: "Sydney Table Tennis Club",
  description: "Official website for STTC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer /> {/* ✅ add the footer below all page content */}
      </body>
    </html>
  );
}
