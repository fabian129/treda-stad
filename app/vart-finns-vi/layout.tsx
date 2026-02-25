import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Vart Finns Vi? (Våra Orter)',
    description: 'Vi hjälper er med städning i stora delar av Skåne såsom Malmö, Lund, Vellinge, Trelleborg och Svedala. Läs vår lista över samtliga orter där Treda Städ utför tjänster.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
