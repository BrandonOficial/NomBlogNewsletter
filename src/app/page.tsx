import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LatestArticles from "@/components/latest-articles";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 h-16 flex items-center justify-between">
          <Link href="/" className="text-lg font-medium">
            <Image
              src="/LogoTipos.svg"
              alt="Logotipo Nom"
              width={140}
              height={32}
              priority
            />
          </Link>
          {/* Mobile menu button */}
          <button className="sm:hidden p-2 text-gray-600 hover:text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <div className="flex flex-col items-center justify-center text-center px-4 py-12 sm:py-20 lg:py-24 2xl:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 lg:mb-8">
              Blog de Tecnologia@
              <br className="hidden sm:block" />
              Material Tailwind
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
              Amplie seu conhecimento com os conteúdos mais recentes sobre
              tecnologia e fique por dentro das inovações do mercado em nossos
              artigos
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4 w-full max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="seu@email.com"
                className="w-full sm:max-w-sm xl:h-12"
              />
              <Button className="bg-[#ffcc00] hover:bg-[#ffcc00]/90 font-semibold w-full sm:w-auto xl:h-12 xl:px-8">
                SUBSCRIBER
              </Button>
            </div>
          </div>
        </div>

        {/* Latest Articles Section */}
        <div id="articles">
          <LatestArticles />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
