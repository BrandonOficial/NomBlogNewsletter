import nodemailer from "nodemailer";
import { Resend } from "resend";

// Initialize Resend with proper validation
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  console.warn("RESEND_API_KEY não encontrada nas variáveis de ambiente");
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Nodemailer transport configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

interface EmailData {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmailWithNodemailer({
  to,
  subject,
  html,
}: EmailData) {
  try {
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to,
      subject,
      html,
    });
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email with Nodemailer:", error);
    return { success: false, error };
  }
}

export async function sendEmailWithResend({ to, subject, html }: EmailData) {
  try {
    if (!resend) {
      throw new Error(
        "Resend não está configurado. Verifique a variável RESEND_API_KEY."
      );
    }

    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to,
      subject,
      html,
    });
    return { success: true, data };
  } catch (error) {
    console.error("Error sending email with Resend:", error);
    return { success: false, error };
  }
}
