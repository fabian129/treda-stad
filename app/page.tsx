"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Zap, Shield, Cpu, Code, Layers, Globe, Box, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "npm run deploy --production\n> building optimized build...\n> verifying modules...\n> deployment successful\n> system status: operational";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-background font-mono selection:bg-black selection:text-white">
      {/* Background Grid & Vignette */}
      <div className="fixed inset-0 bg-grid pointer-events-none" />
      <div className="fixed inset-0 vignette pointer-events-none" />

      {/* Blue Glow Effect */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="relative z-10 mx-auto max-w-[1200px] px-6 py-6 flex items-center justify-between">
        <div className="font-bold text-lg tracking-tight">ZAITEX_ENG</div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary">
          <a href="/work" className="hover:text-foreground transition-colors">WORK</a>
          <a href="/process" className="hover:text-foreground transition-colors">PROCESS</a>
          <a href="#" className="hover:text-foreground transition-colors">STACK</a>
        </div>

        <button className="hidden md:flex items-center gap-2 bg-black text-white px-5 py-2.5 text-sm font-medium rounded hover:bg-black/90 transition-colors">
          START PROJECT <ArrowRight className="w-3 h-3" />
        </button>
      </nav>

      {/* Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center pt-20 pb-32 px-6">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-white/50 backdrop-blur-sm shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
          </span>
          <span className="text-xs font-medium text-secondary tracking-wide">SYSTEM OPERATIONAL</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center font-bold text-4xl md:text-6xl lg:text-[5rem] leading-[0.9] tracking-tight mb-8"
        >
          WE ENGINEER<br />
          DIGITAL PRODUCTS.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-[600px] text-center text-secondary text-base md:text-lg leading-relaxed mb-12"
        >
          Zaitex is a design-led engineering studio. We build high-performance
          digital systems with precision, clarity, and scalable architecture.
        </motion.p>

        {/* Terminal Component */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
          className="w-full max-w-[800px] rounded-xl overflow-hidden bg-white border border-border shadow-xl"
        >
          {/* Terminal Header */}
          <div className="bg-white border-b border-border px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
            </div>
            <div className="ml-4 text-xs text-secondary font-medium flex items-center gap-1.5">
              <Terminal className="w-3 h-3" />
              deploy.sh
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 bg-[#0A0A0A] h-[240px] overflow-hidden text-sm md:text-base">
            <pre className="font-mono text-gray-300 leading-relaxed whitespace-pre-wrap">
              {typedText}
              <span className="inline-block w-2.5 h-4 ml-1 bg-success align-middle animate-pulse" />
            </pre>
          </div>
        </motion.div>
      </main>

      {/* About Section */}
      <section className="relative z-10 border-t border-border/50 bg-white/50 backdrop-blur-sm">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-24 items-start">

            {/* Left Column: Content */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-[1px] w-12 bg-secondary/30"></div>
                  <span className="text-xs font-medium tracking-[0.2em] text-secondary uppercase">
                    Philosophy
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-8">
                  OBSESSED WITH<br />
                  STRUCTURE & FORM.
                </h2>

                <div className="space-y-6 text-secondary text-lg leading-relaxed max-w-xl">
                  <p>
                    We work at the intersection of design, structure, and clarity —
                    crafting systems and websites that feel intentional, timeless,
                    and distinctly premium.
                  </p>
                  <p>
                    Our approach is rooted in precision. Every detail is considered,
                    every decision has a purpose. We believe great design doesn't need
                    to be loud to be powerful — it needs to be clear, confident,
                    and built to last.
                  </p>
                </div>
              </motion.div>

              {/* Feature Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                {[
                  { icon: Zap, label: "High Performance" },
                  { icon: Shield, label: "Secure Core" },
                  { icon: Cpu, label: "Modular Arch" }
                ].map((feature) => (
                  <div
                    key={feature.label}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-white/80 text-sm font-medium text-secondary hover:border-black hover:text-foreground transition-all duration-300 cursor-default"
                  >
                    <feature.icon className="w-4 h-4" />
                    {feature.label}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Visual/Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative aspect-square lg:aspect-[4/5] bg-[#E5E5E5] rounded-3xl overflow-hidden border border-border"
            >
              {/* Abstract Technical Visual */}
              <div className="absolute inset-0 bg-grid opacity-50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[60%] h-[60%] border border-black/10 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute w-[40%] h-[40%] border border-black/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute w-2 h-2 bg-success rounded-full animate-ping" />
              </div>

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl border border-border flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-secondary mb-1">Architecture</div>
                  <div className="text-sm font-bold">System v1.0</div>
                </div>
                <div className="h-8 w-8 rounded-full bg-black flex items-center justify-center text-white">
                  <ArrowRight className="w-4 h-4 -rotate-45" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 border-t border-border/50">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <div className="flex items-center gap-3 mb-16">
            <div className="h-[1px] w-12 bg-secondary/30"></div>
            <span className="text-xs font-medium tracking-[0.2em] text-secondary uppercase">
              Services
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                icon: Layers,
                title: "Visual Identity",
                desc: "Brand systems that define how you're perceived. Strategic, cohesive, built to scale."
              },
              {
                icon: Globe,
                title: "Web Design",
                desc: "High-end digital experiences. Refined interfaces that convert and elevate your positioning."
              },
              {
                icon: Box,
                title: "Digital Systems",
                desc: "Modular design systems that evolve with your brand. Consistent, scalable, future-proof."
              },
              {
                icon: Code,
                title: "Brand Strategy",
                desc: "Description of your brand strategy offering. Clear direction for growth."
              }
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group border border-border rounded-xl p-8 hover:border-black/50 transition-colors bg-white/50 backdrop-blur-sm"
              >
                <div className="mb-6 h-10 w-10 flex items-center justify-center rounded-lg bg-black/5 text-black group-hover:bg-black group-hover:text-white transition-colors">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-secondary leading-relaxed">{service.desc}</p>

                <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                  Read More <ArrowRight className="w-3 h-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Work With (Clientele) */}
      <section className="relative z-10 border-t border-border/50 bg-[#F5F5F5]/50">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-secondary/30"></div>
                <span className="text-xs font-medium tracking-[0.2em] text-secondary uppercase">
                  Clientele
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                BUILT FOR FOUNDERS<br />WHO VALUE DESIGN.
              </h2>
              <div className="space-y-4 text-secondary leading-relaxed">
                <p>
                  Zaitex works with teams who see design as a strategic asset — not decoration.
                  Clients come to us when quality matters, and when the digital presence needs
                  to reflect ambition at the highest level.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-[3/2] bg-white border border-border rounded-lg flex items-center justify-center p-4 hover:border-black/20 transition-colors">
                  <div className="h-8 w-24 bg-black/5 rounded animate-pulse" />
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative z-10 border-t border-border/50">
        <div className="mx-auto max-w-[1200px] px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-8">
              LET'S WORK TOGETHER.
            </h2>
            <p className="text-secondary text-lg mb-12 max-w-xl mx-auto">
              Ready to elevate your digital presence? We are currently accepting
              new projects for Q3 2026.
            </p>

            <a
              href="mailto:hello@zaitex.com"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-black/80 transition-all hover:scale-105"
            >
              Start Project Inquiry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-white text-sm relative z-10">
        <div className="mx-auto max-w-[1200px] px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
              <span className="font-bold tracking-tight">ZAITEX_ENG</span>
              <div className="flex gap-6 text-secondary">
                <a href="#" className="hover:text-black">Twitter</a>
                <a href="#" className="hover:text-black">LinkedIn</a>
                <a href="#" className="hover:text-black">Instagram</a>
              </div>
            </div>

            <div className="text-secondary flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse inline-block" />
              SYSTEM OPERATIONAL — © 2026
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
