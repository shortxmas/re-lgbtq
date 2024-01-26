const path = require('path')

module.exports={
  entry : {
    advising:'./src/webpack-render/advising.js',
    contact : './src/webpack-render/contact.js',
    events : './src/webpack-render/events.js',
    index:'./src/webpack-render/index.js',
    rainbow : './src/webpack-render/rainbowPrograms.js',
    rights : './src/webpack-render/rights.js',
    resources : './src/webpack-render/resources.js'
    
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