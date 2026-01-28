"use client";
import { ReactLenis } from "lenis/react";

// Read DNA config (in a real implementation, this would be imported from design_dna.json)
// For now, we'll use environment-based config or props
interface SmoothScrollProps {
    children: React.ReactNode;
    config?: {
        lerp?: number;
        duration?: number;
        wheelMultiplier?: number;
    };
}

export function SmoothScroll({ children, config }: SmoothScrollProps) {
    // Default to "luxury" settings from DNA
    // In production, read from: import dna from '@/design_dna.json'
    const defaultConfig = {
        lerp: 0.03,
        duration: 2.5,
        wheelMultiplier: 1.0,
    };

    const finalConfig = { ...defaultConfig, ...config };

    return (
        <ReactLenis
            root
            options={{
                lerp: finalConfig.lerp,
                duration: finalConfig.duration,
                smoothWheel: true,
                wheelMultiplier: finalConfig.wheelMultiplier,
            }}
        >
            {children}
        </ReactLenis>
    );
}
