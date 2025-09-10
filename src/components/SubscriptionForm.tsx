"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LAYOUT_CONSTANTS } from "@/constants/layout";
import { useCallback, useState } from "react";

/**
 * Formulário de inscrição na newsletter.
 * Utiliza hook personalizado para gerenciar estado e lógica de negócio.
 */
export const SubscriptionForm = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [estado, setEstado] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [mensagem, setMensagem] = useState<string>("");

  const validarEmail = useCallback((valor: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(valor.trim());
  }, []);

  /**
   * Manipula o envio do formulário
   */
  const handleSubscribe = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (!email.trim() || !validarEmail(email)) {
      setEstado("error");
      setMensagem("Email inválido");
      return;
    }

    setEstado("loading");
    setMensagem("");

    try {
      const resposta = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "hero-section" }),
      });

      const resultado: { success: boolean; message?: string; error?: string } =
        await resposta.json();

      if (resultado.success) {
        setEstado("success");
        setMensagem(resultado.message || "Inscrição realizada com sucesso!");
        setEmail("");

        setTimeout(() => {
          setEstado("idle");
          setMensagem("");
        }, 5000);
      } else {
        setEstado("error");
        setMensagem(resultado.error || "Erro ao realizar inscrição");
      }
    } catch (err) {
      setEstado("error");
      setMensagem("Erro de conexão. Tente novamente.");
    }
  };

  /**
   * Renderiza a mensagem de feedback
   */
  const renderMessage = (): JSX.Element | null => {
    if (!mensagem) return null;

    const baseClasses = "text-sm font-medium p-3 rounded-md mb-4 text-center";

    switch (estado) {
      case "success":
        return (
          <div
            className={`${baseClasses} bg-green-100 text-green-800 border border-green-200`}
          >
            ✅ {mensagem}
          </div>
        );
      case "error":
        return (
          <div
            className={`${baseClasses} bg-red-100 text-red-800 border border-red-200`}
          >
            ❌ {mensagem}
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
    const isDisabled = !email.trim() || estado === "loading";

    return (
      <Button
        type="submit"
        disabled={isDisabled}
        className="font-semibold w-full sm:w-auto xl:h-12 xl:px-8 transition-all duration-200"
        style={{ backgroundColor: LAYOUT_CONSTANTS.COLORS.brand }}
      >
        {estado === "loading" ? (
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
          disabled={estado === "loading"}
        />
        {renderButton()}
      </form>

      <p className="text-xs text-gray-500 text-center">
        Seus dados estão seguros e não serão compartilhados com terceiros.
      </p>
    </div>
  );
};
