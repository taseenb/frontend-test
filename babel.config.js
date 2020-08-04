module.exports = function (api) {
  const isTest = api.env('test')

  api.cache(true)

  const presets = [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'entry',
        corejs: 3,
        targets: { node: process.versions.node }
      }
    ]
  ]
  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties'
  ]

  return {
    compact: false,
    presets,
    plugins
  }
}
