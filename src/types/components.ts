/**
 * Tipos compartilhados para componentes
 * Aplica Interface Segregation com interfaces menores e específicas
 */

/**
 * Configurações de espaçamento reutilizáveis
 */
export interface SpacingConfig {
  /** Padding do componente */
  padding?: string;
  /** Margin do componente */
  margin?: string;
}

/**
 * Configuração de logo reutilizável
 */
export interface LogoConfig {
  /** URL da imagem do logo */
  src: string;
  /** Texto alternativo do logo */
  alt: string;
  /** Largura do logo */
  width: number;
  /** Altura do logo */
  height: number;
  /** Se deve carregar com prioridade */
  priority?: boolean;
}

/**
 * Item de navegação reutilizável
 */
export interface NavigationItem {
  /** URL do link */
  href: string;
  /** Texto do link */
  label: string;
  /** Ícone opcional */
  icon?: React.ReactNode;
  /** Se é um link externo */
  external?: boolean;
  /** Se deve abrir em nova aba */
  newTab?: boolean;
}

/**
 * Item de link do footer
 */
export interface FooterLink extends NavigationItem {
  /** Se deve mostrar ícone de link externo */
  showExternalIcon?: boolean;
}

/**
 * Configuração de conteúdo para seções hero
 */
export interface HeroContent {
  /** Título principal */
  title: string;
  /** Subtítulo/descrição */
  subtitle: string;
  /** Texto do botão de call-to-action */
  ctaText?: string;
  /** URL do botão CTA */
  ctaHref?: string;
  /** Imagem de fundo */
  backgroundImage?: string;
  /** Gradiente de fundo */
  backgroundGradient?: string;
  /** Alinhamento do texto */
  textAlign?: "left" | "center" | "right";
  /** Cor do texto */
  textColor?: string;
}

/**
 * Configuração de artigo
 */
export interface ArticleConfig {
  /** ID único do artigo */
  id: string;
  /** Título do artigo */
  title: string;
  /** Autor do artigo */
  author: string;
  /** Data de publicação */
  date: string;
  /** Tempo de leitura */
  readTime: string;
  /** URL da imagem */
  image: string;
  /** Gradiente de fundo */
  gradient: string;
  /** URL do artigo */
  href?: string;
}

/**
 * Callback para eventos de artigo
 */
export interface ArticleCallbacks {
  /** Chamado quando um artigo é clicado */
  onArticleClick?: (article: ArticleConfig) => void;
  /** Chamado quando um artigo é visualizado */
  onArticleView?: (article: ArticleConfig) => void;
  /** Chamado quando um artigo é favoritado */
  onArticleFavorite?: (article: ArticleConfig) => void;
}
