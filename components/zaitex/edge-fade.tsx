"use client";
import { cn } from "@/lib/utils";
import { ReactNode, CSSProperties } from "react";

interface EdgeFadeProps {
    children: ReactNode;
    direction?: "horizontal" | "vertical" | "both";
    fadeStart?: string;
    fadeEnd?: string;
    className?: string;
}

/**
 * EdgeFade - Fade content at edges using CSS masks
 * 
 * Creates smooth fade-out effect at edges of content.
 * Useful for infinite scroll illusions and softening hard edges.
 * 
 * @example
 * <EdgeFade direction="horizontal" fadeStart="15%" fadeEnd="85%">
 *   <div>Content that fades at left/right edges</div>
 * </EdgeFade>
 */
export function EdgeFade({
    children,
    direction = "horizontal",
    fadeStart = "15%",
    fadeEnd = "85%",
    className,
}: EdgeFadeProps) {
    const getMaskStyle = (): CSSProperties => {
        if (direction === "horizontal") {
            return {
                maskImage: `linear-gradient(to right, transparent, black ${fadeStart}, black ${fadeEnd}, transparent)`,
                WebkitMaskImage: `linear-gradient(to right, transparent, black ${fadeStart}, black ${fadeEnd}, transparent)`,
            };
        }

        if (direction === "vertical") {
            return {
                maskImage: `linear-gradient(to bottom, transparent, black ${fadeStart}, black ${fadeEnd}, transparent)`,
                WebkitMaskImage: `linear-gradient(to bottom, transparent, black ${fadeStart}, black ${fadeEnd}, transparent)`,
            };
        }

        // Both directions
        return {
            maskImage: `
        linear-gradient(to right, transparent, black ${fadeStart}, black ${fadeEnd}, transparent),
        linear-gradient(to bottom, transparent, black ${fadeStart}, black ${fadeEnd}, transparent)
      `,
            WebkitMaskImage: `
        linear-gradient(to right, transparent, black ${fadeStart}, black ${fadeEnd}, transparent),
        linear-gradient(to bottom, transparent, black ${fadeStart}, black ${fadeEnd}, transparent)
      `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
        };
    };

    return (
        <div className={cn(className)} style={getMaskStyle()}>
            {children}
        </div>
    );
}
