"use client";

import { motion } from "framer-motion";
import { CheckCircle, Building2, Briefcase, FileText, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

export default function ForetagPage() {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
            <Navbar />

            {/* B2B Hero */}
            <section className="py-20 px-6">
                <div className="mx-auto max-w-[1000px] text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border/50 text-xs font-medium uppercase tracking-wider text-secondary mb-8"
                    >
                        <Building2 className="w-4 h-4" />
                        För Företag & Fastighetsägare
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8"
                    >
                        Rent kontor,<br />
                        bättre fokus.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        Vi förstår att en ren arbetsplats är avgörande för trivsel och produktivitet.
                        Låt oss ta hand om städningen, så kan ni fokusera på er verksamhet.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center"
                    >
                        <Button size="lg" className="px-10 h-14 text-base">
                            Få Företagsoffert
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* Value Props Grid */}
            <section className="py-20 px-6 bg-background">
                <div className="mx-auto max-w-[1240px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-white rounded-2xl shadow-leasio">
                            <ShieldCheck className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold mb-3">Trygghet & Säkerhet</h3>
                            <p className="text-secondary leading-relaxed">
                                Full ansvarsförsäkring, kollektivavtal och säkerhetskontrollerad personal.
                                Ni kan känna er helt trygga med oss på plats.
                            </p>
                        </div>
                        <div className="p-8 bg-white rounded-2xl shadow-leasio">
                            <Briefcase className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold mb-3">Skräddarsytt Upplägg</h3>
                            <p className="text-secondary leading-relaxed">
                                Vi anpassar städschemat efter era tider och behov. Morgon, kväll eller helg
                                – vi städar när det passar er bäst.
                            </p>
                        </div>
                        <div className="p-8 bg-white rounded-2xl shadow-leasio">
                            <FileText className="w-10 h-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold mb-3">Smidig Administration</h3>
                            <p className="text-secondary leading-relaxed">
                                Tydlig specificerad fakturering och en dedikerad kontaktperson.
                                Vi gör det enkelt att vara kund hos oss.
                            </p>
                        </div>
                    </div>
                </div>
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
