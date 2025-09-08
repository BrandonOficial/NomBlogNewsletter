import { z } from "zod";

/**
 * Schema de validação para inscrição na newsletter
 */
export const newsletterSubscriptionSchema = z.object({
  email: z
    .string()
    .email("Email inválido")
    .min(1, "Email é obrigatório")
    .max(255, "Email muito longo"),
  source: z.string().optional().default("website"),
});

/**
 * Schema de validação para resposta da API
 */
export const apiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
  error: z.string().optional(),
  data: z.any().optional(),
});

/**
 * Tipos derivados dos schemas de validação
 */
export type NewsletterSubscriptionInput = z.infer<
  typeof newsletterSubscriptionSchema
>;
export type ApiResponse = z.infer<typeof apiResponseSchema>;
