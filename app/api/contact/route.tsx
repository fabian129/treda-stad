import { resend } from "@/lib/resend";
import { EmailTemplate } from "@/components/email-template";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // Destructure known fields to satisfy TypeScript props or pass body directly if types align
        const {
            firstName,
            lastName,
            email,
            phone,
            address,
            zipCode,
            city,
            serviceType,
            sqm,
            windowsCount,
            message
        } = body;

        const { data, error } = await resend.emails.send({
            from: "kontakt@send.treda.se",
            to: "info@treda.se",
            subject: `Ny förfrågan: ${serviceType || 'Allmänt'} - ${firstName} ${lastName}`,
            react: (
                <EmailTemplate
                    firstName={firstName}
                    lastName={lastName}
                    email={email}
                    phone={phone}
                    address={address}
                    zipCode={zipCode}
                    city={city}
                    serviceType={serviceType}
                    sqm={sqm}
                    windowsCount={windowsCount}
                    message={message}
                />
            ),
        });

        if (error) {
            return Response.json({ error }, { status: 500 });
        }

        return Response.json(data);
    } catch (error) {
        return Response.json({ error: "Failed to send email" }, { status: 500 });
    }
}
