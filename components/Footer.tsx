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
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-20 mb-16">

                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <Link href="/" className="mb-6 block text-white">
                            <Logo className="h-12 w-auto" />
                        </Link>
                        <p className="text-white/70 max-w-sm mb-8 leading-relaxed">
                            Professionell städning för både hem och företag. Vi levererar skinande resultat med nöjd-kund-garanti och utbildad personal.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-[#02292E] transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-[#02292E] transition-all">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-[#02292E] transition-all">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 text-primary">Snabblänkar</h4>
                        <ul className="space-y-4 text-white/80">
                            <li>
                                <Link href="/" className="hover:text-primary transition-colors">Hem</Link>
                            </li>
                            <li>
                                <Link href="/tjanster" className="hover:text-primary transition-colors">Våra Tjänster</Link>
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
                                    Storgatan 12<br />
                                    123 45 Malmö
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <a href="tel:081234567" className="hover:text-white transition-colors">08-123 45 67</a>
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
                        <Link href="#" className="hover:text-white transition-colors">Integritetspolicy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Villkor</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
