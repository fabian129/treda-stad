"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { useState } from "react";

export default function KontaktPage() {
    const [formState, setFormState] = useState("idle"); // idle, submitting, success

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        setTimeout(() => setFormState("success"), 1500); // Simulate network request
    };

    return (
        <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
            <Navbar />

            <section className="py-12 md:py-20 px-6">
                <div className="mx-auto max-w-[1240px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                        {/* Left Column: Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-12"
                        >
                            <div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6">Kontakta Oss</h1>
                                <p className="text-xl text-secondary leading-relaxed">
                                    Redo för ett skinande rent resultat? Fyll i formuläret eller hör av dig direkt till oss.
                                    Vi svarar oftast inom 1 timme.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center text-primary shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Telefon</h3>
                                        <p className="text-secondary text-lg">040-123 45 67</p>
                                        <p className="text-sm text-secondary/70">Mån-Fre 08:00 - 17:00</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center text-primary shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">E-post</h3>
                                        <p className="text-secondary text-lg">info@tredastad.se</p>
                                        <p className="text-sm text-secondary/70">Vi svarar alla mail.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center text-primary shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Besök oss</h3>
                                        <p className="text-secondary text-lg">Storgatan 12, Malmö</p>
                                        <p className="text-sm text-secondary/70">Boka gärna tid innan besök.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-card p-8 md:p-10 rounded-3xl shadow-leasio border border-border/50"
                        >
                            {formState === "success" ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                                    <div className="w-20 h-20 rounded-full bg-[#E8F5E9] flex items-center justify-center text-primary mb-6">
                                        <CheckCircle className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Tack för din förfrågan!</h3>
                                    <p className="text-secondary text-lg">Vi har tagit emot ditt meddelande och återkommer så snart vi kan.</p>
                                    <Button
                                        variant="outline"
                                        className="mt-8"
                                        onClick={() => setFormState("idle")}
                                    >
                                        Skicka nytt meddelande
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h2 className="text-2xl font-bold mb-8">Skicka Förfrågan</h2>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-secondary">Förnamn</label>
                                            <input required type="text" className="w-full h-12 px-4 rounded-xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Anna" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-secondary">Efternamn</label>
                                            <input required type="text" className="w-full h-12 px-4 rounded-xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Andersson" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-secondary">E-post</label>
                                        <input required type="email" className="w-full h-12 px-4 rounded-xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="anna@exempel.se" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-secondary">Typ av städning</label>
                                        <select className="w-full h-12 px-4 rounded-xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                                            <option>Hemstädning</option>
                                            <option>Storstädning</option>
                                            <option>Flyttstädning</option>
                                            <option>Företagsstädning</option>
                                            <option>Annat</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-secondary">Meddelande (Valfritt)</label>
                                        <textarea className="w-full h-32 p-4 rounded-xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Berätta gärna mer om vad du behöver hjälp med..." />
                                    </div>

                                    <Button type="submit" size="lg" className="w-full h-14 text-base bg-primary text-[#02292E] hover:bg-primary/90 mt-4" disabled={formState === "submitting"}>
                                        {formState === "submitting" ? "Skickar..." : "Skicka Förfrågan"} <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
