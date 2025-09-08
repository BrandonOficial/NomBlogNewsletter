import { createClient } from "@supabase/supabase-js";

/**
 * Configurações do ambiente para o Supabase
 */
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * Validação das variáveis de ambiente
 */
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Variáveis de ambiente do Supabase não configuradas");
}

/**
 * Cliente do Supabase para operações no banco de dados
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Tipos para a tabela de inscrições na newsletter
 */
export interface NewsletterSubscription {
  id: string;
  email: string;
  created_at: string;
  status: "active" | "inactive";
  source?: string;
}

/**
 * Tipos para criação de nova inscrição
 */
export interface CreateSubscriptionData {
  email: string;
  source?: string;
}
