/** @type {import('next').NextConfig} */
module.exports = {
  output: 'export',
  trailingSlash: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    forceSwcTransforms: true,
    scrollRestoration: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
