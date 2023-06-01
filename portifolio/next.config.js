const path = require('path');

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.sass$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
};
