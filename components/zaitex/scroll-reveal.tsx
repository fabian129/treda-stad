"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
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

    // Create transforms based on enabled animations
    const transforms: Record<string, MotionValue<any>> = {};

    if (animateScale) {
        transforms.scale = useTransform(scrollYProgress, scrollRange, scaleRange);
    }

    if (animateOpacity) {
        transforms.opacity = useTransform(scrollYProgress, scrollRange, opacityRange);
    }

    if (animateY) {
        transforms.y = useTransform(scrollYProgress, scrollRange, yRange);
    }

    if (animateX) {
        transforms.x = useTransform(scrollYProgress, scrollRange, xRange);
    }

    return (
        <motion.div ref={ref} style={transforms} className={cn(className)}>
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
