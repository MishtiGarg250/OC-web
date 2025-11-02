import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);


interface SponsorFormData {
  companyName: string;
  ownerName: string;
  contactNumber: string;
  email: string;
  website: string;
  companySize: string;
  industry: string;
  sponsorshipType: string[]
  companyDetails: string;
}

export async function POST(request: Request) {
  try {
    const formData: SponsorFormData = await request.json();

    // Validate required fields
    if (!formData.companyName || !formData.email || !formData.ownerName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format sponsorship types (comma-separated string or fallback)
    const sponsorshipTypes =
      formData.sponsorshipType && formData.sponsorshipType.length > 0
        ? formData.sponsorshipType.join(', ')
        : 'Not specified';

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: 'OpenCode Sponsorship <onboarding@resend.dev>',
      to: 'geekhaven@iiita.ac.in',
      replyTo: formData.email,
      subject: `New Sponsorship Request from ${formData.companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #f3f4f6;">
          <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; margin-bottom: 20px;">
            New Sponsorship Request
          </h2>
          
          <div style="background-color: #111827; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #60a5fa; margin-top: 0;">Company Information</h3>
            <p><strong>Company Name:</strong> ${formData.companyName}</p>
            <p><strong>Contact Person:</strong> ${formData.ownerName}</p>
            <p><strong>Email:</strong> <a href="mailto:${formData.email}" style="color: #3b82f6;">${formData.email}</a></p>
            <p><strong>Contact Number:</strong> ${formData.contactNumber || 'Not provided'}</p>
            <p><strong>Website:</strong> ${
              formData.website
                ? `<a href="${formData.website}" target="_blank" style="color: #3b82f6;">${formData.website}</a>`
                : 'Not provided'
            }</p>
            <p><strong>Company Size:</strong> ${formData.companySize || 'Not specified'}</p>
            <p><strong>Industry:</strong> ${formData.industry || 'Not specified'}</p>
            <p><strong>Sponsorship Type:</strong> ${sponsorshipTypes}</p>
          </div>

          <div style="background-color: #111827; padding: 20px; border-radius: 8px;">
            <h3 style="color: #60a5fa; margin-top: 0;">Additional Details</h3>
            <p>${formData.companyDetails ? formData.companyDetails.replace(/\n/g, '<br>') : 'No additional details provided.'}</p>
          </div>

          <p style="margin-top: 30px; font-size: 14px; color: #9ca3af; text-align: center; border-top: 1px solid #374151; padding-top: 20px;">
            This email was sent from the OpenCode sponsorship form.
          </p>
        </div>
      `,
      text: `New Sponsorship Request

Company Information:
- Company Name: ${formData.companyName}
- Contact Person: ${formData.ownerName}
- Email: ${formData.email}
- Contact Number: ${formData.contactNumber || 'Not provided'}
- Website: ${formData.website || 'Not provided'}
- Company Size: ${formData.companySize || 'Not specified'}
- Industry: ${formData.industry || 'Not specified'}
- Sponsorship Type: ${sponsorshipTypes}

Additional Details:
${formData.companyDetails || 'No additional details provided.'}

This email was sent from the OpenCode sponsorship form.`,
    });

    if (error) {
      console.error('Resend API error:', error);
      throw new Error(error.message);
    }

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully!',
      data,
    });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send email',
        details: error.message || 'Unknown error occurred',
      },
      { status: 500 }
    );
  }
}
