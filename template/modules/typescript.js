module.exports = function(options, next) {
  // Extend build
  this.extendBuild(config => {
    // Add TypeScript loader
    config.module.rules.push({
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
      },
      // exclude: /(node_modules)/
    });

    config.resolve.extensions.push('.ts');

    // Add TypeScript loader for vue files
    for (let rule of config.module.rules) {
      if (rule.loader === 'vue-loader') {
        rule.options.loaders.ts = 'ts-loader?{"appendTsSuffixTo":["\\\\.vue$"]}';
      }
    }
  });

  next();
};
