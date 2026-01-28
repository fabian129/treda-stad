import { cn } from "@/lib/utils";

interface AmbientGlowProps {
    className?: string;
    variant?: "primary" | "blue" | "purple" | "accent" | "smoke";
}

export function AmbientGlow({
    className,
    variant = "primary",
}: AmbientGlowProps) {
    return (
        <div
            className={cn(
                "pointer-events-none absolute -z-10 h-[500px] w-[500px] rounded-full blur-[100px] opacity-20",
                variant === "primary" && "bg-primary",
                variant === "accent" && "bg-accent",
                variant === "blue" && "bg-blue-500",
                variant === "purple" && "bg-purple-500",
                variant === "smoke" && "bg-white opacity-10 blur-[150px]",
                className
            )}
        />
    );
}
