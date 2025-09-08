/**
 * Testes para o NewsletterService
 * Este arquivo demonstra como testar o serviço de newsletter
 *
 * Para executar os testes, instale o Jest e configure-o para TypeScript
 */

import { NewsletterService } from "./newsletter-service";

// Mock do Supabase para testes
jest.mock("./supabase", () => ({
  supabase: {
    from: jest.fn(() => ({
      insert: jest.fn(() => ({
        select: jest.fn(() => ({
          single: jest.fn(),
        })),
      })),
      select: jest.fn(() => ({
        eq: jest.fn(() => ({
          single: jest.fn(),
        })),
      })),
      update: jest.fn(() => ({
        eq: jest.fn(),
      })),
    })),
  },
}));

describe("NewsletterService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("createSubscription", () => {
    it("deve criar uma inscrição com sucesso", async () => {
      const mockSubscription = {
        id: "123",
        email: "teste@exemplo.com",
        created_at: new Date().toISOString(),
        status: "active",
        source: "website",
      };

      const mockSupabase = require("./supabase").supabase;
      mockSupabase.from().insert().select().single.mockResolvedValue({
        data: mockSubscription,
        error: null,
      });

      const result = await NewsletterService.createSubscription({
        email: "teste@exemplo.com",
        source: "website",
      });

      expect(result.success).toBe(true);
      expect(result.data).toEqual(mockSubscription);
    });

    it("deve retornar erro para email duplicado", async () => {
      const mockSupabase = require("./supabase").supabase;
      mockSupabase
        .from()
        .insert()
        .select()
        .single.mockResolvedValue({
          data: null,
          error: { code: "23505" },
        });

      const result = await NewsletterService.createSubscription({
        email: "duplicado@exemplo.com",
      });

      expect(result.success).toBe(false);
      expect(result.error).toBe("Este email já está inscrito na newsletter");
    });
  });

  describe("isEmailSubscribed", () => {
    it("deve retornar true para email inscrito", async () => {
      const mockSupabase = require("./supabase").supabase;
      mockSupabase
        .from()
        .select()
        .eq()
        .eq()
        .single.mockResolvedValue({
          data: { id: "123" },
          error: null,
        });

      const result =
        await NewsletterService.isEmailSubscribed("teste@exemplo.com");
      expect(result).toBe(true);
    });

    it("deve retornar false para email não inscrito", async () => {
      const mockSupabase = require("./supabase").supabase;
      mockSupabase
        .from()
        .select()
        .eq()
        .eq()
        .single.mockResolvedValue({
          data: null,
          error: { code: "PGRST116" },
        });

      const result =
        await NewsletterService.isEmailSubscribed("nao@exemplo.com");
      expect(result).toBe(false);
    });
  });

  describe("getActiveSubscriptions", () => {
    it("deve retornar lista de inscrições ativas", async () => {
      const mockSubscriptions = [
        { id: "1", email: "user1@exemplo.com", status: "active" },
        { id: "2", email: "user2@exemplo.com", status: "active" },
      ];

      const mockSupabase = require("./supabase").supabase;
      mockSupabase.from().select().eq().order.mockResolvedValue({
        data: mockSubscriptions,
        error: null,
      });

      const result = await NewsletterService.getActiveSubscriptions();
      expect(result).toEqual(mockSubscriptions);
    });

    it("deve retornar array vazio em caso de erro", async () => {
      const mockSupabase = require("./supabase").supabase;
      mockSupabase
        .from()
        .select()
        .eq()
        .order.mockRejectedValue(new Error("Erro de conexão"));

      const result = await NewsletterService.getActiveSubscriptions();
      expect(result).toEqual([]);
    });
  });

  describe("deactivateSubscription", () => {
    it("deve desativar inscrição com sucesso", async () => {
      const mockSupabase = require("./supabase").supabase;
      mockSupabase.from().update().eq.mockResolvedValue({
        error: null,
      });

      const result =
        await NewsletterService.deactivateSubscription("teste@exemplo.com");
      expect(result.success).toBe(true);
    });

    it("deve retornar erro em caso de falha", async () => {
      const mockSupabase = require("./supabase").supabase;
      mockSupabase
        .from()
        .update()
        .eq.mockRejectedValue(new Error("Erro de banco"));

      const result =
        await NewsletterService.deactivateSubscription("teste@exemplo.com");
      expect(result.success).toBe(false);
      expect(result.error).toBe("Erro ao desativar inscrição");
    });
  });
});

/**
 * Exemplo de uso em testes de integração
 *
 * Para testes reais com Supabase, você pode usar:
 * - Supabase Local Development
 * - Testcontainers
 * - Mocks mais sofisticados
 */
