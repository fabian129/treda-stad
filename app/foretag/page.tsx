"use client";

import { motion } from "framer-motion";
import { CheckCircle, Building2, Briefcase, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { ForetagBento } from "@/components/foretag/ForetagBento";
import { ForetagStats } from "@/components/foretag/ForetagStats";
import { ForetagServices } from "@/components/foretag/ForetagServices";
import { WavyConnector } from "@/components/ui/WavyConnector";

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
                        className="text-6xl md:text-8xl font-bold tracking-tight leading-[1] mb-10 relative"
                    >
                        <span className="block text-stone-900">Rent kontor.</span>
                        <span className="block text-primary">Bättre fokus.</span>
                        {/* Wavy Connector - Asymmetrical Decorative Curve */}
                        <div className="absolute -right-[10%] top-[20%] w-[350px] h-[140px] hidden lg:block pointer-events-none">
                            <WavyConnector className="w-full h-full text-primary opacity-60" />
                        </div>
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
                <div className="mx-auto max-w-[1200px] mt-12 mb-12">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[
                            "/images/foretag/waiting-room.webp",
                            "/images/foretag/woman-suitcase.webp",
                            "/images/foretag/office-kitchen.webp",
                            "/images/foretag/seller.webp",
                            "/images/foretag/cleaning-service.webp"
                        ].map((src, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10 }}
                                transition={{ delay: 0.4 + (index * 0.05), duration: 0.6 }}
                                className={`relative aspect-[9/16] rounded-[20px] overflow-hidden ${index > 1 ? 'hidden md:block' : ''} ${index === 2 ? 'md:translate-y-6' : ''}`}
                            >
                                <div className="absolute inset-0 bg-stone-100" />
                                <Image
                                    src={src}
                                    alt="Treda Städ Visual"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Decorative Background Blob behind images */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-[300px] bg-primary/5 blur-[120px] -z-10 rounded-full pointer-events-none" />
            </section>

            {/* Bento Grid Features */}
            <ForetagBento />

            {/* Editorial Stats Split */}
            <ForetagStats />

            {/* Dark Mode Services */}
            <ForetagServices />

            {/* Bot CTA */}
            <section className="py-24 px-6 bg-stone-50 text-stone-900 border-t border-stone-200">
                <div className="mx-auto max-w-[1000px] text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Redo för ett bättre kontor?</h2>
                    <p className="text-stone-500 text-xl max-w-2xl mx-auto mb-12">
                        Kontakta oss för ett kostnadsfritt besök där vi går igenom era lokaler och behov.
                    </p>
                    <div className="flex justify-center">
                        <Button size="lg" className="h-16 px-10 text-lg bg-primary text-[#02292E] hover:bg-primary/90 rounded-full shadow-xl hover:shadow-primary/25 transition-all">
                            Boka Kostnadsfritt Besök
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
