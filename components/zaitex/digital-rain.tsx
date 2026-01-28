"use client";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface DigitalRainProps {
    className?: string;
    density?: number;
    speed?: number;
}

/**
 * DigitalRain - Falling particle streaks effect
 * 
 * Creates vertical streaks that fall from top to bottom at varying speeds.
 * Particles glimmer and fade, creating a "digital matrix rain" effect.
 * 
 * @example
 * <DigitalRain density={50} speed={2} />
 */
export function DigitalRain({
    className,
    density = 50,
    speed = 2,
}: DigitalRainProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size to match parent container
        const resize = () => {
            const parent = canvas.parentElement;
            if (parent) {
                canvas.width = parent.clientWidth;
                canvas.height = parent.clientHeight;
            }
        };
        resize();
        window.addEventListener("resize", resize);

        // Particle class
        class Particle {
            x: number;
            y: number;
            length: number;
            speed: number;
            opacity: number;
            glimmer: number;
            canvasWidth: number;
            canvasHeight: number;

            constructor(w: number, h: number) {
                this.canvasWidth = w;
                this.canvasHeight = h;
                this.x = Math.random() * w;
                this.y = Math.random() * h - h;
                this.length = Math.random() * 20 + 10; // 10-30px streaks
                this.speed = Math.random() * speed + speed * 0.5; // Varying speeds
                this.opacity = Math.random() * 0.3 + 0.2; // 20-50% opacity
                this.glimmer = Math.random();
            }

            update(w: number, h: number) {
                this.canvasWidth = w;
                this.canvasHeight = h;
                this.y += this.speed;

                // Glimmer effect (randomly brighten)
                this.glimmer += 0.05;
                if (this.glimmer > 1) this.glimmer = 0;

                // Reset when off screen
                if (this.y > this.canvasHeight) {
                    this.y = -this.length;
                    this.x = Math.random() * this.canvasWidth;
                }
            }

            draw(ctx: CanvasRenderingContext2D) {
                // Calculate opacity with glimmer
                const glimmerBoost = Math.sin(this.glimmer * Math.PI) * 0.3;
                const finalOpacity = Math.min(this.opacity + glimmerBoost, 0.8);

                // Draw streak
                const gradient = ctx.createLinearGradient(
                    this.x,
                    this.y,
                    this.x,
                    this.y + this.length
                );
                gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
                gradient.addColorStop(0.5, `rgba(255, 255, 255, ${finalOpacity})`);
                gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x, this.y + this.length);
                ctx.stroke();
            }
        }

        // Create particles
        const particles: Particle[] = [];
        for (let i = 0; i < density; i++) {
            particles.push(new Particle(canvas.width, canvas.height));
        }

        // Animation loop
        let animationId: number;
        const animate = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Fade trail
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach((particle) => {
                particle.update(canvas.width, canvas.height);
                particle.draw(ctx);
            });

            animationId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationId);
        };
    }, [density, speed]);

    return (
        <canvas
            ref={canvasRef}
            className={cn("absolute inset-0 pointer-events-none", className)}
            style={{ zIndex: 1 }}
        />
    );
}
