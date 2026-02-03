import { InteractiveTimeline } from "@/components/InteractiveTimeline";
import { Navbar } from "@/components/Navbar";

export default function TimelinePage() {
    return (
        <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
            <Navbar />
            <div className="min-h-[calc(100vh-80px)] w-full bg-[#fafbf9] flex flex-col items-center justify-center p-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">Vår resa mot en renare vardag</h1>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        se själv här nedan
                    </p>
                </div>

                <InteractiveTimeline />
            </div>
        </div>
    );
}
