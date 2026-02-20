"use client";


import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, CheckCircle, Handshake, GraduationCap, UserCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { OrganicBlob } from "@/components/decorations/OrganicBlob";
import { SectionBreaker } from "@/components/sections/SectionBreaker";
import { ValuesStrip } from "@/components/sections/ValuesStrip";
import { ServicesTabs } from "@/components/sections/ServicesTabs";
import { NoiseTexture } from "@/components/decorations/NoiseTexture";
import { WavyConnector } from "@/components/ui/WavyConnector";

import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">

      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] flex flex-col px-6 overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/foretag/portrait-smiling-beautiful-girl-playing-with-dog-golden-retriever-sitting-floor.jpg"
            alt="Woman reading book in a clean home"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Main Content */}
        <div className="mx-auto max-w-[1240px] relative z-10 w-full flex-grow flex flex-col justify-center pb-32">
          <div className="max-w-4xl text-center lg:text-left">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] md:leading-[1.05] text-white mb-4 md:mb-6 drop-shadow-[0_8px_24px_rgba(0,0,0,0.45)] will-change-transform transform-gpu"
            >
              Rent hem,<br />
              <span className="text-white/90">utan stress.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/90 max-w-xl mx-auto lg:mx-0 mb-6 md:mb-8 leading-relaxed drop-shadow-[0_6px_18px_rgba(0,0,0,0.45)] will-change-transform transform-gpu"
            >
              Vi ger dig tid tillbaka. Professionell hemstädning skräddarsydd för ditt hem och ditt schema. Njut av känslan av ett nystädat hem.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 will-change-transform transform-gpu"
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


            {/* Trust Pillars - Semantic HTML */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-8 md:mt-12 flex flex-wrap justify-center lg:justify-start gap-3 md:gap-x-4 md:gap-y-3 text-sm font-medium will-change-transform transform-gpu list-none p-0"
            >
              <li className="flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-foreground shadow-sm border border-white/60">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Nöjd-Kund-Garanti</span>
              </li>
              <li className="flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-foreground shadow-sm border border-white/60">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Ansvarsförsäkring</span>
              </li>
              <li className="flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-foreground shadow-sm border border-white/60">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>RUT-avdrag direkt</span>
              </li>
              <li className="flex items-center gap-2 rounded-full bg-white/85 px-4 py-2 text-foreground shadow-sm border border-white/60">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Alltid samma personal</span>
              </li>
            </motion.ul>

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
        imageSrc="/images/marble-bg.webp"
      />

      {/* Feature / Filler Section (Creative CTA) */}
      <section className="py-20 md:py-32 px-6 relative overflow-hidden bg-[#1A4D45]">
        {/* Subtle Atmosphere */}
        <OrganicBlob className="top-[-20%] left-[-10%] w-[700px] h-[700px] opacity-25" variant="secondary" />

        <div className="mx-auto max-w-[1000px] text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 md:mb-8 text-white">
            Mer tid för det <br />
            <span className="text-[#50C878]">du älskar.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 md:mb-12">
            Lämna dammsugaren till oss. Vi skapar utrymme för familj, hobbys och återhämtning i din vardag.
          </p>

          <div className="p-10 bg-[#50C878] backdrop-blur-md rounded-[40px] shadow-2xl border border-white/10 inline-block hover:bg-[#50C878]/90 transition-colors group">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="text-left">
                <h4 className="text-2xl font-bold mb-2 text-stone-900">Boka din städning idag</h4>
              </div>
              <Link href="/kontakt" className="h-14 px-8 rounded-full border border-stone-900/20 flex items-center gap-2 group-hover:bg-stone-900 group-hover:border-stone-900 group-hover:text-white transition-all text-lg font-bold tracking-wide text-stone-900">
                <span>Boka Nu</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* [NEW] Filler Section */}
      <ValuesStrip />

      {/* Trust / Cleaner Section */}
      <section className="py-16 md:py-24 px-6 bg-white relative overflow-hidden">
        <NoiseTexture opacity={0.03} />
        {/* Atmosphere - Subtle Green Glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-900/10 max-w-md mx-auto relative z-10 border border-stone-100">
                <Image
                  src="/images/closeup-waitress-disinfecting-tables-outdoor-cafe.webp"
                  alt="Treda Städ professional cleaning"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </div>
              {/* Decorative elements - Bright Mode */}
              <div className="absolute top-10 -left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl -z-0" />
              <div className="absolute bottom-10 -right-10 w-32 h-32 bg-stone-100 rounded-full blur-xl -z-0" />
              {/* Wavy Connector - Decorative Curve (behind image, to the left) */}
              <div className="absolute bottom-16 -left-16 w-[300px] h-[120px] hidden lg:block z-0">
                <WavyConnector className="w-full h-full text-primary opacity-70" />
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-wider text-primary mb-6">
                <Shield className="w-4 h-4" />
                <span>Trygghet i fokus</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-stone-900">
                Vi är ansiktet <span className="text-primary">utåt.</span>
              </h2>
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
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
                <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100 hover:border-primary/30 transition-colors group relative">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-lg hidden sm:flex items-center justify-center text-primary">
                    <Handshake className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-primary mb-1">Kollektivavtal</h4>
                  <p className="text-sm text-stone-500">Självklart för oss.</p>
                </div>
                <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100 hover:border-primary/30 transition-colors group relative">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-lg hidden sm:flex items-center justify-center text-primary">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-primary mb-1">Utbildad Personal</h4>
                  <p className="text-sm text-stone-500">Certifierade städare.</p>
                </div>
                <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100 hover:border-primary/30 transition-colors group relative">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-lg hidden sm:flex items-center justify-center text-primary">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-primary mb-1">Alltid samma personal</h4>
                  <p className="text-sm text-stone-500">För din trygghet.</p>
                </div>
                <div className="p-5 bg-stone-50 rounded-2xl border border-stone-100 hover:border-primary/30 transition-colors group relative">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-lg hidden sm:flex items-center justify-center text-primary">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-primary mb-1">Via Almega</h4>
                  <p className="text-sm text-stone-500">Auktoriserat Serviceföretag.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}


    </div >
  );
}
