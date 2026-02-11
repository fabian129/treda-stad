"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { GridPattern } from "@/components/zaitex/grid-pattern";
import { AmbientGlow } from "@/components/zaitex/ambient-glow";
import { OrganicBlob } from "@/components/decorations/OrganicBlob";
import { NoiseTexture } from "@/components/decorations/NoiseTexture";
import { ShieldCheck, ChevronRight, Mail, Phone, Globe } from "lucide-react";

export default function PrivacyPolicyPage() {
    const sections = [
        {
            title: "1. VARIFRÅN SAMLAR VI IN PERSONUPPGIFTER?",
            subtitle: "Uppgifter du lämnar själv",
            content: "Vi samlar in personuppgifter när du:",
            list: [
                "gör en bokning,",
                "kontaktar oss via telefon, mejl eller formulär,",
                "ingår avtal,",
                "skapar konto eller använder våra digitala tjänster."
            ],
            extraTitle: "Uppgifter vi hämtar från tredje part",
            extra: "Vi kan hämta kompletterande information från offentliga register (t.ex. adressuppdatering) för att säkerställa korrekta kunduppgifter."
        },
        {
            title: "2. VILKA PERSONUPPGIFTER BEHANDLAR VI?",
            content: "Vi behandlar endast de uppgifter som behövs för att kunna:",
            list: [
                "ta emot och administrera bokningar,",
                "utföra beställda tjänster,",
                "fakturera och hantera betalningar,",
                "kommunicera med dig,",
                "uppfylla våra rättsliga skyldigheter."
            ],
            extraTitle: "Exempel på personuppgifter:",
            extraList: [
                "Namn, adress, personnummer (vid RUT-hantering), telefonnummer och e-post.",
                "Portkod, instruktioner och uppgifter kopplade till din bostad.",
                "Köphistorik och bokningsinformation.",
                "Betalningsuppgifter och fakturaunderlag.",
                "Kommunikation med kundservice."
            ]
        },
        {
            title: "3. VEM DELAR VI DINA PERSONUPPGIFTER MED?",
            content: "Vi säljer aldrig dina uppgifter. Däremot kan we behöva dela dem med följande kategorier av mottagare:",
            subtitle: "Tjänsteleverantörer",
            extra: "För att leverera våra hushållsnära tjänster kan vi behöva dela nödvändiga uppgifter med:",
            extraList: [
                "boknings- och systemleverantörer,",
                "leverantörer av fakturering, ekonomi och betalningslösningar,",
                "IT och driftleverantörer."
            ],
            footer: "De får endast behandla personuppgifter enligt våra instruktioner och aldrig använda dem för egna ändamål.",
            secondSubtitle: "Myndigheter",
            secondExtra: "Vi delar uppgifter när lag kräver det, exempelvis med Skatteverket för RUT-avdrag."
        },
        {
            title: "4. DINA RÄTTIGHETER",
            content: "Du har rättigheter enligt GDPR och vi hjälper dig gärna att utöva dem.",
            subsections: [
                {
                    title: "Rätt till tillgång",
                    content: "Du kan begära ett registerutdrag för att se vilka uppgifter vi behandlar om dig."
                },
                {
                    title: "Rätt till rättelse",
                    content: "Om något är felaktigt eller ofullständigt kan du begära att vi rättar uppgifterna."
                },
                {
                    title: "Rätt till radering",
                    content: "Du kan begära att vi raderar dina uppgifter. Observera att vissa uppgifter måste sparas enligt lag (t.ex. bokföringsregler)."
                },
                {
                    title: "Rätt att invända mot direktmarknadsföring",
                    content: "Du kan när som helst avregistrera dig från våra utskick genom att kontakta oss eller använda avregistreringslänkar."
                }
            ]
        },
        {
            title: "5. HUR LÄNGE SPARAR VI DINA UPPGIFTER?",
            content: "Vi sparar personuppgifter så länge det krävs för att:",
            list: [
                "uppfylla avtal med dig,",
                "kunna leverera tjänster,",
                "uppfylla skyldigheter enligt lag."
            ],
            extraTitle: "Exempel:",
            extraList: [
                "Bokföringslagen kräver att vissa uppgifter sparas i sju år.",
                "Uppgifter kopplade till RUT-hantering sparas enligt Skatteverkets riktlinjer."
            ],
            footer: "När uppgifterna inte längre behövs raderas de på ett säkert sätt."
        },
        {
            title: "6. KONTAKTUPPGIFTER",
            content: "Har du frågor om hur vi hanterar personuppgifter är du alltid välkommen att kontakta oss:",
            contactInfo: [
                { icon: <Mail className="w-5 h-5" />, label: "Mejl", value: "info@treda.se" },
                { icon: <Phone className="w-5 h-5" />, label: "Telefon", value: "040-817 87" }
            ],
            footer: "Om du är missnöjd med hur vi behandlar dina uppgifter har du rätt att lämna klagomål till Integritetsskyddsmyndigheten (IMY): www.imy.se"
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
                        className="top-1/4 -right-48 opacity-[0.05] w-[600px] h-[600px]"
                    />
                    <OrganicBlob
                        className="absolute top-[15%] -right-[10%] w-[500px] h-[500px] opacity-[0.03] -rotate-12"
                        variant="secondary"
                    />
                    <OrganicBlob
                        className="absolute bottom-[20%] -left-[10%] w-[600px] h-[600px] opacity-[0.03] rotate-45"
                        variant="primary"
                    />

                    <div className="container mx-auto max-w-4xl relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-center lg:text-left"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white/50 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider mb-6 text-primary">
                                <ShieldCheck className="w-3 h-3" /> Trygghet & Integritet
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                                Integritets<span className="text-primary">policy</span>
                            </h1>
                            <div className="prose prose-stone prose-lg max-w-none text-stone-600 leading-relaxed">
                                <p className="mb-4">
                                    Det är viktigt för oss att du känner dig trygg när du anlitar Treda Städ AB.
                                    Här förklarar vi hur vi samlar in, behandlar och skyddar dina personuppgifter. Vi säljer aldrig
                                    personuppgifter till andra företag.
                                </p>
                                <p>
                                    Personuppgifter är all information som direkt eller indirekt
                                    kan kopplas till dig som person, exempelvis namn, adress, telefonnummer, e-postadress och
                                    information om de tjänster du använder hos oss. Vi säkerställer alltid att dina uppgifter
                                    hanteras på ett säkert sätt och i enlighet med GDPR, våra interna rutiner och gällande
                                    lagstiftning.
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
                                        {section.subtitle && (
                                            <h3 className="text-lg font-bold text-stone-800">{section.subtitle}</h3>
                                        )}

                                        {section.content && (
                                            <p className="text-stone-600 text-lg leading-relaxed">
                                                {section.content}
                                            </p>
                                        )}

                                        {section.list && (
                                            <ul className="space-y-3">
                                                {section.list.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-4 text-stone-600 text-lg">
                                                        <ChevronRight className="w-5 h-5 text-primary mt-1 shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {section.extraTitle && (
                                            <h3 className="text-lg font-bold text-stone-800 pt-4">{section.extraTitle}</h3>
                                        )}

                                        {section.extra && (
                                            <p className="text-stone-600 text-lg leading-relaxed">
                                                {section.extra}
                                            </p>
                                        )}

                                        {section.extraList && (
                                            <ul className="space-y-3">
                                                {section.extraList.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-4 text-stone-600 text-lg">
                                                        <ChevronRight className="w-5 h-5 text-stone-300 mt-1 shrink-0" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {section.secondSubtitle && (
                                            <h3 className="text-lg font-bold text-stone-800 pt-6">{section.secondSubtitle}</h3>
                                        )}

                                        {section.secondExtra && (
                                            <p className="text-stone-600 text-lg leading-relaxed">
                                                {section.secondExtra}
                                            </p>
                                        )}

                                        {section.subsections && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                                                {section.subsections.map((sub, i) => (
                                                    <div key={i} className="p-6 rounded-2xl bg-stone-50 border border-stone-100 hover:border-primary/20 transition-colors">
                                                        <h4 className="font-bold text-stone-900 mb-2">{sub.title}</h4>
                                                        <p className="text-stone-600 text-sm leading-relaxed">{sub.content}</p>
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
                                            <p className="text-stone-500 text-base leading-relaxed pt-6 border-t border-stone-50">
                                                {section.footer}
                                            </p>
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
