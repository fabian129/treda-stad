"use client";
import { cn } from "@/lib/utils";
import { CSSProperties } from "react";

interface MeshGradientProps {
    colors?: string[];
    speed?: number;
    className?: string;
}

/**
 * MeshGradient - Animated multi-color gradient background
 * 
 * Creates a smooth, animated gradient that cycles through multiple colors.
 * GPU-accelerated for performance.
 * 
 * @example
 * <MeshGradient 
 *   colors={["#6366F1", "#EC4899", "#8B5CF6"]} 
 *   speed={15} 
 * />
 */
export function MeshGradient({
    colors = ["#6366F1", "#EC4899", "#8B5CF6"],
    speed = 15,
    className,
}: MeshGradientProps) {
    const gradientStyle: CSSProperties = {
        background: `linear-gradient(45deg, ${colors.join(", ")})`,
        backgroundSize: "200% 200%",
        animation: `mesh-gradient ${speed}s ease infinite`,
    };

    return (
        <>
            <style jsx>{`
        @keyframes mesh-gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
            <div
                className={cn("absolute inset-0 -z-10 opacity-30", className)}
                style={gradientStyle}
            />
        </>
    );
}

/**
 * Preset color schemes
 */
export const MeshPresets = {
    gaming: ["#6366F1", "#EC4899", "#8B5CF6"],
    sunset: ["#FF6B6B", "#FFA500", "#FF1493"],
    ocean: ["#0077BE", "#00C9FF", "#92FE9D"],
    forest: ["#134E5E", "#71B280", "#38EF7D"],
    luxury: ["#C9A227", "#E8C547", "#F4E04D"],
    tech: ["#00F5FF", "#0080FF", "#8000FF"],
} as const;
