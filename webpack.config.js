
module.exports = {
  // context: __dirname + "/build",
  entry: './index.js',
  devtool: 'source-map',
  output: {
    // path: 'build',
    //path: __dirname + "/build",
    filename: 'bundle.js'
  },
  
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader', 'babel-loader', 'eslint-loader'] 
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
            query: {
              modules: true,
              camelCase: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          }
        ]
      }
    ]
  }
};