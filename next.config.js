/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint checks during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript checks during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Add any other configuration options that might have been in next.config.ts
  // For example: reactStrictMode, output, images, etc.
};

module.exports = nextConfig;
