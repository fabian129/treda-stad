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
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
