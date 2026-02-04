"use client";

import { motion } from "framer-motion";
import { Sparkles, Wind, Briefcase, Zap, ArrowUpRight } from "lucide-react";

export function ForetagServices() {
    const services = [
        {
            icon: Sparkles,
            title: "Daglig Städning",
            desc: "Det löpande underhållet som håller kontoret representativt. Dammning, golv, pentry och toaletter.",
            color: "bg-primary"
        },
        {
            icon: Wind,
            title: "Fönsterputs",
            desc: "Kristallklart resultat på alla höjder. Vi har certifiering för lift och höghöjdsarbete.",
            color: "bg-primary"
        },
        {
            icon: Briefcase,
            title: "Förbrukningsmaterial",
            desc: "Vi fyller på papper, tvål och kaffe innan det tar slut. Ni slipper lagerhållning och beställningar.",
            color: "bg-primary"
        },
        {
            icon: Zap,
            title: "Golvvård",
            desc: "Djuprengöring, polering och behandling av alla typer av golv. Förlänger livslängden markant.",
            color: "bg-primary"
        }
    ];

    return (
        <section className="py-32 px-6 bg-[#0A1A15] text-white overflow-hidden relative">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-[1200px] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold mb-6"
                        >
                            En helhetslösning. <br />
                            <span className="text-primary">Inga kompromisser.</span>
                        </motion.h2>
                        <p className="text-lg text-white/60 leading-relaxed">
                            Från dagligt underhåll till specialtjänster. Vi skräddarsyr ett upplägg som passar just era lokaler och arbetstider.
                        </p>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="h-14 px-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm text-white font-medium transition-all"
                    >
                        Se alla våra tjänster
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/[0.03] border border-white/10 p-10 rounded-[40px] hover:bg-white/[0.06] transition-colors overflow-hidden"
                        >
                            <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg`}>
                                <service.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                            <p className="text-white/50 leading-relaxed text-lg mb-8 max-w-sm">
                                {service.desc}
                            </p>

                            <div className="flex justify-end">
                                <button className="h-12 px-6 rounded-full border border-white/20 flex items-center gap-2 group-hover:bg-primary group-hover:border-primary group-hover:text-stone-900 transition-all text-sm font-bold tracking-wide">
                                    <span>Få Offert</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className={`absolute -bottom-20 -right-20 w-60 h-60 ${service.color} opacity-0 group-hover:opacity-20 blur-[80px] transition-opacity duration-700 pointer-events-none`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
