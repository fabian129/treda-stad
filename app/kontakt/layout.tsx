import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Kontakta Oss & Få Kostnadsfri Offert',
    description: 'Kontakta Treda Städ för städhjälp i Skåne. Vi svarar snabbt och erbjuder kostnadsfria offerter för hemstädning, flyttstädning och kontorsstädning.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
