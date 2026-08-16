import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VisionBackground from "@/components/VisionBackground";
import IntroLoader from "@/components/IntroLoader";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jbmono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Syeda Sumayya Zahid — Software Engineer & AI/Robotics Specialist",
  description: "Portfolio of Syeda Sumayya Zahid — Software Engineer specializing in AI, robotics (ROS 2), and full-stack web development with Next.js, Node.js, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jbmono.variable} antialiased bg-base text-ivory`}>
        <IntroLoader />
        <VisionBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}