const withSass = require('@zeit/next-sass')

export const basePath = ''

module.exports = withSass({
  assetPrefix: process.env.NODE_ENV === 'production' ? basePath : '',
  basePath: process.env.NODE_ENV === 'production' ? basePath : '',
  trailingSlash: true,
})
