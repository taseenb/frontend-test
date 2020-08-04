const path = require('path')
const fs = require('fs')

const sassVariables = fs.readFileSync(
  path.resolve(__dirname, '../src/styles/vars.sass'),
  'utf8'
)

module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.(sa|sc|c)ss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            additionalData: sassVariables
          }
        }
      ],
      include: path.resolve(__dirname, '../src/')
    })

    // Return the altered config
    return config
  }
}
