import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formata a diferença entre uma data e agora em tempo relativo em pt-BR.
 * Ex.: "há 2 dias", "há 3 horas", "em 1 hora".
 */
export function formatarTempoRelativo(data: Date): string {
  const agora = new Date();
  const diffMs = agora.getTime() - data.getTime();

  // Converte para segundos
  const diffSegundos = Math.floor(diffMs / 1000);

  const rtf = new Intl.RelativeTimeFormat("pt-BR", { numeric: "auto" });

  // Define os intervalos em segundos
  const intervalos = [
    { unidade: "year" as const, segundos: 31536000 }, // 365 dias
    { unidade: "month" as const, segundos: 2592000 }, // 30 dias
    { unidade: "week" as const, segundos: 604800 }, // 7 dias
    { unidade: "day" as const, segundos: 86400 }, // 24 horas
    { unidade: "hour" as const, segundos: 3600 }, // 60 minutos
    { unidade: "minute" as const, segundos: 60 }, // 60 segundos
    { unidade: "second" as const, segundos: 1 },
  ];

  for (const { unidade, segundos } of intervalos) {
    const valor = Math.floor(Math.abs(diffSegundos) / segundos);
    if (valor >= 1) {
      return rtf.format(diffSegundos < 0 ? valor : -valor, unidade);
    }
  }

  return rtf.format(0, "second");
}

/**
 * Retorna o horário atual formatado
 */
export function obterHorarioAtual(): string {
  return new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

/**
 * Retorna apenas a hora atual (HH:MM)
 */
export function obterHoraAtual(): string {
  return new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/**
 * Verifica se uma data é hoje
 */
export function ehHoje(data: Date): boolean {
  const hoje = new Date();
  return data.toDateString() === hoje.toDateString();
}

/**
 * Formata uma data de forma mais legível
 */
export function formatarData(data: Date): string {
  if (ehHoje(data)) {
    return `Hoje às ${data.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  }

  const ontem = new Date();
  ontem.setDate(ontem.getDate() - 1);

  if (data.toDateString() === ontem.toDateString()) {
    return `Ontem às ${data.toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  }

  return data.toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}
