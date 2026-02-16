"use client";

import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Sparkles, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/Logo";

export function Navbar() {
    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isMenuOpen]);

    // Close menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const isActive = (path: string) => pathname === path;

    return (
        <header className="w-full bg-white border-b border-border/5 sticky top-0 z-50">
            <nav className="mx-auto max-w-[1280px] px-6 py-6 flex items-center justify-between">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <Logo className="h-[68px] w-auto" />
                </Link>

                <div className="hidden md:flex items-center gap-12 text-base font-medium text-stone-900">
                    {/* Services Dropdown */}
                    <div className="relative group">
                        <button className={cn(
                            "flex items-center gap-1 transition-colors hover:text-primary py-4",
                            isActive("/tjanster") ? "text-primary font-semibold" : ""
                        )}>
                            Våra Tjänster
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50 group-hover:opacity-100 transition-opacity">
                                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Dropdown Content */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200 z-50 w-56">
                            <div className="bg-white rounded-xl shadow-xl border border-border/10 p-2 overflow-hidden">
                                <Link href="/tjanster/hemstadning" className="block px-4 py-3 rounded-lg hover:bg-stone-50 text-stone-900 hover:text-primary transition-colors">
                                    Hemstädning
                                </Link>
                                <Link href="/tjanster/storstadning" className="block px-4 py-3 rounded-lg hover:bg-stone-50 text-stone-900 hover:text-primary transition-colors">
                                    Storstädning
                                </Link>
                                <Link href="/tjanster/flyttstadning" className="block px-4 py-3 rounded-lg hover:bg-stone-50 text-stone-900 hover:text-primary transition-colors">
                                    Flyttstädning
                                </Link>
                                <Link href="/tjanster/byggstadning" className="block px-4 py-3 rounded-lg hover:bg-stone-50 text-stone-900 hover:text-primary transition-colors">
                                    Byggstädning
                                </Link>
                                <Link href="/tjanster/kontorsstad" className="block px-4 py-3 rounded-lg hover:bg-stone-50 text-stone-900 hover:text-primary transition-colors">
                                    Kontorsstäd
                                </Link>
                                <Link href="/tjanster/fonsterputs" className="block px-4 py-3 rounded-lg hover:bg-stone-50 text-stone-900 hover:text-primary transition-colors">
                                    Fönsterputs
                                </Link>
                            </div>
                        </div>
                    </div>


                    <Link
                        href="/vart-finns-vi"
                        className={cn("transition-colors hover:text-primary", isActive("/vart-finns-vi") ? "text-primary font-semibold" : "")}
                    >
                        Vart finns vi
                    </Link>


                    <Link
                        href="/foretag"
                        className={cn("transition-colors hover:text-primary", isActive("/foretag") ? "text-primary font-semibold" : "")}
                    >
                        Företag
                    </Link>
                    <Link
                        href="/om-oss"
                        className={cn("transition-colors hover:text-primary", isActive("/om-oss") ? "text-primary font-semibold" : "")}
                    >
                        Om oss
                    </Link>
                    <Link
                        href="/kontakt"
                        className={cn("transition-colors hover:text-primary", isActive("/kontakt") ? "text-primary font-semibold" : "")}
                    >
                        Kontakt
                    </Link>
                </div>

                <Button variant="default" size="lg" className="hidden md:inline-flex h-12 px-8 text-base gap-2 rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/30" asChild>
                    <Link href="/kontakt">
                        <Sparkles className="w-5 h-5" />
                        <span>Få Offert</span>
                    </Link>
                </Button>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden relative z-50 p-2 text-stone-900 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="w-8 h-8 text-stone-900" />
                    ) : (
                        <Menu className="w-8 h-8" />
                    )}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden flex flex-col h-screen overflow-y-auto"
                    >
                        <nav className="flex flex-col gap-6 text-xl font-medium text-stone-900">
                            <Link href="/" className={cn("hover:text-primary transition-colors py-2 border-b border-border/10", isActive("/") && "text-primary font-bold")}>
                                Hem
                            </Link>

                            <div className="flex flex-col gap-4 py-2 border-b border-border/10">
                                <span className="text-secondary text-sm uppercase tracking-widest font-bold mb-2">Våra Tjänster</span>
                                <Link href="/tjanster/hemstadning" className="pl-4 hover:text-primary transition-colors">Hemstädning</Link>
                                <Link href="/tjanster/storstadning" className="pl-4 hover:text-primary transition-colors">Storstädning</Link>
                                <Link href="/tjanster/flyttstadning" className="pl-4 hover:text-primary transition-colors">Flyttstädning</Link>
                                <Link href="/tjanster/byggstadning" className="pl-4 hover:text-primary transition-colors">Byggstädning</Link>
                                <Link href="/tjanster/kontorsstad" className="pl-4 hover:text-primary transition-colors">Kontorsstäd</Link>
                                <Link href="/tjanster/fonsterputs" className="pl-4 hover:text-primary transition-colors">Fönsterputs</Link>
                            </div>

                            <Link href="/vart-finns-vi" className={cn("hover:text-primary transition-colors py-2 border-b border-border/10", isActive("/vart-finns-vi") && "text-primary font-bold")}>
                                Vart finns vi
                            </Link>

                            <Link href="/foretag" className={cn("hover:text-primary transition-colors py-2 border-b border-border/10", isActive("/foretag") && "text-primary font-bold")}>
                                Företag
                            </Link>

                            <Link href="/om-oss" className={cn("hover:text-primary transition-colors py-2 border-b border-border/10", isActive("/om-oss") && "text-primary font-bold")}>
                                Om oss
                            </Link>

                            <Link href="/kontakt" className={cn("hover:text-primary transition-colors py-2 border-b border-border/10", isActive("/kontakt") && "text-primary font-bold")}>
                                Kontakt
                            </Link>

                            <div className="mt-8">
                                <Button size="lg" className="w-full text-lg h-14 rounded-full gap-2 shadow-xl shadow-primary/20" asChild>
                                    <Link href="/kontakt">
                                        <Sparkles className="w-5 h-5" />
                                        <span>Få Offert Direkt</span>
                                    </Link>
                                </Button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
