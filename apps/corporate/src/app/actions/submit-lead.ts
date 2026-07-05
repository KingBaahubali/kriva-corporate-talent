"use server";

import { z } from "zod";
import { Resend } from "resend";

/* ── Validation schema ─────────────────────────────────────── */
const LeadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().max(120).optional(),
  phone: z.string().max(30).optional(),
  division: z.enum(["data", "ai", "software", "operations", "staffing", "general"], {
    errorMap: () => ({ message: "Please select a service" }),
  }),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
  // Honeypot — must be empty
  website: z.string().max(0, "Bot detected").optional(),
});

export type LeadFormState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; fieldErrors?: Record<string, string[]> };

const DIVISION_LABELS: Record<string, string> = {
  data:       "Data Collection & Annotation",
  ai:         "AI & Automation",
  software:   "Software Engineering",
  operations: "IT & Operations",
  staffing:   "Tech Staffing",
  general:    "General Enquiry",
};

/* ── Server Action ─────────────────────────────────────────── */
export async function submitLead(
  _prevState: LeadFormState,
  formData: FormData
): Promise<LeadFormState> {
  // Parse raw form data
  const raw = {
    name:     formData.get("name"),
    email:    formData.get("email"),
    company:  formData.get("company"),
    phone:    formData.get("phone"),
    division: formData.get("division"),
    message:  formData.get("message"),
    website:  formData.get("website"), // honeypot
  };

  // Validate
  const parsed = LeadSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const [key, issues] of Object.entries(parsed.error.flatten().fieldErrors)) {
      fieldErrors[key] = issues ?? [];
    }
    return { status: "error", message: "Please fix the errors below.", fieldErrors };
  }

  const { name, email, company, phone, division, message } = parsed.data;

  // Honeypot check
  if (raw.website) {
    // Silently succeed (bot)
    return { status: "success", message: "Thanks! We'll be in touch shortly." };
  }

  // Send email via Resend
  const resendKey = process.env["RESEND_API_KEY"];
  const toEmail   = process.env["CONTACT_EMAIL"] ?? "hello@krivatech.com";

  if (!resendKey) {
    // Dev fallback — log and return success so form flow can be tested without keys
    console.warn("[submitLead] RESEND_API_KEY not set — logging submission instead.");
    console.info("[Lead]", { name, email, company, phone, division, message });
    return { status: "success", message: "Thanks! We'll be in touch shortly." };
  }

  try {
    const resend = new Resend(resendKey);

    // Notification to Kriva inbox
    await resend.emails.send({
      from:    "Kriva Website <noreply@krivatech.com>",
      to:      [toEmail],
      replyTo: email,
      subject: `New enquiry — ${DIVISION_LABELS[division]} — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f9f9f9;border-radius:8px;">
          <h2 style="margin-top:0;color:#2d2dd4;">New enquiry via krivatech.com</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#555;width:140px;vertical-align:top;"><strong>Name</strong></td><td style="padding:8px 0;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#555;vertical-align:top;"><strong>Email</strong></td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            ${company ? `<tr><td style="padding:8px 0;color:#555;vertical-align:top;"><strong>Company</strong></td><td style="padding:8px 0;">${company}</td></tr>` : ""}
            ${phone ? `<tr><td style="padding:8px 0;color:#555;vertical-align:top;"><strong>Phone</strong></td><td style="padding:8px 0;">${phone}</td></tr>` : ""}
            <tr><td style="padding:8px 0;color:#555;vertical-align:top;"><strong>Division</strong></td><td style="padding:8px 0;">${DIVISION_LABELS[division]}</td></tr>
          </table>
          <div style="margin-top:24px;padding:16px;background:#fff;border-radius:6px;border:1px solid #e0e0e0;">
            <strong>Message</strong>
            <p style="margin:8px 0 0;white-space:pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    // Auto-reply to the enquirer
    await resend.emails.send({
      from:    "Kriva Tech <noreply@krivatech.com>",
      to:      [email],
      subject: "We received your message — Kriva Tech",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:32px;">
          <h2 style="color:#2d2dd4;">Thanks, ${name}.</h2>
          <p>We've received your message about <strong>${DIVISION_LABELS[division]}</strong> and will get back to you within one business day.</p>
          <p style="color:#888;font-size:13px;margin-top:32px;">— Kriva Tech</p>
        </div>
      `,
    });
  } catch (err) {
    console.error("[submitLead] Resend error:", err);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please email us directly at hello@krivatech.com.",
    };
  }

  return { status: "success", message: "Thanks! We'll be in touch within one business day." };
}
