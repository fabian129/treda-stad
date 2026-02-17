import { Sparkles, Star, Clock } from "lucide-react";

export const services = [
    {
        id: "hemstadning",
        title: "Hemstäd – mer tid i vardagen",
        shortTitle: "hemstäd",
        buttonText: "Be om offert",
        price: "Från 249 kr/h",
        description: "Med återkommande hemstäd från Treda Städ får du en ren och lugn känsla hemma – utan stress.",
        longDescription: "Vill du komma hem till ett hem som doftar rent och känns i ordning? Treda Städ hjälper dig med hemstäd i Malmö – veckovis, varannan vecka eller exakt när du behöver det. Vi jobbar metodiskt, noggrant och med tydlig kommunikation, så att du alltid vet vad som görs och när.",
        rutText: "Hemstäd omfattas av RUT – du kan få upp till 50% skattereduktion på arbetskostnaden, och we sköter administrationen så att du ser rabatten direkt på fakturan.",
        image: "/images/joyful-girl-touching-her-father-nose-home.webp",
        perks: [
            "Personligt upplägg (fokus på dina viktigaste ytor)",
            "Samma rutin – jämn kvalitet over tid",
            "Tydlig checklista och enkel bokning",
            "Möjlighet till tillägg (ugn, fönsterputs m.m.)"
        ],
        faq: [
            {
                question: "Måste jag vara hemma när ni städar?",
                answer: "Nej, de flesta av våra kunder lämnar en nyckel så att vi kan städa när ni är på jobbet. Vi har säkra rutiner för nyckelhantering."
            },
            {
                question: "Vad ingår i en vanlig hemstädning?",
                answer: "Vi dammsuger och svabbar golv, dammtorkar fria ytor, rengör kök (bänkar, spis, diskho) och badrum (toalett, dusch, handfat) samt torkar lister och dörrar."
            },
            {
                question: "Har jag alltid samma personal?",
                answer: "Ja, vi strävar alltid efter att du ska ha samma städare varje gång för trygghet och kvalitet."
            }
        ],
        process: [
            {
                title: "Boka enkelt",
                description: "Kontakta oss för att boka ett kostnadsfritt hembesök eller direkt uppstart."
            },
            {
                title: "Vi lär känna ditt hem",
                description: "Vi går igenom dina önskemål och matchar dig med rätt personal."
            },
            {
                title: "Städningen utförs",
                description: "Samma städare kommer på avtalad tid och gör ditt hem skinande rent."
            },
            {
                title: "Njut av friheten",
                description: "Kom hem till doften av nystädat och få tid över till annat."
            }
        ],
        icon: Sparkles
    },
    {
        id: "storstadning",
        title: "Storstäd – när du vill \"nollställa\" hemmet",
        shortTitle: "storstäd",
        buttonText: "Få offert",
        price: "Offert",
        description: "Perfekt inför säsongsskifte, gäster, högtider eller när hemmet behöver en extra grundlig genomgång.",
        longDescription: "Ibland räcker inte vanlig veckostädning – du vill få bort det som byggs upp över tid. Med storstäd från Treda Städ går vi djupare: detaljerna, hörnen, listerna och ytorna som sällan får kärlek. Resultatet blir en ordentlig nystartkänsla.",
        rutText: "Storstäd/grundlig hemstädning kan omfattas av RUT (50% på arbetskostnaden) när det gäller hushållsnära städtjänster – vi hjälper dig att göra det enkelt på fakturan.",
        image: "/images/closeup-unrecognizable-person-cleaning-door-handle.webp",
        perks: [
            "Djupgående rengöring",
            "Fönsterputs",
            "Invändigt vitvaror",
            "Fokus på kök & badrum"
        ],
        faq: [
            {
                question: "Vad är skillnaden på hemstäd och storstäd?",
                answer: "Storstädning är mer omfattande och inkluderar moment som torkning av väggar, rengöring bakom vitvaror, invändig ugnsrengöring och ofta fönsterputs."
            },
            {
                question: "Ingår fönsterputs?",
                answer: "Ja, i våra storstädningar ingår normalt fönsterputsning, men det går att välja bort om så önskas."
            },
            {
                question: "Hur lång tid tar en storstädning?",
                answer: "Det beror på hemmets storlek, men räkna med cirka 4–8 timmar för ett normalstort hem."
            }
        ],
        process: [
            {
                title: "Få offert",
                description: "Beskriv ditt hem och behov så får du ett fast pris direkt."
            },
            {
                title: "Vi bokar in",
                description: "Vi hittar en dag som passar dig för den stora genomgången."
            },
            {
                title: "Djuprengöring",
                description: "Vi städar allt från golv till tak, bakom spisar och inuti skåp."
            },
            {
                title: "Besiktning",
                description: "Vi går igenom resultatet tillsammans för att säkerställa att allt är perfekt."
            }
        ],
        icon: Star
    },
    {
        id: "flyttstadning",
        title: "Flyttstäd – noggrant, tryggt och besiktningsredo",
        shortTitle: "flyttstäd",
        buttonText: "Boka flyttstäd",
        price: "Offert inom 1h",
        description: "Flyttstädning ställer högre krav än vanlig städning. Vi jobbar metodiskt med checklistor och detaljer – så du blir godkänd.",
        longDescription: "När du flyttar är det mycket att hålla koll på. Låt Treda Städ ta hand om flyttstädningen i Malmö så att du kan fokusera på flytt, nycklar och allt runt omkring. Vi städar noggrant från golv till tak – inklusive de moment som ofta missas, som lister, ventiler, skåp och bakom/under där det är möjligt.",
        rutText: "Flyttstäd omfattas normalt av RUT (50% på arbetskostnaden) och vi hanterar avdraget åt dig.",
        image: "/images/crop-woman-with-box-with-things (1).jpg",
        perks: [
            "Tydlig omfattning (fast pris & checklista)",
            "Noggrann detaljstädning (högsta standard)",
            "Enkelt upplägg (offert → städning → klart)",
            "Trygghetsgaranti mot hyresvärd/köpare"
        ],
        faq: [
            {
                question: "Lämnar ni garanti på flyttstädningen?",
                answer: "Ja, vi lämnar alltid garanti. Skulle hyresvärden eller den nya ägaren ha anmärkningar åtgärdar vi det kostnadsfritt."
            },
            {
                question: "Måste jag ha städmaterial hemma?",
                answer: "Nej, vid flyttstädning har vi med oss allt material och utrustning som krävs."
            },
            {
                question: "Ingår biytor som balkong och förråd?",
                answer: "Det ingår normalt inte i grundpriset men kan enkelt läggas till som tillval. Säg bara till vid bokning!"
            }
        ],
        process: [
            {
                title: "Boka & Planera",
                description: "Boka in datumet för flytten. Vi säkrar upp personal och material."
            },
            {
                title: "Nyckelöverlämning",
                description: "Vi stämmer av hur vi får tillgång till bostaden (nyckel eller kod)."
            },
            {
                title: "Totalstädning",
                description: "Vi följer mäklarsamfundets riktlinjer för en godkänd flyttstädning."
            },
            {
                title: "Garanti & Klart",
                description: "Nöjd-kund-garanti ingår. Vi hanterar ev. synpunkter från ny ägare."
            }
        ],
        icon: Clock
    },
    {
        id: "byggstadning",
        title: "Byggstäd – klart för inflytt, visning eller överlämning",
        shortTitle: "byggstäd",
        buttonText: "Kontakta oss",
        price: "Offert",
        description: "Efter renovering och byggprojekt samlas fint damm och byggrester överallt. Vi gör rent ordentligt så att ytorna blir redo att användas.",
        longDescription: "Byggdamm sätter sig i lister, på väggar, inredning och i hörn – och det krävs rätt metod för att få det riktigt rent. Treda Städ utför byggstäd i Malmö för privatpersoner, byggfirmor och fastighetsägare. Vi kan hjälpa både under projektets gång och som slutstäd inför överlämning.",
        image: "/images/worker-prepares-subfloor-wooden-floorboard-installation.jpg",
        perks: [
            "Dammtorkning av alla ytor",
            "Rengöring av kök & badrum",
            "Golvrengöring efter behov",
            "Borttagning av byggrester"
        ],
        faq: [
            {
                question: "Hur snabbt kan ni komma?",
                answer: "Vi försöker vara så flexibla som möjligt. Kontakta oss så ser vi över schemat."
            },
            {
                question: "Ingår bortforsling av grovsopor?",
                answer: "Vi fokuserar på städning och dammsanering. Bortforsling av större byggskräp behöver bokas separat eller hanteras av byggfirman."
            }
        ],
        process: [
            {
                title: "Besiktning",
                description: "Vi tittar på projektet för att bedöma omfattning och behov."
            },
            {
                title: "Offert & Plan",
                description: "Du får ett pris och en tidsplan som matchar ditt byggprojekt."
            },
            {
                title: "Grov & Finstäd",
                description: "Vi tar hand om allt byggdamm, färgstänk och rester."
            },
            {
                title: "Inflyttningsklart",
                description: "Ytorna lämnas helt rena och redo för inredning eller inflytt."
            }
        ],
        icon: Star
    },
    {
        id: "kontorsstad",
        title: "Kontorsstäd – fräscha ytor, bättre arbetsdagar",
        shortTitle: "kontorsstäd",
        buttonText: "Få offert",
        price: "Offert",
        description: "Ett rent kontor skapar trivsel och ett professionellt intryck. Vi erbjuder kontorsstäd i Malmö, anpassat efter era tider och behov.",
        longDescription: "När kontoret är rent blir arbetsdagen enklare. Vi på Treda Städ hjälper företag i Malmö med regelbunden kontorsstädning – från mindre kontor till större arbetsplatser. Ni får ett tydligt upplägg, återkommande kvalitet och enkel kontakt om ni vill ändra något. Vi kan städa före öppning, efter stängning eller på tider som passar er verksamhet. Målet är att det ska märkas att det är städat – utan att städningen \"märks\" i vardagen.",
        image: "/images/full-shot-people-cleaning-office_1.jpg",
        perks: [
            "Anpassat schema (morgon/kväll)",
            "Fria ytor, kök & WC",
            "Tömning av avfall",
            "Kvalitetsuppföljning"
        ],
        faq: [
            {
                question: "Binder vi upp oss på långa avtal?",
                answer: "Vi tror på nöjda kunder, inte inlåsta kunder. Vi har schyssta villkor och rimliga uppsägningstider."
            },
            {
                question: "Kan ni sköta inköp av förbrukningsvaror?",
                answer: "Absolut! Vi kan se till att toalettpapper, tvål och handdukar alltid finns på plats."
            }
        ],
        process: [
            {
                title: "Behovsanalys",
                description: "Vi besöker ert kontor och går igenom era specifika önskemål."
            },
            {
                title: "Skräddarsytt avtal",
                description: "Vi sätter upp ett schema och en frekvens som passar er verksamhet."
            },
            {
                title: "Regelbunden service",
                description: "Vår personal sköter städningen diskret och professionellt."
            },
            {
                title: "Uppföljning",
                description: "Vi har löpande kontakt för att säkerställa att ni är nöjda."
            }
        ],
        icon: Star
    },
    {
        id: "fonsterputs",
        title: "Fönsterputs – släpp in ljuset",
        shortTitle: "fönsterputs",
        buttonText: "Be om pris",
        price: "Från 499 kr",
        description: "Nyputsade fönster gör mer än man tror. Vi putsar noggrant för ett klart resultat utan ränder – hemma eller på jobbet.",
        longDescription: "Smuts och beläggningar tar bort ljuset och gör hela rummet \"mörkare\". Med fönsterputs från Treda Städ får du en fräsch känsla direkt – perfekt inför visning, säsongsskifte eller när du bara vill se skillnaden.",
        rutText: "Fönsterputs omfattas av RUT: upp till 50% skattereduktion på arbetskostnaden, vi sköter ansökan.",
        image: "/images/man-doing-professional-home-cleaning-service (1).jpg",
        perks: [
            "Enstaka puts eller abonnemang",
            "Resultat utan ränder",
            "Kombinera med hemstäd",
            "Vi sköter RUT-ansökan"
        ],
        faq: [
            {
                question: "Putsar ni på hög höjd?",
                answer: "Vi klarar de flesta villor och lägenheter med stege och stång. Vid mycket höga höjder behöver vi informeras innan."
            },
            {
                question: "Vad händer om det regnar?",
                answer: "Lite regn hindrar inte putsningen, fönstren blir rena ändå. Vid kraftigt oväder bokar vi givetvis om tiden."
            }
        ],
        process: [
            {
                title: "Prisförslag",
                description: "Berätta hur många fönster du har så får du ett pris direkt."
            },
            {
                title: "Tidsbokning",
                description: "Vi hittar en tid som passar. Du behöver inte vara hemma om vi kommer åt utifrån."
            },
            {
                title: "Professionell puts",
                description: "Vi putsar och rengör karmar (om valt) för ett skinande resultat."
            },
            {
                title: "Klart!",
                description: "Njut av ljusinsläppet och rena fönster utan ränder."
            }
        ],
        icon: Star
    }
];
