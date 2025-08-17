import Link from "next/link";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "How to optimize your react components performance ⚡",
    author: "soufianealc",
    date: "March 23, 2023",
    readTime: "4 minutes read",
    gradient: "from-blue-400 to-purple-500",
    image: "/1.png",
  },
  {
    id: 2,
    title: "5 tips to learn programming — as a beginner.",
    author: "soufianealc",
    date: "August 25, 2022",
    readTime: "2 minutes read",
    gradient: "from-green-400 to-cyan-500",
    image: "/2.png",
  },
  {
    id: 3,
    title: "Understanding async/await in JavaScript",
    author: "soufianealc",
    date: "April 15, 2023",
    readTime: "5 minutes read",
    gradient: "from-yellow-400 to-orange-500",
    image: "/3.png",
  },
  {
    id: 4,
    title: "Mastering CSS Grid Layout",
    author: "cssmaster",
    date: "May 5, 2023",
    readTime: "6 minutes read",
    gradient: "from-pink-400 to-red-500",
    image: "/4.png",
  },
];

export default function LatestArticles() {
  return (
    <section className="px-4 py-12 md:px-6 lg:px-8 2xl:px-16 max-w-[1920px] mx-auto w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-6 sm:mb-8 md:mb-10 xl:mb-12">
        Ultimos Artigos
      </h2>
      <div className="grid gap-6 sm:gap-8 xl:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articles.map((article, index) => (
          <Link
            key={index}
            href={`/article/${article.id}`}
            className="group block"
          >
            <article className="h-full overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md">
              <div
                className={`relative h-48 sm:h-56 xl:h-64 w-full overflow-hidden bg-gradient-to-r ${article.gradient}`}
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="transition-transform duration-300 group-hover:scale-105"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-4 sm:p-6 xl:p-8">
                <div className="mb-3 sm:mb-4 flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-gray-200" />
                  <span className="text-sm xl:text-base text-gray-600">
                    {article.author}
                  </span>
                </div>
                <h3 className="mb-2 text-lg sm:text-xl xl:text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-gray-600 line-clamp-2">
                  {article.title}
                </h3>
                <div className="mt-3 sm:mt-4 flex items-center gap-4 text-sm xl:text-base text-gray-600">
                  <span>{article.date}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
