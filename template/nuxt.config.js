const chalk = require('chalk');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

console.log(chalk.black[isDev ? 'bgYellow' : 'bgCyan'](isDev ? '  development  ' : '  production  '));

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'RE',
    titleTemplate: '%s',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  modules: ['~modules/typescript.js'],

  plugins: ['~plugins/axios', { src: '~plugins/swal', ssr: false }],

  router: {
    //linkActiveClass: 'active-link',
    middleware: ['auth'],
    scrollBehavior(to, from, savedPosition) {
      return { x: 0, y: 0 };
    },
  },

  /*
  ** Global CSS
  */
  css: ['~/assets/css/main.css', 'sweetalert2/dist/sweetalert2.min.css'],

  /*
  ** Add axios globally
  */
  build: {
    analyze: process.env.npm_config_report
      ? {
          analyzerMode: 'static',
          analyzerHost: '0.0.0.0',
          analyzerPort: 8888,
          reportFilename: 'report.html',
          defaultSizes: 'parsed',
          openAnalyzer: true,
          generateStatsFile: false,
          statsFilename: 'stats.json',
          statsOptions: null,
          logLevel: 'info',
        }
      : false,
    vendor: ['axios', 'moment'],
    postcss: [
      require('autoprefixer')({
        browsers: ['last 5 version', 'iOS >=8', 'Safari >=8'],
      }),
    ],
    plugins: [
      ...(isDev
        ? []
        : [
            new UglifyJSPlugin({
              /*
                uglifyjs-webpack-plugin for ES6
                ref. https://stackoverflow.com/questions/42375468/uglify-syntaxerror-unexpected-token-punc
              */
              uglifyOptions: {
                compress: {
                  warnings: false,
                  drop_console: true,
                },
              },
              sourceMap: true,
            }),
            new webpack.ContextReplacementPlugin(/moment[\\/]locale$/, /zh|en/),
          ]),
    ],
  },
};
