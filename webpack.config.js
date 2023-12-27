const path = require('path')

module.exports={
  entry : {
    index:'./src/webpack-render/index.js',
    safezone : './src/webpack-render/safe-zone.js',
    programs : './src/webpack-render/programs.js',
    rights : './src/webpack-render/rights.js',
    resources : './src/webpack-render/resources.js',
    contact : './src/webpack-render/contact.js'
  },
  output:{
      filename:'[name].js',
      path: path.resolve(__dirname,'dist')
  },
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-react',]
            ]
          }
        }
      }
    ]
  },
}