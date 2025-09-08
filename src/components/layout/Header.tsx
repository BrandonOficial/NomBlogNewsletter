import Link from "next/link";
import Image from "next/image";
import { LAYOUT_CONSTANTS } from "@/constants/layout";
import { LogoConfig, NavigationItem, SpacingConfig } from "@/types/components";

/**
 * Props do componente Header
 */
interface HeaderProps {
  /** Configuração do logo */
  logo?: Partial<LogoConfig>;
  /** Itens de navegação */
  navigationItems?: NavigationItem[];
  /** Classes CSS adicionais */
  className?: string;
  /** Se deve mostrar a borda inferior */
  showBorder?: boolean;
  /** Se deve aplicar backdrop blur */
  backdropBlur?: boolean;
  /** Configurações de espaçamento */
  spacing?: SpacingConfig;
}

/**
 * Componente Header reutilizável e configurável.
 * Aplica princípios SOLID com interfaces bem definidas.
 * Logo centralizada em todas as telas.
 */
export const Header = ({
  logo,
  navigationItems = [],
  className = "",
  showBorder = true,
  backdropBlur = true,
  spacing = {},
}: HeaderProps): JSX.Element => {
  const { padding = "py-2", margin = "" } = spacing;

  // Configuração padrão do logo
  const defaultLogo: LogoConfig = {
    src: "/LogoTipos.svg",
    alt: LAYOUT_CONSTANTS.LOGO.alt,
    width: LAYOUT_CONSTANTS.LOGO.width,
    height: LAYOUT_CONSTANTS.LOGO.height,
    priority: true,
  };

  const finalLogo = { ...defaultLogo, ...logo };

  /**
   * Renderiza um item de navegação
   */
  const renderNavigationItem = (item: NavigationItem): JSX.Element => {
    const linkContent = (
      <>
        {item.icon && <span className="mr-2">{item.icon}</span>}
        {item.label}
      </>
    );

    if (item.external) {
      return (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition-colors duration-200"
        >
          {linkContent}
        </a>
      );
    }

    return (
      <Link
        href={item.href}
        className="hover:underline transition-colors duration-200"
      >
        {linkContent}
      </Link>
    );
  };

  /**
   * Renderiza a navegação
   */
  const renderNavigation = (): JSX.Element | null => {
    if (navigationItems.length === 0) return null;

    return (
      <nav className="hidden md:flex items-center space-x-6 absolute right-0 top-1/2 -translate-y-1/2">
        {navigationItems.map((item, index) => (
          <li key={index} className="list-none">
            {renderNavigationItem(item)}
          </li>
        ))}
      </nav>
    );
  };

  return (
    <header
      className={`
        relative top-0 z-50 bg-white/80
        ${showBorder ? "border-b" : ""}
        ${backdropBlur ? "backdrop-blur-sm" : ""}
        ${padding}
        ${className}
      `.trim()}
    >
      <div
        className={`${LAYOUT_CONSTANTS.CONTAINER.maxWidth} mx-auto ${LAYOUT_CONSTANTS.CONTAINER.padding} ${margin} relative`}
      >
        {/* Container flex para centralizar a logo */}
        <div className="flex items-center justify-center min-h-[60px]">
          <Link href="/" className="text-lg font-medium">
            <Image
              src={finalLogo.src}
              alt={finalLogo.alt}
              width={finalLogo.width}
              height={finalLogo.height}
              priority={finalLogo.priority}
            />
          </Link>
        </div>

        {/* Navegação posicionada absolutamente à direita */}
        {renderNavigation()}
      </div>
    </header>
  );
};
