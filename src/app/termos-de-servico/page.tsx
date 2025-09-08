import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/footer";
import { Header } from "@/components/layout/Header";

/**
 * Página de Termos de Serviço.
 */
const TermsOfService = (): JSX.Element => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <Card className="bg-white">
            <CardContent className="p-6 md:p-8">
              <h1 className="text-3xl font-bold mb-8 text-center">
                Termos de Serviço
              </h1>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. Introdução</h2>
                <p className="text-gray-700 leading-relaxed">
                  Bem-vindo(a) ao nosso blog de produtos de tecnologia. Estes
                  Termos de Serviço regulam o uso do nosso site e da nossa
                  newsletter. Ao acessar e utilizar nossos serviços, você
                  concorda com estes termos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  2. Uso do Serviço
                </h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    O conteúdo do blog é fornecido apenas para fins informativos
                    e de entretenimento.
                  </li>
                  <li>
                    Você não pode utilizar nosso conteúdo para fins ilegais ou
                    não autorizados.
                  </li>
                  <li>
                    Reservamo-nos o direito de modificar ou descontinuar o
                    serviço a qualquer momento sem aviso prévio.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  3. Cadastro e Newsletter
                </h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    Para assinar nossa newsletter, você deve fornecer um
                    endereço de e-mail válido.
                  </li>
                  <li>
                    Podemos enviar e-mails promocionais e informativos, sendo
                    possível cancelar a assinatura a qualquer momento.
                  </li>
                  <li>
                    Não nos responsabilizamos por problemas decorrentes de
                    informações incorretas fornecidas pelo usuário.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  4. Direitos Autorais e Propriedade Intelectual
                </h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    Todo o conteúdo do blog é protegido por direitos autorais e
                    outras leis de propriedade intelectual.
                  </li>
                  <li>
                    É proibido copiar, reproduzir ou distribuir qualquer
                    material sem autorização prévia.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  5. Limitação de Responsabilidade
                </h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    Não garantimos a precisão, integridade ou atualidade das
                    informações publicadas.
                  </li>
                  <li>
                    O uso do nosso conteúdo é de sua responsabilidade e não nos
                    responsabilizamos por eventuais danos ou prejuízos.
                  </li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  6. Modificações nos Termos
                </h2>
                <p className="text-gray-700">
                  Podemos atualizar estes Termos de Serviço periodicamente. O
                  uso contínuo do site após alterações implica aceitação dos
                  novos termos.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">7. Contato</h2>
                <p className="text-gray-700">
                  Se tiver dúvidas sobre estes Termos de Serviço, entre em
                  contato pelo e-mail contato@materialblog.com.br
                </p>
              </section>

              <footer className="text-sm text-gray-500 mt-8 pt-4 border-t">
                Última atualização: 26 de fevereiro de 2025
              </footer>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
