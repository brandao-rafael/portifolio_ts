// next.config.js

module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      });
  
      return config;
    },
  };
  