"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LAYOUT_CONSTANTS } from "@/constants/layout";
import { useState } from "react";
import { useNewsletter } from "@/hooks/useNewsletter";

/**
 * Formulário de inscrição na newsletter.
 * Utiliza hook personalizado para gerenciar estado e lógica de negócio.
 */
export const SubscriptionForm = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const { state, message, isLoading, subscribe, reset } = useNewsletter();

  /**
   * Manipula o envio do formulário
   */
  const handleSubscribe = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (!email.trim()) return;

    const result = await subscribe({
      email,
      source: "hero-section",
    });

    if (result.success) {
      setEmail("");
    }
  };

  /**
   * Renderiza a mensagem de feedback
   */
  const renderMessage = (): JSX.Element | null => {
    if (!message) return null;

    const baseClasses = "text-sm font-medium p-3 rounded-md mb-4 text-center";

    switch (state) {
      case "success":
        return (
          <div
            className={`${baseClasses} bg-green-100 text-green-800 border border-green-200`}
          >
            ✅ {message}
          </div>
        );
      case "error":
        return (
          <div
            className={`${baseClasses} bg-red-100 text-red-800 border border-red-200`}
          >
            ❌ {message}
          </div>
        );
      default:
        return null;
    }
  };

  /**
   * Renderiza o botão com estado apropriado
   */
  const renderButton = (): JSX.Element => {
    const isDisabled = !email.trim() || isLoading;

    return (
      <Button
        type="submit"
        disabled={isDisabled}
        className="font-semibold w-full sm:w-auto xl:h-12 xl:px-8 transition-all duration-200"
        style={{ backgroundColor: LAYOUT_CONSTANTS.COLORS.brand }}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            INSCREVENDO...
          </span>
        ) : (
          "INSCREVER-SE"
        )}
      </Button>
    );
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      {renderMessage()}

      <form
        onSubmit={handleSubscribe}
        className="flex flex-col sm:flex-row justify-center gap-4 mb-4 w-full"
      >
        <Input
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full sm:max-w-sm xl:h-12 transition-all duration-200 focus:ring-2 focus:ring-blue-500"
          required
          disabled={isLoading}
        />
        {renderButton()}
      </form>

      <p className="text-xs text-gray-500 text-center">
        Seus dados estão seguros e não serão compartilhados com terceiros.
      </p>
    </div>
  );
};
