"use client";

import { Sparkles, SprayCan, Feather, Droplets } from "lucide-react";

export function CleaningPattern({ className = "" }: { className?: string }) {
    return (
        <div className={`absolute inset-0 -z-10 overflow-hidden pointer-events-none ${className}`}>
            {/* Scattered Icons with very low opacity */}
            <div className="absolute top-[10%] left-[5%] text-primary/20 rotate-12">
                <Sparkles className="w-12 h-12" />
            </div>
            <div className="absolute top-[25%] right-[10%] text-primary/20 -rotate-12">
                <SprayCan className="w-16 h-16" />
            </div>
            <div className="absolute bottom-[20%] left-[15%] text-primary/20 rotate-45">
                <Feather className="w-20 h-20" />
            </div>
            <div className="absolute bottom-[10%] right-[20%] text-primary/20 -rotate-6">
                <Droplets className="w-14 h-14" />
            </div>

            {/* Smaller dots/sparkles */}
            <div className="absolute top-[40%] left-[40%] text-primary/20">
                <Sparkles className="w-6 h-6" />
            </div>
            <div className="absolute top-[15%] right-[40%] text-primary/10">
                <div className="w-3 h-3 rounded-full bg-primary/20" />
            </div>
        </div>
    );
}
