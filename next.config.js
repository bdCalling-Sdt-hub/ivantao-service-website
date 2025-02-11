/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Add other Next.js configurations here as needed
  // For example:
  // reactStrictMode: true, // Enable React Strict Mode
  // swcMinify: true, // Enable SWC minification
  // images: {
  //   domains: ['example.com'], // Allow images from this domain
  // },
};

module.exports = nextConfig;
