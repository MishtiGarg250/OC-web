import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackgroundAudio from "@/components/BackgroundAudio";

export const metadata: Metadata = {
  title: "OpenCode '26 - Annual Month-Long Open Source Celebration",
  description: "Join the movement shaping the future of technology. Contribute to impactful open-source projects, climb the leaderboard, and connect with developers worldwide.",
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
