import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/footer";

export default function PrivacyPolicy() {
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
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Card className="bg-white">
            <CardContent className="p-6 md:p-8">
              <h1 className="text-3xl font-bold mb-8 text-center">
                Política de Privacidade
              </h1>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. Introdução</h2>
                <p className="text-gray-700 leading-relaxed">
                  Bem-vindo(a) ao nosso blog de produtos de tecnologia. A sua
                  privacidade é importante para nós. Esta Política de
                  Privacidade explica como coletamos, usamos, armazenamos e
                  protegemos suas informações pessoais, incluindo a sua
                  participação na nossa newsletter.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  2. Coleta de Informações
                </h2>
                <p className="text-gray-700 mb-4">
                  Podemos coletar os seguintes tipos de dados:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    Informações fornecidas diretamente por você (nome, e-mail,
                    telefone, etc.).
                  </li>
                  <li>
                    Dados coletados automaticamente (endereço IP, tipo de
                    navegador, cookies, etc.).
                  </li>
                  <li>
                    Informações obtidas de terceiros, conforme permitido por
                    lei.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  3. Uso das Informações
                </h2>
                <p className="text-gray-700 mb-4">
                  Os dados coletados podem ser utilizados para:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Melhorar a experiência do usuário no blog.</li>
                  <li>Processar transações e fornecer suporte.</li>
                  <li>
                    Enviar nossa newsletter com novidades sobre tecnologia,
                    promoções e conteúdos exclusivos, desde que autorizado.
                  </li>
                  <li>Cumprir obrigações legais e regulatórias.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  4. Compartilhamento de Informações
                </h2>
                <p className="text-gray-700 mb-4">
                  Não vendemos ou compartilhamos suas informações pessoais com
                  terceiros, exceto nas seguintes situações:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Quando exigido por lei ou autoridades regulatórias.</li>
                  <li>
                    Para parceiros que auxiliam na operação do blog e na
                    distribuição da newsletter, mediante contrato de
                    confidencialidade.
                  </li>
                  <li>Com seu consentimento explícito.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  5. Segurança das Informações
                </h2>
                <p className="text-gray-700">
                  Adotamos medidas técnicas e organizacionais para proteger seus
                  dados contra acessos não autorizados, uso indevido ou
                  divulgação indevida.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">6. Seus Direitos</h2>
                <p className="text-gray-700 mb-4">Você tem o direito de:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Acessar, corrigir ou excluir seus dados pessoais.</li>
                  <li>Revogar consentimentos previamente concedidos.</li>
                  <li>Solicitar a portabilidade dos seus dados.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  7. Cookies e Tecnologias Semelhantes
                </h2>
                <p className="text-gray-700">
                  Utilizamos cookies para melhorar sua experiência no blog. Você
                  pode configurar seu navegador para recusar cookies, mas isso
                  pode afetar a funcionalidade do site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  8. Alterações nesta Política
                </h2>
                <p className="text-gray-700">
                  Podemos atualizar esta Política de Privacidade periodicamente.
                  Notificaremos mudanças significativas por meio dos canais
                  apropriados.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">9. Contato</h2>
                <p className="text-gray-700">
                  Se tiver dúvidas sobre esta Política de Privacidade, entre em
                  contato conosco pelo e-mail contato@materialblog.com.br
                </p>
              </section>

              <div className="text-sm text-gray-500 mt-8 pt-4 border-t">
                Última atualização: 26 de fevereiro de 2025
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
