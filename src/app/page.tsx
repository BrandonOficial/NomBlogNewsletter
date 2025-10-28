"use client";

import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import LatestArticlesSection from "@/components/latest-articles";
import { Footer } from "@/components/footer";

/**
 * Conteúdo configurável para a seção hero
 */
const heroContent = {
  title: "Blog de Tecnologia\nMaterial Didático",
  subtitle:
    "Amplie seu conhecimento com os conteúdos mais recentes sobre tecnologia e fique por dentro das inovações do mercado em nossos artigos",
  ctaText: "Explorar Artigos",
  ctaHref: "#articles",
  backgroundGradient: "from-white to-gray-50",
  textAlign: "center" as const,
  textColor: "text-gray-900",
};

/**
 * Callbacks para eventos de artigos
 */
const articleCallbacks = {
  onArticleClick: (article: any) => {
    console.log(`Artigo clicado na página inicial: ${article.title}`);
    // Aqui você pode adicionar analytics, tracking, etc.
  },
  onArticleView: (article: any) => {
    console.log(`Artigo visualizado: ${article.title}`);
    // Analytics de visualização
  },
};
/**
 * Página inicial do blog.
 * Responsável por compor o layout principal com cabeçalho, hero e artigos.
 * Aplica Dependency Inversion usando configurações externas.
 */
const HomePage = (): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col">
        <HeroSection content={heroContent} />

        <section id="articles">
          <LatestArticlesSection
            title="Últimos Artigos"
            callbacks={articleCallbacks}
            spacing={{ padding: "py-16" }}
          />
        </section>
      </main>

      <Footer
        copyright="Nom"
        year={2025}
        autoYear={false}
        spacing={{ padding: "py-6" }}
      />
    </div>
  );
};

export default HomePage;
