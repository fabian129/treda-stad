import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Om Oss - Vilka är Treda Städ?',
    description: 'Läs mer om Treda Städ, vår vision och varför vi brinner för att skapa trivsel och rena miljöer i Skåne. Personligt engagemang och nöjd-kund-garanti.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
