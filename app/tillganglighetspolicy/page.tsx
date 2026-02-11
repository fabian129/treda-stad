"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { GridPattern } from "@/components/zaitex/grid-pattern";
import { AmbientGlow } from "@/components/zaitex/ambient-glow";
import { OrganicBlob } from "@/components/decorations/OrganicBlob";
import { NoiseTexture } from "@/components/decorations/NoiseTexture";
import { Accessibility, ChevronRight, Mail, Phone, AlertCircle, CheckCircle2 } from "lucide-react";

export default function AccessibilityPolicyPage() {
    const sections = [
        {
            title: "1. HUR VI ARBETAR MED TILLGÄNGLIGHET",
            content: "Vi strävar efter att:",
            list: [
                "Använda tydligt och lättförståeligt språk",
                "Ha en logisk och konsekvent struktur på webbplatsen",
                "Använda tillräckliga kontraster mellan text och bakgrund",
                "Säkerställa att webbplatsen fungerar med tangentbordsnavigering",
                "Använda alternativa texter (alt-texter) för bilder",
                "Se till att formulär är tydliga och enkla att använda",
                "Göra webbplatsen responsiv och anpassad för mobil, surfplatta och dator"
            ],
            footer: "Vi testar regelbundet webbplatsens funktionalitet och arbetar kontinuerligt med förbättringar."
        },
        {
            title: "2. KÄNDA BEGRÄNSNINGAR",
            content: "Trots våra ansträngningar kan vissa delar av webbplatsen ännu inte vara fullt tillgängliga. Det kan exempelvis gälla:",
            list: [
                "Äldre dokument eller filer som publicerats innan nuvarande riktlinjer",
                "Vissa tredjepartstjänster eller inbäddade funktioner"
            ],
            footer: "Vi arbetar aktivt med att åtgärda eventuella brister så snart vi blir medvetna om dem."
        },
        {
            title: "3. BEHÖVER DU INFORMATION I ANNAT FORMAT?",
            content: "Om du behöver information från vår webbplats i ett alternativt format, exempelvis:",
            list: [
                "Uppläst innehåll",
                "Större text",
                "Tillgänglig PDF",
                "Annan anpassning"
            ],
            footer: "Är du välkommen att kontakta oss så hjälper vi dig så snabbt som möjligt."
        },
        {
            title: "4. RAPPORTERA BRISTER I TILLGÄNGLIGHET",
            content: "Om du upptäcker något på vår webbplats som inte fungerar ur ett tillgänglighetsperspektiv vill vi gärna att du meddelar oss. Din återkoppling hjälper oss att förbättra upplevelsen för alla."
        },
        {
            title: "5. KONTAKTUPPGIFTER",
            content: "Har du frågor om tillgängligheten på vår webbplats är du alltid välkommen att kontakta oss:",
            contactInfo: [
                { icon: <Mail className="w-5 h-5" />, label: "Mejl", value: "info@treda.se" },
                { icon: <Phone className="w-5 h-5" />, label: "Telefon", value: "040-817 87" }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-stone-50 font-sans text-stone-900 relative overflow-hidden">
            <NoiseTexture opacity={0.02} />
            <Navbar />

            <main className="relative z-10">
                {/* HERO HEADER */}
                <section className="relative pt-40 pb-24 px-6">
                    {/* Background Atmosphere */}
                    <GridPattern
                        width={60}
                        height={60}
                        className="opacity-[0.04] text-stone-900"
                    />
                    <AmbientGlow
                        variant="primary"
                        className="-top-24 -left-24 opacity-[0.07]"
                    />
                    <AmbientGlow
                        variant="accent"
                        className="bottom-0 -right-48 opacity-[0.05] w-[600px] h-[600px]"
                    />
                    <OrganicBlob
                        className="absolute top-[20%] -left-[15%] w-[500px] h-[500px] opacity-[0.03] rotate-45"
                        variant="primary"
                    />
                    <OrganicBlob
                        className="absolute top-[50%] -right-[10%] w-[450px] h-[450px] opacity-[0.02] -rotate-12"
                        variant="secondary"
                    />

                    <div className="container mx-auto max-w-4xl relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-center lg:text-left"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white/50 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider mb-6 text-primary">
                                <Accessibility className="w-3 h-3" /> Inkludering för alla
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                                Tillgänglighets<span className="text-primary">policy</span>
                            </h1>
                            <div className="prose prose-stone prose-lg max-w-none text-stone-600 leading-relaxed">
                                <p className="mb-4 text-xl">
                                    Det är viktigt för oss att alla ska kunna ta del av informationen och tjänsterna på vår webbplats.
                                </p>
                                <p className="mb-4">
                                    Treda Städ AB strävar efter att vår hemsida ska vara tillgänglig och användbar för så många som möjligt, oavsett funktionsförmåga eller tekniska förutsättningar.
                                </p>
                                <p className="font-medium text-stone-900">
                                    Vi arbetar löpande med att förbättra tillgängligheten och följer i möjligaste mån riktlinjerna i Web Content Accessibility Guidelines (WCAG) 2.1 nivå AA.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CONTENT SECTION */}
                <section className="pb-32 px-6">
                    <div className="container mx-auto max-w-4xl">
                        <div className="bg-white rounded-[2.5rem] border border-stone-100 shadow-xl shadow-stone-200/50 p-8 md:p-16 space-y-16">
                            {sections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="border-b border-stone-50 last:border-0 pb-12 last:pb-0"
                                >
                                    <h2 className="text-2xl font-bold text-stone-900 mb-8 flex items-center gap-3">
                                        <span className="w-1.5 h-8 bg-primary rounded-full hidden md:block" />
                                        {section.title}
                                    </h2>

                                    <div className="space-y-6">
                                        {section.content && (
                                            <p className="text-stone-600 text-lg leading-relaxed">
                                                {section.content}
                                            </p>
                                        )}

                                        {section.list && (
                                            <div className="grid grid-cols-1 gap-3">
                                                {section.list.map((item, i) => (
                                                    <div key={i} className="flex items-start gap-4 py-2 border-b border-stone-50 last:border-0">
                                                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                                                        <span className="text-stone-700 text-lg">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {section.contactInfo && (
                                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                                {section.contactInfo.map((info, i) => (
                                                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-stone-50 border border-stone-100">
                                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                            {info.icon}
                                                        </div>
                                                        <div>
                                                            <p className="text-xs text-stone-400 font-medium uppercase tracking-wider">{info.label}</p>
                                                            <p className="text-stone-900 font-bold">{info.value}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {section.footer && (
                                            <div className="flex items-center gap-3 pt-6 mt-6 border-t border-stone-50">
                                                <AlertCircle className="w-5 h-5 text-primary shrink-0" />
                                                <p className="text-stone-600 italic">
                                                    {section.footer}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* FINAL NOTE */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mt-12 text-center text-stone-400 text-sm"
                        >
                            <p>Senast uppdaterad: 11 februari 2026</p>
                            <p>© 2026 Treda Städ AB. Alla rättigheter förbehållna.</p>
                        </motion.div>
                    </div>
                </section>
            </main>
        </div>
    );
}
