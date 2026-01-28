"use client";
import { cn } from "@/lib/utils";

interface BorderBeamProps {
    className?: string;
    size?: number;
    duration?: number;
    borderWidth?: number;
    anchor?: number; // Unused in Conic version, kept for props compat
    colorFrom?: string;
    colorTo?: string;
    delay?: number;
}

export function BorderBeam({
    className,
    size = 200, // Used for gradient size/spread in this version
    duration = 15,
    anchor = 90,
    borderWidth = 1.5,
    colorFrom = "#ffaa40",
    colorTo = "#9c40ff",
    delay = 0,
}: BorderBeamProps) {
    return (
        <div
            style={
                {
                    "--size": size,
                    "--duration": duration,
                    "--border-width": borderWidth,
                    "--color-from": colorFrom,
                    "--color-to": colorTo,
                    "--delay": delay,
                } as React.CSSProperties
            }
            className={cn(
                "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
                // Mask trick to only show border
                "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",

                // Conic Gradient Spinner
                // 1. inset-[-100%] expands it way beyond the box so the rotation covers the corners
                // 2. conic-gradient creates the beam
                // 3. animate-border-beam here is re-purposed to just rotate 360deg
                "after:absolute after:inset-[-100%] after:aspect-square after:animate-[spin_calc(var(--duration)*1s)_linear_infinite]",
                "after:[background:conic-gradient(from_0deg,transparent_0_340deg,var(--color-from)_360deg)]",
                "after:opacity-100",
                className
            )}
        />
    );
}
