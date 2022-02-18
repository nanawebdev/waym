module.exports = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === 'production' ? '/waym/' : '/',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}