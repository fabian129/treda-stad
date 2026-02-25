import Script from "next/script";

export function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ProfessionalService",
                "@id": "https://treda.se/#organization",
                "name": "Treda Städ AB",
                "url": "https://treda.se",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://treda.se/images/logo.png", // Assuming logo exists
                    "width": 512,
                    "height": 512
                },
                "image": {
                    "@type": "ImageObject",
                    "url": "https://treda.se/images/foretag/portrait-smiling-beautiful-girl-playing-with-dog-golden-retriever-sitting-floor.jpg",
                    "width": 1200,
                    "height": 630
                },
                "description": "Professionell städfirma i Malmö och Lund som erbjuder hemstädning, flyttstädning och kontorsstädning av högsta kvalitet.",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Malmö",
                    "addressRegion": "Skåne län",
                    "addressCountry": "SE"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "55.604981",
                    "longitude": "13.003822"
                },
                "areaServed": [
                    { "@type": "City", "name": "Malmö" },
                    { "@type": "City", "name": "Lund" },
                    { "@type": "City", "name": "Vellinge" },
                    { "@type": "City", "name": "Trelleborg" },
                    { "@type": "City", "name": "Staffanstorp" },
                    { "@type": "City", "name": "Lomma" },
                    { "@type": "City", "name": "Svedala" },
                    { "@type": "City", "name": "Burlöv" },
                    { "@type": "City", "name": "Kävlinge" },
                    { "@type": "City", "name": "Höllviken" },
                    { "@type": "City", "name": "Skanör" },
                    { "@type": "City", "name": "Falsterbo" },
                    { "@type": "City", "name": "Eslöv" },
                    { "@type": "City", "name": "Landskrona" },
                    { "@type": "City", "name": "Helsingborg" },
                    { "@type": "City", "name": "Ystad" },
                    { "@type": "Region", "name": "Skåne län" }
                ],
                "telephone": "070-123 45 67", // Needs verification
                "email": "info@treda.se", // Needs verification
                "priceRange": "$$",
                "openingHoursSpecification": [
                    {
                        "@type": "OpeningHoursSpecification",
                        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        "opens": "08:00",
                        "closes": "17:00"
                    }
                ],
                "sameAs": [
                    "https://www.facebook.com/profile.php?id=61588427983542&locale=sv_SE",
                    "https://www.instagram.com/treda.stad/",
                    "https://www.linkedin.com/in/treda-st%C3%A4d-1b617b3b3/"
                ]
            },
            {
                "@type": "WebSite",
                "@id": "https://treda.se/#website",
                "url": "https://treda.se",
                "name": "Treda Städ",
                "description": "Professionell städning i Skåne",
                "publisher": { "@id": "https://treda.se/#organization" },
                "inLanguage": "sv-SE"
            }
        ]
    };

    return (
        <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
