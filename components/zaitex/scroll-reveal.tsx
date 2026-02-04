"use client";
import { motion, useScroll, useTransform, MotionValue, MotionStyle } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: ReactNode;
    className?: string;
    /**
     * Properties to animate based on scroll
     */
    animateScale?: boolean;
    animateOpacity?: boolean;
    animateY?: boolean;
    animateX?: boolean;
    /**
     * Scroll range [start, end] where 0 = element enters viewport, 1 = element exits
     */
    scrollRange?: [number, number];
    /**
     * Value ranges for animations
     */
    scaleRange?: [number, number];
    opacityRange?: [number, number];
    yRange?: [string, string];
    xRange?: [string, string];
}

/**
 * ScrollReveal - Continuous scroll-linked animations
 * 
 * Animates elements smoothly based on scroll position, creating a cinematic feel.
 * Uses Framer Motion's useScroll and useTransform for performance.
 * 
 * @example
 * <ScrollReveal animateScale animateOpacity>
 *   <img src="hero.jpg" alt="Hero" />
 * </ScrollReveal>
 */
export function ScrollReveal({
    children,
    className,
    animateScale = false,
    animateOpacity = true,
    animateY = true,
    animateX = false,
    scrollRange = [0, 1],
    scaleRange = [0.8, 1],
    opacityRange = [0, 1],
    yRange = ["100px", "0px"],
    xRange = ["0px", "0px"],
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    // Create transforms unconditionally (Rules of Hooks)
    const scale = useTransform(scrollYProgress, scrollRange, scaleRange);
    const opacity = useTransform(scrollYProgress, scrollRange, opacityRange);
    const y = useTransform(scrollYProgress, scrollRange, yRange);
    const x = useTransform(scrollYProgress, scrollRange, xRange);

    // Apply only enabled animations
    const style: MotionStyle = {};
    if (animateScale) style.scale = scale;
    if (animateOpacity) style.opacity = opacity;
    if (animateY) style.y = y;
    if (animateX) style.x = x;

    return (
        <motion.div ref={ref} style={style} className={cn(className)}>
            {children}
        </motion.div>
    );
}

/**
 * Preset configurations for common scroll effects
 */
export const ScrollRevealPresets = {
    fadeIn: {
        animateOpacity: true,
        animateY: true,
        opacityRange: [0, 1] as [number, number],
        yRange: ["50px", "0px"] as [string, string],
    },
    scaleIn: {
        animateScale: true,
        animateOpacity: true,
        scaleRange: [0.8, 1] as [number, number],
        opacityRange: [0, 1] as [number, number],
    },
    slideLeft: {
        animateX: true,
        animateOpacity: true,
        xRange: ["100px", "0px"] as [string, string],
        opacityRange: [0, 1] as [number, number],
    },
    slideRight: {
        animateX: true,
        animateOpacity: true,
        xRange: ["-100px", "0px"] as [string, string],
        opacityRange: [0, 1] as [number, number],
    },
    parallax: {
        animateY: true,
        yRange: ["-100px", "100px"] as [string, string],
        scrollRange: [0, 1] as [number, number],
    },
} as const;
