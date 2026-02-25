import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Jobba Hos Oss',
    description: 'Trött på opersonliga städjobb? Vi på Treda Städ söker löpande noggranna och serviceinriktade städare och lokalvårdare runt om i Skåne.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
