"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { WavyConnector } from "@/components/ui/WavyConnector";
import { BentoGrid } from "@/components/BentoGrid";

export default function OmOssPage() {
    return (
        <div className="min-h-screen bg-white font-sans text-foreground overflow-x-hidden">
            <Navbar />

            {/* Hero Split - Top Aligned */}
            <section className="min-h-screen flex items-center relative py-32 lg:py-0">
                {/* Decorative Corner Blob */}
                <div className="absolute top-0 right-0 w-[300px] h-[350px] bg-primary/5 rounded-bl-[100px] -z-10" />

                <div className="w-full flex flex-col lg:flex-row items-center">
                    {/* LEFT: Text Content - Massive padding to center-left float */}
                    <div className="lg:w-[55%] pl-8 lg:pl-32 xl:pl-48 pr-8 lg:pr-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="max-w-xl"
                        >
                            {/* Main Headline - Elegant & Big */}
                            <h1 className="text-5xl md:text-6xl/tight font-medium text-stone-900 mb-8 tracking-tight">
                                Vi städar inte bara.
                                <br />
                                <span className="text-stone-900">Vi skapar trivsel.</span>
                            </h1>

                            {/* Description - Clean sans serif */}
                            <p className="text-lg text-stone-600 leading-relaxed mb-6 max-w-md">
                                Treda Städ grundades med en enkel vision: att erbjuda städning som känns personlig, trygg och proffsig.
                            </p>
                            <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-md">
                                Vi använder modern teknik för bokning men gammaldags omsorg i utförandet.
                            </p>

                            {/* Buttons */}
                            <div className="flex items-center gap-4 mb-8">
                                <Button size="lg" className="rounded-full px-8 h-12 shadow-lg hover:shadow-primary/25 transition-all">
                                    Få prisförslag
                                </Button>
                                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 border-stone-200 hover:bg-stone-50 text-stone-600">
                                    Läs mer
                                </Button>
                            </div>

                            {/* Wavy Line - Connecting from text */}
                            <div className="mt-16 w-full max-w-md hidden lg:block relative h-[150px]">
                                <WavyConnector className="w-full h-full text-primary opacity-60 absolute top-0 left-0" />
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT: Image Section */}
                    <div className="lg:w-[45%] px-8 lg:px-0 lg:pr-8 xl:pr-16 relative mt-12 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative max-w-[400px] lg:max-w-[480px] ml-auto lg:mr-auto"
                        >
                            {/* Green Background Box - Offset */}
                            <div className="absolute -top-8 -right-8 w-full h-[110%] bg-primary/10 rounded-[32px]" />

                            {/* Image Container */}
                            <div className="relative aspect-[4/5] w-full bg-stone-200 shadow-sm z-10 rounded-[32px] overflow-hidden">
                                <Image
                                    src="/images/closeup-unrecognizable-person-cleaning-door-handle.webp"
                                    alt="Treda Städ professional cleaning"
                                    fill
                                    className="object-cover opacity-90 hover:opacity-100 transition-opacity duration-700"
                                    sizes="(max-width: 1024px) 100vw, 480px"
                                    priority
                                />
                            </div>

                            {/* Floating Card - Signature style */}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                                className="absolute top-[40%] -left-16 bg-white py-4 px-5 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-stone-50 z-20 max-w-[200px]"
                            >
                                <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-2 font-bold">Nöjd-Kund-Garanti</p>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Shield className="w-4 h-4" />
                                    </div>
                                    <p className="text-xs font-medium text-stone-800">
                                        100% Garanterat
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Bento Grid Section */}
            <BentoGrid />

            {/* Bottom Spacing */}
            <div className="h-24"></div>
        </div>
    );
}
