import { Metadata } from 'next';

type Props = {
    params: Promise<{ city: string }>;
};

function capitalize(s: string) {
    if (!s) return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const cityName = capitalize(resolvedParams.city);

    return {
        title: `Städfirma i ${cityName} | Treda Städ`,
        description: `Letar du efter en pålitlig städfirma i ${cityName}? Vi erbjuder professionell hemstädning, företagsstädning och flyttstädning med nöjd-kund-garanti.`,
        keywords: [
            `städfirma ${cityName}`,
            `hemstädning ${cityName}`,
            `flyttstädning ${cityName}`,
            `kontorsstädning ${cityName}`,
            `fönsterputs ${cityName}`,
            `lokalvård ${cityName}`,
            `städbolag ${cityName}`
        ],
        openGraph: {
            title: `Treda Städ – Professionell städning i ${cityName}`,
            description: `Vi erbjuder professionell städning i ${cityName}. Boka enkelt online.`,
            url: `https://treda.se/vart-finns-vi/${resolvedParams.city}`,
            siteName: "Treda Städ",
            locale: "sv_SE",
            type: "website",
            images: [
                {
                    url: "/images/foretag/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: `Treda Städ - Professionell städning i ${cityName}`,
                },
            ],
        },
    };
}

export default async function Layout({ children, params }: { children: React.ReactNode, params: Promise<{ city: string }> }) {
    const resolvedParams = await params;
    const cityName = capitalize(resolvedParams.city);

    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Treda Städ ${cityName}`,
        "image": "https://treda.se/images/foretag/og-image.jpg",
        "url": `https://treda.se/vart-finns-vi/${resolvedParams.city}`,
        "telephone": "+46-76-267-93-01",
        "email": "kontakt@treda.se",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": cityName,
            "addressRegion": "Skåne",
            "addressCountry": "SE"
        },
        "description": `Professionell städfirma i ${cityName} som erbjuder hemstädning, flyttstädning och kontorsstädning.`,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            {children}
        </>
    );
}
