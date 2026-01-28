"use client";
import { cn } from "@/lib/utils";

interface ProgressiveBlurProps {
    position?: "top" | "bottom";
    height?: string;
    maxBlur?: number;
    className?: string;
}

/**
 * ProgressiveBlur - 8-layer gradient blur effect
 * 
 * Creates a smooth blur transition using multiple backdrop-filter layers.
 * This is the signature Aura.build effect seen at the top of their pages.
 * 
 * @example
 * <ProgressiveBlur position="top" height="12%" maxBlur={64} />
 */
export function ProgressiveBlur({
    position = "top",
    height = "12%",
    maxBlur = 64,
    className,
}: ProgressiveBlurProps) {
    const positionStyles = position === "top"
        ? { top: 0, bottom: "auto" }
        : { top: "auto", bottom: 0 };

    // 8 layers with exponential blur progression
    const layers = [
        { blur: maxBlur / 128, mask: "0%, 12.5%, 25%, 37.5%" },      // 0.5px
        { blur: maxBlur / 64, mask: "12.5%, 25%, 37.5%, 50%" },      // 1px
        { blur: maxBlur / 32, mask: "25%, 37.5%, 50%, 62.5%" },      // 2px
        { blur: maxBlur / 16, mask: "37.5%, 50%, 62.5%, 75%" },      // 4px
        { blur: maxBlur / 8, mask: "50%, 62.5%, 75%, 87.5%" },       // 8px
        { blur: maxBlur / 4, mask: "62.5%, 75%, 87.5%, 100%" },      // 16px
        { blur: maxBlur / 2, mask: "75%, 87.5%, 100%, 100%" },       // 32px
        { blur: maxBlur, mask: "87.5%, 100%, 100%, 100%" },          // 64px
    ];

    const direction = position === "top" ? "to top" : "to bottom";

    return (
        <div
            className={cn("fixed z-50 inset-x-0 pointer-events-none", className)}
            style={{
                ...positionStyles,
                height,
            }}
        >
            {layers.map((layer, index) => {
                const [start, mid1, mid2, end] = layer.mask.split(", ");
                return (
                    <div
                        key={index}
                        className="absolute inset-0"
                        style={{
                            backdropFilter: `blur(${layer.blur}px)`,
                            WebkitBackdropFilter: `blur(${layer.blur}px)`,
                            mask: `linear-gradient(${direction}, rgba(0,0,0,0) ${start}, rgba(0,0,0,1) ${mid1}, rgba(0,0,0,1) ${mid2}, rgba(0,0,0,0) ${end})`,
                            WebkitMask: `linear-gradient(${direction}, rgba(0,0,0,0) ${start}, rgba(0,0,0,1) ${mid1}, rgba(0,0,0,1) ${mid2}, rgba(0,0,0,0) ${end})`,
                        }}
                    />
                );
            })}
        </div>
    );
}
