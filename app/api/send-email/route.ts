import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface SponsorFormData {
  companyName: string;
  ownerName: string;
  contactNumber: string;
  email: string;
  website: string;
  companySize: string;
  industry: string;
  sponsorshipType: string[];
  companyDetails: string;
}

export async function POST(request: Request) {
  try {
    const formData: SponsorFormData = await request.json();

    if (!formData.companyName || !formData.email || !formData.ownerName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Guard: ensure SMTP credentials are configured so we don't throw 500s silently
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;
    const internalRecipient =
      process.env.INTERNAL_NOTIFICATION_TO || "geekhaven@iiita.ac.in";

    if (!smtpUser || !smtpPass) {
      console.error("SMTP credentials are missing. Set SMTP_USER and SMTP_PASS env vars.");
      return NextResponse.json(
        { success: false, error: "Email service not configured. Please contact us directly at geekhaven@iiita.ac.in." },
        { status: 500 }
      );
    }

    const sponsorshipTypes =
      formData.sponsorshipType && formData.sponsorshipType.length > 0
        ? formData.sponsorshipType.join(", ")
        : "Not specified";

    
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // common convention
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Verify connection before attempting to send to catch auth errors early
    await transporter.verify();

    // Mail to sponsor as a confirmation
    const sponsorMail = {
      from: `"OpenCode Sponsorship" <${smtpFrom}>`,
      to: formData.email,
      subject: "We received your OpenCode sponsorship submission",
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 680px; margin: 0 auto; color: #e8ebff; background: #0a0818; padding: 28px; border-radius: 20px; border: 1px solid #241b3b; box-shadow: 0 24px 80px rgba(124,58,237,0.28);">
          <div style="padding: 18px 20px; margin-bottom: 18px; border-radius: 14px; border: 1px solid rgba(124,58,237,0.45); background: linear-gradient(135deg, rgba(124,58,237,0.18), rgba(59,130,246,0.12));">
            <h1 style="margin: 0 0 6px; font-size: 24px; letter-spacing: -0.01em;">Thanks for reaching out, ${formData.ownerName || "there"}!</h1>
            <p style="margin: 0; color: #c7d0f3;">We’ve received your sponsorship form for <strong style="color:#f7f8ff;">${formData.companyName}</strong>. Our team will follow up within 24 hours.</p>
          </div>

          <div style="background: #0f1024; border: 1px solid #2b2143; border-radius: 12px; padding: 16px 18px; margin-bottom: 14px;">
            <h3 style="margin: 0 0 10px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; color: #b69dff;">Your request</h3>
            <ul style="list-style: none; padding: 0; margin: 0; color: #dfe3ff; line-height: 1.7;">
              <li><strong style="color:#c9b7ff;">Requested tracks:</strong> ${sponsorshipTypes}</li>
              <li><strong style="color:#c9b7ff;">Company size:</strong> ${formData.companySize || "Not specified"}</li>
              <li><strong style="color:#c9b7ff;">Industry:</strong> ${formData.industry || "Not specified"}</li>
              <li><strong style="color:#c9b7ff;">Website:</strong> ${formData.website ? `<a href="${formData.website}" style="color:#8cc5ff;">${formData.website}</a>` : "Not provided"}</li>
            </ul>
          </div>

          <div style="background: #0f1024; border: 1px solid #2b2143; border-radius: 12px; padding: 16px 18px; margin-bottom: 18px;">
            <h3 style="margin: 0 0 10px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; color: #b69dff;">Your note</h3>
            <p style="margin: 0; color: #dfe3ff;">${formData.companyDetails ? formData.companyDetails.replace(/\n/g, "<br>") : "No additional details provided."}</p>
          </div>

          <div style="background: linear-gradient(135deg, rgba(124,58,237,0.16), rgba(14,165,233,0.16)); border: 1px solid rgba(124,58,237,0.35); border-radius: 12px; padding: 16px 18px; color: #dfe3ff;">
            <h3 style="margin: 0 0 8px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.08em; color: #b69dff;">Next steps</h3>
            <ul style="margin: 0; padding-left: 18px; color: #c7d0f3;">
              <li>We’ll propose a sponsor package tailored to your goals.</li>
              <li>Our team will reply you within 24 hrs.</li>
            </ul>
          </div>

          <p style="margin: 18px 0 0; color: #aab4de; font-size: 13px;">Cheers,<br/>OpenCode Team</p>
        </div>
      `,
      text: `
Thanks for reaching out, ${formData.ownerName || "there"}!

We’ve received your sponsorship form for ${formData.companyName}. Requested tracks: ${sponsorshipTypes}.
Company size: ${formData.companySize || "Not specified"}
Industry: ${formData.industry || "Not specified"}
Website: ${formData.website || "Not provided"}
Your note:
${formData.companyDetails || "No additional details provided."}

Next steps:
- We’ll propose a sponsor package tailored to your goals.
- You can reply here to add preferences or questions.

Cheers,
OpenCode Team
      `,
    };

    // Internal notification (comment out the sendMail line below if you need to disable)
    const internalMail = {
      from: `"OpenCode Sponsorship" <${smtpFrom}>`,
      to: internalRecipient,
      replyTo: formData.email,
      subject: `New Sponsorship Request from ${formData.companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 680px; margin: 0 auto; color: #0b1021; background: #f5f7fb; padding: 22px; border-radius: 14px; border: 1px solid #d8ddf0;">
          <div style="padding: 18px; border-radius: 12px; background: #ffffff; border: 1px solid #e6eaf5;">
            <h2 style="margin: 0 0 12px; color: #4c1d95;">New Sponsorship Request</h2>
            <table style="width:100%; border-collapse: collapse; color: #111827; line-height: 1.6;">
              <tr><td style="padding: 6px 0; width: 160px; color:#374151; font-weight:600;">Company</td><td style="padding: 6px 0;">${formData.companyName}</td></tr>
              <tr><td style="padding: 6px 0; color:#374151; font-weight:600;">Contact</td><td style="padding: 6px 0;">${formData.ownerName} (${formData.email})</td></tr>
              <tr><td style="padding: 6px 0; color:#374151; font-weight:600;">Phone</td><td style="padding: 6px 0;">${formData.contactNumber || "Not provided"}</td></tr>
              <tr><td style="padding: 6px 0; color:#374151; font-weight:600;">Website</td><td style="padding: 6px 0;">${formData.website ? `<a href="${formData.website}">${formData.website}</a>` : "Not provided"}</td></tr>
              <tr><td style="padding: 6px 0; color:#374151; font-weight:600;">Size</td><td style="padding: 6px 0;">${formData.companySize || "Not specified"}</td></tr>
              <tr><td style="padding: 6px 0; color:#374151; font-weight:600;">Industry</td><td style="padding: 6px 0;">${formData.industry || "Not specified"}</td></tr>
              <tr><td style="padding: 6px 0; color:#374151; font-weight:600;">Tracks</td><td style="padding: 6px 0;">${sponsorshipTypes}</td></tr>
            </table>
            <div style="margin-top: 14px; padding: 12px; background: #f3f4f6; border: 1px solid #e5e7eb; border-radius: 10px;">
              <strong style="color:#374151;">Note:</strong><br/>
              <span style="color:#1f2937;">${formData.companyDetails ? formData.companyDetails.replace(/\n/g, "<br>") : "No additional details provided."}</span>
            </div>
          </div>
        </div>
      `,
      text: `
New Sponsorship Request

Company: ${formData.companyName}
Contact: ${formData.ownerName} (${formData.email})
Phone: ${formData.contactNumber || "Not provided"}
Website: ${formData.website || "Not provided"}
Size: ${formData.companySize || "Not specified"}
Industry: ${formData.industry || "Not specified"}
Tracks: ${sponsorshipTypes}

Note:
${formData.companyDetails || "No additional details provided."}
      `,
    };

    await Promise.all([
      transporter.sendMail(sponsorMail),
      transporter.sendMail(internalMail),
    ]);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully to geekhaven@iiita.ac.in!",
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
