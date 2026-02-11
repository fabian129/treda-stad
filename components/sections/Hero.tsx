"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link';

interface HeroProps {
    city?: string;
}

export function Hero({ city }: HeroProps) {
    // Helper to format city name for display (e.g. "malmo" -> "Malmö")
    const formatCity = (citySlug?: string) => {
        if (!citySlug) return "";
        const cityMap: Record<string, string> = {
            "malmo": "Malmö",
            "malmö": "Malmö",
            "goteborg": "Göteborg",
            "göteborg": "Göteborg",
            "kopenhamn": "Köpenhamn",
            "köpenhamn": "Köpenhamn",
            "lulea": "Luleå",
            "luleå": "Luleå",
            "umea": "Umeå",
            "umeå": "Umeå",
            "vasteras": "Västerås",
            "västerås": "Västerås",
            "orebro": "Örebro",
            "örebro": "Örebro",
            "norrkoping": "Norrköping",
            "norrköping": "Norrköping",
            "linkoping": "Linköping",
            "linköping": "Linköping",
            "jonkoping": "Jönköping",
            "jönköping": "Jönköping",
            "boras": "Borås",
            "borås": "Borås",
            "vaxjo": "Växjö",
            "växjö": "Växjö",
            "kristianstad": "Kristianstad",
            "helsingborg": "Helsingborg",
            "lund": "Lund",
            "trelleborg": "Trelleborg",
            "landskrona": "Landskrona",
            "eslov": "Eslöv",
            "eslöv": "Eslöv",
            "hollviken": "Höllviken",
            "höllviken": "Höllviken",
            "lomma": "Lomma",
            "svedala": "Svedala",
            "staffanstorp": "Staffanstorp",
            "kavlinge": "Kävlinge",
            "kävlinge": "Kävlinge",
            "bjarred": "Bjärred",
            "bjärred": "Bjärred",
            "skanor": "Skanör",
            "skanör": "Skanör",
            "falsterbo": "Falsterbo",
            "oxie": "Oxie",
            "bara": "Bara",
            "klagerup": "Klågerup",
            "klågerup": "Klågerup",
            "dalby": "Dalby",
            "sodra sandby": "Södra Sandby",
            "södra sandby": "Södra Sandby",
            "loddekopinge": "Löddeköpinge",
            "löddeköpinge": "Löddeköpinge"
        };
        return cityMap[citySlug.toLowerCase()] || citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
    };

    const locationText = city ? ` i ${formatCity(city)}` : "";

    return (
        <section className="relative h-screen min-h-[800px] flex flex-col px-6 overflow-hidden pt-20">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/images/foretag/portrait-smiling-beautiful-girl-playing-with-dog-golden-retriever-sitting-floor.jpg"
                    alt="Woman reading book in a clean home"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Main Content */}
            <div className="mx-auto max-w-[1240px] relative z-10 w-full flex-grow flex flex-col justify-center pb-32">
                <div className="max-w-4xl text-center lg:text-left">
                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-white mb-6 drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)] will-change-transform transform-gpu"
                    >
                        Rent hem,<br />
                        <span className="text-white/90">utan stress{locationText}.</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)] will-change-transform transform-gpu"
                    >
                        Vi ger dig tid tillbaka. Professionell hemstädning skräddarsydd för ditt hem och ditt schema. Njut av känslan av ett nystädat hem{locationText}.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 will-change-transform transform-gpu"
                    >
                        <Link href="/kontakt" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full px-8 h-14 text-base rounded-full gap-2 bg-primary hover:bg-primary/90 text-white border-0 shadow-lg shadow-primary/20 cursor-pointer">
                                <span>Få Offert Direkt</span>
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto px-8 h-14 text-base rounded-full gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-secondary transition-all cursor-pointer"
                            onClick={() => {
                                const servicesSection = document.getElementById('services');
                                if (servicesSection) {
                                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }}
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>Se Våra Tjänster</span>
                        </Button>
                    </motion.div>


                    {/* Trust Pillars - Hidden on mobile, shown in desktop layout if needed, or keeping user preference */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-12 flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-3 text-sm font-medium will-change-transform transform-gpu"
                    >
                        {/* Keeping these as pills for now */}
                        <div className="flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-foreground shadow-sm border border-white/60">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span>Nöjd-Kund-Garanti</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-foreground shadow-sm border border-white/60">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span>Ansvarsförsäkring</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-foreground shadow-sm border border-white/60">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span>RUT-avdrag direkt</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-foreground shadow-sm border border-white/60">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            <span>Alltid samma personal</span>
                        </div>
                    </motion.div>

                </div>
            </div>



            {/* Bottom Curve */}
            <div className="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-[140%] -translate-x-1/2 rounded-t-[100%] bg-[#fafbf9] z-30" />


        </section>
    );
}
