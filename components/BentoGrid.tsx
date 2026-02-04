"use client";

import { motion } from "framer-motion";
import { ArrowRight, Users, Star, Clock } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface BentoItemProps {
    className?: string;
    children: React.ReactNode;
    delay?: number;
}

function BentoItem({ className, children, delay = 0 }: BentoItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay }}
            className={cn(
                "rounded-[32px] overflow-hidden relative shadow-lg hover:shadow-xl transition-shadow duration-300",
                className
            )}
        >
            {children}
        </motion.div>
    );
}

export function BentoGrid() {
    return (
        <section className="py-24 px-6 lg:px-12 max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-[auto_auto_auto] lg:grid-rows-[300px_300px] gap-6">

                {/* 1. Main Headline (Top Left - Spans 2 cols) */}
                <BentoItem className="bg-white p-8 lg:p-12 flex flex-col justify-center border border-stone-100 col-span-1 md:col-span-2 row-span-1 lg:row-span-2">
                    <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                        Bygg ditt <br />
                        <span className="text-primary">drömteam</span> idag.
                    </h2>
                    <p className="text-stone-500 text-lg mb-8 max-w-sm">
                        Lås upp potentialen med vårt handplockade team av experter. Vi matchar rätt person med rätt uppdrag.
                    </p>
                    <div className="flex items-center gap-4">
                        <Button className="rounded-full px-8 h-12 shadow-md">
                            Boka Konsultation <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </BentoItem>

                {/* 2. Team Member Large (Top Middle - Spans 1 col, 2 rows) */}
                <BentoItem className="bg-stone-100 col-span-1 row-span-1 lg:row-span-2 relative group" delay={0.1}>
                    <Image
                        src="/images/cleaner.webp"
                        alt="Team Member"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-white/50 shadow-sm flex items-center justify-between">
                            <div>
                                <p className="text-sm font-bold text-stone-900">Erik Svensson</p>
                                <p className="text-[10px] uppercase tracking-wider text-stone-500 font-medium">Expertstädare</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center text-white text-xs">ES</div>
                        </div>
                    </div>
                </BentoItem>

                {/* 3. Green Value Card (Top Right - Small) */}
                <BentoItem className="bg-primary/10 p-8 flex flex-col justify-between col-span-1 border border-primary/10" delay={0.2}>
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                        <Clock className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-stone-900 mb-2">Snabbt & Flexibelt</h3>
                        <p className="text-sm text-stone-600 leading-snug">
                            Boka med kort varsel. Vi anpassar oss efter ditt schema.
                        </p>
                    </div>
                </BentoItem>

                {/* 4. Team Member Small (Bottom Right - Small) */}
                <BentoItem className="group col-span-1 min-h-[300px] lg:min-h-0" delay={0.3}>
                    <Image
                        src="/images/housemaid-opening-door-room-cleaning.webp"
                        alt="Join us"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                        <p className="text-white font-medium">Bli en av oss?</p>
                    </div>
                </BentoItem>

                {/* 5. Secondary Value Card (Full Width Bottom on Mobile, or specific spot) */}
                <BentoItem className="bg-[#FFEAD0] p-8 lg:p-10 col-span-1 md:col-span-2 lg:col-span-1 lg:col-start-4 lg:row-start-2 flex flex-col justify-end" delay={0.4}>
                    <div className="w-12 h-12 rounded-full bg-orange-400/20 flex items-center justify-center text-orange-700 mb-auto">
                        <Star className="w-6 h-6" />
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-stone-900 mb-2">Inga dolda avgifter</h3>
                        <p className="text-sm text-stone-600/90 leading-snug">
                            Du vet alltid vad du betalar. Inga överraskningar, bara rent resultat.
                        </p>
                    </div>
                    {/* Decorative Circles */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-200/50 rounded-full blur-2xl" />
                </BentoItem>

            </div>
        </section>
    );
}
