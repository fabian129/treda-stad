"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState("samtycke");

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem("cookieConsent", "all");
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem("cookieConsent", "necessary");
        setIsVisible(false);
    };



    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-5xl rounded-lg bg-white shadow-2xl border-2 border-primary font-sans text-sm text-gray-700 md:bottom-8 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between bg-primary p-4 text-white">
                <div className="font-bold text-lg tracking-tight">Treda Städ</div>

            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-100 px-4">
                <button
                    onClick={() => setActiveTab("samtycke")}
                    className={`pb-3 pt-4 px-4 font-medium transition-colors border-b-2 ${activeTab === "samtycke"
                        ? "border-black text-black"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                        }`}
                >
                    Samtycke
                </button>

                <button
                    onClick={() => setActiveTab("om")}
                    className={`pb-3 pt-4 px-4 font-medium transition-colors border-b-2 ${activeTab === "om"
                        ? "border-black text-black"
                        : "border-transparent text-gray-500 hover:text-gray-700"
                        }`}
                >
                    Om
                </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
                {activeTab === "samtycke" && (
                    <>
                        <p className="leading-relaxed">
                            Vi använder cookies för att anpassa innehåll och annonser, för att
                            tillhandahålla funktioner för sociala medier och för att analysera
                            vår trafik. Vi delar också information om din användning av vår
                            webbplats med våra partners inom sociala medier, annonsering och
                            analys.
                        </p>
                        <p className="leading-relaxed">
                            Du kan läsa mer om hur vi använder cookies och annan teknik och
                            hur vi samlar in och behandlar personuppgifter i vår{" "}
                            <Link
                                href="/integritetspolicy"
                                className="font-bold underline decoration-2 decoration-rose-500 text-black hover:text-rose-600"
                            >
                                integritetspolicy
                            </Link>
                            .
                        </p>
                        <p className="leading-relaxed text-gray-600">
                            Vi och våra partners processar den insamlade datan efter ditt
                            godkännande eller legitima intresse för: Personaliserat innehåll
                            och annonser, statistik från innehåll och annonser samt användar-,
                            insikt- och produktutveckling.
                        </p>
                    </>
                )}

                {activeTab === "om" && (
                    <div className="space-y-4 text-sm">
                        <p className="leading-relaxed">
                            Denna webbplats använder cookies och liknande tekniker för att säkerställa funktionalitet, förbättra användarupplevelsen och analysera trafik.
                        </p>
                        <p className="leading-relaxed">
                            Vi behandlar personuppgifter i enlighet med GDPR. Vissa cookies placeras av tredje part.
                        </p>
                        <p className="leading-relaxed">
                            Du kan när som helst ändra eller återkalla ditt samtycke via cookie-inställningarna längst ned på sidan.
                        </p>
                        <div className="mt-4 pt-4 border-t border-gray-100">
                            <p className="font-bold mb-2">Personuppgiftsansvarig:</p>
                            <p>Treda Städ AB</p>
                            <p>Organisationsnummer: 559557-9383</p>
                            <p>E-post: info@treda.se</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Footer Actions */}
            <div className="flex flex-col gap-3 p-4 border-t border-gray-100 sm:flex-row sm:items-center sm:justify-between bg-gray-50/50 rounded-b-lg">
                <button
                    onClick={handleReject}
                    className="px-6 py-3 text-sm font-bold text-black border border-gray-300 rounded hover:bg-gray-100 transition-colors bg-gray-100"
                >
                    Avvisa
                </button>
                <div className="flex flex-col gap-3 sm:flex-row w-full sm:w-auto">

                    <button
                        onClick={handleAcceptAll}
                        className="flex-1 sm:flex-none px-6 py-3 text-sm font-bold text-white bg-[#1e2b4d] rounded hover:bg-[#2a3b63] transition-colors"
                    >
                        Tillåt alla
                    </button>
                </div>
            </div>
        </div>
    );
}
