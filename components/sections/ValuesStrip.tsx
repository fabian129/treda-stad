"use client";

import { Leaf, Clock, ShieldCheck, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export function ValuesStrip() {
    const values = [
        { icon: Leaf, label: "Miljövänligt", desc: "Svanen-märkta medel" },
        { icon: Clock, label: "Tidseffektivt", desc: "Vi håller alltid tiden" },
        { icon: ShieldCheck, label: "Trygghet", desc: "Försäkrad & kollektivavtal" },
        { icon: MapPin, label: "Lokalt", desc: "Vi kan ditt område" },
    ];

    return (
        <section className="py-12 bg-white border-y border-stone-100">
            <div className="mx-auto max-w-[1240px] px-6">
                <div className="flex flex-wrap items-center justify-center md:justify-between gap-8 md:gap-4">
                    {values.map((item, idx) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 min-w-[200px]"
                        >
                            <div className="w-12 h-12 rounded-full border border-stone-100 bg-stone-50 flex items-center justify-center text-primary shrink-0">
                                <item.icon className="w-5 h-5" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="font-bold text-foreground text-sm uppercase tracking-wide">{item.label}</h4>
                                <p className="text-sm text-secondary">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
