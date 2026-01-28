"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
interface TextScrambleProps extends React.HTMLAttributes<HTMLElement> { text: string; className?: string; duration?: number; speed?: number; characterSet?: string; as?: React.ElementType; children?: React.ReactNode; }
const DEFAULT_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
export function TextScramble({ text, className, duration = 1.5, speed = 0.04, characterSet = DEFAULT_CHARS, as: Component = "span" }: TextScrambleProps) {
    const [displayText, setDisplayText] = useState(text);
    useEffect(() => {
        const startTime = Date.now();

        const scramble = () => {
            const elapsed = (Date.now() - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            let result = "";
            for (let i = 0; i < text.length; i++) {
                if (progress >= (i / text.length) + Math.random() * 0.1) { result += text[i]; }
                else { if (text[i] === " ") { result += " "; } else { result += characterSet[Math.floor(Math.random() * characterSet.length)]; } }
            }
            setDisplayText(result);
            if (progress >= 1) {
                clearInterval(interval);
                setDisplayText(text);
            }
        };
        const interval = setInterval(scramble, speed * 1000);
        return () => clearInterval(interval);
    }, [text, duration, speed, characterSet]);
    const Comp = Component as any;
    return <Comp className={cn(className)} aria-label={text}>{displayText}</Comp>;
}
