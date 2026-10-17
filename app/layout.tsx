import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackgroundAudio from "@/components/BackgroundAudio";

export const metadata: Metadata = {
  title: "OpenCode Events - Fuel Open Source Innovation",
  description: "Join the movement that's shaping the future of technology. Sponsor our open-source events and connect with the brightest developers worldwide.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <BackgroundAudio />
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
