import { NextRequest, NextResponse } from "next/server";
import { newsletterSubscriptionSchema } from "@/lib/validators";
import { supabase, type NewsletterSubscription } from "@/lib/supabase";

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

    // Verifica duplicidade
    const { data: existing, error: checkError } = await supabase
      .from("newsletter_subscriptions")
      .select("id")
      .eq("email", email.toLowerCase().trim())
      .eq("status", "active")
      .single();

    if (checkError && checkError.code !== "PGRST116") {
      throw checkError;
    }

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          error: "Este email já está inscrito na newsletter",
        },
        { status: 409 }
      );
    }

    // Insere diretamente no Supabase
    const { data: subscription, error: insertError } = await supabase
      .from("newsletter_subscriptions")
      .insert({
        email: email.toLowerCase().trim(),
        source: source ?? "website",
        status: "active",
      })
      .select()
      .single<NewsletterSubscription>();

    if (insertError) {
      if ((insertError as any).code === "23505") {
        return NextResponse.json(
          {
            success: false,
            error: "Este email já está inscrito na newsletter",
          },
          { status: 409 }
        );
      }
      throw insertError;
    }

    console.log(`Nova inscrição na newsletter: ${email} (fonte: ${source})`);

    return NextResponse.json(
      {
        success: true,
        message: "Inscrição realizada com sucesso!",
        data: subscription,
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
