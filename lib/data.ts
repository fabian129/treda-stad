import { Sparkles, Star, Clock } from "lucide-react";

export const services = [
    {
        id: "hemstadning",
        title: "Hemstäd i Malmö – mer tid i vardagen",
        shortTitle: "hemstäd",
        buttonText: "Be om offert",
        price: "Från 249 kr/h",
        description: "Med återkommande hemstäd från Treda Städ får du en ren och lugn känsla hemma – utan stress. Vi anpassar upplägget efter ditt hem och dina önskemål.",
        longDescription: "Vill du komma hem till ett hem som doftar rent och känns i ordning? Treda Städ hjälper dig med hemstäd i Malmö – veckovis, varannan vecka eller exakt när du behöver det. Vi jobbar metodiskt, noggrant och med tydlig kommunikation, så att du alltid vet vad som görs och när.",
        rutText: "Hemstäd omfattas av RUT – du kan få upp till 50% skattereduktion på arbetskostnaden, och vi sköter administrationen så att du ser rabatten direkt på fakturan.",
        image: "/images/joyful-girl-touching-her-father-nose-home.webp",
        perks: [
            "Personligt upplägg (fokus på dina viktigaste ytor)",
            "Samma rutin – jämn kvalitet över tid",
            "Tydlig checklista och enkel bokning",
            "Möjlighet till tillägg (ugn, fönsterputs m.m.)"
        ],
        icon: Sparkles
    },
    {
        id: "storstadning",
        title: "Storstäd i Malmö – när du vill \"nollställa\" hemmet",
        shortTitle: "storstäd",
        buttonText: "Få offert",
        price: "Offert",
        description: "Perfekt inför säsongsskifte, gäster, högtider eller när hemmet behöver en extra grundlig genomgång.",
        longDescription: "Ibland räcker inte vanlig veckostädning – du vill få bort det som byggs upp över tid. Med storstäd från Treda Städ går vi djupare: detaljerna, hörnen, listerna och ytorna som sällan får kärlek. Resultatet blir en ordentlig nystartkänsla.",
        rutText: "Storstäd/grundlig hemstädning kan omfattas av RUT (50% på arbetskostnaden) när det gäller hushållsnära städtjänster – vi hjälper dig att göra det enkelt på fakturan.",
        image: "/images/closeup-unrecognizable-person-cleaning-door-handle.webp",
        perks: [
            "Djupgående rengöring",
            "Fönsterputs (kan väljas till)",
            "Invändigt vitvaror (kan väljas till)",
            "Fokus på kök & badrum"
        ],
        icon: Star
    },
    {
        id: "flyttstadning",
        title: "Flyttstäd i Malmö – noggrant, tryggt och besiktningsredo",
        shortTitle: "flyttstäd",
        buttonText: "Boka flyttstäd",
        price: "Offert inom 1h",
        description: "Flyttstäd har högre krav än vanlig städning – och det är alltid du som står ansvarig mot hyresvärd/köpare. Därför jobbar vi med detaljer, checklistor och en tydlig process.",
        longDescription: "När du flyttar är det mycket att hålla koll på. Låt Treda Städ ta hand om flyttstädningen i Malmö så att du kan fokusera på flytt, nycklar och allt runt omkring. Vi städar noggrant från golv till tak – inklusive de moment som ofta missas, som lister, ventiler, skåp och bakom/under där det är möjligt.",
        rutText: "Flyttstäd omfattas normalt av RUT (50% på arbetskostnaden) och vi hanterar avdraget åt dig.",
        image: "/images/flat-lay-green-cleaning-products-marble-background.webp",
        perks: [
            "Tydlig omfattning (fast pris & checklista)",
            "Noggrann detaljstädning (högsta standard)",
            "Enkelt upplägg (offert → städning → klart)",
            "Trygghetsgaranti mot hyresvärd/köpare"
        ],
        icon: Clock
    },
    {
        id: "byggstadning",
        title: "Byggstäd i Malmö – klart för inflytt, visning eller överlämning",
        shortTitle: "byggstäd",
        buttonText: "Kontakta oss",
        price: "Offert",
        description: "Efter renovering och byggprojekt samlas fint damm och byggrester överallt. Vi gör rent ordentligt så att ytorna blir redo att användas.",
        longDescription: "Byggdamm sätter sig i lister, på väggar, inredning och i hörn – och det krävs rätt metod för att få det riktigt rent. Treda Städ utför byggstäd i Malmö för privatpersoner, byggfirmor och fastighetsägare. Vi kan hjälpa både under projektets gång och som slutstäd inför överlämning.",
        image: "/images/cleaner.webp",
        perks: [
            "Dammtorkning av alla ytor",
            "Rengöring av kök & badrum",
            "Golvrengöring efter behov",
            "Borttagning av byggrester"
        ],
        icon: Star
    },
    {
        id: "kontorsstad",
        title: "Kontorsstäd i Malmö – fräscha ytor, bättre arbetsdagar",
        shortTitle: "kontorsstäd",
        buttonText: "Få offert",
        price: "Offert",
        description: "Ett rent kontor ger bättre trivsel, färre störmoment och ett mer professionellt intryck för kunder och besökare. Treda Städ erbjuder kontorsstäd i Malmö som anpassas efter era tider och behov.",
        longDescription: "När kontoret är rent blir arbetsdagen enklare. Vi på Treda Städ hjälper företag i Malmö med regelbunden kontorsstädning – från mindre kontor till större arbetsplatser. Ni får ett tydligt upplägg, återkommande kvalitet och enkel kontakt om ni vill ändra något. Vi kan städa före öppning, efter stängning eller på tider som passar er verksamhet. Målet är att det ska märkas att det är städat – utan att städningen \"märks\" i vardagen.",
        image: "/images/woman-digital-disconnecting-home-by-reading-book.webp",
        perks: [
            "Anpassat schema (morgon/kväll)",
            "Fria ytor, kök & WC",
            "Tömning av avfall",
            "Kvalitetsuppföljning"
        ],
        icon: Star
    },
    {
        id: "fonsterputs",
        title: "Fönsterputs i Malmö – släpp in ljuset",
        shortTitle: "fönsterputs",
        buttonText: "Be om pris",
        price: "Från 499 kr",
        description: "Nyputsade fönster gör mer än man tror. Vi putsar noggrant för ett klart resultat utan ränder – hemma eller på jobbet.",
        longDescription: "Smuts och beläggningar tar bort ljuset och gör hela rummet \"mörkare\". Med fönsterputs från Treda Städ får du en fräsch känsla direkt – perfekt inför visning, säsongsskifte eller när du bara vill se skillnaden.",
        rutText: "Fönsterputs omfattas av RUT: upp till 50% skattereduktion på arbetskostnaden, vi sköter ansökan.",
        image: "/images/close-up-hand-with-rubber-glove-disinfecting.webp",
        perks: [
            "Enstaka puts eller abonnemang",
            "Resultat utan ränder",
            "Kombinera med hemstäd",
            "Vi sköter RUT-ansökan"
        ],
        icon: Star
    }
];
