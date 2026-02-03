"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface SectionBreakerProps {
    imageSrc?: string;
    quote?: string;
    author?: string;
}

export function SectionBreaker({
    imageSrc = "/images/living-room.jpg", // Placeholder - User needs to update
    quote = "Det är detaljerna som gör helheten.",
    author = "Treda Städ"
}: SectionBreakerProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <div ref={ref} className="relative h-[400px] md:h-[500px] w-full overflow-hidden flex items-center justify-center">
            {/* Background with Parallax */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <img
                    src={imageSrc}
                    alt="Atmosphere"
                    className="w-full h-[140%] object-cover object-center"
                />
            </motion.div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-20 text-center px-6 max-w-4xl"
            >
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-md font-heading">
                    {quote}
                </h3>
                {author && <p className="text-white/80 text-lg uppercase tracking-widest">{author}</p>}
            </motion.div>
        </div>
    );
}
