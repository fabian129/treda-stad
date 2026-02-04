"use client";

import { motion } from "framer-motion";
import { Smartphone, ShieldCheck, Leaf, Medal, ArrowRight } from "lucide-react";
import Image from "next/image";

export function ForetagBento() {
    return (
        <section className="py-24 px-6 bg-stone-50">
            <div className="max-w-[1200px] mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wider uppercase text-xs mb-4 block"
                    >
                        Treda Standard
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-stone-900 mb-6"
                    >
                        Trygghet i varje detalj.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-stone-600 leading-relaxed"
                    >
                        Vi har moderniserat städbranschen. Med digitala loggar, screenad personal och en 100% nöjd-kund-garanti.
                    </motion.p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-rows-2 h-auto lg:h-[600px]">

                    {/* Card 1: Digital Tracking - Large (Span 2 cols on Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-[32px] shadow-sm border border-stone-100 lg:col-span-2 relative overflow-hidden group"
                    >
                        <div className="relative z-10 max-w-md">
                            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                                <Smartphone className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-stone-900">Digital Kvalitetsuppföljning</h3>
                            <p className="text-stone-500 leading-relaxed mb-6">
                                Följ när vi städat, se checklistor och kommunicera direkt med era städare via vår app. Full transparens i realtid.
                            </p>
                            <button className="flex items-center gap-2 text-sm font-bold text-stone-900 group-hover:gap-3 transition-all">
                                Se hur det funkar <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                        {/* Decorative UI Mockup */}
                        <div className="absolute top-12 -right-12 w-[60%] h-full bg-stone-50 rounded-tl-[32px] border-l border-t border-stone-100 shadow-lg transform translate-x-10 translate-y-10 group-hover:translate-x-8 group-hover:translate-y-8 transition-transform duration-500 hidden sm:block">
                            {/* Simple App UI Abstract */}
                            <div className="p-6 space-y-4">
                                <div className="h-4 w-1/3 bg-stone-200 rounded-full animate-pulse" />
                                <div className="space-y-2">
                                    <div className="h-2 w-full bg-stone-100 rounded-full" />
                                    <div className="h-2 w-5/6 bg-stone-100 rounded-full" />
                                    <div className="h-2 w-4/6 bg-stone-100 rounded-full" />
                                </div>
                                <div className="flex gap-2 mt-8">
                                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                                    </div>
                                    <div className="h-8 w-24 bg-stone-100 rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Security */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-[32px] shadow-sm border border-stone-100 flex flex-col justify-between group hover:border-primary/20 transition-colors"
                    >
                        <div>
                            <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-stone-900">Certifierad Säkerhet</h3>
                            <p className="text-stone-500 text-sm leading-relaxed">
                                All personal är bakgrundskontrollerad och bär synligt ID. Vi hanterar nycklar och larmkoder med strikta säkerhetsrutiner.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: Eco */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-[32px] shadow-sm border border-stone-100 flex flex-col justify-between group hover:border-green-200 transition-colors"
                    >
                        <div>
                            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                                <Leaf className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-stone-900">100% Miljömärkt</h3>
                            <p className="text-stone-500 text-sm leading-relaxed">
                                Vi använder endast Svanenmärkta medel och mikrofiberteknik för att minimera kemikalier.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 4: Guarantee - Large (Span 2 cols on Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="bg-stone-900 p-8 rounded-[32px] shadow-sm border border-stone-800 lg:col-span-2 relative overflow-hidden flex items-center"
                    >
                        <div className="relative z-10 max-w-lg">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-stone-900">
                                    <Medal className="w-5 h-5" />
                                </div>
                                <span className="text-primary font-bold tracking-wide uppercase text-xs">Unik Garanti</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white">Nöjd-Kund-Garanti</h3>
                            <p className="text-stone-400 leading-relaxed mb-0">
                                Är ni inte 100% nöjda åtgärdar vi det kostnadsfritt inom 24 timmar. Inga diskussioner, bara resultat.
                            </p>
                        </div>
                        {/* Abstract Background Graphic */}
                        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
