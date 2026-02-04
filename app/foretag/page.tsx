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

                {/* Bottom Image Grid (Peeking up) */}
                <div className="mx-auto max-w-[1400px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Image 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="relative aspect-[3/4] rounded-[32px] overflow-hidden group shadow-2xl"
                        >
                            <img
                                src="/images/office-cleaning-1.jpg" // Fallback or placeholder needed? Using generic path logic based on text
                                alt="Kontorsstädning"
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                                onError={(e) => {
                                    // Fallback to solid color if image fails (for demo safety)
                                    (e.target as HTMLImageElement).style.display = 'none';
                                    (e.target as HTMLImageElement).parentElement!.style.backgroundColor = '#f5f5f4'; // stone-100
                                }}
                            />
                            {/* Overlay Content */}
                            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/60 to-transparent">
                                <h3 className="text-white text-xl font-bold">Kontorsstädning</h3>
                                <p className="text-white/80 text-sm mt-1">För en trivsam arbetsmiljö</p>
                            </div>
                        </motion.div>

                        {/* Image 2 (Center - Taller?) - Keeping uniform for now per reference grid usually */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="relative aspect-[3/4] rounded-[32px] overflow-hidden group shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-stone-200" /> {/* Placeholder if image missing */}
                            <img
                                src="/images/office-lobby.webp"
                                alt="Fastighetsstädning"
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 relative z-10"
                            />
                            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/60 to-transparent z-20">
                                <h3 className="text-white text-xl font-bold">Fastighetsstädning</h3>
                                <p className="text-white/80 text-sm mt-1">Trapphus & Entréer</p>
                            </div>
                        </motion.div>

                        {/* Image 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="relative aspect-[3/4] rounded-[32px] overflow-hidden group shadow-2xl"
                        >
                            <div className="absolute inset-0 bg-stone-200" />
                            <img
                                src="/images/meeting-room.webp"
                                alt="Specialstädning"
                                className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110 relative z-10"
                            />
                            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/60 to-transparent z-20">
                                <h3 className="text-white text-xl font-bold">Specialstädning</h3>
                                <p className="text-white/80 text-sm mt-1">Fönsterputs & Golvvård</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Decorative Background Blob behind images */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-primary/5 blur-[100px] -z-10 rounded-full pointer-events-none" />
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
