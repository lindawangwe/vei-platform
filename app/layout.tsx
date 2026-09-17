import type { Metadata } from "next";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Visibility Empire International",
  description:
    "Building Visibility. Creating Opportunities. Growing Empires.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0B0B0B] text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}