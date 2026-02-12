"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import Link from "next/link";
import { GridPattern } from "@/components/zaitex/grid-pattern";
import { AmbientGlow } from "@/components/zaitex/ambient-glow";

export default function VartFinnsViPage() {
    const cities = [
        { name: "Lund", icon: "🏛️" },
        { name: "Helsingborg", icon: "⚓" },
        { name: "Trelleborg", icon: "🌊" },
        { name: "Ystad", icon: "🏰" },
        { name: "Kristianstad", icon: "🌾" },
        { name: "Vellinge", icon: "🏡" },
        { name: "Hässleholm", icon: "🌳" },
        { name: "vi finns även på många fler städer och orter", icon: "✨", isSpecial: true }
    ];

    return (
        <div className="min-h-screen bg-background font-sans text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-20 md:py-32 px-6 overflow-hidden">
                <GridPattern
                    width={60}
                    height={60}
                    className="opacity-[0.03] text-stone-900"
                />
                <AmbientGlow
                    variant="primary"
                    className="-top-24 -left-24 opacity-[0.04]"
                />

                <div className="mx-auto max-w-[1240px] relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                            <MapPin className="w-4 h-4" />
                            Vårt täckningsområde
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                            📍 Vi utgår från Malmö –<br />
                            <span className="text-primary">vi arbetar i hela Skåne</span>
                        </h1>
                    </motion.div>

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-4xl mx-auto space-y-8 text-lg text-secondary leading-relaxed mb-20"
                    >
                        <p className="text-xl">
                            <strong className="text-foreground">Treda Städ utgår från Malmö</strong> – men vi hjälper kunder i hela Skåne.
                        </p>

                        <p>
                            Oavsett om du finns i Lund, Helsingborg, Trelleborg, Ystad, Kristianstad eller någonstans däremellan kan du räkna med samma noggranna service, höga kvalitet och professionella bemötande. För oss spelar det ingen roll var i Skåne du befinner dig – vårt mål är alltid att leverera ett skinande resultat och en trygg upplevelse.
                        </p>

                        <p>
                            Vi arbetar med både privatpersoner och företag och anpassar våra tjänster efter dina behov. Behöver du hemstädning i Malmö, kontorsstädning i Lund eller flyttstädning i Helsingborg? Vi planerar och genomför uppdraget effektivt, strukturerat och med stor omsorg om detaljerna.
                        </p>

                        <p>
                            Som lokal städfirma i Malmö har vi god kännedom om regionen och kan snabbt vara på plats – oavsett om uppdraget är återkommande eller en engångstjänst. Vår flexibilitet gör att vi kan ta oss an både mindre och större uppdrag runt om i hela Skåne.
                        </p>

                        <p>
                            Vi är punktliga, pålitliga och enkla att samarbeta med. När du anlitar Treda Städ får du en partner som tar ansvar från start till klart resultat.
                        </p>
                    </motion.div>

                    {/* Cities Grid */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                            Vi finns i hela Skåne
                        </h2>
                        <div className="flex flex-nowrap justify-center gap-8 mb-8">
                            {cities.filter(c => !c.isSpecial).map((city, index) => (
                                <motion.div
                                    key={city.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="rounded-2xl text-center shadow-lg shadow-stone-900/5 border bg-white border-stone-100 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group flex flex-col items-center justify-center py-6 px-8"
                                    style={{ minWidth: '120px' }}
                                >
                                    <div className="mb-4 text-7xl transition-transform group-hover:scale-110">
                                        {city.icon}
                                    </div>
                                    <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                                        {city.name}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5 + 7 * 0.1 }}
                                className="rounded-2xl text-center shadow-lg shadow-stone-900/5 border bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:shadow-xl transition-all duration-300 group flex flex-col items-center justify-center py-8 px-20"
                            >
                                <div className="mb-4 text-7xl transition-transform">
                                    ✨
                                </div>
                                <h3 className="font-bold text-2xl text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                                    vi finns även på många fler städer och orter
                                </h3>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-[2.5rem] p-12 md:p-16 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Behöver du professionell<br />
                                <span className="text-primary">städning i Skåne?</span>
                            </h2>
                            <p className="text-xl text-secondary mb-8 max-w-2xl mx-auto">
                                Kontakta oss idag för en kostnadsfri offert – vi ser till att det blir gjort ordentligt.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/20" asChild>
                                    <Link href="/kontakt">
                                        Få kostnadsfri offert
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full" asChild>
                                    <a href="tel:04081787">
                                        <Phone className="mr-2 w-5 h-5" />
                                        Ring oss: 040-81787
                                    </a>
                                </Button>
                            </div>

                            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                                {[
                                    "Snabb respons",
                                    "Professionell service",
                                    "Nöjd-kund-garanti"
                                ].map((feature) => (
                                    <div key={feature} className="flex items-center justify-center gap-2 text-sm font-medium text-foreground">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
