"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { services } from "@/lib/data";
import Link from 'next/link';

export function ServicesTabs() {
    const [activeTab, setActiveTab] = useState(services[0].id);

    const activeService = services.find((s) => s.id === activeTab) || services[0];

    return (
        <section className="py-24 md:py-32 px-6 bg-background relative border-t border-border/40" id="services">
            <div className="mx-auto max-w-[1240px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Sticky Menu & Header */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-32">
                            <div className="mb-8">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight leading-[1.1]">
                                    Våra Tjänster
                                </h2>
                                <p className="text-secondary text-lg md:text-xl max-w-md leading-relaxed mb-8">
                                    Vi erbjuder ett komplett utbud av städtjänster för både privatpersoner och företag. Alltid med vår nöjd-kund-garanti.
                                </p>
                            </div>

                            {/* Navigation Menu (Desktop: Tabs) */}
                            <div className="space-y-2 hidden lg:block mb-12">
                                {services.map((service) => (
                                    <button
                                        key={service.id}
                                        onClick={() => setActiveTab(service.id)}
                                        className={cn(
                                            "w-full text-left py-4 px-6 border-l-2 text-lg font-medium transition-all duration-300 rounded-r-xl flex items-center gap-4 group cursor-pointer",
                                            activeTab === service.id
                                                ? "border-transparent bg-primary text-white shadow-lg shadow-primary/25 font-bold"
                                                : "border-transparent hover:border-border text-secondary hover:text-primary hover:bg-primary/5"
                                        )}
                                    >
                                        {service.id === 'hemstadning' ? "Hemstäd i Malmö" :
                                            service.id === 'storstadning' ? "Storstäd i Malmö" :
                                                service.id === 'flyttstadning' ? "Flyttstäd i Malmö" :
                                                    service.id === 'byggstadning' ? "Byggstäd i Malmö" :
                                                        service.id === 'kontorsstad' ? "Kontorsstäd i Malmö" :
                                                            service.id === 'fonsterputs' ? "Fönsterputs i Malmö" :
                                                                service.title}
                                    </button>
                                ))}
                            </div>


                        </div>
                    </div>

                    {/* Right Column: Active Card (Desktop) / Stack (Mobile) */}
                    <div className="lg:col-span-8">

                        {/* Desktop View: Animated Tab Content */}
                        <div className="hidden lg:block relative min-h-[600px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeService.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="group rounded-[2.5rem] bg-white overflow-hidden shadow-2xl shadow-black/5 flex flex-col border border-border/60 h-full will-change-transform transform-gpu"
                                >
                                    <div className="relative h-80 w-full overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 opacity-20" />
                                        <Image
                                            src={activeService.image}
                                            alt={activeService.title}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            className="object-cover transform scale-105"
                                            priority // Preload active tab image
                                            unoptimized
                                        />
                                        <div className="absolute top-6 right-6 z-20">
                                            <span className="inline-flex items-center rounded-full bg-white/95 backdrop-blur-sm px-5 py-2 text-sm font-bold text-primary shadow-sm">
                                                {activeService.price}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-12 flex flex-col flex-grow">
                                        <div className="mb-8">
                                            <h3 className="text-4xl font-bold text-foreground mb-4">{activeService.title}</h3>
                                            <p className="text-secondary text-xl leading-relaxed max-w-2xl">
                                                {activeService.description}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10">
                                            {activeService.perks.map((perk, i) => (
                                                <div key={i} className="flex items-center gap-3 text-secondary/90 text-lg">
                                                    <CheckCircle className="w-6 h-6 text-primary shrink-0" /> <span>{perk}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-auto pt-8 border-t border-border/10 flex items-center justify-between">
                                            <span className="font-bold text-primary text-base uppercase tracking-wider">Läs Mer Om {activeService.title}</span>
                                            <Link href={`/tjanster/${activeService.id}`} className="w-14 h-14 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors border border-border/50">
                                                <ArrowRight className="w-7 h-7" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Mobile View: Vertical Stack */}
                        <div className="lg:hidden space-y-8">
                            {services.map((service) => (
                                <div key={service.id} className="group rounded-3xl bg-white overflow-hidden shadow-lg shadow-black/5 flex flex-col border border-border/60">
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10 opacity-0 group-hover:opacity-20 transition-opacity" />
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover"
                                            unoptimized
                                        />
                                        <div className="absolute top-4 right-4 z-20">
                                            <span className="inline-flex items-center rounded-full bg-white/95 backdrop-blur-sm px-3 py-1 text-xs font-bold text-primary shadow-sm">
                                                {service.price}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8">
                                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                        <p className="text-secondary mb-6 text-sm">{service.description}</p>

                                        <div className="space-y-2 mb-6">
                                            {service.perks.slice(0, 3).map((perk, i) => (
                                                <div key={i} className="flex items-center gap-2 text-secondary/90 text-sm">
                                                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                                                    <span>{perk}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link href={`/tjanster/${service.id}`}>
                                            <Button variant="outline" className="w-full">Läs Mer</Button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
