import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const location = String(body.location || "").trim();

    // Validate form
    if (!name || !phone || !location) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, phone and location are required.",
        },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Gmail environment variables are missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    // Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Sweta Invisible Grill Website" <${process.env.GMAIL_USER}>`,

      to:
        process.env.CONTACT_RECEIVER ||
        "invisiblesafetygrillpatna@gmail.com",

      subject: `New Website Lead - ${name}`,

      text: `
New Website Lead

Name: ${name}
Phone: ${phone}
Location: ${location}

Website:
https://www.invisiblesafetygrillpatna.com
      `,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto;">

          <h2 style="color: #1d4ed8;">
            New Website Lead
          </h2>

          <p>
            Someone submitted the contact form on your website.
          </p>

          <table
            style="
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
            "
          >

            <tr>
              <td style="padding: 12px; border: 1px solid #ddd;">
                <strong>Name</strong>
              </td>

              <td style="padding: 12px; border: 1px solid #ddd;">
                ${escapeHtml(name)}
              </td>
            </tr>

            <tr>
              <td style="padding: 12px; border: 1px solid #ddd;">
                <strong>Phone</strong>
              </td>

              <td style="padding: 12px; border: 1px solid #ddd;">
                ${escapeHtml(phone)}
              </td>
            </tr>

            <tr>
              <td style="padding: 12px; border: 1px solid #ddd;">
                <strong>Location</strong>
              </td>

              <td style="padding: 12px; border: 1px solid #ddd;">
                ${escapeHtml(location)}
              </td>
            </tr>

          </table>

          <p style="margin-top: 20px;">
            <strong>Website:</strong>
            <a href="https://www.invisiblesafetygrillpatna.com">
              invisiblesafetygrillpatna.com
            </a>
          </p>

        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Lead email sent successfully.",
    });

  } catch (error) {

    console.error("Contact email error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send email.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}