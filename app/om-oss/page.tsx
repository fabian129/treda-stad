"use client";

import { motion } from "framer-motion";
import { Users, Heart, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { SectionBreaker } from "@/components/sections/SectionBreaker";

export default function OmOssPage() {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
            <Navbar />

            {/* Hero */}
            <section className="py-20 px-6">
                <div className="mx-auto max-w-[1000px] text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border/50 text-xs font-medium uppercase tracking-wider text-secondary mb-8"
                    >
                        <Users className="w-4 h-4" />
                        Om Oss
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8"
                    >
                        Mer än bara städning.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        Vi startade Treda Städ med en enkel vision:
                        <span className="block">Att skapa en städtjänst som vi själva skulle vilja anlita.</span>
                        <span className="block text-primary font-semibold">Pålitlig, noggrann och personlig.</span>
                    </motion.p>
                </div>
            </section>


            {/* Story / Values */}
            <section className="py-20 px-6">
                <div className="mx-auto max-w-[1240px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold">Trygghet är vårt viktigaste verktyg.</h2>
                            <div className="space-y-6 text-lg text-secondary leading-relaxed">
                                <p>
                                    Att släppa in någon i sitt hem eller på sitt kontor handlar om förtroende.
                                    Därför lägger vi lika mycket kraft på att rekrytera rätt människor som på själva städtekniken.
                                </p>
                                <p>
                                    Alla våra medarbetare har genomgått bakgrundskontroller, utbildning och talar svenska eller engelska.
                                    Vi har kollektivavtal för att vi tror att schyssta villkor ger bättre städning.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-card rounded-2xl shadow-leasio">
                                <Shield className="w-8 h-8 text-primary mb-4" />
                                <h3 className="font-bold mb-2">Ansvar</h3>
                                <p className="text-sm text-secondary">Fullt försäkrade och ansvarsfulla. Vi tar hand om ditt hem som om det vore vårt eget.</p>
                            </div>
                            <div className="p-6 bg-card rounded-2xl shadow-leasio">
                                <Heart className="w-8 h-8 text-primary mb-4" />
                                <h3 className="font-bold mb-2">Omsorg</h3>
                                <p className="text-sm text-secondary">Vi bryr oss om detaljerna och anpassar oss efter dina specifika önskemål.</p>
                            </div>
                            <div className="p-6 bg-card rounded-2xl shadow-leasio">
                                <Award className="w-8 h-8 text-primary mb-4" />
                                <h3 className="font-bold mb-2">Kvalitet</h3>
                                <p className="text-sm text-secondary">Nöjd-kund-garanti på alla uppdrag. Är du inte nöjd, åtgärdar vi det direkt.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SectionBreaker quote="Vi städar som om det vore vårt eget hem." author="Teamet på Treda" />

            {/* Recruitment / Team CTA */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="mx-auto max-w-[1000px] text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-6">Vill du jobba med oss?</h2>
                    <p className="text-secondary text-lg max-w-xl mx-auto mb-8">
                        Vi söker alltid duktiga medarbetare som delar våra värderingar.
                        Är du noggrann, ansvarsfull och serviceminded?
                    </p>
                    <Button variant="outline" size="lg" className="px-8 border-secondary/20 hover:bg-white/50">
                        Sök Jobb
                    </Button>
                </div>
            </section>

        </div>
    );
}
