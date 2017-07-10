
module.exports = {
  // context: __dirname + "/build",
  entry: './index.js',
  
  output: {
    path: 'build',
    //path: __dirname + "/build",
    filename: 'bundle.js'
  },
  
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'] 
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader' 
      }
    ]
  }
};