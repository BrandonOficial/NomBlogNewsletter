/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: [
      "@radix-ui/react-slot",
      "class-variance-authority",
    ],
  },
  images: {
    domains: ["localhost"],
    unoptimized: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
};

module.exports = nextConfig;
