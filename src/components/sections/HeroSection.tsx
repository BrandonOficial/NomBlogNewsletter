import { SubscriptionForm } from "../SubscriptionForm";
import { HeroContent, SpacingConfig } from "@/types/components";

/**
 * Props do componente HeroSection
 */
interface HeroSectionProps {
  /** Conteúdo da seção hero */
  content: HeroContent;
  /** Componente de formulário ou CTA personalizado */
  children?: React.ReactNode;
  /** Classes CSS adicionais */
  className?: string;
  /** Se deve mostrar o formulário de newsletter */
  showNewsletter?: boolean;
  /** Configurações de espaçamento */
  spacing?: SpacingConfig;
}

/**
 * Componente HeroSection configurável e reutilizável.
 * Aplica Dependency Inversion permitindo conteúdo externo.
 */
export const HeroSection = ({
  content,
  children,
  className = "",
  showNewsletter = true,
  spacing = {},
}: HeroSectionProps): JSX.Element => {
  const {
    title,
    subtitle,
    backgroundImage,
    backgroundGradient = "from-white to-gray-50",
    textAlign = "center",
    textColor = "text-gray-900",
  } = content;

  const { padding = "py-12 sm:py-20 lg:py-24 2xl:py-32", margin = "px-4" } =
    spacing;

  /**
   * Determina as classes de alinhamento baseado na prop textAlign
   */
  const getAlignmentClasses = (): string => {
    switch (textAlign) {
      case "left":
        return "items-start text-left";
      case "right":
        return "items-end text-right";
      default:
        return "items-center text-center";
    }
  };
  /**
   * Renderiza o conteúdo principal
   */
  const renderMainContent = (): JSX.Element => (
    <div className="max-w-4xl mx-auto">
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 lg:mb-8 ${textColor}`}
      >
        {title.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < title.split("\n").length - 1 && (
              <br className="hidden sm:block" />
            )}
          </span>
        ))}
      </h1>

      <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );

  /**
   * Renderiza o formulário de newsletter ou conteúdo personalizado
   */
  const renderBottomContent = (): JSX.Element => {
    if (children) return <>{children}</>;
    if (showNewsletter) return <SubscriptionForm />;
    return <></>;
  };

  return (
    <section
      className={`
        flex flex-col justify-center ${padding} ${margin}
        ${getAlignmentClasses()}
        bg-gradient-to-b ${backgroundGradient}
        ${className}
      `.trim()}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {renderMainContent()}
      {renderBottomContent()}
    </section>
  );
};
