import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = process.env.CONTACT_EMAIL ?? "onboarding@resend.dev";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, reason, message } = body;

    // Basic validation
    if (!name?.trim() || !email?.trim() || !message?.trim() || !reason?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, reason and message are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'Antiven Pen Website <info@se7eninc.com>',
      to: [TO_EMAIL],
      replyTo: email,
      subject: `[Antiven Pen] New Enquiry: ${reason} — from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; background: #f8fafd; margin: 0; padding: 24px; }
            .card { background: #fff; border-radius: 12px; padding: 32px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 20px rgba(26,95,180,0.1); border: 1px solid #e2e8f0; }
            .header { background: linear-gradient(135deg, #0d1f3c, #1a5fb4); border-radius: 8px; padding: 24px; margin-bottom: 28px; }
            .header h1 { color: #fff; margin: 0 0 6px; font-size: 22px; font-weight: 800; }
            .header p { color: rgba(255,255,255,0.7); margin: 0; font-size: 14px; }
            .badge { display: inline-block; padding: 4px 12px; background: #c0392b; border-radius: 999px; color: #fff; font-size: 12px; font-weight: 700; margin-bottom: 12px; }
            .field { margin-bottom: 18px; }
            .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #5a6a7e; margin-bottom: 4px; }
            .value { font-size: 15px; color: #0d1117; font-weight: 500; }
            .message-box { background: #f0f5ff; border-radius: 8px; padding: 16px; border-left: 3px solid #1a5fb4; }
            .footer { margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #8a9ab0; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <div class="badge">New Enquiry</div>
              <h1>Antiven Pen® Website Contact</h1>
              <p>${new Date().toISOString()}</p>
            </div>
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value"><a href="mailto:${email}">${email}</a></div>
            </div>
            ${phone ? `<div class="field"><div class="label">Phone</div><div class="value">${phone}</div></div>` : ''}
            <div class="field">
              <div class="label">Reason for Enquiry</div>
              <div class="value">${reason}</div>
            </div>
            <div class="field">
              <div class="label">Message</div>
              <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="footer">
              This message was sent via the Antiven Pen website contact form.
              Reply directly to this email to respond to ${name}.
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
