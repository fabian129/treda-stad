"use client";

import React, { useState } from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface City {
    name: string;
    x: number; // Percentage 0-100
    y: number; // Percentage 0-100
}

const cities: City[] = [
    { name: "Malmö", x: 23, y: 82 },
    { name: "Lund", x: 30, y: 78 },
    { name: "Helsingborg", x: 20, y: 45 },
    { name: "Kristianstad", x: 70, y: 40 },
    { name: "Ystad", x: 55, y: 92 },
    { name: "Trelleborg", x: 30, y: 95 },
    { name: "Landskrona", x: 22, y: 60 },
    { name: "Eslöv", x: 35, y: 65 },
    { name: "Hässleholm", x: 50, y: 35 },
    { name: "Ängelholm", x: 28, y: 30 },
];

export function SkaneMap({ className }: { className?: string }) {
    const [hoveredCity, setHoveredCity] = useState<string | null>(null);

    return (
        <div className={cn("relative w-full aspect-[4/3] max-w-2xl mx-auto bg-[#5b8cc0] rounded-xl overflow-hidden shadow-2xl", className)}>
            {/* SVG Map of Skåne (Approximate outline) */}
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Land Mass */}
                <path
                    d="M 12 40 L 22 25 L 35 20 L 55 15 L 75 25 L 85 45 L 80 70 L 65 90 L 40 98 L 20 85 L 12 60 Z"
                    className="fill-[#d6e2a8] stroke-[#ef4444] stroke-[1.5] vector-effect-non-scaling-stroke"
                />

                {/* City Markers */}
                {cities.map((city) => (
                    <foreignObject
                        key={city.name}
                        x={city.x}
                        y={city.y}
                        width="20"
                        height="20"
                        className="overflow-visible"
                    >
                        <div
                            className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                            onMouseEnter={() => setHoveredCity(city.name)}
                            onMouseLeave={() => setHoveredCity(null)}
                        >
                            {/* Dot Pin */}
                            <div className="flex flex-col items-center">
                                {/* Orange/Yellow Dot */}
                                <div className="w-2.5 h-2.5 bg-orange-400 rounded-full border border-white shadow-sm transform transition-transform duration-300 group-hover:scale-150" />

                                {/* Label (Always visible or on hover? User said "everything remains", image has labels. Let's make them always visible but small) */}
                                <div className="mt-1 px-1.5 py-0.5 bg-white/80 backdrop-blur-[2px] rounded text-[10px] font-semibold text-slate-800 whitespace-nowrap shadow-sm pointer-events-none">
                                    {city.name}
                                </div>
                            </div>
                        </div>
                    </foreignObject>
                ))}
            </svg>
        </div>
    );
}
