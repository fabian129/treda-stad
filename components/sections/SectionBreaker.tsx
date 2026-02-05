"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface SectionBreakerProps {
    imageSrc?: string;
    quote?: string;
    author?: string;
}

export function SectionBreaker({
    imageSrc = "/images/marble-bg.webp",
    quote = "Det är detaljerna som gör helheten.",
    author = "Treda Städ"
}: SectionBreakerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Reduced parallax range to prevent gaps
    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

    return (
        <div ref={ref} className="relative h-[400px] md:h-[500px] w-full overflow-hidden flex items-center justify-center bg-stone-800">
            {/* Background with Optimized Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/40 z-10" />
                <Image
                    src={imageSrc}
                    alt="Atmosphere"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                    loading="lazy"
                    quality={85}
                />
            </motion.div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="relative z-20 text-center px-6 max-w-4xl"
            >
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
                    {quote}
                </h3>
                {author && (
                    <p className="text-white/80 text-base md:text-lg uppercase tracking-[0.2em] font-medium">
                        {author}
                    </p>
                )}
            </motion.div>
        </div>
    );
}
