import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function esc(s: any) {
    return String(s ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function toRows(obj: Record<string, any>) {
    return Object.entries(obj)
        .filter(([_, v]) => v !== undefined && v !== null && v !== "")
        .map(([k, v]) => {
            const value =
                typeof v === "object" ? JSON.stringify(v, null, 2) : String(v);
            return `<tr>
        <td style="padding:8px;border:1px solid #eee;"><b>${esc(k)}</b></td>
        <td style="padding:8px;border:1px solid #eee;">${esc(value)}</td>
      </tr>`;
        })
        .join("");
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // contact: grundfält
        const contact = body.contact ?? {};
        // service: vald tjänst + ev. extra val
        const service = body.service ?? {};
        // details: dynamiska fält (flyttstäd/fönsterputs osv)
        const details = body.details ?? {};
        const message = body.meddelande ?? "";

        // Minimal validering
        if (!contact.fornamn || !contact.efternamn || !contact.email) {
            return Response.json(
                { success: false, error: "Missing required fields" },
                { status: 400 }
            );
        }

        const subject = `Ny förfrågan: ${contact.fornamn} ${contact.efternamn} (${service.typ ?? "Okänd"})`;

        const html = `
      <h2>Ny förfrågan från hemsidan</h2>

      <h3>Kontakt</h3>
      <table style="border-collapse:collapse;width:100%;">${toRows(contact)}</table>

      <h3>Tjänst</h3>
      <table style="border-collapse:collapse;width:100%;">${toRows(service)}</table>

      <h3>Detaljer</h3>
      <table style="border-collapse:collapse;width:100%;">${toRows(details)}</table>

      <h3>Meddelande</h3>
      <div style="white-space:pre-wrap;border:1px solid #eee;padding:10px;border-radius:8px;">
        ${esc(message || "-")}
      </div>
    `;

        await resend.emails.send({
            from: "Treda <noreply@treda.se>",
            to: ["info@treda.se"],        // ✅ alltid till Treda
            replyTo: contact.email,       // ✅ svara direkt till inskickaren
            subject,
            html,
        });

        return Response.json({ success: true });
    } catch (err) {
        console.error(err);
        return Response.json({ success: false }, { status: 500 });
    }
}
