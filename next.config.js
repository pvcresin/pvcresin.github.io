/** @type {import('next').NextConfig} */
module.exports = {
  trailingSlash: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    forceSwcTransforms: true,
    scrollRestoration: true,
  },
}
