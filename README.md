# NomBlogNewsletter

<div align="center">
  <img src="public/LogoTipos.svg" alt="NomBlogNewsletter Logo" width="200" height="200">
  
  [![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Supabase](https://img.shields.io/badge/Supabase-3.0-3ECF8E?style=for-the-badge&logo=supabase)](https://supabase.com/)
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
</div>

Um blog moderno e responsivo desenvolvido com Next.js 15, TypeScript e Tailwind CSS, focado em oferecer uma experiência de leitura excepcional e funcionalidades avançadas de newsletter. O projeto combina as melhores práticas de desenvolvimento web moderno com uma interface elegante e intuitiva.

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router e Server Components
- **TypeScript** - Tipagem estática para JavaScript com interfaces robustas
- **Tailwind CSS** - Framework CSS utilitário para estilização responsiva
- **shadcn/ui** - Componentes UI modernos, acessíveis e customizáveis
- **Supabase** - Banco de dados PostgreSQL para armazenamento de dados
- **Jest** - Framework de testes unitários
- **React Hook Form** - Gerenciamento de formulários
- **Zod** - Validação de schemas TypeScript

## ✨ Funcionalidades

### 🎨 Interface e UX

- 📝 Blog responsivo com artigos dinâmicos
- 🎨 Interface moderna e acessível com shadcn/ui
- 📱 Design mobile-first e totalmente responsivo
- 🌙 Suporte a temas (claro/escuro)
- ⚡ Performance otimizada com Next.js 15

### 📧 Sistema de Newsletter

- 📧 Sistema de newsletter integrado com validação
- 🔐 Armazenamento seguro de emails no Supabase
- ✅ Validação de email com Zod
- 📊 Gestão de inscrições e desinscrições
- 📝 Log de inscrições para acompanhamento

### 🔧 Desenvolvimento

- 🧪 Testes unitários com Jest
- 📝 TypeScript com tipagem completa
- 🎯 ESLint e Prettier configurados
- 🔄 Hot reload em desenvolvimento
- 📦 Build otimizado para produção

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
│   ├── app/                    # Páginas e rotas (App Router)
│   │   ├── api/               # API Routes
│   │   │   ├── send-email/    # Endpoint de envio de email
│   │   │   └── subscribe/     # Endpoint de inscrição na newsletter
│   │   ├── article/[id]/      # Página dinâmica de artigos
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.tsx         # Layout principal
│   │   └── page.tsx           # Página inicial
│   ├── components/            # Componentes reutilizáveis
│   │   ├── ui/               # Componentes base (shadcn/ui)
│   │   ├── layout/           # Componentes de layout
│   │   └── sections/         # Seções da página
│   ├── lib/                  # Utilitários e configurações
│   │   ├── supabase.ts       # Configuração do Supabase
│   │   ├── email.ts          # Configuração do Resend
│   │   ├── validators.ts     # Schemas de validação Zod
│   │   └── utils.ts          # Funções utilitárias
│   ├── hooks/                # Custom hooks
│   ├── types/                # Definições de tipos TypeScript
│   └── constants/            # Constantes da aplicação
├── public/                   # Arquivos estáticos
├── tests/                    # Arquivos de teste
└── docs/                     # Documentação adicional
```

## 🔧 Configuração

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Conta no Supabase

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase

# Optional: Development
NODE_ENV=development
```

### Configuração do Supabase

1. Crie um novo projeto no [Supabase](https://supabase.com)
2. Execute o script SQL fornecido em `supabase-migration.sql`
3. Copie a URL e a chave anônima para o arquivo `.env.local`

## 📧 Newsletter

O sistema de newsletter é uma funcionalidade central do projeto, permitindo que os usuários se inscrevam para receber atualizações. Os emails são armazenados no Supabase para futuras campanhas.

### Funcionalidades da Newsletter:

- ✅ **Inscrição segura** com validação de email
- ✅ **Armazenamento no Supabase** com RLS (Row Level Security)
- ✅ **Validação com Zod** para garantir dados válidos
- ✅ **Tratamento de erros** robusto
- ✅ **Feedback visual** para o usuário
- ✅ **Log de inscrições** para acompanhamento

### Como funciona:

1. Usuário preenche o formulário de inscrição
2. Email é validado usando Zod
3. Dados são salvos no Supabase com RLS
4. Usuário recebe feedback de sucesso/erro
5. Inscrição é registrada nos logs do sistema

## 🧪 Testes

O projeto inclui testes unitários para garantir a qualidade do código:

```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch

# Executar testes com coverage
npm run test:coverage
```

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:

- Netlify
- Railway
- DigitalOcean
- AWS

## 🎯 Roadmap

### Próximas funcionalidades:

- [ ] Sistema de comentários
- [ ] Autenticação de usuários
- [ ] Painel administrativo
- [ ] Analytics e métricas
- [ ] Integração com redes sociais
- [ ] Sistema de tags para artigos
- [ ] Busca avançada
- [ ] Modo escuro
- [ ] PWA (Progressive Web App)

## 🤝 Contribuição

Contribuições são muito bem-vindas! Este projeto segue as melhores práticas de desenvolvimento e está sempre aberto para melhorias.

### Como contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### Padrões de código:

- Use TypeScript para todas as novas funcionalidades
- Siga as convenções do ESLint e Prettier
- Escreva testes para novas funcionalidades
- Mantenha a documentação atualizada
- Use commits semânticos

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Brandon Oficial**

- GitHub: [@BrandonOficial](https://github.com/BrandonOficial)
- LinkedIn: [Brandon Oficial](https://linkedin.com/in/brandonoficial)
- Twitter: [@BrandonOficial](https://twitter.com/brandonoficial)

## 🙏 Agradecimentos

- [Next.js Team](https://nextjs.org/) - Framework React incrível
- [Tailwind CSS](https://tailwindcss.com/) - CSS utilitário moderno
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI acessíveis
- [Supabase](https://supabase.com/) - Backend-as-a-Service
- [Resend](https://resend.com/) - API de emails transacional
- [Vercel](https://vercel.com/) - Plataforma de deploy

## 📊 Estatísticas do Projeto

![GitHub stars](https://img.shields.io/github/stars/BrandonOficial/NomBlogNewsletter?style=social)
![GitHub forks](https://img.shields.io/github/forks/BrandonOficial/NomBlogNewsletter?style=social)
![GitHub issues](https://img.shields.io/github/issues/BrandonOficial/NomBlogNewsletter)
![GitHub pull requests](https://img.shields.io/github/issues-pr/BrandonOficial/NomBlogNewsletter)

---

<div align="center">
  <p>Feito com ❤️ por <a href="https://github.com/BrandonOficial">Brandon Oficial</a></p>
  <p>⭐ Se este projeto te ajudou, considere dar uma estrela!</p>
</div>
