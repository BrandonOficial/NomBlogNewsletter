import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { Header } from "@/components/layout/Header";
import {
  obterArtigoPorId,
  ARTIGOS,
  type ArtigoContent,
} from "@/constants/articles";
import { RelativeTime } from "@/components/RelativeTime";
import { notFound } from "next/navigation";

interface ArticlePageProps {
  params: { id: string };
}

// Componente para renderizar conteúdo flexível
const ArticleContent = ({ content }: { content: ArtigoContent }) => {
  switch (content.type) {
    case "paragraph":
      return (
        <p className="mb-4 text-gray-700 leading-relaxed">{content.text}</p>
      );

    case "heading":
      const HeadingTag = `h${content.level}` as keyof JSX.IntrinsicElements;
      return (
        <HeadingTag
          className={`font-bold mb-4 text-gray-900 ${
            content.level === 2
              ? "text-2xl mt-8"
              : content.level === 3
                ? "text-xl mt-6"
                : "text-lg mt-4"
          }`}
        >
          {content.text}
        </HeadingTag>
      );

    case "image":
      return (
        <div className="my-8">
          <Image
            src={content.src!}
            alt={content.alt || ""}
            width={content.width || 800}
            height={content.height || 400}
            className="rounded-lg object-cover w-full shadow-lg"
          />
          {content.caption && (
            <p className="text-sm text-gray-600 mt-3 text-center italic">
              {content.caption}
            </p>
          )}
        </div>
      );

    case "table":
      return (
        <div className="my-8 overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200 shadow-sm rounded-lg overflow-hidden">
            {content.headers && (
              <thead>
                <tr className="bg-gray-50">
                  {content.headers.map((header: string, index: number) => (
                    <th
                      key={index}
                      className="border border-gray-200 px-6 py-3 text-left font-semibold text-gray-900"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {content.rows!.map((row: string[], rowIndex: number) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className="border border-gray-200 px-6 py-3 text-gray-700"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "list":
      const ListTag = content.ordered ? "ol" : "ul";
      return (
        <ListTag
          className={`mb-6 ml-6 space-y-2 ${content.ordered ? "list-decimal" : "list-disc"}`}
        >
          {content.items!.map((item: string, index: number) => (
            <li key={index} className="text-gray-700 leading-relaxed">
              {item}
            </li>
          ))}
        </ListTag>
      );

    case "blockquote":
      return (
        <blockquote className="border-l-4 border-blue-500 pl-6 my-8 bg-blue-50 py-4 rounded-r-lg">
          <p className="italic text-gray-800 text-lg leading-relaxed">
            "{content.text}"
          </p>
          {content.author && (
            <footer className="mt-3 text-sm text-gray-600 font-medium">
              — {content.author}
            </footer>
          )}
        </blockquote>
      );

    case "code":
      return (
        <div className="my-6">
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto shadow-lg">
            <code className="text-sm font-mono leading-relaxed">
              {content.code}
            </code>
          </pre>
        </div>
      );

    case "link":
      return (
        <div className="my-6 p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors duration-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <a
            href={content.href!}
            target={content.target || "_blank"}
            rel={
              content.target === "_blank" ? "noopener noreferrer" : undefined
            }
            title={content.title}
            className="block group"
            aria-label={content.title || `Link para ${content.text}`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-blue-700 group-hover:text-blue-800 transition-colors duration-200 mb-2">
                  {content.text}
                  {content.target === "_blank" && (
                    <span
                      className="ml-2 text-sm text-gray-500"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  )}
                </h3>
                {content.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {content.description}
                  </p>
                )}
                <div className="mt-3 text-xs text-blue-600 font-medium">
                  {content.href}
                </div>
              </div>
              <div className="ml-4 text-blue-500 group-hover:text-blue-600 transition-colors duration-200">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 3H21V9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 14L21 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </a>
        </div>
      );

    case "divider":
      return <hr className="my-12 border-gray-300" />;

    default:
      return (
        <div className="text-red-500">
          Tipo de conteúdo não suportado: {(content as any).type}
        </div>
      );
  }
};

/**
 * Página de artigo dinâmico.
 */
const ArticlePage = ({ params }: ArticlePageProps): JSX.Element => {
  const idNumerico = Number(params.id);
  const artigo = obterArtigoPorId(idNumerico);

  if (!artigo) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        {/* Hero Section com Gradient */}
        <div className={`bg-gradient-to-r ${artigo.gradient} py-20`}>
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 leading-tight">
                {artigo.title}
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-4 text-gray-600 text-base">
                <span className="font-normal">{artigo.author}</span>
                <span>•</span>
                <RelativeTime date={artigo.date} />
                <span>•</span>
                <span className="font-normal">{artigo.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Imagem principal do artigo */}
        <div className="container mx-auto px-4 -mt-12">
          <div className="max-w-4xl mx-auto">
            <Image
              src={artigo.image}
              alt={artigo.title}
              width={1200}
              height={600}
              className="rounded-2xl object-cover w-full shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Conteúdo do artigo */}
        <div className="container mx-auto px-4 py-16">
          <article className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {artigo.content && artigo.content.length > 0 ? (
                artigo.content.map((contentItem, index) => (
                  <ArticleContent key={index} content={contentItem} />
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Conteúdo do artigo será adicionado em breve.
                  </p>
                </div>
              )}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticlePage;

export const generateStaticParams = (): { id: string }[] => {
  return ARTIGOS.map(({ id }) => ({ id: String(id) }));
};
