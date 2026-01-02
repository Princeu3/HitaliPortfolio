import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { nom, prenom, email, message } = await request.json();

    if (!nom || !prenom || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: "hitalikothari@gmail.com",
      subject: `New message from ${prenom} ${nom}`,
      text: `
Name: ${nom}
First Name: ${prenom}
Email: ${email}

Message:
${message}
      `,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Message</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 20px;">
            <tr>
              <td align="center">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="background-color: #121212; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);">

                  <!-- Content -->
                  <tr>
                    <td style="padding: 48px 40px 40px 40px;">

                      <!-- Logo/Name -->
                      <div style="text-align: center; margin-bottom: 40px;">
                        <h2 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">Hitali Kothari</h2>
                      </div>

                      <!-- Title with bar -->
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 32px;">
                        <tr>
                          <td style="vertical-align: bottom; padding-bottom: 8px; white-space: nowrap;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 42px; font-weight: 700; white-space: nowrap; letter-spacing: -0.5px;">
                              New Message
                            </h1>
                          </td>
                          <td style="width: 100%; vertical-align: bottom; padding-bottom: 12px; padding-left: 24px;">
                            <div style="height: 3px; background: rgba(255, 255, 255, 0.3); width: 100%;"></div>
                          </td>
                        </tr>
                      </table>

                      <!-- Sender information -->
                      <div style="background-color: #1a1a1a; padding: 24px; border-radius: 12px; margin-bottom: 30px;">
                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <!-- Profile placeholder -->
                            <td style="width: 80px; vertical-align: top;">
                              <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #2a2a2a 0%, #3a3a3a 100%);"></div>
                            </td>

                            <!-- Information -->
                            <td style="vertical-align: top; padding-left: 24px;">
                              <h2 style="margin: 0 0 8px 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">
                                ${prenom} ${nom}
                              </h2>
                              <table role="presentation" cellpadding="0" cellspacing="0" style="background-color: rgba(255, 255, 255, 0.1); border-radius: 20px;">
                                <tr>
                                  <td style="padding: 6px 12px;">
                                    <a href="mailto:${email}" style="color: #D1D5DC !important; font-size: 14px; font-weight: 500; text-decoration: none !important; border-bottom: none !important; box-shadow: none !important; white-space: nowrap; display: inline-block; vertical-align: middle;">
                                      ${email}
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </div>

                      <!-- Message -->
                      <div style="margin-bottom: 30px;">
                        <h2 style="margin: 0 0 16px 0; color: #ffffff; font-size: 24px; font-weight: 600;">
                          Message
                        </h2>
                        <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; color: #d0d0d0; font-size: 16px; line-height: 1.6;">
                          ${message.replace(/\n/g, "<br>")}
                        </div>
                      </div>

                      <!-- Reply button -->
                      <div style="text-align: center; margin-top: 32px;">
                        <a href="mailto:${email}" style="display: inline-flex; align-items: center; gap: 8px; background-color: #ffffff; color: #191919; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">
                          <span style="transform: translateY(-1px); display: inline-block;">Reply to message</span>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink: 0;">
                            <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                          </svg>
                        </a>
                      </div>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #0f0f0f; padding: 24px 40px; text-align: center; border-top: 1px solid #2a2a2a;">
                      <p style="margin: 0; color: #999999; font-size: 13px; line-height: 1.5;">
                        This message was sent from the contact form on your portfolio website.
                      </p>
                      <p style="margin: 8px 0 0 0; color: #666666; font-size: 12px;">
                        © ${new Date().getFullYear()} Hitali Kothari. All rights reserved.
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Error sending message" },
      { status: 500 }
    );
  }
}
