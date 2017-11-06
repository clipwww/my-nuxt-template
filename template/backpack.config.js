module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './server/index.ts';

    config.resolve = {
      extensions: ['.ts', '.js', '.json'],
      alias: {},
    };

    config.module.rules.push({
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {},
    });

    return config;
  },
};
