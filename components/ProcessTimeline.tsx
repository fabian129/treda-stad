"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function ProcessTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end end"]
    });

    // Direct mapping for 1:1 "processing" feel, removing spring lag
    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const steps = [
        {
            id: "01",
            title: "Discovery",
            desc: "We dive deep into your brand, understanding your goals, audience, and the technical requirements needed to execute the vision.",
        },
        {
            id: "02",
            title: "Strategy",
            desc: "Mapping out the user journey and technical architecture. We define the blueprint before a single line of code is written.",
        },
        {
            id: "03",
            title: "Design",
            desc: "Crafting the visual language. We iterate on high-fidelity prototypes to ensure the aesthetic matches the ambition.",
        },
        {
            id: "04",
            title: "Build",
            desc: "Engineering the system with precision. Performance, accessibility, and scalability are baked in from day one.",
        },
        {
            id: "05",
            title: "Launch",
            desc: "Deployment and handoff. We ensure a smooth transition and provide the training needed to manage the system.",
        }
    ];

    return (
        <div ref={containerRef} className="relative max-w-4xl mx-auto px-6 py-24 md:py-48">
            {/* The Thread */}
            <div className="absolute left-[39px] md:left-1/2 top-24 bottom-24 w-[1px] bg-black/10 -translate-x-1/2" />
            <motion.div
                style={{ scaleY, transformOrigin: "top" }}
                className="absolute left-[39px] md:left-1/2 top-24 bottom-24 w-[2px] bg-black -translate-x-1/2 z-10"
            />

            <div className="space-y-32">
                {steps.map((step, i) => (
                    <ProcessNode
                        key={step.id}
                        step={step}
                        index={i}
                    />
                ))}
            </div>
        </div>
    );
}

function ProcessNode({ step, index }: { step: any, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center ${!isEven ? "md:direction-rtl" : ""
                }`}
        >
            {/* Timeline Node (Center) */}
            <div className="absolute left-[39px] md:left-1/2 top-0 -translate-x-1/2 z-20">
                {/* Hollow version (Background) */}
                <div className="w-4 h-4 rounded-full border border-black/20 bg-[#FAFAFA]" />

                {/* Fill version (Foreground - reveals on scroll) */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ margin: "-50% 0px -50% 0px" }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 w-4 h-4 rounded-full bg-black border border-black"
                />
            </div>

            {/* Content Side */}
            <div className={`pl-20 md:pl-0 ${!isEven ? "md:col-start-2" : "md:text-right md:pr-12"}`}>
                <div className="flex items-center gap-2 mb-2 md:justify-end">
                    <span className="text-secondary text-xs uppercase tracking-widest font-mono">
                        phase {step.id}
                    </span>
                </div>
                <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-secondary leading-relaxed">{step.desc}</p>
            </div>

            {/* Empty Side (for grid balance) */}
            <div className="hidden md:block" />
        </motion.div>
    );
}
