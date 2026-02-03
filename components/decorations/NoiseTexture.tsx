"use client";

import { motion } from "framer-motion";

export function NoiseTexture({ className = "", opacity = 0.05 }: { className?: string; opacity?: number }) {
    return (
        <div className={`absolute inset-0 pointer-events-none z-0 ${className}`}>
            <svg
                className="w-full h-full opacity-[0.05]"
                xmlns="http://www.w3.org/2000/svg"
            >
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.6"
                        stitchTiles="stitch"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
        </div>
    );
}
