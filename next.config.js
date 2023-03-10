/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'coding-challenge-api.aerolab.co',
        port: '',
        pathname: '/images/**',
      },
    ],
  }
}

module.exports = nextConfig
