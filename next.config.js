/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  productionBrowserSourceMaps: false,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  experimental: {},

  typescript: {
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;