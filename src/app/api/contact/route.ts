import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, date, type, message } = body;

        // Validation
        if (!name || !email || !date || !type || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        console.log("Attempting to send email to:", process.env.RESEND_TO_EMAIL);
        console.log("Payload:", { name, email, date, type });

        // Send the email using Resend
        const data = await resend.emails.send({
            from: 'Luxe Bridal <onboarding@resend.dev>', // Update with your verified domain when ready
            to: [process.env.RESEND_TO_EMAIL || 'hello@example.com'], // The email address you want to receive inquiries
            replyTo: email,
            subject: `New Bridal Inquiry from ${name} - ${type}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #EBEBE3; border-radius: 8px;">
                    <h2 style="color: #1A1A1A; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">New Event Inquiry</h2>
                    
                    <p style="color: #666; font-size: 16px;"><strong>Name:</strong> ${name}</p>
                    <p style="color: #666; font-size: 16px;"><strong>Email:</strong> ${email}</p>
                    <p style="color: #666; font-size: 16px;"><strong>Event Date:</strong> ${date}</p>
                    <p style="color: #666; font-size: 16px;"><strong>Event Type:</strong> ${type}</p>
                    
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #EBEBE3;">
                        <p style="color: #1A1A1A; font-weight: bold; margin-bottom: 10px;">Message Details:</p>
                        <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                    </div>
                </div>
            `,
        });

        if (data.error) {
            return NextResponse.json({ error: data.error.message }, { status: 400 });
        }

        return NextResponse.json(
            { message: 'Inquiry sent successfully' },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Error handling contact form:', error);
        return NextResponse.json(
            { error: 'Internal server error', details: error.message || String(error) }, // Returning details for debug
            { status: 500 }
        );
    }
}
