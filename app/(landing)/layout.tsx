import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Få Offert på Städning | Treda Städ",
  description: "Fyll i formuläret och få ett fast pris på hemstädning, kontorsstädning eller storstädning inom 2 timmar. RUT-avdrag direkt. Verksamma i Malmö, Lund & Helsingborg.",
  robots: { index: false, follow: false },
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
