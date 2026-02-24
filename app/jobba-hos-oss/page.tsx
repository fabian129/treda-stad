"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Briefcase, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { BorderBeam } from "@/components/ui/border-beam";
import { useState, Suspense, useEffect } from "react";

function JobApplicationForm() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        setFormState("submitting");

        const payload = {
            contact: {
                fornamn: data.firstName,
                efternamn: data.lastName,
                email: data.email,
                telefonnummer: data.phone,
                adress: "-",
                postnummer: "-",
                ort: "-",
            },
            service: {
                typ: "Jobbansökan",
                kvadratmeter: "",
            },
            details: {},
            meddelande: data.message,
        };

        try {
            const res = await fetch("/api/forfragan", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
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
                <h3 className="text-3xl font-bold mb-4 text-stone-900">Tack för din ansökan!</h3>
                <p className="text-stone-500 text-lg max-w-md mx-auto mb-8 leading-relaxed">
                    Vi har tagit emot dina uppgifter och hör av oss till dig så snart som möjligt.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <h2 className="text-3xl font-bold mb-8 text-stone-900">Ansök här</h2>

            {formState === "error" && (
                <div className="p-4 rounded-xl bg-red-50 text-red-600 border border-red-100 mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <p className="font-medium">Något gick fel. Vänligen försök igen senare.</p>
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

            <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-700">E-post</label>
                    <input required name="email" type="email" className="w-full h-14 px-5 rounded-2xl bg-stone-50 border border-stone-100 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" placeholder="anna@exempel.se" />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-stone-700">Telefonnummer</label>
                    <input required name="phone" type="tel" className="w-full h-14 px-5 rounded-2xl bg-stone-50 border border-stone-100 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all" placeholder="070-123 45 67" />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold text-stone-700">Berätta lite om dig själv</label>
                <textarea required name="message" className="w-full h-32 p-5 rounded-2xl bg-stone-50 border border-stone-100 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 focus:bg-white transition-all resize-none" placeholder="Lite om dina erfarenheter och varför du vill jobba hos oss..." />
            </div>

            <Button type="submit" size="lg" className="w-full h-14 text-base bg-primary text-[#02292E] hover:bg-primary/90 mt-4 rounded-xl" disabled={formState === "submitting"}>
                {formState === "submitting" ? "Skickar..." : "Skicka Ansökan"} <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
        </form>
    );
}

export default function JobbaHosOssPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
            <Navbar />

            <section className="py-12 md:py-20 px-6">
                <div className="mx-auto max-w-[1240px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                        {/* Left Column: Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6">Vi letar efter nya talanger!</h1>
                                <p className="text-xl text-secondary leading-relaxed">
                                    Är du vår nästa kollega? Fyll i kontaktformuläret så hör vi av oss till dig.
                                </p>
                            </div>

                            <div className="space-y-6 pt-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center text-primary shrink-0">
                                        <Briefcase className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h3 className="font-bold text-lg">En trygg arbetsplats</h3>
                                        <p className="text-secondary">Vi värnar om våra anställda och erbjuder bra villkor.</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-[#E8F5E9] flex items-center justify-center text-primary shrink-0">
                                        <Star className="w-6 h-6" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h3 className="font-bold text-lg">Utvecklande miljö</h3>
                                        <p className="text-secondary">Här får du chansen att växa och lära dig nytt.</p>
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
                                <JobApplicationForm />
                            </Suspense>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
