"use client";

import { motion } from "framer-motion";

export function OrganicBlob({
    className = "",
    variant = "primary"
}: {
    className?: string;
    variant?: "primary" | "secondary" | "accent"
}) {
    const gradients = {
        primary: "radial-gradient(circle, rgba(209,250,229,0.4) 0%, rgba(209,250,229,0.1) 40%, transparent 70%)", // Soft Green
        secondary: "radial-gradient(circle, rgba(255,228,225,0.4) 0%, rgba(255,228,225,0.1) 40%, transparent 70%)", // Soft Peach
        accent: "radial-gradient(circle, rgba(224,242,241,0.4) 0%, rgba(224,242,241,0.1) 40%, transparent 70%)", // Soft Teal
    };

    return (
        <div
            className={`absolute -z-10 pointer-events-none ${className}`}
            style={{
                background: gradients[variant],
                width: '600px', // Fixed size base, scaled by className if needed
                height: '600px',
                borderRadius: '50%',
                // Removed heavy blur(60px) filter - using gradient transparency for softness instead
                opacity: 0.8,
            }}
        />
    );
}
