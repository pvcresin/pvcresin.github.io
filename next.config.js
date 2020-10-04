const baseDirectory = '/docs'

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? baseDirectory : '',
  basePath: process.env.NODE_ENV === 'production' ? baseDirectory : '',
  trailingSlash: true,
}
