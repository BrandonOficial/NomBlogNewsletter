"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { formatarTempoRelativo } from "@/lib/utils";

interface RelativeTimeProps {
  date: string | Date;
  updateIntervalMs?: number;
  className?: string;
  /** Se true, pausa as atualizações quando o componente não está visível */
  pauseWhenHidden?: boolean;
  /** Se true, mostra data absoluta no title para acessibilidade */
  showAbsoluteOnHover?: boolean;
  /** Callback chamado a cada atualização */
  onUpdate?: (relativeTime: string, absoluteDate: Date) => void;
}

/**
 * Exibe tempo relativo atualizado no cliente, recalculando periodicamente.
 * Inclui otimizações de performance e acessibilidade.
 */
export const RelativeTime = ({
  date,
  updateIntervalMs = 60_000,
  className,
  pauseWhenHidden = true,
  showAbsoluteOnHover = true,
  onUpdate,
}: RelativeTimeProps): JSX.Element => {
  const dateObj = useMemo(() => {
    const parsedDate = date instanceof Date ? date : new Date(date);

    // Valida se a data é válida
    if (isNaN(parsedDate.getTime())) {
      console.warn("RelativeTime: Data inválida fornecida", date);
      return new Date(); // Fallback para data atual
    }

    return parsedDate;
  }, [date]);

  const [value, setValue] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // Função para atualizar o valor
  const updateValue = useCallback((): void => {
    const newValue = formatarTempoRelativo(dateObj);
    setValue(newValue);
    onUpdate?.(newValue, dateObj);
  }, [dateObj, onUpdate]);

  // Observa visibilidade da página para pausar quando oculta
  useEffect(() => {
    if (!pauseWhenHidden) return;

    const handleVisibilityChange = (): void => {
      setIsVisible(!document.hidden);

      // Atualiza imediatamente quando volta a ficar visível
      if (!document.hidden) {
        updateValue();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [pauseWhenHidden, updateValue]);

  // Configura o intervalo de atualização
  useEffect(() => {
    updateValue(); // Atualização inicial

    // Se pausar quando oculto e estiver oculto, não inicia o intervalo
    if (pauseWhenHidden && !isVisible) return;

    const intervalId = window.setInterval(() => {
      if (!pauseWhenHidden || isVisible) {
        updateValue();
      }
    }, updateIntervalMs);

    return () => window.clearInterval(intervalId);
  }, [dateObj, updateIntervalMs, updateValue, pauseWhenHidden, isVisible]);

  // Calcula o title para acessibilidade
  const absoluteTitle = useMemo(() => {
    if (!showAbsoluteOnHover) return undefined;

    return dateObj.toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }, [dateObj, showAbsoluteOnHover]);

  return (
    <time
      className={className}
      dateTime={dateObj.toISOString()}
      title={absoluteTitle}
      suppressHydrationWarning
    >
      {value}
    </time>
  );
};

// Hook personalizado para usar tempo relativo sem componente
export const useRelativeTime = (
  date: string | Date,
  updateIntervalMs: number = 60_000
): string => {
  const dateObj = useMemo(
    () => (date instanceof Date ? date : new Date(date)),
    [date]
  );

  const [value, setValue] = useState<string>(() =>
    formatarTempoRelativo(dateObj)
  );

  useEffect(() => {
    const update = (): void => setValue(formatarTempoRelativo(dateObj));

    const intervalId = window.setInterval(update, updateIntervalMs);
    return () => window.clearInterval(intervalId);
  }, [dateObj, updateIntervalMs]);

  return value;
};
