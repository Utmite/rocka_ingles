module.exports = {
  pwa: {
    workboxOptions: {
      skipWaiting: true,
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/rocka_ingles/'
    : '/rocka_ingles/',
};
