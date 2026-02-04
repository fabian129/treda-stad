"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { FileText, Search, Brush, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface TimelineItem {
    id: string;
    label: string;
    title: string;
    description: string;
    icon?: React.ReactNode;
    image: string;
}

const timelineData: TimelineItem[] = [
    {
        id: "offert",
        label: "01",
        title: "Offert",
        description: "Börja med att få en kostnadsfri offert anpassad efter dina behov. Vi svarar snabbt med ett tydligt prisförslag.",
        icon: <FileText className="w-6 h-6" />,
        image: "/images/woman-digital-disconnecting-home-by-reading-book.webp" // Placeholder
    },
    {
        id: "behovsanalys",
        label: "02",
        title: "Behovsanalys",
        description: "Vi går igenom dina önskemål för att säkerställa att vi levererar exakt den kvalitet och service du förväntar dig.",
        icon: <Search className="w-6 h-6" />,
        image: "/images/closeup-unrecognizable-person-cleaning-door-handle.webp" // Placeholder
    },
    {
        id: "stadningen",
        label: "03",
        title: "Vi sköter städningen",
        description: "Våra professionella städare tar hand om allt enligt överenskommelse, så att du kan fokusera på annat.",
        icon: <Brush className="w-6 h-6" />,
        image: "/images/housemaid-opening-door-room-cleaning.webp" // Placeholder
    },
    {
        id: "rent-och-fint",
        label: "04",
        title: "Alltid rent och fint",
        description: "Njut av ett skinande rent resultat varje gång. Vi garanterar trygghet, kvalitet och ett hem att trivas i.",
        icon: <Sparkles className="w-6 h-6" />,
        image: "/images/room-with-large-window-that-says-welcome-you.webp" // Placeholder
    },
];

export function InteractiveTimeline() {
    const [activeId, setActiveId] = useState(timelineData[0].id);
    const activeIndex = timelineData.findIndex((item) => item.id === activeId);

    return (
        <div className="w-full max-w-6xl mx-auto py-16 px-4">
            {/* Timeline Track Container */}
            <div className="relative mb-12">
                {/* The Ruler Track */}
                <motion.div
                    className="absolute top-12 left-0 w-full h-px bg-primary flex justify-between items-end overflow-hidden"
                    animate={{
                        opacity: [0.3, 1, 0.3],
                        boxShadow: [
                            "0 0 2px rgba(80, 200, 120, 0.2)",
                            "0 0 10px rgba(80, 200, 120, 0.6)",
                            "0 0 2px rgba(80, 200, 120, 0.2)"
                        ]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {/* Generate ruler ticks - purely decorative */}
                    {Array.from({ length: 100 }).map((_, i) => (
                        <div
                            key={i}
                            className={cn(
                                "w-px bg-border/30",
                                i % 5 === 0 ? "h-3" : "h-1.5"
                            )}
                        />
                    ))}
                </motion.div>

                {/* Nodes Layer */}
                <div className="relative z-10 flex justify-between items-start lg:px-20">
                    {timelineData.map((item, index) => {
                        const isActive = activeId === item.id;

                        return (
                            <div
                                key={item.id}
                                className="group relative flex flex-col items-center cursor-pointer select-none"
                                onClick={() => setActiveId(item.id)}
                            >
                                {/* Number/Label above the line */}
                                <span
                                    className={cn(
                                        "mb-6 font-mono text-sm tracking-widest transition-colors duration-300",
                                        isActive ? "text-primary font-bold" : "text-muted-foreground/50 group-hover:text-muted-foreground"
                                    )}
                                >
                                    {item.label}
                                </span>

                                {/* The Dot on the line - Mini Checkpoint */}
                                <div
                                    className={cn(
                                        "w-2 h-2 rounded-full z-20 ring-4 ring-background transition-all duration-300",
                                        isActive ? "bg-primary scale-150" : "bg-primary/40 group-hover:bg-primary/80"
                                    )}
                                />

                                {/* Active Indicator Line */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="absolute top-[3.25rem] w-0.5 h-8 bg-primary"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                {/* Title under the dot */}
                                <span
                                    className={cn(
                                        "mt-10 font-medium text-sm transition-all duration-300 whitespace-nowrap",
                                        isActive ? "text-primary scale-110" : "text-muted-foreground/60 group-hover:text-muted-foreground"
                                    )}
                                >
                                    {item.title}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* 3D Carousel Area - Compact version */}
            <div className="relative h-[500px] w-full flex justify-center items-center perspective-[1200px]">
                <AnimatePresence initial={false}>
                    {timelineData.map((item, index) => {
                        const distance = index - activeIndex;
                        const isActive = distance === 0;

                        // Increase range slightly to show side cards
                        if (Math.abs(distance) > 2) return null;

                        return (
                            <motion.div
                                key={item.id}
                                className={cn(
                                    "absolute w-[340px] md:w-[420px] aspect-[4/5] bg-white rounded-2xl shadow-2xl overflow-hidden cursor-pointer border border-stone-100",
                                    isActive ? "z-20 cursor-default" : "z-10 cursor-pointer"
                                )}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{
                                    x: distance * 300,
                                    scale: isActive ? 1 : 0.75,
                                    opacity: isActive ? 1 : 0.4,
                                    zIndex: 10 - Math.abs(distance),
                                    rotateY: distance * -10,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 25
                                }}
                                onClick={() => setActiveId(item.id)}
                            >
                                {/* Card Layout */}
                                <div className="h-full flex flex-col">
                                    {/* Top: Image */}
                                    <div className="h-[45%] relative bg-stone-200">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 500px"
                                            priority={index < 2}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    </div>

                                    {/* Bottom: Content - Centered */}
                                    <div className="h-[55%] p-6 flex flex-col justify-center">
                                        <div className="text-center">
                                            <p className="text-xs font-bold text-primary tracking-widest uppercase mb-2">
                                                STEG {item.label}
                                            </p>
                                            <h3 className="text-xl font-bold text-stone-800 mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-stone-500 leading-relaxed text-base">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Footer Row */}
                                        <div className="flex items-center justify-center gap-4 pt-4 mt-4">
                                            {/* Icon */}
                                            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                {item.icon}
                                            </div>

                                            {/* Button */}
                                            {isActive ? (
                                                <Link href="/kontakt" className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-full px-5 py-2 text-sm font-medium transition-colors">
                                                    Få Offert <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            ) : (
                                                <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center text-stone-400">
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div >
    );
}
