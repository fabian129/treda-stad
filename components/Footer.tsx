"use client";

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Footer() {
    return (
        <footer className="bg-[#02292E] text-white pt-20 pb-10 border-t border-white/10 overflow-hidden relative z-10 isolate">
            {/* Solid background layer to block any patterns */}
            <div className="absolute inset-0 bg-[#02292E] -z-10"></div>
            <div className="mx-auto max-w-[1240px] px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="mb-6 block text-white">
                            <Logo className="h-12 w-auto" />
                        </Link>
                        <p className="text-white/70 max-w-sm mb-8 leading-relaxed">
                            Professionell städning för både hem och företag. Vi levererar skinande resultat med nöjd-kund-garanti och utbildad personal.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/treda.stad/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-[#02292E] transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61588427983542&locale=sv_SE" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-[#02292E] transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/treda-st%C3%A4d-1b617b3b3/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-[#02292E] transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* SEO City Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-primary">Vi finns i</h4>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-white/80 text-sm">
                            <li><Link href="/vart-finns-vi/malmo" className="hover:text-primary transition-colors">Malmö</Link></li>
                            <li><Link href="/vart-finns-vi/lund" className="hover:text-primary transition-colors">Lund</Link></li>
                            <li><Link href="/vart-finns-vi/helsingborg" className="hover:text-primary transition-colors">Helsingborg</Link></li>
                            <li><Link href="/vart-finns-vi/trelleborg" className="hover:text-primary transition-colors">Trelleborg</Link></li>
                            <li><Link href="/vart-finns-vi/vellinge" className="hover:text-primary transition-colors">Vellinge</Link></li>
                            <li><Link href="/vart-finns-vi/ystad" className="hover:text-primary transition-colors">Ystad</Link></li>
                            <li><Link href="/vart-finns-vi/landskrona" className="hover:text-primary transition-colors">Landskrona</Link></li>
                            <li><Link href="/vart-finns-vi/eslov" className="hover:text-primary transition-colors">Eslöv</Link></li>
                            <li className="col-span-2 pt-2"><Link href="/vart-finns-vi" className="text-secondary hover:text-primary text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1">Fler orter &rarr;</Link></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-primary">Snabblänkar</h4>
                        <ul className="space-y-4 text-white/80">
                            <li>
                                <Link href="/" className="hover:text-primary transition-colors">Hem</Link>
                            </li>
                            <li>
                                <Link href="/#services" className="hover:text-primary transition-colors">Våra Tjänster</Link>
                            </li>
                            <li>
                                <Link href="/foretag" className="hover:text-primary transition-colors">Företag</Link>
                            </li>
                            <li>
                                <Link href="/om-oss" className="hover:text-primary transition-colors">Om Oss</Link>
                            </li>
                            <li>
                                <Link href="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-primary">Kontakta Oss</h4>
                        <ul className="space-y-4 text-white/80">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <span>
                                    Höjdrodergatan 3<br />
                                    212 39 Malmö
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <a href="tel:04081787" className="hover:text-white transition-colors">040-81787</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <a href="mailto:info@tredastad.se" className="hover:text-white transition-colors">info@tredastad.se</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-white/50 gap-4">
                    <p>&copy; {new Date().getFullYear()} Treda Städ AB. Alla rättigheter förbehållna.</p>
                    <div className="flex gap-8">
                        <Link href="/tillganglighetspolicy" className="hover:text-white transition-colors">Tillgänglighetspolicy</Link>
                        <Link href="/integritetspolicy" className="hover:text-white transition-colors">Integritetspolicy</Link>
                        <Link href="/villkor" className="hover:text-white transition-colors">Allmänna villkor</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
