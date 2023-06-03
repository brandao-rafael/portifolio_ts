const path = require('path')
require('dotenv').config()

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.sass$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ],
      include: path.resolve(__dirname, '../')
    })

    return config
  }
}

module.exports = {
  env: {
    SERVICE_ID: process.env.SERVICE_ID,
    TEMPLATE_ID: process.env.TEMPLATE_ID,
    EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY
  }
}
