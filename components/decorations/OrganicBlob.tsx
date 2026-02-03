"use client";

import { motion } from "framer-motion";

export function OrganicBlob({
    className = "",
    variant = "primary"
}: {
    className?: string;
    variant?: "primary" | "secondary" | "accent"
}) {
    const colors = {
        primary: "#D1FAE5", // Soft Green
        secondary: "#FFE4E1", // Soft Peach (Leasio style)
        accent: "#E0F2F1", // Soft Teal
    };

    return (
        <div className={`absolute -z-10 pointer-events-none ${className}`}>
            <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full opacity-60 blur-3xl"
            >
                <path
                    fill={colors[variant]}
                    d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.1,22.9,71.1,34.6C60.1,46.3,49.5,56,37.3,64.3C25.1,72.6,11.3,79.5,-1.8,82.6C-14.9,85.7,-28.3,85,-40.3,78.5C-52.3,72,-62.9,59.7,-70.8,46.8C-78.7,33.9,-83.9,20.4,-84.3,6.8C-84.7,-6.8,-80.3,-20.5,-71.8,-32.1C-63.3,-43.7,-50.7,-53.2,-37.8,-60.9C-24.9,-68.6,-11.6,-74.5,2.4,-78.7L16.4,-82.9"
                    transform="translate(100 100)"
                />
            </svg>
        </div>
    );
}
