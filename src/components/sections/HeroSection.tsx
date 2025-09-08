import { SubscriptionForm } from "../SubscriptionForm";

export const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 py-12 sm:py-20 lg:py-24 2xl:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6 lg:mb-8">
          Blog de Tecnologia
          <br className="hidden sm:block" />
          Material Tailwind
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto">
          Amplie seu conhecimento com os conteúdos mais recentes sobre
          tecnologia e fique por dentro das inovações do mercado em nossos
          artigos
        </p>

        <SubscriptionForm />
      </div>
    </section>
  );
};
