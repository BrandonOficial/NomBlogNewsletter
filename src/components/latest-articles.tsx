import Link from "next/link";
import Image from "next/image";
import { ARTIGOS, Artigo } from "@/constants/articles";
import { RelativeTime } from "@/components/RelativeTime";
import { SpacingConfig } from "@/types/components";

/**
 * Callbacks para eventos de artigo compatíveis com o tipo Artigo
 */
interface ArticleCallbacks {
  /** Chamado quando um artigo é clicado */
  onArticleClick?: (article: Artigo) => void;
  /** Chamado quando um artigo é visualizado */
  onArticleView?: (article: Artigo) => void;
  /** Chamado quando um artigo é favoritado */
  onArticleFavorite?: (article: Artigo) => void;
}

/**
 * Props para o componente ArticleCard
 */
interface ArticleCardProps {
  /** Dados do artigo */
  article: Artigo;
  /** Classes CSS adicionais */
  className?: string;
  /** Callback quando o artigo é clicado */
  onArticleClick?: (article: Artigo) => void;
  /** Callback quando o artigo é visualizado */
  onArticleView?: (article: Artigo) => void;
}

/**
 * Componente responsável apenas por renderizar um card de artigo.
 * Aplica Single Responsibility Principle.
 */
const ArticleCard = ({
  article,
  className = "",
  onArticleClick,
  onArticleView,
}: ArticleCardProps): JSX.Element => {
  const handleClick = (): void => {
    onArticleClick?.(article);
  };

  const handleView = (): void => {
    onArticleView?.(article);
  };

  return (
    <Link
      href={`/article/${article.id}`}
      className={`group block ${className}`}
      onClick={handleClick}
      onMouseEnter={handleView}
    >
      <article className="h-full overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div
          className={`relative h-48 sm:h-52 md:h-56 lg:h-60 xl:h-64 w-full overflow-hidden bg-gradient-to-r ${article.gradient}`}
        >
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="transition-transform duration-500 group-hover:scale-110"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="p-4 sm:p-5 md:p-6 xl:p-8">
          <ArticleAuthor author={article.author} />
          <ArticleTitle title={article.title} />
          <ArticleMetadata date={article.date} readTime={article.readTime} />
        </div>
      </article>
    </Link>
  );
};

/**
 * Componente responsável apenas por renderizar o autor do artigo
 */
const ArticleAuthor = ({ author }: { author: string }): JSX.Element => (
  <div className="mb-3 sm:mb-4 flex items-center gap-2">
    <div className="h-6 w-6 rounded-full bg-gray-200" />
    <span className="text-sm md:text-base text-gray-600 font-medium">
      {author}
    </span>
  </div>
);

/**
 * Componente responsável apenas por renderizar o título do artigo
 */
const ArticleTitle = ({ title }: { title: string }): JSX.Element => (
  <h3 className="mb-2 text-lg sm:text-xl md:text-xl xl:text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-gray-600 line-clamp-2 leading-tight">
    {title}
  </h3>
);

/**
 * Componente responsável apenas por renderizar os metadados do artigo
 */
const ArticleMetadata = ({
  date,
  readTime,
}: {
  date: string;
  readTime: string;
}): JSX.Element => (
  <div className="mt-3 sm:mt-4 flex items-center gap-4 text-sm md:text-base text-gray-600">
    <RelativeTime date={date} />
    <span className="hidden sm:inline">•</span>
    <span>{readTime}</span>
  </div>
);

/**
 * Props para o componente ArticleGrid
 */
interface ArticleGridProps {
  /** Lista de artigos para renderizar */
  articles: readonly Artigo[];
  /** Callbacks para eventos de artigo */
  callbacks?: ArticleCallbacks;
  /** Classes CSS adicionais */
  className?: string;
}

/**
 * Componente responsável apenas por renderizar o grid de artigos.
 * Layout responsivo otimizado: 1 coluna (mobile) → 2 colunas (tablet) → 3 colunas (desktop) → 4 colunas (telas grandes)
 */
const ArticleGrid = ({
  articles,
  callbacks,
  className = "",
}: ArticleGridProps): JSX.Element => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 ${className}`}
    >
      {articles.map((article: Artigo) => (
        <ArticleCard
          key={article.id}
          article={article}
          onArticleClick={callbacks?.onArticleClick}
          onArticleView={callbacks?.onArticleView}
        />
      ))}
    </div>
  );
};

/**
 * Props para o componente LatestArticlesSection
 */
interface LatestArticlesSectionProps {
  /** Lista de artigos para exibir */
  articles?: readonly Artigo[];
  /** Título da seção */
  title?: string;
  /** Callbacks para eventos de artigo */
  callbacks?: ArticleCallbacks;
  /** Classes CSS adicionais */
  className?: string;
  /** Configurações de espaçamento */
  spacing?: SpacingConfig;
}

/**
 * Componente principal que orquestra a seção de artigos.
 * Aplica Dependency Inversion recebendo dados externos.
 * Layout totalmente responsivo com breakpoints otimizados:
 * - Mobile (< 640px): 1 coluna
 * - Tablet (640px - 1023px): 2 colunas
 * - Desktop (1024px - 1279px): 3 colunas
 * - Large Desktop (≥ 1280px): 4 colunas
 */
export default function LatestArticlesSection({
  articles = ARTIGOS,
  title = "Últimos Artigos",
  callbacks,
  className = "",
  spacing = {},
}: LatestArticlesSectionProps): JSX.Element {
  const {
    padding = "py-12 sm:py-16 lg:py-20 xl:py-24",
    margin = "px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16",
  } = spacing;

  /**
   * Handler para clique no artigo
   */
  const handleArticleClick = (article: Artigo): void => {
    // Analytics ou tracking personalizado
    console.log(`Artigo clicado na página inicial: ${article.title}`);
    callbacks?.onArticleClick?.(article);
  };

  /**
   * Handler para visualização do artigo
   */
  const handleArticleView = (article: Artigo): void => {
    // Analytics ou tracking de visualização
    console.log(`Artigo visualizado: ${article.title}`);
    callbacks?.onArticleView?.(article);
  };

  const articleCallbacks: ArticleCallbacks = {
    onArticleClick: handleArticleClick,
    onArticleView: handleArticleView,
    ...callbacks,
  };

  return (
    <section
      className={`${margin} ${padding} max-w-[1920px] mx-auto w-full ${className} mt-7`}
    >
      <div className="mb-8 sm:mb-10 lg:mb-12 xl:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
      </div>

      <ArticleGrid articles={articles} callbacks={articleCallbacks} />
    </section>
  );
}
