/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false,
  httpAgentOptions: {
    keepAlive: false,
  },
  experimental: {
    optimizePackageImports: ['package-name'],
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
};

module.exports = nextConfig;
