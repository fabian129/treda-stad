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
        primary: "radial-gradient(circle, rgba(209,250,229,0.8) 0%, rgba(209,250,229,0) 70%)", // Soft Green
        secondary: "radial-gradient(circle, rgba(255,228,225,0.6) 0%, rgba(255,228,225,0) 70%)", // Soft Peach
        accent: "radial-gradient(circle, rgba(224,242,241,0.8) 0%, rgba(224,242,241,0) 70%)", // Soft Teal
    };

    return (
        <div
            className={`absolute -z-10 pointer-events-none ${className}`}
            style={{
                background: gradients[variant],
                width: '600px', // Fixed size base, scaled by className if needed
                height: '600px',
                borderRadius: '50%',
                filter: 'blur(60px)', // Simpler blur on a simple shape
                opacity: 0.6,
            }}
        />
    );
}
