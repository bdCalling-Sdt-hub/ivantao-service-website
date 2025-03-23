/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["10.0.80.16", "182.252.68.227"],
  },
};

module.exports = nextConfig;
