import { Metadata } from 'next';
import { services } from '@/lib/data';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const service = services.find((s) => s.id === resolvedParams.slug);

    if (!service) {
        return {
            title: 'Tjänst | Treda Städ',
        };
    }

    return {
        title: `${service.title} i Skåne`,
        description: service.description || `Läs mer om ${service.title.toLowerCase()} via Treda Städ.`,
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
