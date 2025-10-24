import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({ weight: ["400", "700"],subsets:['latin'] });
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
      <body
        className={poppins.className} 
      >
        <div className="relative w-full flex items-center justify-center"><Navbar/></div>
        
        {children}
      </body>
    </html>
  );
}
