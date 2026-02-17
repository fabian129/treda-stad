"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { BorderBeam } from "@/components/ui/border-beam";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function ContactForm() {
    const searchParams = useSearchParams();
    const serviceFromUrl = searchParams.get("service");

    const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [selectedService, setSelectedService] = useState("Hemstädning");

    // Pre-select service based on URL param
    useEffect(() => {
        if (serviceFromUrl) {
            // Map common slugs to display names if needed, or rely on value matching
            const map: Record<string, string> = {
                "hemstadning": "Hemstädning",
                "storstadning": "Storstädning",
                "flyttstadning": "Flyttstädning",
                "byggstadning": "Byggstädning",
                "kontorsstad": "Kontorsstäd",
                "fonsterputs": "Fönsterputs"
            };
            if (map[serviceFromUrl]) {
                setSelectedService(map[serviceFromUrl]);
            }
        }
    }, [serviceFromUrl]);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        setFormState("submitting");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Failed");

            setFormState("success");
            window.scrollTo({ top: 0, behavior: "smooth" });
        } catch (err) {
            console.error(err);
            setFormState("error");
        }
    }

    if (formState === "success") {
        return (
            <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in fade-in zoom-in duration-500">
                <div className="w-24 h-24 rounded-full bg-[#E8F5E9] flex items-center justify-center text-primary mb-6 shadow-lg shadow-primary/20">
                    <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-stone-900">Tack för din förfrågan!</h3>
                <p className="text-stone-500 text-lg max-w-md mx-auto mb-8 leading-relaxed">
                    Vi har tagit emot ditt meddelande och återkommer till dig med en offert inom kort.
                </p>
                <Button
                    variant="outline"
                    className="rounded-full px-8 py-6 text-lg border-2"
                    onClick={() => setFormState("idle")}
                >
                    Skicka nytt meddelande
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl font-bold mb-8 text-stone-900">Skicka Förfrågan</h2>

            {formState === "error" && (
                <div className="p-4 rounded-xl bg-red-50 text-red-600 border border-red-100 mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <p className="font-medium">Något gick fel. Vänligen försök igen eller ring oss.</p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-700">Förnamn</label>
                    <input required name="firstName" type="text" className="w-full h-14 px-5 rounded-2xl bg-stone-50 border border-stone-100 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" placeholder="Anna" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-700">Efternamn</label>
                    <input required name="lastName" type="text" className="w-full h-14 px-5 rounded-2xl bg-stone-50 border border-stone-100 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" placeholder="Andersson" />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-700">E-post</label>
                    <input required name="email" type="email" className="w-full h-14 px-5 rounded-2xl bg-stone-50 border border-stone-100 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" placeholder="anna@exempel.se" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-700">Telefonnummer</label>
                    <input name="phone" type="tel" className="w-full h-14 px-5 rounded-2xl bg-stone-50 border border-stone-100 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" placeholder="070-123 45 67" />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-700">Adress</label>
                <input name="address" type="text" className="w-full h-14 px-5 rounded-2xl bg-stone-50 border border-stone-100 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" placeholder="Gatunamn 12" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-700">Postnummer</label>
                    <input name="zipCode" type="text" className="w-full h-14 px-5 rounded-2xl bg-stone-50 border border-stone-100 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" placeholder="211 11" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-700">Ort</label>
                    <input name="city" type="text" className="w-full h-14 px-5 rounded-2xl bg-stone-50 border border-stone-100 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" placeholder="Malmö" />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-700">Typ av städning</label>
                <select
                    name="serviceType"
                    value={selectedService}
                    className="w-full h-14 px-5 rounded-2xl bg-stone-50 border border-stone-100 text-stone-900 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all appearance-none cursor-pointer"
                    onChange={(e) => setSelectedService(e.target.value)}
                >
                    <option value="Hemstädning">Hemstädning</option>
                    <option value="Storstädning">Storstädning</option>
                    <option value="Flyttstädning">Flyttstädning</option>
                    <option value="Byggstädning">Byggstädning</option>
                    <option value="Kontorsstäd">Kontorsstäd</option>
                    <option value="Fönsterputs">Fönsterputs</option>
                    <option value="Annat">Annat</option>
                </select>
            </div>

            {/* Kvm Input - Shown for everything except Window Cleaning and Other */
                !['Fönsterputs', 'Annat'].includes(selectedService) && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                        <label className="text-sm font-semibold text-stone-700">Antal kvadratmeter (kvm)</label>
                        <div className="relative">
                            <input name="sqm" type="number" min="0" className="w-full h-14 px-5 rounded-2xl bg-stone-50 border border-stone-100 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" placeholder="t.ex. 85" />
                            <span className="absolute right-4 top-3 text-secondary/50 font-medium">m²</span>
                        </div>
                    </div>
                )}

            {/* Window Type - Shown for Fönsterputs AND Flyttstädning */
                (selectedService === 'Fönsterputs' || selectedService === 'Flyttstädning') && (
                    <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                        <label className="text-sm font-medium text-secondary">Typ av fönster</label>
                        <div className="grid grid-cols-2 gap-4">
                            <label className="flex items-center gap-3 p-4 rounded-xl border border-input cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all">
                                <input type="radio" name="windowType" value="2-sidiga" className="w-4 h-4 text-primary focus:ring-primary" />
                                <span className="text-sm font-medium">2-sidiga</span>
                            </label>
                            <label className="flex items-center gap-3 p-4 rounded-xl border border-input cursor-pointer hover:border-primary/50 hover:bg-primary/5 transition-all">
                                <input type="radio" name="windowType" value="4-sidiga" className="w-4 h-4 text-primary focus:ring-primary" />
                                <span className="text-sm font-medium">4-sidiga</span>
                            </label>
                        </div>
                    </div>
                )}

            {/* Number of Windows - Shown for Fönsterputs AND Flyttstädning */
                (selectedService === 'Fönsterputs' || selectedService === 'Flyttstädning') && (
                    <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                        <label className="text-sm font-medium text-secondary">Antal fönster (cirka)</label>
                        <input name="windowsCount" type="number" min="1" className="w-full h-12 px-4 rounded-xl bg-background border border-input focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="t.ex. 10" />
                    </div>
                )}

            <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-700">Meddelande (Valfritt)</label>
                <textarea name="message" className="w-full h-32 p-5 rounded-2xl bg-stone-50 border border-stone-100 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all resize-none" placeholder="Berätta gärna mer om vad du behöver hjälp med..." />
            </div>

            <Button type="submit" size="lg" className="w-full h-14 text-base bg-primary text-[#02292E] hover:bg-primary/90 mt-4 rounded-xl" disabled={formState === "submitting"}>
                {formState === "submitting" ? "Skickar..." : "Skicka Förfrågan"} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
        </form>
    );
}

export default function KontaktPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                                    Vi svarar oftast inom 24 h.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center text-primary shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Telefon</h3>
                                        <p className="text-secondary text-lg">040-817 87</p>
                                        <p className="text-sm text-secondary/70">Mån-Fre 08:00 - 17:00</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center text-primary shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">E-post</h3>
                                        <p className="text-secondary text-lg">info@treda.se</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center text-primary shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-1">Besök oss</h3>
                                        <p className="text-secondary text-lg">Höjdrodergatan 3, 212 39 Malmö</p>
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
                            className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[32px] shadow-xl shadow-primary/5 border-2 border-primary relative overflow-hidden"
                        >
                            <BorderBeam size={250} duration={9} delay={0} colorFrom="#16a34a" colorTo="#86efac" />
                            <Suspense fallback={<div className="h-96 flex items-center justify-center">Laddar formulär...</div>}>
                                <ContactForm />
                            </Suspense>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
