import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import Script from "next/script";
import MotionSystem from "@/components/layout/MotionSystem";
import PageTransition from "@/components/layout/PageTransition";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://workden.online"),
  title: "WorkDen | Professional Digital Task Platform",
  description: "A professional work from home task platform designed for accuracy, transparency, and secure remote work in India.",
  icons: {
    icon: "/workden-logo.png",
    shortcut: "/workden-logo.png",
    apple: "/workden-logo.png",
  },
  openGraph: {
    title: "WorkDen | Professional Digital Task Platform",
    description: "A professional work from home task platform designed for accuracy, transparency, and secure remote work in India.",
    images: ["/workden-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <PageTransition>{children}</PageTransition>
        <MotionSystem />
        <Script
          src="https://code.tidio.co/cnjmhfu6axyap6lkz6v0dayvl8qeienl.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
