"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, HeartHandshake } from "lucide-react";

const features = [
    {
        icon: Truck,
        title: "Alltid på plats",
        description: "Vi kommer när vi ska. Punktlighet är en hederssak för oss och en trygghet för dig."
    },
    {
        icon: ShieldCheck,
        title: "Kvalitetssäkrat",
        description: "Vi följer strikta rutiner och checklistor. Missar vi något? Då åtgärdar vi det direkt."
    },
    {
        icon: HeartHandshake,
        title: "Personlig Service",
        description: "Samma ansikte som hälsar på dig. Vi tror på relationer, inte bara transaktioner."
    }
];

export function FeatureThreeCol() {
    return (
        <section className="py-24 px-6 bg-stone-50/50">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-[0.2em] text-xs uppercase block mb-4"
                    >
                        Vårt Löfte
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-stone-900"
                    >
                        Trygghet i varje steg
                    </motion.h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.2 }}
                            className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-stone-100"
                        >
                            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                                <feature.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-stone-900 mb-3">{feature.title}</h3>
                            <p className="text-stone-500 leading-relaxed text-sm">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
