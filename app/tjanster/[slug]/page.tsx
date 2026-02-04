"use client";

import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { InteractiveTimeline } from "@/components/InteractiveTimeline";
import { use } from "react";
import Image from "next/image";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function ServicePage({ params }: PageProps) {
    // Unwrap params using React.use() because it's a client component handling a promise prop from Next.js 15
    const resolvedParams = use(params);

    // Find the service based on slug
    const service = services.find((s) => s.id === resolvedParams.slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-stone-50 font-sans">
            <Navbar />

            <main>
                {/* HERO SECTION - The "Underpage" Layout */}
                <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden flex items-center">

                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            priority
                            className="object-cover"
                        />
                        {/* Dark Gradient Overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/60 to-black/20" />
                    </div>

                    <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                            {/* Left: Content */}
                            <div className="text-white space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs font-medium uppercase tracking-wider mb-6 text-primary-foreground/90">
                                        <Sparkles className="w-3 h-3 text-primary" /> Tjänst
                                    </div>
                                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                                        {service.title}
                                    </h1>
                                    <p className="text-stone-300 text-lg lg:text-xl leading-relaxed max-w-lg">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                                        Boka {service.title}
                                    </Button>
                                    <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm">
                                        Kontakta Oss
                                    </Button>
                                </div>
                            </div>

                            {/* Right: Glass Card */}
                            <div className="hidden lg:block animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
                                    {/* Abstract Decor */}
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-[80px]" />

                                    <div className="relative space-y-10">
                                        <div>
                                            <p className="text-stone-400 text-sm uppercase tracking-wider font-semibold mb-2">Prisbild</p>
                                            <p className="text-4xl font-bold text-white">{service.price}</p>
                                        </div>

                                        <div className="space-y-6">
                                            <p className="text-stone-400 text-sm uppercase tracking-wider font-semibold">Detta ingår</p>
                                            <ul className="space-y-4">
                                                {service.perks.map((perk, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-lg text-stone-100">
                                                        <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 border border-primary/30">
                                                            <CheckCircle className="w-3.5 h-3.5 text-primary" />
                                                        </div>
                                                        {perk}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pt-8 border-t border-white/10">
                                            <p className="text-stone-400 text-sm leading-relaxed">
                                                Alla våra uppdrag utförs med "nöjd-kund-garanti".
                                                Vi lämnar inte platsen förrän du är 100% nöjd.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* INFO GRID SECTION */}
                <section className="py-32 px-6 bg-stone-50 min-h-[80vh] flex items-center">
                    <div className="mx-auto max-w-[1400px] w-full">

                        {/* Header Split */}
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-24 items-start">

                            {/* Left: Label & Trust */}
                            <div className="shrink-0 space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/40 border-2 border-stone-50" />
                                        <div className="w-10 h-10 rounded-full bg-primary/70 border-2 border-stone-50" />
                                        <div className="w-10 h-10 rounded-full bg-primary border-2 border-stone-50" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground leading-none mb-1">4.9/5 Betyg</p>
                                        <p className="text-xs text-secondary">Baserat på 500+ uppdrag</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Headline & Intro */}
                            <div className="max-w-3xl">
                                <h2 className="text-4xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-8">
                                    Varför välja just T<span className="text-primary">reda</span> för {service.title.toLowerCase()}?
                                </h2>
                                <p className="text-xl text-secondary leading-relaxed max-w-2xl">
                                    Vi på Treda Städ förstår att varje hem och företag är unikt. Därför anpassar vi alltid vår {service.title.toLowerCase()} efter dina specifika behov, så att du kan fokusera på det som är viktigt.
                                </p>
                            </div>
                        </div>

                        {/* Grid - Image Focused (DevForge Style) */}
                        <div className="grid grid-cols-1 lg:grid-cols-[2fr_2fr_1fr] gap-6">

                            {/* Image Card 1: Clean Image */}
                            <div className="group relative h-[360px] rounded-[2.5rem] overflow-hidden cursor-pointer">
                                <Image
                                    src="/images/woman-digital-disconnecting-home-by-reading-book.webp"
                                    alt="Mer tid för livet"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Image Card 2: Clean Image */}
                            <div className="group relative h-[360px] rounded-[2.5rem] overflow-hidden cursor-pointer">
                                <Image
                                    src="/images/housemaid-opening-door-room-cleaning.webp"
                                    alt="Professionell städning"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Card 3: CTA Section (Minimal "Meet Mentors" Style) */}
                            <div className="relative h-[360px] rounded-[2.5rem] bg-primary overflow-hidden flex flex-col justify-center items-center text-center p-6 group cursor-pointer transition-colors hover:bg-primary/90">

                                <div className="flex flex-col items-center gap-6">
                                    <h3 className="text-2xl font-bold text-white tracking-wide whitespace-nowrap">
                                        Få Offert
                                    </h3>

                                    <div className="flex justify-center">
                                        <ArrowRight className="w-8 h-8 text-white transition-transform duration-300 group-hover:translate-x-2" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4 mb-2">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-stone-900 leading-[1.1]">
                            En enkel process för<br />
                            <span className="text-primary">en renare vardag.</span>
                        </h2>
                    </div>
                    <InteractiveTimeline />
                </section>
            </main>
        </div>
    );
}
