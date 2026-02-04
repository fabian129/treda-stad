"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export function ForetagStats() {
    return (
        <section className="py-32 px-6">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* LEFT: Editorial Text */}
                    <div className="flex-1">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-wider uppercase text-xs mb-6 block"
                        >
                            Recognition & Impact
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl/tight font-bold text-stone-900 mb-8"
                        >
                            Mer än bara städning. <br />
                            <span className="text-stone-400">En strategisk partner.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="text-lg text-stone-600 leading-relaxed mb-10 max-w-lg"
                        >
                            Vi ser städning som en investering i er arbetsmiljö. Genom att kombinera personligt bemötande med skalbar logistik hjälper vi företag att växa utan att tänka på lokalvård.
                        </motion.p>

                        <div className="space-y-4">
                            {[
                                "Dedikerad kontaktperson för varje kund",
                                "Månadsuppföljning och kvalitetsrapporter",
                                "Flexibla avtal utan långa bindningstider"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 text-stone-700 font-medium"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                    {item}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Image & Stats Card */}
                    <div className="flex-1 relative w-full">
                        {/* Main Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[32px] overflow-hidden"
                        >
                            <Image
                                src="/images/foretag/modern-office-empty.webp"
                                alt="Modern office environment"
                                fill
                                className="object-cover"
                            />
                            {/* Gradient Overlay for text readability if needed, though clean is better */}
                            <div className="absolute inset-0 bg-stone-900/10" />
                        </motion.div>

                        {/* Floating Stats Card - Bottom Left */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="absolute bottom-8 left-8 right-8 md:right-auto md:w-[320px] bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-stone-100"
                        >
                            <h4 className="text-sm font-bold uppercase tracking-wider text-stone-400 mb-6">Treda Impact 2024</h4>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-baseline justify-between mb-1">
                                        <span className="text-stone-600 font-medium">Kundnöjdhet</span>
                                        <span className="text-3xl font-bold text-stone-900">98%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[98%] rounded-full" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-baseline justify-between mb-1">
                                        <span className="text-stone-600 font-medium">Inställelsetid</span>
                                        <span className="text-3xl font-bold text-stone-900">&lt; 2h</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-stone-800 w-[95%] rounded-full" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
