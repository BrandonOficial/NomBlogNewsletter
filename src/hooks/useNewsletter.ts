import { useState, useCallback } from "react";

/**
 * Estados possíveis da newsletter
 */
export type NewsletterState = "idle" | "loading" | "success" | "error";

/**
 * Interface para os dados de inscrição
 */
export interface NewsletterData {
  email: string;
  source?: string;
}

/**
 * Interface para a resposta da API
 */
export interface NewsletterResponse {
  success: boolean;
  message?: string;
  error?: string;
  data?: any;
}

/**
 * Hook personalizado para gerenciar inscrições na newsletter
 * Segue princípios de Clean Code com responsabilidades bem definidas
 */
export const useNewsletter = () => {
  const [state, setState] = useState<NewsletterState>("idle");
  const [message, setMessage] = useState<string>("");

  /**
   * Valida o formato do email
   */
  const validateEmail = useCallback((email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
  }, []);

  /**
   * Realiza a inscrição na newsletter
   */
  const subscribe = useCallback(
    async (data: NewsletterData): Promise<NewsletterResponse> => {
      if (!validateEmail(data.email)) {
        const errorResponse: NewsletterResponse = {
          success: false,
          error: "Email inválido",
        };
        setState("error");
        setMessage(errorResponse.error || "Erro desconhecido");
        return errorResponse;
      }

      setState("loading");
      setMessage("");

      try {
        const response = await fetch("/api/subscribe", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result: NewsletterResponse = await response.json();

        if (result.success) {
          setState("success");
          setMessage(result.message || "Inscrição realizada com sucesso!");

          // Reset para estado inicial após 5 segundos
          setTimeout(() => {
            setState("idle");
            setMessage("");
          }, 5000);
        } else {
          setState("error");
          setMessage(result.error || "Erro ao realizar inscrição");
        }

        return result;
      } catch (error) {
        console.error("Erro na inscrição:", error);
        const errorResponse: NewsletterResponse = {
          success: false,
          error: "Erro de conexão. Tente novamente.",
        };
        setState("error");
        setMessage(errorResponse.error || "Erro desconhecido");
        return errorResponse;
      }
    },
    [validateEmail]
  );

  /**
   * Reseta o estado do hook
   */
  const reset = useCallback(() => {
    setState("idle");
    setMessage("");
  }, []);

  /**
   * Verifica se está em estado de carregamento
   */
  const isLoading = state === "loading";

  /**
   * Verifica se foi bem-sucedido
   */
  const isSuccess = state === "success";

  /**
   * Verifica se houve erro
   */
  const hasError = state === "error";

  return {
    // Estados
    state,
    message,
    isLoading,
    isSuccess,
    hasError,

    // Ações
    subscribe,
    reset,
    validateEmail,
  };
};
