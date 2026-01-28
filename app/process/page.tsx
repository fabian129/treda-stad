"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProcessTimeline from "@/components/ProcessTimeline";

export default function ProcessPage() {
    return (
        <div className="min-h-screen bg-background font-mono selection:bg-black selection:text-white">
            {/* Background Grid & Vignette */}
            <div className="fixed inset-0 bg-grid pointer-events-none" />
            <div className="fixed inset-0 vignette pointer-events-none" />

            {/* Navigation (Minimal) */}
            <nav className="relative z-10 mx-auto max-w-[1200px] px-6 py-6 flex items-center justify-between">
                <Link href="/" className="font-bold text-lg tracking-tight hover:opacity-70 transition-opacity flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> BACK
                </Link>
                <div className="font-bold text-lg tracking-tight">ZAITEX_ENG</div>
            </nav>

            {/* Header */}
            <header className="relative z-10 pt-24 pb-12 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-3 py-1 mb-6 rounded-full border border-black/10 bg-white/50 backdrop-blur-sm text-xs font-medium text-secondary uppercase tracking-widest">
                        The Workflow
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        THE ZAITEX STANDARD.
                    </h1>
                    <p className="text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
                        A linear systems approach to digital engineering. From context to immutable record.
                    </p>
                </motion.div>
            </header>

            {/* The Scroll Timeline */}
            <ProcessTimeline />

            {/* Footer */}
            <footer className="border-t border-border py-12 text-center text-sm text-secondary relative z-10 bg-white/50 backdrop-blur-sm mt-24">
                <p>© 2026 ZAITEX — PROCESS OPERATIONAL</p>
            </footer>
        </div>
    );
}
