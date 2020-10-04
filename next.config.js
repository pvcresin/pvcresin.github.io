const basePath = '/docs'

module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? basePath : '',
  basePath: process.env.NODE_ENV === 'production' ? basePath : '',
  trailingSlash: true,
}
