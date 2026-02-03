import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "Treda Städ - Professionell Städning",
  description: "Vi skapar rena och trivsamma miljöer för både privatpersoner och företag i Malmö med omnejd.",
};

<<<<<<< HEAD
import SmoothScroll from "@/components/SmoothScroll";

import { Footer } from "@/components/Footer";

=======
>>>>>>> b561f6b6c2cf87fc4c720a41aa25596c8f9bfd12
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
<<<<<<< HEAD
    <html lang="sv" className={dmSans.variable}>
      <body className="antialiased font-sans flex flex-col min-h-screen">
        <SmoothScroll>
          {children}
          <Footer />
        </SmoothScroll>
=======
    <html lang="en" className={jetbrainsMono.variable}>
      <body className="antialiased font-mono">
        {children}
>>>>>>> b561f6b6c2cf87fc4c720a41aa25596c8f9bfd12
      </body>
    </html>
  );
}

