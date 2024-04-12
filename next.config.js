/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  httpAgentOptions: {
    keepAlive: false,
  },
  experimental: {
    optimizePackageImports: ['package-name'],
  },
};

module.exports = nextConfig;
