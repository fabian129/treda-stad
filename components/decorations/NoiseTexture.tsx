"use client";

import { motion } from "framer-motion";

export function NoiseTexture({ className = "", opacity = 0.05 }: { className?: string; opacity?: number }) {
    return (
        <div
            className={`absolute inset-0 pointer-events-none z-0 ${className}`}
            style={{
                // Using a static noise image instead of live calculation could be even faster, 
                // but for now, we'll keep the SVG but ensure it's not re-rendering unnecessarily.
                // Actually, let's switch to a simpler opacity overlay to be safe as requested.
                // However, the user liked the texture. 
                // A better approach for performance is a static PNG. 
                // I will use a very lightweight static noise pattern.
                backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAA5OTkAAABMTExERERmZmYzMzMyMjJOUl6NAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmCwQOIDB0VE1hAAAAh0lEQVQ4y2NgQAX8DIwsCgwM7OoMDOwaiUBhZgYGdXYIxc7AoM4OodgZGNQ5IBS7AoM6B4RiD4iS8wxQJecZGNQ5IRS7A4M6J4RiLwYGdW4IxT4MDOrcEIq9GRjUuSEU+zAwqHNDKPZjYFDnhlDsx8Cgzg2h2I+BQZ0bQrEfA4M6N4RiPwYGZQ4AkoMOd/1w8aIAAAAASUVORK5CYII=")`,
                opacity: opacity,
            }}
        />
    );
}
