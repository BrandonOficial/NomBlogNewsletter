import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Footer } from "@/components/footer";
import { Header } from "@/components/layout/Header";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Entre em Contato
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="bg-white">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-4">
                  Informações de Contato
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-900">Endereço</h3>
                    <p className="text-gray-600">
                      Rua Exemplo, 123
                      <br />
                      Bairro Centro
                      <br />
                      São Paulo - SP
                      <br />
                      CEP: 01234-567
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900">Email</h3>
                    <p className="text-gray-600">contato@materialblog.com.br</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900">Telefone</h3>
                    <p className="text-gray-600">(11) 1234-5678</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900">
                      Horário de Atendimento
                    </h3>
                    <p className="text-gray-600">
                      Segunda a Sexta: 9h às 18h
                      <br />
                      Sábado: 9h às 13h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-white">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-4">
                  Envie sua Mensagem
                </h2>

                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nome
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Seu nome completo"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="Assunto da mensagem"
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Digite sua mensagem aqui..."
                      className="w-full min-h-[150px]"
                    />
                  </div>

                  <Button className="w-full bg-[#ffcc00] hover:bg-[#ffcc00]/90 text-black">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
