"use client";

import { motion, useReducedMotion } from "framer-motion";
import { GridPattern } from "@/components/decorations/GridPattern";

const steps = [
  {
    title: "Boka tid",
    desc: "Välj datum och omfattning. Vi bekräftar direkt.",
  },
  {
    title: "Matchning",
    desc: "Vi sätter ihop rätt team för ditt hem.",
  },
  {
    title: "Städning",
    desc: "Noggrant, tryggt och med tydlig checklista.",
  },
  {
    title: "Kvalitetscheck",
    desc: "Vi går igenom detaljerna innan vi lämnar.",
  },
  {
    title: "Uppföljning",
    desc: "Vi följer upp och justerar efter dina önskemål.",
  },
];

export function HorizontalTimeline() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[85vh] py-24 md:py-32 px-6 overflow-hidden bg-white">
      <GridPattern className="opacity-[0.06] text-primary z-0" strokeDasharray="4 2" />
      <div className="mx-auto max-w-[1200px] relative z-10">
        <div className="max-w-xl text-left">
          <p className="text-xs uppercase tracking-[0.35em] text-secondary/70 mb-3">
            Tidslinje
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
            Vår resa mot <br />
            <span className="text-primary">en renare vardag</span>
          </h2>
          <p className="text-base md:text-lg text-secondary leading-relaxed">
            En tydlig process i fem steg som gör det enkelt att känna sig trygg.
          </p>
        </div>

        <div className="relative mt-14 md:mt-20 overflow-x-auto pb-6">
          <div className="relative min-w-[900px]">
            <motion.div
              animate={prefersReducedMotion ? { y: 0 } : { y: [0, -6, 0] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-3 rounded-full bg-white/50 border border-white/70 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
            />

            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, index) => (
                <div key={step.title} className="relative flex flex-col items-center text-center px-4 py-10">
                  <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border border-white/80 shadow-md" />

                  <div className={index % 2 === 0 ? "mb-10" : "mt-10"}>
                    <div className="text-[11px] uppercase tracking-[0.3em] text-secondary/60 mb-2">
                      Steg {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-secondary leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
