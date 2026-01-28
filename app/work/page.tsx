"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Grid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function WorkPage() {
    const projects = [
        {
            id: 1,
            title: "NEON SYNTHESIS",
            category: "Cyberpunk Portrait",
            image: "/images/portfolio-1.webp",
            year: "2026"
        },
        {
            id: 2,
            title: "VINTAGE ELEGANCE",
            category: "Classic Automotive",
            image: "/images/portfolio-2.jpg",
            year: "2025"
        },
        {
            id: 3,
            title: "DECONSTRUCTED PYRAMID",
            category: "Abstract Architecture",
            image: "/images/portfolio-3.jpg",
            year: "2026"
        },
        {
            id: 4,
            title: "REDSHIFT GAZE",
            category: "Portraiture",
            image: "/images/portfolio-4.webp",
            year: "2025"
        },
        {
            id: 5,
            title: "KINETIC RUNNER",
            category: "Sportswear",
            image: "/images/portfolio-5.webp",
            year: "2026"
        },
        {
            id: 6,
            title: "TECHWEAR HALO",
            category: "Fashion Tech",
            image: "/images/portfolio-6.jpg",
            year: "2026"
        },
        {
            id: 7,
            title: "INK MOUNTAIN",
            category: "Digital Landscape",
            image: "/images/portfolio-7.webp",
            year: "2025"
        },
        {
            id: 8,
            title: "ETHEREAL LACE",
            category: "Surreal Fashion",
            image: "/images/portfolio-8.jpg",
            year: "2026"
        },
        {
            id: 9,
            title: "CONCRETE ZEN",
            category: "Minimalist Arch",
            image: "/images/portfolio-9.webp",
            year: "2025"
        },
        {
            id: 10,
            title: "RETRO WHITE",
            category: "Fashion Editorial",
            image: "/images/portfolio-10.webp",
            year: "2026"
        },
        {
            id: 11,
            title: "GLITCH FRAGMENT",
            category: "Digital Art",
            image: "/images/portfolio-11.png",
            year: "2025"
        },
        {
            id: 12,
            title: "MONOLITH SIGNAL",
            category: "Surrealism",
            image: "/images/portfolio-12.png",
            year: "2026"
        }
    ];

    return (
        // Switch to Light Mode: bg-[#FAFAFA] text-black
        <div className="min-h-screen bg-[#FAFAFA] text-black font-mono selection:bg-black selection:text-white overflow-hidden relative">

            {/* 0. Background Texture (Asymmetrical / Grain) */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />
            <div className="fixed inset-0 z-0 pointer-events-none">
                {/* Subtle Grid - Asymmetrical feeling via opacity variation */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:160px_160px]" />
            </div>

            {/* 1. Header & Navigation (Fixed Overlay) - mix-blend-difference allows visibility on both light/dark */}
            <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-start pointer-events-none mix-blend-difference text-white">
                {/* Note: mix-blend-difference on white bg turns black text to white, so we keep text-white to invert to black */}
                <Link href="/" className="pointer-events-auto group flex flex-col gap-1">
                    <span className="text-xs font-bold tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">BACK TO BASE</span>
                    <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                        <ArrowLeft className="w-4 h-4" /> ZAITEX
                    </div>
                </Link>
                <div className="text-right flex flex-col items-end gap-1">
                    <span className="text-xs font-bold tracking-widest opacity-50">(THE ARCHIVE)</span>
                    <div className="text-xs">20:29:58 CET</div>
                </div>
            </nav>

            {/* 2. Top & Bottom Blur Masks (Seamless Gradient Fade) */}
            <div
                className="fixed top-0 left-0 right-0 h-30 z-40 pointer-events-none backdrop-blur-xl bg-[#FAFAFA]/10"
                style={{
                    maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)'
                }}
            />
            <div
                className="fixed bottom-0 left-0 right-0 h-20 z-40 pointer-events-none backdrop-blur-xl bg-[#FAFAFA]/5"
                style={{
                    maskImage: 'linear-gradient(to top, black 20%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to top, black 20%, transparent 100%)'
                }}
            />

            {/* 3. The Artboard (Content Grid) */}
            <main className="relative pt-32 pb-32 px-4 md:px-6 z-10">
                <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="relative group break-inside-avoid"
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden rounded-sm bg-[#EEE] aspect-[3/4] md:aspect-auto">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={800}
                                    height={1000}
                                    className="w-full h-auto object-cover grayscale brightness-110 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-700 ease-out group-hover:scale-105"
                                />

                                {/* Minimal Overlay Info - Dark overlay for contrast on light setup */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 text-white">
                                    <div className="flex justify-between items-start">
                                        <span className="bg-white text-black text-[10px] uppercase font-bold px-2 py-1 tracking-widest">
                                            {project.category}
                                        </span>
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold leading-none tracking-tighter mb-1">{project.title}</h2>
                                        <span className="text-xs opacity-70 border-t border-white/30 pt-2 inline-block w-full">EST. {project.year}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>

            {/* 4. Footer Overlay (The Artboard™ Label) - mix-blend-difference for contrast */}
            <div className="fixed bottom-6 left-6 z-50 pointer-events-none mix-blend-difference text-white">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter opacity-80">THE ARTBOARD™</h1>
                <p className="text-[10px] max-w-[300px] opacity-60 leading-tight mt-2 uppercase">
                    Digital experience designer creating immersive websites defined by strong visual direction.
                </p>
            </div>

        </div>
    );
}
