import {
  supabase,
  type CreateSubscriptionData,
  type NewsletterSubscription,
} from "./supabase";

/**
 * Serviço responsável por gerenciar inscrições na newsletter
 * Segue princípios de Clean Code com responsabilidades bem definidas
 */
export class NewsletterService {
  private static readonly TABLE_NAME = "newsletter_subscriptions";

  /**
   * Cria uma nova inscrição na newsletter
   * @param data - Dados da inscrição
   * @returns Resultado da operação
   */
  static async createSubscription(data: CreateSubscriptionData): Promise<{
    success: boolean;
    data?: NewsletterSubscription;
    error?: string;
  }> {
    try {
      const { data: subscription, error } = await supabase
        .from(this.TABLE_NAME)
        .insert({
          email: data.email.toLowerCase().trim(),
          source: data.source || "website",
          status: "active",
        })
        .select()
        .single();

      if (error) {
        if (error.code === "23505") {
          return {
            success: false,
            error: "Este email já está inscrito na newsletter",
          };
        }
        throw error;
      }

      return {
        success: true,
        data: subscription,
      };
    } catch (error) {
      console.error("Erro ao criar inscrição:", error);
      return {
        success: false,
        error: "Erro interno ao processar inscrição",
      };
    }
  }

  /**
   * Verifica se um email já está inscrito
   * @param email - Email a ser verificado
   * @returns Verdadeiro se já inscrito
   */
  static async isEmailSubscribed(email: string): Promise<boolean> {
    try {
      const { data, error } = await supabase
        .from(this.TABLE_NAME)
        .select("id")
        .eq("email", email.toLowerCase().trim())
        .eq("status", "active")
        .single();

      if (error && error.code !== "PGRST116") {
        throw error;
      }

      return !!data;
    } catch (error) {
      console.error("Erro ao verificar inscrição:", error);
      return false;
    }
  }

  /**
   * Lista todas as inscrições ativas
   * @returns Lista de inscrições
   */
  static async getActiveSubscriptions(): Promise<NewsletterSubscription[]> {
    try {
      const { data, error } = await supabase
        .from(this.TABLE_NAME)
        .select("*")
        .eq("status", "active")
        .order("created_at", { ascending: false });

      if (error) throw error;

      return data || [];
    } catch (error) {
      console.error("Erro ao buscar inscrições:", error);
      return [];
    }
  }

  /**
   * Desativa uma inscrição
   * @param email - Email da inscrição
   * @returns Resultado da operação
   */
  static async deactivateSubscription(email: string): Promise<{
    success: boolean;
    error?: string;
  }> {
    try {
      const { error } = await supabase
        .from(this.TABLE_NAME)
        .update({ status: "inactive" })
        .eq("email", email.toLowerCase().trim());

      if (error) throw error;

      return { success: true };
    } catch (error) {
      console.error("Erro ao desativar inscrição:", error);
      return {
        success: false,
        error: "Erro ao desativar inscrição",
      };
    }
  }
}
