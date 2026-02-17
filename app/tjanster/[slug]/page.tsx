"use client";

import Image from "next/image";
import Link from "next/link";

import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { InteractiveTimeline } from "@/components/InteractiveTimeline";
import { use, useRef } from "react";
import { GridPattern } from "@/components/zaitex/grid-pattern";
import { AmbientGlow } from "@/components/zaitex/ambient-glow";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function ServicePage({ params }: PageProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: lineRef,
        offset: ["start 90%", "end 50%"]
    });

    const scaleY = scrollYProgress;

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
                <section className="relative h-[90vh] min-h-[500px] md:min-h-[700px] w-full overflow-hidden flex items-center">

                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            priority
                            className="object-cover"
                            sizes="100vw"
                        />
                        {/* Dark Gradient Overlay for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/90 via-stone-900/60 to-black/20" />
                    </div>

                    <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex flex-col justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 items-center">

                            {/* Left: Content */}
                            <div className="text-white space-y-6 md:space-y-8 animate-in fade-in slide-in-from-left-8 duration-700 pt-20 md:pt-0">
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-xs font-medium uppercase tracking-wider mb-4 md:mb-6 text-primary-foreground/90">
                                        <Sparkles className="w-3 h-3 text-primary" /> Tjänst
                                    </div>
                                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6 leading-[1.1]">
                                        {service.title}
                                    </h1>
                                    <p className="text-stone-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-lg mb-6 md:mb-8">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4">
                                    <Button size="lg" className="h-12 md:h-14 px-8 text-base md:text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 w-full sm:w-auto" asChild>
                                        <Link href={`/kontakt?service=${service.id}`}>
                                            Få offert
                                        </Link>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="h-12 md:h-14 px-8 text-base md:text-lg rounded-full bg-white/5 border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm w-full sm:w-auto"
                                        onClick={() => sectionRef.current?.scrollIntoView({ behavior: "smooth" })}
                                    >
                                        Läs mer
                                    </Button>
                                </div>

                                <div className="flex flex-wrap gap-2 md:gap-3 pt-2">
                                    {[
                                        "Alltid samma personal",
                                        "Nöjd-Kund-Garanti",
                                        "Ansvarsförsäkring"
                                    ].map((badge, i) => (
                                        <div key={i} className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs md:text-sm font-medium text-stone-100">
                                            <CheckCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                                            {badge}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Glass Card */}
                            <div className="hidden lg:block animate-in fade-in slide-in-from-right-8 duration-1000 delay-200 will-change-transform transform-gpu">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
                                    {/* Abstract Decor */}
                                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/30 rounded-full blur-[80px] transform-gpu" />

                                    <div className="relative space-y-10">


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

                                        {(service as any).rutText && (
                                            <div className="py-4 px-4 rounded-xl bg-white/5 border border-white/10">
                                                <p className="text-stone-300 text-xs leading-relaxed">
                                                    <span className="text-primary font-bold uppercase tracking-wider block mb-1">RUT-avdrag</span>
                                                    {(service as any).rutText}
                                                </p>
                                            </div>
                                        )}

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
                <section ref={sectionRef} className="py-20 md:py-32 px-4 md:px-6 bg-stone-50 min-h-[80vh] flex items-center relative overflow-hidden">
                    {/* Background Atmosphere */}
                    <GridPattern
                        width={60}
                        height={60}
                        className="opacity-[0.03] text-stone-900"
                    />
                    <AmbientGlow
                        variant="primary"
                        className="-top-24 -left-24 opacity-[0.03]"
                    />
                    <AmbientGlow
                        variant="primary"
                        className="bottom-0 -right-24 opacity-[0.05] h-[600px] w-[600px]"
                    />

                    <div className="container mx-auto max-w-[1400px] w-full relative z-10">

                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="inline-flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] mb-6"
                        >
                            <motion.span
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 1, ease: "circOut" }}
                                className="w-12 h-[1px] bg-primary origin-left"
                            />
                            Varför Treda
                        </motion.div>
                        <h2 className="text-3xl md:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-8 md:mb-12">
                            Varför välja just T<span className="text-primary">reda</span><br />för {(service as any).shortTitle || service.title.toLowerCase()} i Malmö?
                        </h2>

                        <motion.div
                            ref={lineRef}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="space-y-8 md:space-y-10 pl-6 md:pl-12 relative"
                        >
                            {/* Static Background Line */}
                            <div className="absolute left-[-2px] top-[-8px] bottom-[-40px] w-[2px] bg-primary/20" />

                            {/* Animated Progress Line */}
                            <motion.div
                                style={{ scaleY }}
                                className="absolute left-[-2px] top-[-8px] bottom-[-40px] w-[2px] bg-primary origin-top will-change-transform transform-gpu"
                            />
                            <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-2xl">
                                Vi på Treda Städ förstår att varje hem och företag är unikt. Därför anpassar vi alltid vår {service.title.toLowerCase()} efter dina specifika behov, så att du kan fokusera på det som är viktigt.
                            </p>

                            {(service as any).longDescription && (
                                <p className="text-lg md:text-xl text-secondary leading-relaxed max-w-2xl">
                                    {(service as any).longDescription}
                                </p>
                            )}
                        </motion.div>

                        {/* Grid - Image Focused (Compact version) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_2fr_1fr] gap-4 mt-12 md:mt-16">

                            {/* Image Card 1: Clean Image */}
                            <div className="group relative h-[200px] md:h-[220px] rounded-2xl overflow-hidden cursor-pointer">
                                <Image
                                    src="/images/closeup-unrecognizable-person-cleaning-door-handle.webp"
                                    alt="Mer tid för livet"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                />
                            </div>

                            {/* Image Card 2: Clean Image */}
                            <div className="group relative h-[200px] md:h-[220px] rounded-2xl overflow-hidden cursor-pointer">
                                <Image
                                    src="/images/housemaid-opening-door-room-cleaning.webp"
                                    alt="Professionell städning"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                />
                            </div>

                            {/* Card 3: CTA Section (Minimal Style) */}
                            <Link href="/kontakt" className="relative h-[120px] md:h-[220px] md:col-span-1 col-span-2 rounded-2xl bg-primary overflow-hidden flex flex-col justify-center items-center text-center p-5 group cursor-pointer transition-colors hover:bg-primary/90">

                                <div className="flex flex-col items-center gap-4">
                                    <h3 className="text-xl font-bold text-white tracking-wide whitespace-nowrap">
                                        Få Offert
                                    </h3>

                                    <div className="flex justify-center">
                                        <ArrowRight className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-2" />
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </div>
                </section >

                <section className="py-16 md:py-24 bg-stone-100/50">
                    <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                        <div className="text-center mb-10 md:mb-16">
                            <h2 className="text-2xl md:text-4xl font-bold text-stone-900 mb-4">Vanliga frågor</h2>
                            <p className="text-stone-500 text-sm md:text-base">Här har vi samlat svaren på de vanligaste frågorna om {(service as any).shortTitle || service.title.toLowerCase()}.</p>
                        </div>

                        <div className="grid gap-4 md:gap-6">
                            {(service as any).faq?.map((item: any, i: number) => (
                                <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-stone-100 transition-all hover:shadow-md">
                                    <h3 className="text-base md:text-lg font-bold text-stone-900 mb-2 md:mb-3 flex items-start gap-3">
                                        <div className="bg-primary/10 text-primary w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-xs md:text-sm">?</div>
                                        {item.question}
                                    </h3>
                                    <p className="text-sm md:text-base text-stone-600 leading-relaxed pl-9">
                                        {item.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-4 mb-2">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight text-stone-900 leading-[1.1]">
                            En enkel process för<br />
                            <span className="text-primary">en renare vardag.</span>
                        </h2>
                    </div>
                    <InteractiveTimeline serviceId={service.id} steps={(service as any).process} />
                </section>
            </main >
        </div >
    );
}
