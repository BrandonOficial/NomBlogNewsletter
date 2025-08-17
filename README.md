# NomBlogNewsletter

Um blog moderno desenvolvido com Next.js 15, TypeScript e Tailwind CSS, focado em oferecer uma experiência de leitura excepcional e funcionalidades de newsletter.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **shadcn/ui** - Componentes UI modernos e acessíveis
- **Supabase** - Banco de dados para armazenamento de emails
- **Resend** - Serviço de envio de emails

## ✨ Funcionalidades

- 📝 Blog responsivo com artigos
- 📧 Sistema de newsletter integrado
- 🎨 Interface moderna e acessível
- 📱 Design mobile-first
- 🔍 SEO otimizado
- ⚡ Performance otimizada

## 🛠️ Instalação

1. Clone o repositório:

```bash
git clone https://github.com/BrandonOficial/NomBlogNewsletter.git
cd NomBlogNewsletter/material-blog
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env.local
```

4. Execute o projeto:

```bash
npm run dev
```

## 📁 Estrutura do Projeto

```
material-blog/
├── src/
│   ├── app/           # Páginas e rotas (App Router)
│   ├── components/    # Componentes reutilizáveis
│   ├── lib/          # Utilitários e configurações
│   └── styles/       # Estilos globais
├── public/            # Arquivos estáticos
└── components/        # Componentes UI
```

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` com as seguintes variáveis:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase

# Resend
RESEND_API_KEY=sua_chave_api_do_resend
```

## 📧 Newsletter

O sistema de newsletter permite que os usuários se inscrevam para receber atualizações por email. Os emails são armazenados no Supabase e enviados através do Resend.

## 🎯 Roadmap

- [ ] Sistema de comentários
- [ ] Autenticação de usuários
- [ ] Painel administrativo
- [ ] Analytics e métricas
- [ ] Integração com redes sociais

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, leia o guia de contribuição antes de submeter um pull request.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Brandon Oficial**

- GitHub: [@BrandonOficial](https://github.com/BrandonOficial)

## 🙏 Agradecimentos

- Next.js Team
- Tailwind CSS
- shadcn/ui
- Supabase
- Resend
