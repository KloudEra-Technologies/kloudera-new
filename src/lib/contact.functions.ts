import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(254),
  company: z.string().trim().max(160).optional(),
  subject: z.string().trim().max(180).optional(),
  message: z.string().trim().min(10).max(5000),
  website: z.string().max(200).optional(),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export const sendEnquiry = createServerFn({ method: "POST" })
  .validator(enquirySchema)
  .handler(async ({ data }) => {
    // Honeypot spam protection.
    // Real visitors should leave this field empty.
    if (data.website?.trim()) {
      return { success: true };
    }

    let apiKey = process.env.RESEND_API_KEY || process.env["RESEND_API_KEY"];
    let toEmail = process.env.ENQUIRY_TO_EMAIL || process.env["ENQUIRY_TO_EMAIL"];
    let fromEmail = process.env.ENQUIRY_FROM_EMAIL || process.env["ENQUIRY_FROM_EMAIL"];
    let envDebug = "none";

    if (!apiKey || !fromEmail) {
      try {
        const fs = await import("fs");
        const path = await import("path");
        const envPath = path.resolve(process.cwd(), ".env");
        if (fs.existsSync(envPath)) {
          const envContent = fs.readFileSync(envPath, "utf-8");
          const env = envContent.split("\\n").reduce((acc, line) => {
            const [k, ...v] = line.split("=");
            if (k && v.length) acc[k.trim()] = v.join("=").trim();
            return acc;
          }, {} as Record<string, string>);
          apiKey = apiKey || env.RESEND_API_KEY;
          toEmail = toEmail || env.ENQUIRY_TO_EMAIL;
          fromEmail = fromEmail || env.ENQUIRY_FROM_EMAIL;
          envDebug = "loaded manually from " + envPath;
        } else {
          envDebug = "env file not found at " + envPath;
        }
      } catch (e) {
        envDebug = "error: " + (e as Error).message;
      }
    }

    toEmail = toEmail || "info@kloudera.ai";

    if (!apiKey) {
      throw new Error(`Email service is not configured. Debug: ${envDebug}`);
    }

    if (!fromEmail) {
      throw new Error(`Email sender is not configured. Debug: ${envDebug}`);
    }

    const safeName = escapeHtml(data.name);
    const safeEmail = escapeHtml(data.email);
    const safeCompany = escapeHtml(data.company || "Not provided");
    const safeSubject = escapeHtml(
      data.subject || "Website enquiry",
    );
    const safeMessage = escapeHtml(data.message).replace(
      /\n/g,
      "<br />",
    );

    const emailSubject = data.subject?.trim()
      ? `Website Enquiry: ${data.subject.trim()}`
      : `New Website Enquiry from ${data.name}`;

    const html = `
      <div style="font-family: Arial, Helvetica, sans-serif; max-width: 680px; margin: 0 auto; color: #111827;">
        <div style="padding: 28px 0; border-bottom: 1px solid #e5e7eb;">
          <h1 style="margin: 0; font-size: 24px;">
            New Website Enquiry
          </h1>

          <p style="margin: 8px 0 0; color: #6b7280;">
            Submitted through the KloudEra website contact form.
          </p>
        </div>

        <div style="padding: 28px 0;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-weight: 600; width: 160px;">
                Full Name
              </td>
              <td style="padding: 10px 0;">
                ${safeName}
              </td>
            </tr>

            <tr>
              <td style="padding: 10px 0; font-weight: 600;">
                Work Email
              </td>
              <td style="padding: 10px 0;">
                ${safeEmail}
              </td>
            </tr>

            <tr>
              <td style="padding: 10px 0; font-weight: 600;">
                Company
              </td>
              <td style="padding: 10px 0;">
                ${safeCompany}
              </td>
            </tr>

            <tr>
              <td style="padding: 10px 0; font-weight: 600;">
                Subject
              </td>
              <td style="padding: 10px 0;">
                ${safeSubject}
              </td>
            </tr>
          </table>

          <div style="margin-top: 28px;">
            <h2 style="font-size: 18px; margin-bottom: 12px;">
              Message
            </h2>

            <div style="
              padding: 18px;
              background: #f9fafb;
              border: 1px solid #e5e7eb;
              border-radius: 12px;
              line-height: 1.7;
            ">
              ${safeMessage}
            </div>
          </div>
        </div>

        <div style="
          padding: 20px 0;
          border-top: 1px solid #e5e7eb;
          color: #6b7280;
          font-size: 13px;
        ">
          Reply directly to this email to respond to ${safeName}.
        </div>
      </div>
    `;

    const text = `
New Website Enquiry

Full Name: ${data.name}
Work Email: ${data.email}
Company: ${data.company || "Not provided"}
Subject: ${data.subject || "Website enquiry"}

Message:
${data.message}

Reply directly to this email to respond to ${data.name}.
    `.trim();

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: data.email,
        subject: emailSubject,
        html,
        text,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();

      console.error("Resend API error:", errorText);

      throw new Error("Unable to send enquiry.");
    }

    return {
      success: true,
    };
  });