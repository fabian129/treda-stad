"use client";
import { cn } from "@/lib/utils";

interface PulsatingGlowProps {
    colors?: string[];
    duration?: number;
    className?: string;
}

/**
 * PulsatingGlow - Breathing ambient glow effect
 * 
 * Creates a large radial gradient that pulsates slowly,
 * simulating a breathing or living background light.
 * 
 * @example
 * <PulsatingGlow colors={["#DC2626", "#F59E0B"]} duration={4} />
 */
export function PulsatingGlow({
    colors = ["#DC2626", "#F59E0B"], // Red to Orange (Magma)
    duration = 4,
    className,
}: PulsatingGlowProps) {
    return (
        <div
            className={cn("absolute inset-0 pointer-events-none", className)}
            style={{ zIndex: 0 }}
        >
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] opacity-30"
                style={{
                    background: `radial-gradient(circle, ${colors[0]} 0%, ${colors[1]} 50%, transparent 70%)`,
                    animation: `pulse-glow ${duration}s ease-in-out infinite`,
                }}
            />
            <style jsx>{`
        @keyframes pulse-glow {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.4;
          }
        }
      `}</style>
        </div>
    );
}
