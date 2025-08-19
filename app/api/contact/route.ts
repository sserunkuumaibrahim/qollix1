import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
    try {
        const { firstName, lastName, email, phone, subject, message } = await req.json();

        // Validate required fields
        if (!firstName || !lastName || !email || !subject || !message) {
            return NextResponse.json(
                { error: 'Please fill in all required fields' },
                { status: 400 }
            );
        }

        // Create a transporter using SMTP (you'll need to configure this with your email service)
        const transporter = nodemailer.createTransporter({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: 'hello@qollix.com',
            subject: `New Contact Form Submission: ${subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <div style="background-color: #18cb96; color: white; padding: 20px; text-align: center;">
                        <h1>New Contact Form Submission</h1>
                    </div>
                    <div style="padding: 20px; background-color: #f9f9f9;">
                        <h2>Contact Details</h2>
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Name:</td>
                                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${firstName} ${lastName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
                                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${email}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Phone:</td>
                                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${phone || 'Not provided'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Subject:</td>
                                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${subject}</td>
                            </tr>
                        </table>
                        
                        <h3 style="margin-top: 20px;">Message:</h3>
                        <div style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #18cb96;">
                            ${message.replace(/\n/g, '<br>')}
                        </div>
                        
                        <div style="margin-top: 20px; padding: 15px; background-color: #e8f5f0; border-radius: 5px;">
                            <p style="margin: 0; color: #666; font-size: 14px;">
                                This message was sent from the Qollix website contact form on ${new Date().toLocaleString()}.
                            </p>
                        </div>
                    </div>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Please try again.' },
            { status: 500 }
        );
    }
}
