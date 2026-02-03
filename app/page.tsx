"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { OrganicBlob } from "@/components/decorations/OrganicBlob";
import { SectionBreaker } from "@/components/sections/SectionBreaker";
import { ValuesStrip } from "@/components/sections/ValuesStrip";
import { ServicesTabs } from "@/components/sections/ServicesTabs";
import { NoiseTexture } from "@/components/decorations/NoiseTexture";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex flex-col px-6 overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/woman-digital-disconnecting-home-by-reading-book.jpg"
            alt="Woman reading book in a clean home"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-[1240px] relative z-10 w-full flex-grow flex flex-col justify-center pb-32">
          <div className="max-w-2xl text-center lg:text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-white mb-6 drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
            >
              Rent hem,<br />
              <span className="text-white/90">utan stress.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)]"
            >
              Vi ger dig tid tillbaka. Professionell hemstädning skräddarsydd för ditt hem och ditt schema. Njut av känslan av ett nystädat hem.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link href="/kontakt" className="w-full sm:w-auto">
                <Button size="lg" className="w-full px-8 h-14 text-base rounded-full gap-2 bg-primary hover:bg-primary/90 text-white border-0 shadow-lg shadow-primary/20 cursor-pointer">
                  <span>Få Offert Direkt</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 h-14 text-base rounded-full gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-secondary transition-all cursor-pointer"
                onClick={() => {
                  const servicesSection = document.getElementById('services');
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Sparkles className="w-4 h-4" />
                <span>Se Våra Tjänster</span>
              </Button>
            </motion.div>


            {/* Trust Pillars - Hidden on mobile, shown in desktop layout if needed, or keeping user preference */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-3 text-sm font-medium"
            >
              {/* Keeping these as pills for now */}
              <div className="flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-foreground shadow-sm border border-white/60">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Nöjd-Kund-Garanti</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-foreground shadow-sm border border-white/60">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Ansvarsförsäkring</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-foreground shadow-sm border border-white/60">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>RUT-avdrag direkt</span>
              </div>
            </motion.div>

          </div>
        </div>



        {/* Bottom Curve */}
        <div className="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-[140%] -translate-x-1/2 rounded-t-[100%] bg-[#fafbf9] z-30" />


      </section>

      {/* Services Section - Interactive Tabs */}
      <ServicesTabs />

      {/* [NEW] The Pause - Breaker Section */}
      <SectionBreaker
        quote="Det är detaljerna som gör helheten."
        author="Treda Städ"
        imageSrc="/images/flat-lay-green-cleaning-products-marble-background.jpg"
      />

      {/* Feature / Filler Section (Creative CTA) */}
      <section className="py-32 px-6 relative overflow-hidden bg-[#1A4D45]">
        {/* Subtle Atmosphere */}
        <OrganicBlob className="top-[-20%] left-[-10%] w-[700px] h-[700px] opacity-25" variant="secondary" />

        <div className="mx-auto max-w-[1000px] text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
            Mer tid för det <br />
            <span className="text-white/90">du älskar.</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Lämna dammsugaren till oss. Vi skapar utrymme för familj, hobbys och återhämtning i din vardag.
          </p>

          <div className="p-10 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 inline-block">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-left">
                <h4 className="text-2xl font-bold mb-2 text-white">Boka Prova-PStädning</h4>
                <p className="text-white/75">Ingen bindningstid. 20% rabatt första gången.</p>
              </div>
              <Button size="lg" className="h-14 px-8 text-lg shadow-2xl shadow-primary/40 ring-2 ring-white/20 hover:shadow-primary/60 hover:ring-white/40">
                Boka Nu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* [NEW] Filler Section */}
      <ValuesStrip />

      {/* Trust / Cleaner Section */}
      <section className="py-24 px-6 bg-stone-100 relative">
        <NoiseTexture opacity={0.03} />
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-leasio max-w-md mx-auto relative z-10">
                <img src="/images/cleaner.png" alt="Anna, Treda Städ" className="w-full h-full object-cover" />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-10 -left-10 w-24 h-24 bg-[#E8F5E9] rounded-full blur-xl -z-0" />
              <div className="absolute bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl -z-0" />
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-border/50 text-xs font-medium uppercase tracking-wider text-secondary mb-6">
                <Shield className="w-4 h-4" />
                Trygghet i fokus
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Vi är ansiktet utåt.</h2>
              <div className="space-y-6 text-lg text-secondary leading-relaxed">
                <p>
                  Att släppa in någon i sitt hem handlar om förtroende. Därför är alla våra medarbetare
                  noggrant rekryterade, bakgrundskontrollerade och utbildade i vår städmetodik.
                </p>
                <p>
                  Vi bär alltid uniform, legitimation och ett leende. Vi tror att glada medarbetare
                  ger ett bättre resultat.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-white rounded-xl shadow-sm border border-border/40">
                  <h4 className="font-bold text-foreground">Kollektivavtal</h4>
                  <p className="text-sm text-secondary">Självklart för oss.</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-sm border border-border/40">
                  <h4 className="font-bold text-foreground">Utbildad Personal</h4>
                  <p className="text-sm text-secondary">Certifierade städare.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div >
  );
}
