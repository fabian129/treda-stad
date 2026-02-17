import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://treda.se"),
  title: {
    default: "Treda Städ - Professionell Städning i Malmö & Lund",
    template: "%s | Treda Städ",
  },
  description: "Vi skapar rena och trivsamma miljöer för både privatpersoner och företag i Malmö, Lund och omnejd. Boka hemstädning, flyttstädning eller kontorsstädning idag.",
  keywords: ["städning Malmö", "städfirma Malmö", "hemstädning", "flyttstädning", "kontorsstädning", "fönsterputs", "Lund", "Treda Städ"],
  authors: [{ name: "Treda Städ AB" }],
  creator: "Treda Städ AB",
  publisher: "Treda Städ AB",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Treda Städ - Professionell Städning i Malmö & Lund",
    description: "Vi skapar rena och trivsamma miljöer för både privatpersoner och företag. Boka din städning idag.",
    url: "https://treda.se",
    siteName: "Treda Städ",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "/images/foretag/portrait-smiling-beautiful-girl-playing-with-dog-golden-retriever-sitting-floor.jpg",
        width: 1200,
        height: 630,
        alt: "Treda Städ - Njut av ett nystädat hem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Treda Städ - Professionell Städning",
    description: "Vi skapar rena och trivsamma miljöer i Malmö med omnejd.",
    images: ["/images/foretag/portrait-smiling-beautiful-girl-playing-with-dog-golden-retriever-sitting-floor.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://treda.se",
  },
};

import SmoothScroll from "@/components/SmoothScroll";

import { Footer } from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { StructuredData } from "@/components/seo/StructuredData";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={dmSans.variable}>
      <body className="antialiased font-sans flex flex-col min-h-screen overflow-x-hidden">
        <StructuredData />
        <SmoothScroll>
          {children}
          <Footer />
          <CookieBanner />
        </SmoothScroll>
      </body>
    </html>
  );
}

