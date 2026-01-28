"use client";
import { cn } from "@/lib/utils";

interface SmokeBlurProps {
    position?: "top" | "bottom" | "both";
    height?: string;
    blur?: string;
    opacity?: number;
    className?: string;
}

/**
 * SmokeBlur - Blurred gradient overlay effect
 * 
 * Creates a smoke-like blur effect at the top/bottom of containers.
 * Perfect for creating depth and masking transitions between sections.
 * 
 * @example
 * <SmokeBlur position="top" height="200px" blur="80px" opacity={0.9} />
 */
export function SmokeBlur({
    position = "both",
    height = "200px",
    blur = "80px",
    opacity = 0.9,
    className,
}: SmokeBlurProps) {
    return (
        <>
            {/* Top Smoke Blur */}
            {(position === "top" || position === "both") && (
                <div
                    className={cn("absolute left-0 right-0 top-0 pointer-events-none", className)}
                    style={{
                        height,
                        background: "linear-gradient(to bottom, black 0%, transparent 100%)",
                        backdropFilter: `blur(${blur})`,
                        WebkitBackdropFilter: `blur(${blur})`,
                        opacity,
                        zIndex: 10,
                    }}
                />
            )}

            {/* Bottom Smoke Blur */}
            {(position === "bottom" || position === "both") && (
                <div
                    className={cn("absolute left-0 right-0 bottom-0 pointer-events-none", className)}
                    style={{
                        height,
                        background: "linear-gradient(to top, black 0%, transparent 100%)",
                        backdropFilter: `blur(${blur})`,
                        WebkitBackdropFilter: `blur(${blur})`,
                        opacity,
                        zIndex: 10,
                    }}
                />
            )}
        </>
    );
}
