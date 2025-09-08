"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LAYOUT_CONSTANTS } from "@/constants/layout";
import { useState } from "react";

export const SubscriptionForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      // Implementar chamada para API
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Falha na inscrição");
      }

      setEmail("");
      // Sucesso - você pode adicionar toast/notificação aqui
      alert("Inscrição realizada com sucesso!");
    } catch (error) {
      // Tratar erro - você pode adicionar toast/notificação aqui
      console.error("Erro ao inscrever:", error);
      alert("Erro ao realizar inscrição. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubscribe}
      className="flex flex-col sm:flex-row justify-center gap-4 mb-4 w-full max-w-lg mx-auto"
    >
      <Input
        type="email"
        placeholder="seu@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full sm:max-w-sm xl:h-12"
        required
      />
      <Button
        type="submit"
        disabled={!email || isLoading}
        className="font-semibold w-full sm:w-auto xl:h-12 xl:px-8"
        style={{
          backgroundColor: LAYOUT_CONSTANTS.COLORS.brand,
        }}
      >
        {isLoading ? "INSCREVENDO..." : "INSCREVER-SE"}
      </Button>
    </form>
  );
};
