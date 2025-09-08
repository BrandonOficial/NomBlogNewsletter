-- CORREÇÃO DAS POLÍTICAS RLS - Execute no SQL Editor do Supabase
-- Este script corrige o erro 42501 que está impedindo as inserções

-- 1. Remove as políticas existentes que estão causando problema
DROP POLICY IF EXISTS "Permitir inserção de inscrições" ON newsletter_subscriptions;
DROP POLICY IF EXISTS "Permitir leitura de inscrições" ON newsletter_subscriptions;
DROP POLICY IF EXISTS "Permitir atualização de inscrições" ON newsletter_subscriptions;

-- 2. Cria nova política que permite inserções anônimas (sem autenticação)
CREATE POLICY "Permitir inserção anônima de inscrições" ON newsletter_subscriptions
    FOR INSERT 
    WITH CHECK (true);

-- 3. Política para permitir leitura de inscrições (para desenvolvimento)
CREATE POLICY "Permitir leitura de inscrições" ON newsletter_subscriptions
    FOR SELECT 
    USING (true);

-- 4. Política para permitir atualização (para desenvolvimento)
CREATE POLICY "Permitir atualização de inscrições" ON newsletter_subscriptions
    FOR UPDATE 
    USING (true);

-- 5. Verifica se as políticas foram criadas corretamente
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename = 'newsletter_subscriptions';
