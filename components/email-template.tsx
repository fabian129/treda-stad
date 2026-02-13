import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    address?: string;
    zipCode?: string;
    city?: string;
    serviceType?: string;
    sqm?: string;
    windowsCount?: string;
    message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
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
    message,
}) => (
    <div style={{ fontFamily: 'sans-serif', lineHeight: '1.5' }}>
        <h1>Ny förfrågan från {firstName} {lastName}</h1>
        <p><strong>Typ av tjänst:</strong> {serviceType}</p>

        <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '5px', marginBottom: '20px' }}>
            <h2 style={{ fontSize: '18px', marginTop: 0 }}>Kontaktuppgifter</h2>
            <p><strong>E-post:</strong> {email}</p>
            <p><strong>Telefon:</strong> {phone || '-'}</p>
            <p><strong>Adress:</strong> {address || '-'}</p>
            <p><strong>Postnummer/Ort:</strong> {zipCode || '-'} {city || '-'}</p>
        </div>

        {sqm && <p><strong>Yta:</strong> {sqm} m²</p>}
        {windowsCount && <p><strong>Antal fönster:</strong> {windowsCount}</p>}

        {message && (
            <div>
                <h2 style={{ fontSize: '18px' }}>Meddelande</h2>
                <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
            </div>
        )}
    </div>
);
