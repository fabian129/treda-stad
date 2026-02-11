"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { GridPattern } from "@/components/zaitex/grid-pattern";
import { AmbientGlow } from "@/components/zaitex/ambient-glow";
import { OrganicBlob } from "@/components/decorations/OrganicBlob";
import { NoiseTexture } from "@/components/decorations/NoiseTexture";
import { FileText, ChevronRight } from "lucide-react";

export default function TermsPage() {
    const sections = [
        {
            title: "1. TREDAS TJÄNSTER",
            content: "Tjänsterna utförs enligt avtalad prislista eller abonnemang. Treda utför arbetet fackmannamässigt och med utbildad personal. Vid behov kan Treda använda underleverantörer och ansvarar då som för egen personal."
        },
        {
            title: "2. KUNDENS ANSVAR",
            content: "Kunden ska:",
            list: [
                "ge Treda tillgång till bostaden och den utrustning som krävs,",
                "informera om ömtåliga eller värdefulla föremål och andra relevanta förhållanden,",
                "erbjuda en trygg och säker arbetsmiljö,",
                "lämna korrekta uppgifter om uppdragets omfattning."
            ],
            extra: "Kunden ansvarar för sin egen hemförsäkring."
        },
        {
            title: "3. OMBOKNING OCH AVBOKNING",
            list: [
                "Om- eller avbokning senast 5 vardagar innan är kostnadsfri.",
                "Ombokning senare än så: 12,5 % debiteras.",
                "Avbokning senare än så: 25 % debiteras."
            ],
            extra: "Avgifter är inte RUT-berättigade."
        },
        {
            title: "4. ABONNEMANG",
            content: "Vid abonnemang kan Kunden spara timmar vid avbokningar i en timbank enligt avtalade begränsningar. Sparade timmar gäller i upp till 12 månader och förfaller därefter."
        },
        {
            title: "5. RUT- OCH ROT-AVDRAG",
            content: "Treda sköter ansökan om RUT/ROT enligt gällande regler. Kunden är ansvarig för att ha rätt till avdraget. Om Skatteverket avslår ansökan behöver Kunden betala mellanskillnaden."
        },
        {
            title: "6. BETALNING",
            content: "Fakturering sker i efterskott. Vid utebliven betalning kan Treda:",
            list: [
                "ta ut dröjsmålsränta,",
                "ta ut lagstadgade avgifter,",
                "pausa eller stoppa tjänster tills full betalning skett."
            ],
            extra: "Invändningar mot faktura ska göras senast på förfallodagen."
        },
        {
            title: "7. FEL OCH REKLAMATIONER",
            content: "Fel ska reklameras inom 48 timmar efter utförd tjänst. Treda får först försöka rätta till felet. Prisavdrag kan bli aktuellt om avhjälpande inte är möjligt. Kunden ska kunna visa att Treda orsakat eventuell skada."
        },
        {
            title: "8. ANSVARSBEGRÄNSNING",
            content: "Treda ansvarar endast för direkta skador orsakade av Treda och högst upp till ett (1) prisbasbelopp per år. Ansvarsbegränsningen gäller inte vid personskador eller vid grov vårdslöshet."
        },
        {
            title: "9. AVTALSTID OCH UPPSÄGNING",
            content: "Avtalet gäller tills vidare med en månads uppsägningstid, om inte annat avtalats. Vid uppsägning har Kunden två månader på sig att använda eventuella timmar i timbanken."
        },
        {
            title: "10. PERSONUPPGIFTER",
            content: "Treda behandlar personuppgifter för att kunna leverera Tjänsterna. Information om detta finns i Tredas integritetspolicy."
        },
        {
            title: "11. TVIST",
            content: "Tvister hanteras enligt svensk lag. Kunden kan vända sig till Allmänna Reklamationsnämnden (ARN). Tingsrätten på Kundens hemort är behörig domstol."
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
                        className="absolute top-[10%] -left-[10%] w-[500px] h-[500px] opacity-[0.03] rotate-12"
                        variant="primary"
                    />
                    <OrganicBlob
                        className="absolute top-[40%] -right-[5%] w-[400px] h-[400px] opacity-[0.02] -rotate-12"
                        variant="secondary"
                    />
                    <OrganicBlob
                        className="absolute bottom-[10%] -left-[5%] w-[600px] h-[600px] opacity-[0.03]"
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
                                <FileText className="w-3 h-3" /> Juridiskt Dokument
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-[1.1]">
                                Allmänna <span className="text-primary">villkor</span> privatpersoner
                            </h1>
                            <div className="prose prose-stone prose-lg max-w-none text-stone-600 leading-relaxed">
                                <p>
                                    Dessa villkor gäller mellan Treda Städ AB ("Treda") och dig som privatkund ("Kunden") när
                                    du beställer hushållsnära tjänster såsom städning, fönsterputs, eller liknande tjänster
                                    ("Tjänsterna"). Beställning sker via webb, app, telefon eller skriftligt avtal. Tillsammans med
                                    dessa villkor utgör beställningen det avtal som gäller mellan parterna ("Avtalet").
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* CONTENT SECTION */}
                <section className="pb-32 px-6">
                    <div className="container mx-auto max-w-4xl">
                        <div className="bg-white rounded-[2.5rem] border border-stone-100 shadow-xl shadow-stone-200/50 p-8 md:p-16 space-y-12">
                            {sections.map((section, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="border-b border-stone-50 last:border-0 pb-12 last:pb-0"
                                >
                                    <h2 className="text-xl font-bold text-stone-900 mb-6 flex items-center gap-3">
                                        <span className="w-1.5 h-6 bg-primary rounded-full hidden md:block" />
                                        {section.title}
                                    </h2>

                                    <div className="space-y-4">
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

                                        {section.extra && (
                                            <p className="text-stone-600 text-lg leading-relaxed font-medium pt-2 italic">
                                                {section.extra}
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
