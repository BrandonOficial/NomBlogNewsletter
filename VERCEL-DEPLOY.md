# 🚀 Guia de Deploy na Vercel

Este guia irá ajudá-lo a fazer o deploy do projeto NomBlogNewsletter na Vercel com todas as configurações necessárias.

## 📋 Pré-requisitos

- Conta na [Vercel](https://vercel.com)
- Conta no [Supabase](https://supabase.com)
- Conta no [Resend](https://resend.com)
- Repositório no GitHub

## 🔧 Configuração das Variáveis de Ambiente

### 1. Configuração do Supabase

1. Acesse seu projeto no [Supabase Dashboard](https://supabase.com/dashboard)
2. Vá em **Settings** > **API**
3. Copie os seguintes valores:
   - **Project URL** (NEXT_PUBLIC_SUPABASE_URL)
   - **anon public** key (NEXT_PUBLIC_SUPABASE_ANON_KEY)

### 2. Configuração do Resend

1. Acesse o [Resend Dashboard](https://resend.com/api-keys)
2. Crie uma nova API Key
3. Copie a chave gerada (começa com `re_`)

### 3. Deploy na Vercel

#### Opção 1: Deploy via GitHub (Recomendado)

1. **Conecte o repositório:**
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "New Project"
   - Conecte sua conta do GitHub
   - Selecione o repositório `NomBlogNewsletter`

2. **Configure as variáveis de ambiente:**
   - Na tela de configuração do projeto, vá em **Environment Variables**
   - Adicione as seguintes variáveis:

   ```env
   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_aqui

   # Resend
   RESEND_API_KEY=re_sua_chave_api_aqui
   RESEND_FROM_EMAIL=noreply@seudominio.com
   ```

3. **Configure o domínio de email do Resend:**
   - No Resend, vá em **Domains**
   - Adicione seu domínio ou use o domínio padrão `resend.dev`
   - Atualize a variável `RESEND_FROM_EMAIL` com o domínio verificado

4. **Deploy:**
   - Clique em "Deploy"
   - Aguarde o processo de build e deploy

#### Opção 2: Deploy via Vercel CLI

1. **Instale o Vercel CLI:**

   ```bash
   npm i -g vercel
   ```

2. **Faça login:**

   ```bash
   vercel login
   ```

3. **Configure as variáveis:**

   ```bash
   vercel env add NEXT_PUBLIC_SUPABASE_URL
   vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
   vercel env add RESEND_API_KEY
   vercel env add RESEND_FROM_EMAIL
   ```

4. **Deploy:**
   ```bash
   vercel --prod
   ```

## 🗄️ Configuração do Banco de Dados

1. **Execute a migração do Supabase:**
   - Acesse o SQL Editor no Supabase
   - Execute o script em `supabase-migration.sql`
   - Isso criará a tabela `newsletter_subscriptions` com RLS

2. **Configure as políticas RLS:**
   - Execute o script em `fix-rls-policies.sql`
   - Isso configurará as permissões de acesso

## ✅ Verificação do Deploy

Após o deploy, verifique se:

1. **O site está funcionando:**
   - Acesse a URL fornecida pela Vercel
   - Teste a navegação entre páginas

2. **A newsletter está funcionando:**
   - Teste o formulário de inscrição
   - Verifique se o email é salvo no Supabase
   - Confirme se o email de confirmação é enviado

3. **As APIs estão funcionando:**
   - Teste `/api/subscribe` (POST)
   - Teste `/api/send-email` (POST)

## 🔍 Troubleshooting

### Erro: "Missing API key"

**Causa:** A variável `RESEND_API_KEY` não está configurada corretamente.

**Solução:**

1. Verifique se a variável está definida na Vercel
2. Certifique-se de que o valor começa com `re_`
3. Faça um novo deploy após adicionar a variável

### Erro: "Invalid Supabase URL"

**Causa:** As variáveis do Supabase estão incorretas.

**Solução:**

1. Verifique as URLs no dashboard do Supabase
2. Certifique-se de que as variáveis estão corretas na Vercel
3. Teste a conexão com o Supabase

### Erro: "Email sending failed"

**Causa:** Problema com a configuração do Resend.

**Solução:**

1. Verifique se a API key está correta
2. Confirme se o domínio está verificado no Resend
3. Teste o envio de email manualmente

## 📊 Monitoramento

1. **Logs da Vercel:**
   - Acesse o dashboard da Vercel
   - Vá em "Functions" para ver os logs das APIs

2. **Logs do Supabase:**
   - Acesse o dashboard do Supabase
   - Vá em "Logs" para ver as consultas ao banco

3. **Logs do Resend:**
   - Acesse o dashboard do Resend
   - Vá em "Logs" para ver o status dos emails

## 🎯 Próximos Passos

Após o deploy bem-sucedido:

1. **Configure um domínio personalizado** (opcional)
2. **Configure analytics** (Google Analytics, Vercel Analytics)
3. **Configure monitoramento** (Sentry, LogRocket)
4. **Otimize performance** (imagens, cache, CDN)

## 📞 Suporte

Se encontrar problemas:

1. Verifique os logs da Vercel
2. Consulte a documentação do [Next.js](https://nextjs.org/docs)
3. Consulte a documentação do [Supabase](https://supabase.com/docs)
4. Consulte a documentação do [Resend](https://resend.com/docs)

---

**🎉 Parabéns! Seu blog está no ar!**

Acesse sua URL da Vercel e comece a compartilhar seu conteúdo!
