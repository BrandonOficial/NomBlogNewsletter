import { Resend } from "resend";

/**
 * Instância do cliente Resend para envio de emails.
 * A chave de API deve estar definida nas variáveis de ambiente.
 */
const resendApiKey = process.env.RESEND_API_KEY;
if (!resendApiKey) {
  throw new Error("RESEND_API_KEY não encontrada nas variáveis de ambiente");
}

const resend = new Resend(resendApiKey);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["delivered@resend.dev"],
      subject: "Hello world",
      html: "<h1>Hello World</h1><p>This is a test email.</p>",
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
