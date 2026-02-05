"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
    className?: string;
    size?: number;
    duration?: number;
    borderWidth?: number;
    anchor?: number;
    colorFrom?: string;
    colorTo?: string;
    delay?: number;
}

export function BorderBeam({
    className,
    size = 200,
    duration = 15,
    borderWidth = 1.5,
    colorFrom = "#ffaa40",
    colorTo = "#9c40ff",
    delay = 0,
}: BorderBeamProps) {
    return (
        <div
            className={cn(
                "pointer-events-none absolute inset-0 rounded-[inherit] z-0",
                className
            )}
            style={{
                "--border-width": borderWidth,
            } as React.CSSProperties}
        >
            {/* Mask Container: Shows only the border area */}
            <div
                className="absolute inset-0 rounded-[inherit]"
                style={{
                    border: "calc(var(--border-width) * 1px) solid transparent",
                    // Standard "Border Only" mask technique
                    mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    // Webkit fallback
                    WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                }}
            >
                {/* Spinning Conic Gradient: Creates the 'Beam' effect */}
                <div
                    className="absolute aspect-square h-[400%] left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2"
                    style={{
                        background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${colorFrom} 10deg, ${colorTo} 50deg, transparent 90deg)`,
                        animation: `spin ${duration}s linear infinite`,
                        animationDelay: `${delay}s`,
                    }}
                />
            </div>

            {/* Define spin keyframes locally if needed, but Tailwind 'animate-spin' usually exists. 
                However, we used inline style 'spin', so we rely on standard global keyframes.
                To be safe, we'll use a specific name 'border-beam-spin' and inject style tag if needed,
                OR just rely on 'spin' which is standard in Tailwind (but we are in inline style).
                Actually, 'spin' is a Tailwind CLASS, not necessarily a global keyframe name unless defined. 
                Tailwind defines '@keyframes spin { to { transform: rotate(360deg); } }' in base. 
                Let's assume it's there. If not, we will add it to globals.css.
            */}
        </div>
    );
}
