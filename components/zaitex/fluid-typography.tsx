"use client";
import { cn } from "@/lib/utils";
import { CSSProperties, ReactNode } from "react";

interface FluidTypographyProps {
    children: ReactNode;
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
    minSize?: string;
    maxSize?: string;
    viewport?: string;
    className?: string;
}

/**
 * FluidTypography - Responsive text that scales smoothly without breakpoints
 * 
 * Uses CSS clamp() for fluid sizing across all viewport sizes.
 * 
 * @example
 * <FluidTypography as="h1" minSize="2.5rem" maxSize="6rem" viewport="8vw">
 *   Headline
 * </FluidTypography>
 */
export function FluidTypography({
    children,
    as: Component = "h1",
    minSize = "2rem",
    maxSize = "4rem",
    viewport = "5vw",
    className,
}: FluidTypographyProps) {
    const style: CSSProperties = {
        fontSize: `clamp(${minSize}, ${viewport}, ${maxSize})`,
        lineHeight: 1.1,
    };

    return (
        <Component style={style} className={cn("font-bold", className)}>
            {children}
        </Component>
    );
}

/**
 * Preset configurations for common use cases
 */
export const FluidPresets = {
    hero: {
        minSize: "2.5rem",
        maxSize: "6rem",
        viewport: "8vw",
    },
    h2: {
        minSize: "2rem",
        maxSize: "4rem",
        viewport: "5vw",
    },
    h3: {
        minSize: "1.5rem",
        maxSize: "2.5rem",
        viewport: "3vw",
    },
    body: {
        minSize: "1rem",
        maxSize: "1.25rem",
        viewport: "2vw",
    },
} as const;
