import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#ffffff] py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Nom. All rights reserved.</p>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <Link
                  href="/politica-de-privacidade"
                  className="hover:underline"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos-de-servico" className="hover:underline">
                  Termo de Serviço
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:underline">
                  Contato
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
