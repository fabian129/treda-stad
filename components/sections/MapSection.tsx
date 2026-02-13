"use client";

import { SkaneMap } from "@/components/SkaneMap";

export function MapSection() {
    return (
        <section className="py-24 bg-white relative overflow-hidden" id="map-section">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Vart finns vi?
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Vi erbjuder våra tjänster över hela Skåne. Från Malmö i söder till Ängelholm i norr.
                        Hittar du inte din ort? Kontakta oss så ser vi hur vi kan hjälpa dig.
                    </p>
                </div>

                <div className="flex justify-center">
                    <SkaneMap className="w-full max-w-3xl" />
                </div>
            </div>
        </section>
    );
}
