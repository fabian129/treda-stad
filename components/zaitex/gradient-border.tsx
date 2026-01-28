"use client";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GradientBorderProps {
    children: ReactNode;
    angle?: number;
    colors?: string[];
    thickness?: number;
    radius?: string;
    className?: string;
}

/**
 * GradientBorder - Gradient border effect using mask-composite
 * 
 * Creates borders with gradient colors instead of solid colors.
 * Uses CSS mask trick to show gradient only on edges.
 * 
 * @example
 * <GradientBorder angle={225} colors={["transparent", "white", "transparent"]}>
 *   <div className="p-4">Content</div>
 * </GradientBorder>
 */
export function GradientBorder({
    children,
    angle = 225,
    colors = ["rgba(255, 255, 255, 0.0)", "rgba(255, 255, 255, 0.2)", "rgba(255, 255, 255, 0.0)"],
    thickness = 1,
    radius = "0.75rem",
    className,
}: GradientBorderProps) {
    const gradientString = `linear-gradient(${angle}deg, ${colors.join(", ")})`;

    return (
        <div className={cn("relative", className)}>
            {/* Gradient border pseudo-element */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    borderRadius: radius,
                    padding: `${thickness}px`,
                    background: gradientString,
                    WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                    WebkitMaskComposite: "xor",
                    mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
                    maskComposite: "exclude",
                }}
            />
            {/* Content */}
            {children}
        </div>
    );
}
