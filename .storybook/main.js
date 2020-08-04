const path = require('path')
const fs = require('fs')

const getFileText = filename => fs.readFileSync(filename, 'utf8')
const sassVariables = getFileText(
  path.resolve(__dirname, '../src/styles/vars.sass')
)
const sassGlobalStyles = getFileText(
  path.resolve(__dirname, '../src/styles/global.sass')
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
            additionalData: sassVariables + sassGlobalStyles
          }
        }
      ],
      include: path.resolve(__dirname, '../src/')
    })

    // Return the altered config
    return config
  }
}
