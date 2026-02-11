"use client";

import { use } from "react";
import { Navbar } from "@/components/Navbar";
import { OrganicBlob } from "@/components/decorations/OrganicBlob";
import { SectionBreaker } from "@/components/sections/SectionBreaker";
import { ValuesStrip } from "@/components/sections/ValuesStrip";
import { ServicesTabs } from "@/components/sections/ServicesTabs";
import { NoiseTexture } from "@/components/decorations/NoiseTexture";
import { WavyConnector } from "@/components/ui/WavyConnector";
import { Hero } from "@/components/sections/Hero";
import { ArrowRight, Shield, Handshake, GraduationCap, UserCheck, Award } from "lucide-react";
import Link from 'next/link';

interface PageProps {
    params: Promise<{
        city: string;
    }>;
}

export default function LocationPage({ params }: PageProps) {
    const { city } = use(params);

    return (
        <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">

            <Navbar />

            {/* Hero Section with City */}
            <Hero city={city} />

            {/* Services Section - Interactive Tabs with City */}
            <ServicesTabs city={city} />

            {/* [NEW] The Pause - Breaker Section */}
            <SectionBreaker
                quote="Det är detaljerna som gör helheten."
                author="Treda Städ"
                imageSrc="/images/marble-bg.webp"
            />

            {/* Feature / Filler Section (Creative CTA) */}
            <section className="py-32 px-6 relative overflow-hidden bg-[#1A4D45]">
                {/* Subtle Atmosphere */}
                <OrganicBlob className="top-[-20%] left-[-10%] w-[700px] h-[700px] opacity-25" variant="secondary" />

                <div className="mx-auto max-w-[1000px] text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                        Mer tid för det <br />
                        <span className="text-primary">du älskar.</span>
                    </h2>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
                        Lämna dammsugaren till oss. Vi skapar utrymme för familj, hobbys och återhämtning i din vardag.
                    </p>

                    <div className="p-10 bg-white/[0.03] backdrop-blur-md rounded-[40px] shadow-2xl border border-white/10 inline-block hover:bg-white/[0.06] transition-colors group">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                            <div className="text-left">
                                <h4 className="text-2xl font-bold mb-2 text-white">Boka Prova-På Städning</h4>
                                <p className="text-white/75">Ingen bindningstid. 20% rabatt första gången.</p>
                            </div>
                            <Link href="/kontakt" className="h-14 px-8 rounded-full border border-white/20 flex items-center gap-2 group-hover:bg-primary group-hover:border-primary group-hover:text-stone-900 transition-all text-lg font-bold tracking-wide text-white">
                                <span>Boka Nu</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* [NEW] Filler Section */}
            <ValuesStrip />

            {/* Trust / Cleaner Section */}
            <section className="py-24 px-6 bg-white relative overflow-hidden">
                <NoiseTexture opacity={0.03} />
                {/* Atmosphere - Subtle Green Glow */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
                <div className="mx-auto max-w-[1240px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 md:order-1">
                            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-900/10 max-w-md mx-auto relative z-10 border border-stone-100">
                                <img src="/images/cleaner.webp" alt="Anna, Treda Städ" className="w-full h-full object-cover" />
                            </div>
                            {/* Decorative elements - Bright Mode */}
                            <div className="absolute top-10 -left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl -z-0" />
                            <div className="absolute bottom-10 -right-10 w-32 h-32 bg-stone-100 rounded-full blur-xl -z-0" />
                            {/* Wavy Connector - Decorative Curve (behind image, to the left) */}
                            <div className="absolute bottom-16 -left-16 w-[300px] h-[120px] hidden lg:block z-0">
                                <WavyConnector className="w-full h-full text-primary opacity-70" />
                            </div>
                        </div>

                        <div className="order-1 md:order-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-wider text-primary mb-6">
                                <Shield className="w-4 h-4" />
                                <span>Trygghet i fokus</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-stone-900">
                                Vi är ansiktet <span className="text-primary">utåt.</span>
                            </h2>
                            <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                                <p>
                                    Att släppa in någon i sitt hem handlar om förtroende. Därför är alla våra medarbetare
                                    noggrant rekryterade, bakgrundskontrollerade och utbildade i vår städmetodik.
                                </p>
                                <p>
                                    Vi bär alltid uniform, legitimation och ett leende. Vi tror att glada medarbetare
                                    ger ett bättre resultat.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100 hover:border-primary/30 transition-colors group relative">
                                    <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                        <Handshake className="w-4 h-4" />
                                    </div>
                                    <h4 className="font-bold text-primary mb-1">Kollektivavtal</h4>
                                    <p className="text-sm text-stone-500">Självklart för oss.</p>
                                </div>
                                <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100 hover:border-primary/30 transition-colors group relative">
                                    <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                        <GraduationCap className="w-4 h-4" />
                                    </div>
                                    <h4 className="font-bold text-primary mb-1">Utbildad Personal</h4>
                                    <p className="text-sm text-stone-500">Certifierade städare.</p>
                                </div>
                                <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100 hover:border-primary/30 transition-colors group relative">
                                    <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                        <UserCheck className="w-4 h-4" />
                                    </div>
                                    <h4 className="font-bold text-primary mb-1">Alltid samma personal</h4>
                                    <p className="text-sm text-stone-500">För din trygghet.</p>
                                </div>
                                <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100 hover:border-primary/30 transition-colors group relative">
                                    <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                                        <Award className="w-4 h-4" />
                                    </div>
                                    <h4 className="font-bold text-primary mb-1">Via Almega</h4>
                                    <p className="text-sm text-stone-500">Auktoriserat Serviceföretag.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div >
    );
}
