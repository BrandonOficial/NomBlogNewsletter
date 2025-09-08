-- Migração para criar tabela de inscrições na newsletter
-- Execute este SQL no seu projeto Supabase

-- Cria a tabela de inscrições na newsletter
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
    source VARCHAR(100) DEFAULT 'website',
    metadata JSONB DEFAULT '{}'
);

-- Cria índice para melhorar performance de consultas por email
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email ON newsletter_subscriptions(email);

-- Cria índice para consultas por status
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_status ON newsletter_subscriptions(status);

-- Cria índice para consultas por data de criação
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_created_at ON newsletter_subscriptions(created_at);

-- Função para atualizar automaticamente o campo updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para atualizar automaticamente o campo updated_at
CREATE TRIGGER update_newsletter_subscriptions_updated_at
    BEFORE UPDATE ON newsletter_subscriptions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Política RLS (Row Level Security) para permitir inserções anônimas
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserções de usuários autenticados e anônimos
CREATE POLICY "Permitir inserção de inscrições" ON newsletter_subscriptions
    FOR INSERT WITH CHECK (true);

-- Política para permitir leitura apenas de usuários autenticados (opcional)
CREATE POLICY "Permitir leitura de inscrições" ON newsletter_subscriptions
    FOR SELECT USING (auth.role() = 'authenticated');

-- Política para permitir atualização apenas de usuários autenticados
CREATE POLICY "Permitir atualização de inscrições" ON newsletter_subscriptions
    FOR UPDATE USING (auth.role() = 'authenticated');

-- Comentários para documentar a tabela
COMMENT ON TABLE newsletter_subscriptions IS 'Tabela para armazenar inscrições na newsletter';
COMMENT ON COLUMN newsletter_subscriptions.email IS 'Email do usuário inscrito';
COMMENT ON COLUMN newsletter_subscriptions.status IS 'Status da inscrição: active ou inactive';
COMMENT ON COLUMN newsletter_subscriptions.source IS 'Origem da inscrição (ex: website, landing-page, etc.)';
COMMENT ON COLUMN newsletter_subscriptions.metadata IS 'Dados adicionais em formato JSON';
