const basePath = ''

/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? basePath : '',
  basePath: process.env.NODE_ENV === 'production' ? basePath : '',
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
