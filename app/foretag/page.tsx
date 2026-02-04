"use client";

import { motion } from "framer-motion";
import { CheckCircle, Building2, Briefcase, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

export default function ForetagPage() {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
            <Navbar />

            {/* Reference-style Hero */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="mx-auto max-w-[1200px] text-center relative z-10">

                    {/* Top Pill Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 mb-8"
                    >
                        <Building2 className="w-3 h-3 text-primary" />
                        För Företag & Fastighetsägare
                    </motion.div>

                    {/* Massive Headline (Two-tone) */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.7 }}
                        className="text-6xl md:text-8xl font-bold tracking-tight leading-[1] mb-10"
                    >
                        <span className="block text-stone-900">Rent kontor.</span>
                        <span className="block text-stone-400">Bättre fokus.</span>
                    </motion.h1>

                    {/* Description - Centered & Clean */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-stone-500 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
                    >
                        Vi förstår att en ren arbetsplats är avgörande för trivsel och produktivitet.
                        Låt oss ta hand om städningen, så kan ni fokusera på er verksamhet.
                    </motion.p>

                    {/* Buttons Group */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24"
                    >
                        <Button size="lg" className="rounded-full px-10 h-14 text-base shadow-xl hover:shadow-primary/25 transition-all w-full sm:w-auto">
                            Få Företagsoffert
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full px-10 h-14 text-base border-stone-200 hover:bg-stone-50 text-stone-600 w-full sm:w-auto">
                            Läs mer om oss
                        </Button>
                    </motion.div>
                </div>

                {/* Bottom Image Grid (Visual Pacing - Slim Cards) */}
                <div className="mx-auto max-w-[1600px] mt-16">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            "/images/room-with-large-window-that-says-welcome-you.webp",
                            "/images/closeup-waitress-disinfecting-tables-outdoor-cafe.webp",
                            "/images/cleaner.webp",
                            "/images/flat-lay-green-cleaning-products-marble-background.webp",
                            "/images/woman-digital-disconnecting-home-by-reading-book.webp"
                        ].map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + (index * 0.1), duration: 0.8 }}
                                className={`relative aspect-[9/16] rounded-[24px] overflow-hidden group shadow-xl ${index > 1 ? 'hidden md:block' : ''} ${index === 2 ? 'md:translate-y-8' : ''}`}
                            >
                                <div className="absolute inset-0 bg-stone-100" />
                                <img
                                    src={src}
                                    alt="Treda Städ Visual"
                                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                                {/* Subtle internal border/sheen */}
                                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-[24px] pointer-events-none" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Decorative Background Blob behind images */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[300px] bg-primary/5 blur-[120px] -z-10 rounded-full pointer-events-none" />
            </section>

            {/* Services List */}
            <section className="py-24 px-6 relative">
                <div className="mx-auto max-w-[1000px]">
                    <h2 className="text-3xl font-bold mb-12 text-center">Vad vi hjälper er med</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                        {[
                            "Kontorsstädning (Dammning, golv, pentry)",
                            "Fastighetsstädning (Trapphus, entréer)",
                            "Byggstädning vid renovering",
                            "Fönsterputsning på hög höjd",
                            "Förbrukningsmaterial (Papper, tvål m.m.)",
                            "Entré- och gummimattor"
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-4 p-4 border-b border-border/60">
                                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                                <span className="text-lg font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bot CTA */}
            <section className="py-24 px-6 bg-[#02292E] text-white">
                <div className="mx-auto max-w-[1000px] text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Redo för ett bättre kontor?</h2>
                    <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12">
                        Kontakta oss för ett kostnadsfritt besök där vi går igenom era lokaler och behov.
                    </p>
                    <div className="flex justify-center">
                        <Button size="lg" className="h-16 px-10 text-lg bg-primary text-[#02292E] hover:bg-primary/90">
                            Boka Kostnadsfritt Besök
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
