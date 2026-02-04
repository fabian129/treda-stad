"use client";

import { motion } from "framer-motion";
import { Users, Shield, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { WavyConnector } from "@/components/ui/WavyConnector";
import { OrganicBlob } from "@/components/decorations/OrganicBlob";

export default function OmOssPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-foreground overflow-x-hidden">
            <Navbar />

            {/* Split Layout Section */}
            <div className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative">

                {/* Background Decor */}
                <OrganicBlob className="absolute top-0 right-0 opacity-[0.03] w-[800px] h-[800px]" variant="secondary" />

                {/* LEFT: Text Content */}
                <div className="flex-1 relative z-10 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-xl"
                    >
                        {/* Pre-title Label */}
                        <span className="inline-block text-primary font-bold tracking-widest text-xs uppercase mb-6">
                            Vilka är vi?
                        </span>

                        {/* Main Headline */}
                        <h1 className="text-5xl md:text-6xl/tight font-bold text-stone-900 mb-8">
                            Vi städar inte bara.<br />
                            <span className="text-primary/90">Vi skapar trivsel.</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-stone-600 leading-relaxed mb-8">
                            Treda Städ grundades med en enkel vision: att erbjuda städning som känns personlig, trygg och proffsig.
                            Vi använder modern teknik för bokning men gammaldags omsorg i utförandet.
                        </p>

                        <p className="text-lg text-stone-600 leading-relaxed mb-12">
                            Vårt team är handplockat, utbildat och fullt försäkrat. För oss handlar det inte bara om att ta bort damm,
                            utan om att ge dig tid tillbaka till det som betyder mest.
                        </p>

                        {/* Stats / Trust Badges */}
                        <div className="flex gap-8 border-t border-stone-100 pt-8">
                            <div>
                                <h4 className="text-3xl font-bold text-stone-900 mb-1">100+</h4>
                                <p className="text-sm text-stone-500 font-medium tracking-wide uppercase">Nöjda kunder</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-stone-900 mb-1">100%</h4>
                                <p className="text-sm text-stone-500 font-medium tracking-wide uppercase">Nöjd-kund-garanti</p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-12 flex items-center gap-4">
                            <Button size="lg" className="rounded-full px-8 h-12 shadow-lg hover:shadow-primary/25 transition-all">
                                Boka Städning <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Wavy Connector Animation (Desktop Only) */}
                    <div className="absolute -bottom-24 right-0 hidden lg:block pointer-events-none">
                        <WavyConnector className="w-[300px] text-primary" />
                    </div>
                </div>

                {/* RIGHT: Visuals */}
                <div className="flex-1 w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        {/* Main Image Container */}
                        <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border border-stone-100">
                            <Image
                                src="/images/housemaid-opening-door-room-cleaning.webp"
                                alt="Treda Städ Team"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 600px"
                                priority
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>

                        {/* Floating Card 1: Team */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                            className="absolute -top-12 -right-6 md:-right-12 bg-white p-5 rounded-3xl shadow-xl border border-stone-100 max-w-[200px]"
                        >
                            <div className="flex -space-x-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-stone-200 border-2 border-white overflow-hidden relative">
                                    <Image src="/images/cleaner.webp" alt="Avatar" fill className="object-cover" />
                                </div>
                                <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-white flex items-center justify-center text-primary text-xs font-bold">
                                    +12
                                </div>
                            </div>
                            <p className="text-sm font-bold text-stone-800">Vårt Team</p>
                            <p className="text-xs text-stone-500">Utbildade & försäkrade</p>
                        </motion.div>

                        {/* Floating Card 2: Guarantee */}
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                            className="absolute -bottom-10 -left-6 md:-left-12 bg-white p-6 rounded-3xl shadow-xl border border-stone-100 max-w-[240px]"
                        >
                            <Shield className="w-8 h-8 text-primary mb-3" />
                            <p className="text-sm font-bold text-stone-800 mb-1">Trygghetsgaranti</p>
                            <p className="text-xs text-stone-500 leading-snug">
                                Är du inte nöjd så åtgärdar vi det. Alltid.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Mission Section (Simpler text below) */}
            <section className="py-24 bg-stone-50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Users className="w-12 h-12 text-primary mx-auto mb-6 opacity-80" />
                    <h2 className="text-3xl font-bold mb-6">Varför välja oss?</h2>
                    <p className="text-lg text-stone-600 leading-relaxed">
                        Vi fokuserar på långsiktiga relationer. Ingen bindningstid, inga dolda avgifter,
                        bara riktigt bra städning när du behöver det.
                    </p>
                </div>
            </section>
        </div>
    );
}
