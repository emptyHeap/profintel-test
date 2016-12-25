module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './app.js',
    html: './index.html'
  },

  output: {
    filename: "app.js",
    path: __dirname + '/dist'
  },

  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        exclude: [/node_modules/, /bower_components/],
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
}
