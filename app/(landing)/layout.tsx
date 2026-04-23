import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  title: "Få Offert på Städning | Treda Städ",
  description: "Fyll i formuläret och få ett fast pris på hemstädning, kontorsstädning eller storstädning inom 2 timmar. RUT-avdrag direkt. Verksamma i Malmö, Lund & Helsingborg.",
  robots: { index: false, follow: false },
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={dmSans.variable}>
      <body className="antialiased font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
