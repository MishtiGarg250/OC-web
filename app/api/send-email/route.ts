import { randomUUID } from "node:crypto";
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

const INTERNAL_EMAIL = "geekhaven@iiita.ac.in";
const TYPE_LABELS: Record<string, string> = {
  monetary: "Monetary Support",
  internship: "Internship Opportunities",
  goodies: "Goodies & Swag",
};
const ALLOWED_TYPES = new Set(Object.keys(TYPE_LABELS));

function escapeHtml(value: string) {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  };
  return value.replace(/[&<>'"]/g, (character) => entities[character]);
}

function cleanLine(value: unknown, limit: number) {
  return typeof value === "string"
    ? value.replace(/[\u0000-\u001f\u007f]+/g, " ").trim().slice(0, limit)
    : "";
}

function cleanMessage(value: unknown, limit: number) {
  return typeof value === "string"
    ? value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "").trim().slice(0, limit)
    : "";
}

function normalize(value: unknown): SponsorFormData | null {
  if (!value || typeof value !== "object") return null;
  const input = value as Record<string, unknown>;
  const sponsorshipType = Array.isArray(input.sponsorshipType)
    ? input.sponsorshipType.filter(
        (item): item is string =>
          typeof item === "string" && ALLOWED_TYPES.has(item)
      )
    : [];

  return {
    companyName: cleanLine(input.companyName, 120),
    ownerName: cleanLine(input.ownerName, 120),
    contactNumber: cleanLine(input.contactNumber, 40),
    email: cleanLine(input.email, 254).toLowerCase(),
    website: cleanLine(input.website, 300),
    companySize: cleanLine(input.companySize, 40),
    industry: cleanLine(input.industry, 80),
    sponsorshipType: [...new Set(sponsorshipType)].slice(0, 3),
    companyDetails: cleanMessage(input.companyDetails, 3000),
  };
}

function isValidWebsite(website: string) {
  if (!website) return true;
  try {
    const url = new URL(website);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function emailShell(content: string, preheader: string) {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
  <body style="margin:0;padding:0;background:#090611;font-family:Arial,Helvetica,sans-serif;color:#f5f3ff;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${preheader}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#090611;"><tr><td align="center" style="padding:32px 12px;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:640px;background:#120b20;border:1px solid #392556;border-radius:18px;overflow:hidden;">
        <tr><td style="padding:28px 32px;background:#6d28d9;text-align:center;"><div style="font-size:13px;letter-spacing:2px;text-transform:uppercase;color:#ede9fe;">GeekHaven IIITA presents</div><div style="margin-top:7px;font-size:30px;font-weight:800;color:#fff;">OpenCode’26</div></td></tr>
        <tr><td style="padding:32px;">${content}</td></tr>
        <tr><td style="padding:20px 32px;border-top:1px solid #392556;text-align:center;color:#c4b5fd;font-size:13px;line-height:1.6;">OpenCode’26 · GeekHaven, IIIT Allahabad<br><a href="mailto:${INTERNAL_EMAIL}" style="color:#ddd6fe;text-decoration:none;">${INTERNAL_EMAIL}</a></td></tr>
      </table>
    </td></tr></table>
  </body></html>`;
}

function detailRow(label: string, value: string) {
  return `<tr><td style="padding:9px 12px;color:#c4b5fd;font-weight:700;vertical-align:top;width:150px;border-bottom:1px solid #302044;">${label}</td><td style="padding:9px 12px;color:#f5f3ff;vertical-align:top;border-bottom:1px solid #302044;word-break:break-word;">${value}</td></tr>`;
}

export async function POST(request: Request) {
  const requestId = `OC26-${randomUUID().slice(0, 8).toUpperCase()}`;

  try {
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid request body." },
        { status: 400 }
      );
    }

    const formData = normalize(body);
    if (!formData || !formData.companyName || !formData.ownerName ||
        !formData.contactNumber || !formData.companyDetails ||
        formData.sponsorshipType.length === 0) {
      return NextResponse.json(
        { success: false, error: "Please complete all required fields." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }
    if (!isValidWebsite(formData.website)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid website URL." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser;
    const internalRecipient = process.env.INTERNAL_NOTIFICATION_TO || INTERNAL_EMAIL;

    if (!smtpUser || !smtpPass || !smtpFrom || !Number.isInteger(smtpPort) ||
        smtpPort < 1 || smtpPort > 65535) {
      console.error(`[${requestId}] SMTP configuration is incomplete or invalid.`);
      return NextResponse.json(
        { success: false, error: `Email service is unavailable. Please contact ${INTERNAL_EMAIL}.` },
        { status: 503 }
      );
    }

    const safe = {
      companyName: escapeHtml(formData.companyName),
      ownerName: escapeHtml(formData.ownerName),
      contactNumber: escapeHtml(formData.contactNumber),
      email: escapeHtml(formData.email),
      website: escapeHtml(formData.website),
      companySize: escapeHtml(formData.companySize || "Not specified"),
      industry: escapeHtml(formData.industry || "Not specified"),
      companyDetails: escapeHtml(formData.companyDetails).replace(/\r?\n/g, "<br>"),
    };
    const sponsorshipTypes = formData.sponsorshipType.map((type) => TYPE_LABELS[type]).join(", ");
    const safeTypes = escapeHtml(sponsorshipTypes);
    const websiteHtml = formData.website
      ? `<a href="${safe.website}" style="color:#c4b5fd;">${safe.website}</a>`
      : "Not provided";

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });
    await transporter.verify();

    const sponsorHtml = emailShell(
      `<h1 style="margin:0 0 16px;font-size:26px;line-height:1.25;color:#fff;">Thank you for supporting OpenCode’26! 💜</h1>
       <p style="margin:0 0 16px;color:#ddd6fe;font-size:16px;line-height:1.7;">Dear ${safe.ownerName},</p>
       <p style="margin:0 0 16px;color:#e9e3f5;font-size:16px;line-height:1.7;">Thank you to <strong style="color:#fff;">${safe.companyName}</strong> for your interest in sponsoring OpenCode’26. Your support means a great deal to our open-source community, and we’re honoured to have your organisation consider joining this year’s event. 🚀</p>
       <div style="margin:24px 0;padding:18px;background:#1c1230;border:1px solid #493166;border-radius:12px;"><div style="color:#c4b5fd;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Submission received ✅</div><div style="margin-top:8px;color:#fff;font-size:16px;"><strong>Reference ID:</strong> ${requestId}</div><div style="margin-top:6px;color:#ddd6fe;font-size:15px;"><strong>Sponsorship interests:</strong> ${safeTypes}</div></div>
       <p style="margin:0 0 16px;color:#e9e3f5;font-size:16px;line-height:1.7;">Our team will review your submission and contact you directly about the next steps through <a href="mailto:${INTERNAL_EMAIL}" style="color:#c4b5fd;">${INTERNAL_EMAIL}</a>.</p>
       <p style="margin:24px 0 0;color:#ddd6fe;font-size:16px;line-height:1.7;">With gratitude,<br><strong style="color:#fff;">The OpenCode’26 Team</strong><br>GeekHaven, IIIT Allahabad ✨</p>`,
      `Thank you for your interest in sponsoring OpenCode’26. Reference: ${requestId}`
    );

    const internalHtml = emailShell(
      `<h1 style="margin:0 0 10px;font-size:26px;color:#fff;">New sponsorship enquiry 🎉</h1><p style="margin:0 0 22px;color:#ddd6fe;line-height:1.6;">A prospective sponsor submitted the OpenCode’26 form. Reply directly to this email to contact ${safe.ownerName}.</p>
       <div style="margin-bottom:18px;padding:14px 16px;background:#2a1742;border-left:4px solid #a78bfa;border-radius:8px;color:#fff;"><strong>Reference ID:</strong> ${requestId}</div>
       <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #392556;border-collapse:collapse;">${detailRow("Company", safe.companyName)}${detailRow("Representative", safe.ownerName)}${detailRow("Email", `<a href="mailto:${safe.email}" style="color:#c4b5fd;">${safe.email}</a>`)}${detailRow("Phone", safe.contactNumber)}${detailRow("Website", websiteHtml)}${detailRow("Company size", safe.companySize)}${detailRow("Industry", safe.industry)}${detailRow("Sponsorship", safeTypes)}</table>
       <div style="margin-top:20px;padding:18px;background:#1c1230;border:1px solid #392556;border-radius:10px;"><div style="margin-bottom:8px;color:#c4b5fd;font-size:12px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;">Message from sponsor</div><div style="color:#f5f3ff;line-height:1.65;">${safe.companyDetails}</div></div>`,
      `New OpenCode’26 sponsorship enquiry from ${safe.companyName}. Reference: ${requestId}`
    );

    const sponsorText = `Dear ${formData.ownerName},\n\nThank you to ${formData.companyName} for your interest in sponsoring OpenCode’26. Your support means a great deal to our open-source community.\n\nReference ID: ${requestId}\nSponsorship interests: ${sponsorshipTypes}\n\nOur team will review your submission and contact you directly about the next steps through ${INTERNAL_EMAIL}.\n\nWith gratitude,\nThe OpenCode’26 Team\nGeekHaven, IIIT Allahabad`;
    const internalText = `New OpenCode’26 sponsorship enquiry\n\nReference ID: ${requestId}\nCompany: ${formData.companyName}\nRepresentative: ${formData.ownerName}\nEmail: ${formData.email}\nPhone: ${formData.contactNumber}\nWebsite: ${formData.website || "Not provided"}\nCompany size: ${formData.companySize || "Not specified"}\nIndustry: ${formData.industry || "Not specified"}\nSponsorship: ${sponsorshipTypes}\n\nMessage from sponsor:\n${formData.companyDetails}`;

    await Promise.all([
      transporter.sendMail({
        from: `"OpenCode’26 Sponsorship" <${smtpFrom}>`,
        to: formData.email,
        replyTo: INTERNAL_EMAIL,
        subject: `Thank you for supporting OpenCode’26 💜 [${requestId}]`,
        html: sponsorHtml,
        text: sponsorText,
      }),
      transporter.sendMail({
        from: `"OpenCode’26 Sponsorship" <${smtpFrom}>`,
        to: internalRecipient,
        replyTo: formData.email,
        subject: `New OpenCode’26 sponsor: ${formData.companyName} [${requestId}]`,
        html: internalHtml,
        text: internalText,
      }),
    ]);

    return NextResponse.json({
      success: true,
      message: "Your sponsorship enquiry was sent successfully.",
      requestId,
    });
  } catch (error) {
    console.error(`[${requestId}] Failed to send sponsorship emails.`, error);
    return NextResponse.json(
      { success: false, error: `We could not send your enquiry. Please email ${INTERNAL_EMAIL} directly.` },
      { status: 502 }
    );
  }
}
