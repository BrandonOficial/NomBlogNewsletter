import Link from "next/link";
import { FooterLink, SpacingConfig } from "@/types/components";

/**
 * Configuração do footer
 */
interface FooterConfig {
  /** Texto de copyright */
  copyright?: string;
  /** Ano do copyright */
  year?: number;
  /** Links de navegação */
  links?: FooterLink[];
  /** Classes CSS adicionais */
  className?: string;
  /** Configurações de espaçamento */
  spacing?: SpacingConfig;
  /** Se deve mostrar o ano atual automaticamente */
  autoYear?: boolean;
}

/**
 * Componente Footer configurável e reutilizável.
 * Aplica Interface Segregation com interfaces menores e específicas.
 */
export const Footer = ({
  copyright = "Nom",
  year,
  links = [],
  className = "",
  spacing = {},
  autoYear = true,
}: FooterConfig): JSX.Element => {
  const { padding = "py-4", margin = "px-4" } = spacing;

  // Determina o ano a ser exibido
  const displayYear = year || (autoYear ? new Date().getFullYear() : undefined);

  /**
   * Links padrão se nenhum for fornecido
   */
  const defaultLinks: FooterLink[] = [
    { href: "/politica-de-privacidade", label: "Política de Privacidade" },
    { href: "/termos-de-servico", label: "Termos de Serviço" },
    { href: "/contato", label: "Contato" },
  ];

  const finalLinks = links.length > 0 ? links : defaultLinks;

  /**
   * Renderiza um link do footer
   */
  const renderFooterLink = (link: FooterLink): JSX.Element => {
    const linkContent = (
      <>
        {link.icon && <span className="mr-2">{link.icon}</span>}
        {link.label}
        {link.external && link.showExternalIcon && (
          <span className="ml-1 text-xs">↗</span>
        )}
      </>
    );

    if (link.external) {
      return (
        <a
          href={link.href}
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
        href={link.href}
        className="hover:underline transition-colors duration-200"
      >
        {linkContent}
      </Link>
    );
  };

  /**
   * Renderiza a navegação do footer
   */
  const renderFooterNavigation = (): JSX.Element | null => {
    if (finalLinks.length === 0) return null;

    return (
      <nav className="mt-4 md:mt-0">
        <ul className="flex space-x-4">
          {finalLinks.map((link, index) => (
            <li key={index}>{renderFooterLink(link)}</li>
          ))}
        </ul>
      </nav>
    );
  };

  /**
   * Renderiza o texto de copyright
   */
  const renderCopyright = (): JSX.Element => {
    if (!displayYear) {
      return <p>&copy; {copyright}. Todos os direitos reservados.</p>;
    }

    return (
      <p>
        &copy; {displayYear} {copyright}. Todos os direitos reservados.
      </p>
    );
  };

  return (
    <footer className={`bg-[#ffffff] ${padding} ${className}`}>
      <div className={`container mx-auto ${margin}`}>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {renderCopyright()}
          {renderFooterNavigation()}
        </div>
      </div>
    </footer>
  );
};
