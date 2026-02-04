"use client";

import { motion } from "framer-motion";

export function WavyConnector({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            width="400"
            height="200"
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path
                d="M0 100 C100 100, 100 0, 200 50 C300 100, 300 150, 400 150"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.circle
                cx="400"
                cy="150"
                r="4"
                fill="hsl(var(--primary))"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5, duration: 0.3 }}
            />
        </svg>
    );
}
