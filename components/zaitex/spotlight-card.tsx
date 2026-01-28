"use client";
import React, { useRef, useState, MouseEvent } from "react";
import { cn } from "@/lib/utils";
interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> { spotlightColor?: string; }
export function SpotlightCard({ children, className, spotlightColor = "rgba(0, 255, 157, 0.15)", ...props }: SpotlightCardProps) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);
    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const div = divRef.current;
        const rect = div.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setPosition({ x, y });
    };
    const handleMouseEnter = () => setOpacity(1);
    const handleMouseLeave = () => setOpacity(0);
    return (
        <div ref={divRef} onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={cn("relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950/50 text-white shadow-2xl", className)} {...props}>
            <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300" style={{ opacity, background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)` }} />
            <div className="relative h-full">{children}</div>
        </div>
    );
}
