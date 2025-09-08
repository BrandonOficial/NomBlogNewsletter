import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import LatestArticles from "@/components/latest-articles";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col">
        <HeroSection />

        <section id="articles">
          <LatestArticles />
        </section>
      </main>

      <Footer />
    </div>
  );
}
