
module.exports = {
  // context: __dirname + "/build",
  entry: './index.js',
  
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
        loader: 'style-loader!css-loader!sass-loader' 
      }
    ]
  }
};