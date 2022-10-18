/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
