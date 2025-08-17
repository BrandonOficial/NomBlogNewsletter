import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Footer } from "@/components/footer";

export default function ArticlePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white/80 backdrop-blur-sm z-50">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16 h-16 flex items-center justify-between">
          <Link href="/" className="text-lg font-medium">
            <Image
              src="/LogoTipos.png"
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

      <main className="flex-grow container mx-auto px-4 py-8">
        <article className="prose lg:prose-xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Article Title</h1>
          <div className="mb-6">
            <Image
              src="/placeholder.svg?height=300&width=700"
              alt="Article hero image"
              width={700}
              height={300}
              className="rounded-lg object-cover w-full"
              priority
            />
          </div>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            euismod, nisi vel consectetur interdum, nisl nunc egestas nunc,
            vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel
            consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl
            nunc euismod nunc.
          </p>
          <div className="my-6">
            <Image
              src="/placeholder.svg?height=200&width=500"
              alt="Image illustrating first point"
              width={500}
              height={200}
              className="rounded-lg object-cover w-full"
            />
          </div>
          <p className="mb-4">
            Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas
            nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel
            consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl
            nunc euismod nunc.
          </p>
          <p>
            Nullam euismod, nisi vel consectetur interdum, nisl nunc egestas
            nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel
            consectetur interdum, nisl nunc egestas nunc, vitae tincidunt nisl
            nunc euismod nunc.
          </p>
          <div className="mt-8 flex items-center space-x-4">
            <Image
              src="/placeholder.svg?height=64&width=64"
              alt="Author's profile picture"
              width={64}
              height={64}
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold">Author Name</h3>
              <p className="text-sm text-gray-600">Short author bio or title</p>
            </div>
          </div>
        </article>
      </main>

      <section
        className="bg-muted py-12 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=400&width=1200')",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center bg-white bg-opacity-90 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Assine nossa newsletter</h2>
            <p className="mb-4">
              Receba atualizações sobre nossos produtos e novidades.
            </p>
            <div className="flex justify-center gap-4 mb-4">
              <Input
                type="email"
                placeholder="name@creative-tim.com"
                className="max-w-sm"
              />
              <Button className="bg-[#ffcc00] hover:bg-[#ffcc00]/90 font-semibold">
                ASSINAR
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
