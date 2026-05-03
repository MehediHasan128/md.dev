import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import TargetCursor from "@/components/UI/TargetCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MH.dev | Mehedi Hasan - MERN Stack Developer Portfolio",
  description:
    "MH.dev is the portfolio of Mehedi Hasan, a passionate MERN Stack Developer specializing in building modern, scalable, and high-performance web applications using React, Next.js, Node.js, Express, and MongoDB. Explore Mehedi's projects, skills, and experience in web development, showcasing expertise in creating dynamic and responsive user interfaces, RESTful APIs, and full-stack applications. Discover how Mehedi combines creativity and technical proficiency to deliver innovative solutions that meet client needs and drive business success.",
  keywords: [
    "Mehedi Hasan",
    "MH.dev",
    "MERN Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "Node.js Developer",
    "MongoDB Developer",
  ],
  authors: [{ name: "Mehedi Hasan" }],
  creator: "Mehedi Hasan",
  openGraph: {
    title: "MH.dev | MERN Stack Developer",
    description:
      "Explore the portfolio of Mehedi Hasan, showcasing modern full-stack web applications built with MERN and Next.js.",
    url: "https://mh-dev.vercel.app",
    siteName: "MH.dev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MH.dev Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MH.dev | MERN Stack Developer",
    description:
      "Portfolio of Mehedi Hasan - Full Stack Developer specializing in MERN and Next.js.",
    images: ["/og-image.png"],
  },

  metadataBase: new URL("https://mh-dev.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-white">
        <TargetCursor
          spinDuration={2}
          hideDefaultCursor
          parallaxOn
          hoverDuration={0.2}
        />
        {children}
      </body>
    </html>
  );
}
