"use client";

import { motion } from "framer-motion";

export function WavyConnector({ className, flipX = false }: { className?: string; flipX?: boolean }) {
    return (
        <svg
            className={className}
            width="400"
            height="200"
            viewBox="0 0 400 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: flipX ? 'scaleX(-1)' : undefined }}
        >
            <motion.path
                d="M0 100 C100 100, 100 0, 200 50 C300 100, 300 150, 400 150"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                    pathLength: [0, 1, 1, 0],
                    opacity: [0, 1, 1, 0]
                }}
                transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    times: [0, 0.25, 0.75, 1]
                }}
            />
            <motion.circle
                cx="400"
                cy="150"
                r="4"
                fill="hsl(var(--primary))"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: [0, 1, 1.3, 1, 1, 0],
                    opacity: [0, 1, 1, 1, 1, 0]
                }}
                transition={{
                    duration: 6,
                    ease: "easeInOut",
                    repeat: Infinity,
                    times: [0, 0.25, 0.4, 0.5, 0.75, 1]
                }}
            />
        </svg>
    );
}
