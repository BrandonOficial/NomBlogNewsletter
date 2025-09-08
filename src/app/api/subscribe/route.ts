import { NextRequest, NextResponse } from "next/server";
import { NewsletterService } from "@/lib/newsletter-service";
import { newsletterSubscriptionSchema } from "@/lib/validators";
import { sendEmailWithResend } from "@/lib/email";

/**
 * Handler para inscrição na newsletter
 * Segue princípios de Clean Code com validação e tratamento de erros
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Parse e validação do corpo da requisição
    const body = await request.json();
    const validationResult = newsletterSubscriptionSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Dados inválidos",
          details: validationResult.error.issues,
        },
        { status: 400 }
      );
    }

    const { email, source } = validationResult.data;

    // Verifica se o email já está inscrito
    const isAlreadySubscribed =
      await NewsletterService.isEmailSubscribed(email);
    if (isAlreadySubscribed) {
      return NextResponse.json(
        {
          success: false,
          error: "Este email já está inscrito na newsletter",
        },
        { status: 409 }
      );
    }

    // Cria a inscrição no banco de dados
    const subscriptionResult = await NewsletterService.createSubscription({
      email,
      source,
    });

    if (!subscriptionResult.success) {
      return NextResponse.json(
        {
          success: false,
          error: subscriptionResult.error || "Erro ao criar inscrição",
        },
        { status: 500 }
      );
    }

    // Envia email de confirmação
    try {
      await sendEmailWithResend({
        to: email,
        subject: "Bem-vindo à nossa Newsletter!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">🎉 Inscrição Confirmada!</h2>
            <p>Olá! Sua inscrição na nossa newsletter foi realizada com sucesso.</p>
            <p>A partir de agora você receberá nossas atualizações e conteúdos exclusivos.</p>
            <p>Obrigado por se juntar a nós!</p>
            <hr style="margin: 20px 0;">
            <p style="font-size: 12px; color: #666;">
              Se você não solicitou esta inscrição, pode ignorar este email.
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error("Erro ao enviar email de confirmação:", emailError);
      // Não falha a inscrição se o email não puder ser enviado
    }

    return NextResponse.json(
      {
        success: true,
        message: "Inscrição realizada com sucesso!",
        data: subscriptionResult.data,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erro interno na API de inscrição:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Erro interno do servidor",
      },
      { status: 500 }
    );
  }
}

/**
 * Handler para listar inscrições (apenas para desenvolvimento)
 */
export async function GET(): Promise<NextResponse> {
  // Em produção, esta rota deveria ser protegida
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json(
      { success: false, error: "Método não permitido" },
      { status: 405 }
    );
  }

  try {
    const subscriptions = await NewsletterService.getActiveSubscriptions();
    return NextResponse.json({
      success: true,
      data: subscriptions,
    });
  } catch (error) {
    console.error("Erro ao buscar inscrições:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Erro ao buscar inscrições",
      },
      { status: 500 }
    );
  }
}
