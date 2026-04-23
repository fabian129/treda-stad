"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Star, CheckCircle, Shield, Phone,
  ChevronDown, Award, Clock, Sparkles
} from "lucide-react";
import { Logo } from "@/components/Logo";

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

const scrollToForm = () => {
  document.getElementById("offert-form")?.scrollIntoView({ behavior: "smooth" });
};

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

    try {
      const nameParts = name.trim().split(/\s+/);
      const fornamn = nameParts[0] || name;
      const efternamn = nameParts.slice(1).join(" ") || "-";

      await fetch("/api/forfragan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: {
            fornamn,
            efternamn,
            email: `landing-lead-${Date.now()}@treda.se`,
            telefon: phone,
          },
          service: {
            typ: services.find((s) => s.value === service)?.label || service,
          },
          details: {
            källa: "Landningssida /offert",
          },
          meddelande: `Offertförfrågan via landningssidan. Ring ${phone}.`,
        }),
      });

      setSubmitted(true);
    } catch {
      // Even if API fails, show success — they can always call
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F6F2] font-sans">

      {/* ── TOPBAR ── */}
      <header className="bg-white/90 backdrop-blur-md border-b border-stone-100 sticky top-0 z-40 px-5">
        <div className="max-w-3xl mx-auto h-16 flex items-center justify-between">
          <Logo className="h-8 w-auto text-[#02292E]" />
          <a
            href="tel:04081787"
            className="flex items-center gap-2 bg-primary text-white font-semibold text-sm px-4 h-9 rounded-full hover:bg-primary/90 transition-all shadow-sm shadow-primary/20"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>040-81787</span>
          </a>
        </div>
      </header>

      {/* ── TRUST BAND ── */}
      <div className="bg-white border-b border-stone-100 py-4 px-5">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="font-bold text-stone-900 text-sm">15 stycken på 4.9 i betyg</span>
          </div>
          <div className="flex items-center gap-5 text-sm text-stone-500">
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-primary" />Svar inom 2 timmar</span>
            <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-primary" />RUT-avdrag direkt</span>
          </div>
        </div>
      </div>

      {/* ── MAIN ── */}
      <main className="max-w-3xl mx-auto px-5 py-10 md:py-14">

        {/* ══════════════════════════════════════════
            HERO — Headline + CTA button (no form)
            ══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 leading-[1.1] tracking-tight mb-4">
            Få offert på städning<br />
            <span className="text-primary">inom 2 timmar</span>
          </h1>
          <p className="text-stone-500 text-lg max-w-md mx-auto mb-8">
            Fast pris, ingen bindningstid, RUT-avdrag direkt. Det kostar inget att fråga.
          </p>
          <button
            onClick={scrollToForm}
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 active:scale-[0.98] text-white font-bold px-10 h-16 rounded-2xl text-lg shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-200 cursor-pointer"
          >
            Få kostnadsfri offert <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-stone-400 text-sm mt-3">Gratis · Inga förpliktelser · Svar inom 2 timmar</p>
        </motion.div>

        {/* ── OR CALL ── */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-stone-300" />
          <span className="text-sm text-stone-400 font-medium">eller ring oss direkt</span>
          <div className="h-px flex-1 bg-stone-300" />
        </div>

        <a
          href="tel:04081787"
          className="flex items-center justify-center gap-3 w-full h-14 bg-white border-2 border-stone-200 hover:border-primary text-stone-800 hover:text-primary font-bold rounded-xl transition-all duration-200 text-lg group mb-10"
        >
          <div className="w-9 h-9 rounded-full bg-primary/10 group-hover:bg-primary/15 flex items-center justify-center transition-colors">
            <Phone className="w-4 h-4 text-primary" />
          </div>
          040-81787
        </a>

        {/* ── TRUST GRID ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-16">
          {trustPoints.map((t) => (
            <div key={t.text} className="flex items-center gap-3 bg-white border border-stone-100 rounded-2xl px-4 py-3 shadow-sm">
              <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <t.icon className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-stone-700 text-sm font-medium leading-tight">{t.text}</span>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════
            BODY COPY — Convince & educate
            ══════════════════════════════════════════ */}

        {/* ── HOW IT WORKS ── */}
        <div className="mb-14">
          <p className="text-[11px] font-bold uppercase tracking-widest text-stone-400 mb-2 text-center">Så enkelt är det</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 text-center mb-8 tracking-tight">
            Tre steg till ett skinande rent hem
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { step: "1", title: "Skicka förfrågan", desc: "Fyll i formuläret — det tar 30 sekunder. Helt gratis och utan förpliktelser." },
              { step: "2", title: "Få ditt pris", desc: "Vi ringer dig inom 2 timmar med ett fast pris. Inga dolda kostnader, inga överraskningar." },
              { step: "3", title: "Luta dig tillbaka", desc: "Din personliga städare kommer på avtalad tid. Alltid samma person — alltid samma kvalitet." },
            ].map((item) => (
              <div key={item.step} className="bg-white border border-stone-100 rounded-2xl p-6 shadow-sm text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-stone-900 mb-2">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── VALUE PROPS — WHY TREDA ── */}
        <div className="mb-14">
          <div className="bg-white border border-stone-100 rounded-3xl p-8 sm:p-10 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-widest text-stone-400 mb-2">Varför välja oss</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mb-6">
              Städning utan krångel — <span className="text-primary">garanterat</span>
            </h2>
            <div className="space-y-5">
              {[
                { title: "Fast pris, inga överraskningar", desc: "Du vet alltid exakt vad det kostar. Vi ger dig ett fast pris innan vi börjar — inget timräknande, inga tillägg i efterhand." },
                { title: "Alltid samma städare", desc: "Du får en personlig städare som lär känna ditt hem. Ingen rotation, inga främlingar — bara trygghet och kontinuitet." },
                { title: "RUT-avdrag hanteras åt dig", desc: "Vi drar av RUT direkt på fakturan. Du betalar bara halva priset — vi sköter allt pappersarbete med Skatteverket." },
                { title: "Nöjd-kund-garanti", desc: "Inte nöjd? Vi kommer tillbaka och åtgärdar utan extra kostnad. Ingen diskussion, inga krångliga villkor." },
                { title: "Ingen bindningstid", desc: "Avsluta när du vill. Vi tror på att vår kvalitet talar för sig själv — inte på att låsa in kunder i avtal." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 mb-0.5">{item.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inline CTA */}
            <div className="mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center gap-4">
              <p className="text-stone-500 text-sm">Redo att testa? Det kostar inget att fråga.</p>
              <button
                onClick={scrollToForm}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-6 h-11 rounded-full transition-all shadow-md shadow-primary/20 text-sm cursor-pointer"
              >
                Få din offert <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <div className="mb-14">
          <p className="text-[11px] font-bold uppercase tracking-widest text-stone-400 mb-2 text-center">Vanliga frågor</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 text-center tracking-tight mb-6">
            Allt du behöver veta
          </h2>
          <div className="space-y-3">
            {[
              { q: "Vad kostar det?", a: "Priset beror på bostadens storlek och typ av städning. Vi ger dig alltid ett fast pris i förväg — och med RUT-avdrag betalar du bara halva." },
              { q: "Är det verkligen ingen bindningstid?", a: "Helt korrekt. Du kan avsluta eller pausa din städning när som helst. Vi skickar ingen faktura för tjänster du inte använt." },
              { q: "Vad händer om jag inte är nöjd?", a: "Då kommer vi tillbaka och åtgärdar — kostnadsfritt. Vi har nöjd-kund-garanti på alla våra tjänster." },
              { q: "Kan jag välja vilken dag och tid?", a: "Absolut. Vi anpassar schemat efter dig. Du väljer dag, tid och frekvens som passar din vardag." },
              { q: "Behöver jag vara hemma under städningen?", a: "Nej, de flesta av våra kunder lämnar nyckel eller portkod. Du kan vara hemma om du vill — men det är inget krav." },
            ].map((item, i) => (
              <details key={i} className="bg-white border border-stone-100 rounded-2xl shadow-sm group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                  <span className="font-semibold text-stone-900 text-sm sm:text-base pr-4">{item.q}</span>
                  <ChevronDown className="w-5 h-5 text-stone-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 pb-5 pt-0">
                  <p className="text-stone-500 text-sm leading-relaxed">{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* ── REVIEWS ── */}
        <div className="mb-14">
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

        {/* ══════════════════════════════════════════
            THE FORM — Bottom of page (scroll target)
            ══════════════════════════════════════════ */}
        <div id="offert-form" className="scroll-mt-24">
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
          onClick={scrollToForm}
          className="flex-[2] flex items-center justify-center gap-2 h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all text-sm shadow-md shadow-primary/25 cursor-pointer"
        >
          Få gratis offert <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
