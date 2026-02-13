import { Resend } from "resend";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const resend = new Resend(process.env.RESEND_API_KEY);

        await resend.emails.send({
            from: "kontakt@send.treda.se",
            to: "info@treda.se",
            subject: "Ny förfrågan från hemsidan",
            text: JSON.stringify(data, null, 2),
        });

        return Response.json({ success: true });
    } catch (error) {
        return Response.json({ error: "Failed to send" }, { status: 500 });
    }
}
