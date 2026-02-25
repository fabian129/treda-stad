import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Företagsstädning & Kontorsstädning',
    description: 'Proffsig kontorsstädning och fastighetsstädning i Malmö, Lund och hela Skåne. Fräscha ytor ger bättre arbetsdagar.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
