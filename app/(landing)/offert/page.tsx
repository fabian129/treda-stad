"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Star, CheckCircle, Shield, Phone,
  ChevronDown, Award, Clock, Sparkles
} from "lucide-react";


const reviews = [
  { name: "Anna L.", rating: 5, text: "Fantastisk service! Hemmet har aldrig varit så rent. Alltid samma städare — det ger en trygghet som är ovärderlig.", location: "Malmö", time: "2 veckor sedan" },
  { name: "Marcus T.", rating: 5, text: "Pålitliga och noggranna. Har använt Treda i 8 månader. Rekommenderar varmt!", location: "Lund", time: "1 månad sedan" },
  { name: "Sara K.", rating: 5, text: "Äntligen ett städföretag som håller vad de lovar. Enkelt att boka, alltid i tid.", location: "Helsingborg", time: "3 veckor sedan" },
];

const services = [
  { label: "Hemstädning", value: "hemstadning" },
  { label: "Kontorsstädning", value: "kontorsstadning" },
  { label: "Storstädning", value: "storstadning" },
  { label: "Flyttstädning", value: "flyttstadning" },
  { label: "Fönsterputs", value: "fonsterputs" },
  { label: "Trappstädning", value: "trappstadning" },
];

const trustPoints = [
  { icon: Award, text: "Auktoriserat via Almega" },
  { icon: Shield, text: "Nöjd-Kund-Garanti" },
  { icon: Sparkles, text: "RUT — du betalar halva" },
  { icon: CheckCircle, text: "Alltid samma städare" },
  { icon: Clock, text: "Svar inom 2 timmar" },
  { icon: CheckCircle, text: "F-skattsedel" },
];

export default function OffertPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!name || !phone || !service) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#F4F6F2] font-sans">

      {/* ── TOPBAR ── */}
      <header className="bg-white/90 backdrop-blur-md border-b border-stone-100 sticky top-0 z-40 px-5">
        <div className="max-w-3xl mx-auto h-16 flex items-center justify-between">
          {/* Logo — not a link on landing page */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/Svart%20f%C3%A4rg%20(1)%20(2).svg" alt="Treda Städ" className="h-7 w-auto" />
          <a
            href="tel:04081787"
            className="flex items-center gap-2 bg-primary text-white font-semibold text-sm px-4 h-9 rounded-full hover:bg-primary/90 transition-all shadow-sm shadow-primary/20"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>040-81787</span>
          </a>
        </div>
      </header>

      {/* ── HERO BAND ── */}
      <div className="bg-white border-b border-stone-100 py-4 px-5">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="font-bold text-stone-900 text-sm">4.9</span>
            <span className="text-stone-400 text-sm">· 200+ Google-recensioner</span>
          </div>
          <div className="flex items-center gap-5 text-sm text-stone-500">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-primary" />Svar inom 2 timmar</span>
            <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-primary" />RUT-avdrag direkt</span>
          </div>
        </div>
      </div>

      {/* ── MAIN ── */}
      <main className="max-w-3xl mx-auto px-5 py-10 md:py-14">

        {/* Headline above form */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 leading-[1.1] tracking-tight mb-3">
            Få offert på städning<br />
            <span className="text-primary">inom 2 timmar</span>
          </h1>
          <p className="text-stone-500 text-lg max-w-md mx-auto">
            Fyll i formuläret — fast pris, ingen bindningstid, RUT-avdrag direkt.
          </p>
        </motion.div>

        {/* ── THE FORM — HERO ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          className="bg-white rounded-3xl border border-stone-200 shadow-2xl shadow-stone-900/8 overflow-hidden"
        >
          {/* Green header */}
          <div className="bg-gradient-to-r from-primary to-[#16a34a] px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-bold text-xl">Gratis offertförfrågan</p>
                <p className="text-white/75 text-sm mt-0.5">Svar inom 2 timmar · Ingen bindningstid</p>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 bg-white/15 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-300 text-yellow-300" />)}
                </div>
                <span className="text-white text-xs font-semibold">4.9</span>
              </div>
            </div>
          </div>

          {/* Form body */}
          <div className="px-8 py-8">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 220, delay: 0.1 }}
                    className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-5 shadow-xl shadow-primary/30"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">Tack, {name}!</h3>
                  <p className="text-stone-500 text-base leading-relaxed max-w-sm mx-auto">
                    Vi ringer upp dig på <span className="font-bold text-stone-700">{phone}</span> inom 2 timmar på vardagar.
                  </p>
                  <div className="mt-8 inline-flex items-center gap-3 bg-stone-50 border border-stone-200 rounded-2xl px-6 py-4">
                    <Phone className="w-5 h-5 text-primary" />
                    <div className="text-left">
                      <p className="text-xs text-stone-400">Föredrar du att ringa direkt?</p>
                      <a href="tel:04081787" className="font-bold text-stone-900 hover:text-primary transition-colors">040-81787</a>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                        Ditt namn *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="För- och efternamn"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full h-14 px-5 rounded-xl border-2 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-primary transition-all text-base bg-stone-50 focus:bg-white ${touched && !name ? "border-red-300 bg-red-50" : "border-stone-200"}`}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                        Telefonnummer *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="070 000 00 00"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full h-14 px-5 rounded-xl border-2 text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-primary transition-all text-base bg-stone-50 focus:bg-white ${touched && !phone ? "border-red-300 bg-red-50" : "border-stone-200"}`}
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
                        Vilken tjänst? *
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={service}
                          onChange={(e) => setService(e.target.value)}
                          className={`w-full h-14 px-5 rounded-xl border-2 focus:outline-none focus:border-primary transition-all text-base appearance-none cursor-pointer bg-stone-50 focus:bg-white ${touched && !service ? "border-red-300 bg-red-50" : "border-stone-200"} ${!service ? "text-stone-400" : "text-stone-900"}`}
                        >
                          <option value="" disabled>Välj tjänst...</option>
                          {services.map((s) => (
                            <option key={s.value} value={s.value}>{s.label}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-16 bg-primary hover:bg-primary/90 active:scale-[0.99] text-white font-bold rounded-xl flex items-center justify-center gap-3 text-lg shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-200 disabled:opacity-70 cursor-pointer"
                  >
                    {loading ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>Skickar...</span>
                      </div>
                    ) : (
                      <>
                        <span>Skicka offertförfrågan</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-stone-400 mt-3">
                    Gratis och utan bindningstid · Vi delar aldrig dina uppgifter
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ── OR CALL ── */}
        <div className="flex items-center gap-4 my-6">
          <div className="h-px flex-1 bg-stone-300" />
          <span className="text-sm text-stone-400 font-medium">eller ring oss direkt</span>
          <div className="h-px flex-1 bg-stone-300" />
        </div>

        <a
          href="tel:04081787"
          className="flex items-center justify-center gap-3 w-full h-14 bg-white border-2 border-stone-200 hover:border-primary text-stone-800 hover:text-primary font-bold rounded-xl transition-all duration-200 text-lg group"
        >
          <div className="w-9 h-9 rounded-full bg-primary/10 group-hover:bg-primary/15 flex items-center justify-center transition-colors">
            <Phone className="w-4 h-4 text-primary" />
          </div>
          040-81787
        </a>

        {/* ── TRUST GRID ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-10">
          {trustPoints.map((t) => (
            <div key={t.text} className="flex items-center gap-3 bg-white border border-stone-100 rounded-2xl px-4 py-3 shadow-sm">
              <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <t.icon className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-stone-700 text-sm font-medium leading-tight">{t.text}</span>
            </div>
          ))}
        </div>

        {/* ── REVIEWS ── */}
        <div className="mt-10">
          <p className="text-[11px] font-bold uppercase tracking-widest text-stone-400 mb-4 text-center">
            Verifierade Google-recensioner
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.3 + i * 0.07 }}
                className="bg-white border border-stone-100 rounded-2xl p-4 shadow-sm"
              >
                <div className="flex gap-0.5 mb-2">
                  {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-stone-700 text-sm leading-relaxed mb-3">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-2 pt-3 border-t border-stone-100">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs flex-shrink-0">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-stone-700">{r.name}</p>
                    <p className="text-[11px] text-stone-400">{r.location} · {r.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      {/* Legal micro-text — no navigation links */}
      <div className="py-8 px-5 text-center mb-20 lg:mb-0">
        <p className="text-[11px] text-stone-400">
          © {new Date().getFullYear()} Treda Städ AB ·{" "}
          <a href="/integritetspolicy" className="hover:text-stone-600 transition-colors">Integritetspolicy</a>
        </p>
      </div>

      {/* ── MOBILE STICKY BAR ── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-stone-200 px-4 py-3 flex gap-3 shadow-[0_-4px_24px_rgba(0,0,0,0.10)]">
        <a
          href="tel:04081787"
          className="flex-1 flex items-center justify-center gap-2 h-12 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold rounded-xl transition-all text-sm"
        >
          <Phone className="w-4 h-4" />Ring oss
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex-[2] flex items-center justify-center gap-2 h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all text-sm shadow-md shadow-primary/25 cursor-pointer"
        >
          Få gratis offert <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
