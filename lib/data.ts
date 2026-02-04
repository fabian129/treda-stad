import { Sparkles, Star, Clock } from "lucide-react";

export const services = [
    {
        id: "hemstadning",
        title: "Hemstädning",
        price: "Från 249 kr/h",
        description: "Regelbunden städning varje eller varannan vecka. Vi ser till att ditt hem alltid är skinande rent och inbjudande.",
        image: "/images/joyful-girl-touching-her-father-nose-home.webp",
        perks: ["Dammning av ytor", "Dammsugning", "Kök & Badrum", "Golvvård"],
        icon: Sparkles
    },
    {
        id: "storstadning",
        title: "Storstädning",
        price: "Fast Pris",
        description: "En riktig genomkörare för ditt hem. Perfekt inför visning, fester eller när du bara vill börja om på nytt.",
        image: "/images/closeup-unrecognizable-person-cleaning-door-handle.webp",
        perks: ["Fönsterputs ingår", "Bakom vitvaror", "Ugnsrengöring", "Lister & Dörrar"],
        icon: Star
    },
    {
        id: "flyttstadning",
        title: "Flyttstädning",
        price: "Offert inom 1h",
        description: "Vi tar hand om hela städningen vid flytten så du kan fokusera på ditt nya hem. Godkänd garanti.",
        image: "/images/flat-lay-green-cleaning-products-marble-background.webp",
        perks: ["7 dagars garanti", "Nyckelhantering", "Besiktningsprotokoll", "50% RUT-avdrag"],
        icon: Clock
    },
    {
        id: "byggstadning",
        title: "Byggstädning",
        price: "Offert",
        description: "Professionell grov- och finstädning efter renovering eller nybyggnation. Vi tar hand om byggdammet.",
        image: "/images/cleaner.webp",
        perks: ["Bortforsling av material", "Dammsugning av alla ytor", "Fönsterputs", "Grov- & Finstädning"],
        icon: Star
    },
    {
        id: "kontorsstad",
        title: "Kontorsstäd",
        price: "Offert",
        description: "En ren arbetsplats ökar trivsel och produktivitet. Vi anpassar städningen efter era tider och behov.",
        image: "/images/woman-digital-disconnecting-home-by-reading-book.webp",
        perks: ["Städning av arbetsytor", "Kök & toaletter", "Påfyllning av material", "Flexibla tider"],
        icon: Star
    },
    {
        id: "fonsterputs",
        title: "Fönsterputs",
        price: "Från 499 kr",
        description: "Skinande rena fönster utan ränder. Vi putsar fönster på alla typer av fastigheter och höjder.",
        image: "/images/close-up-hand-with-rubber-glove-disinfecting.webp",
        perks: ["In- och utsida", "Karmrengöring", "Material ingår", "Upp till 3:e våningen"],
        icon: Star
    }
];
