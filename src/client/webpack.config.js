var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var devServerPort = 8080;


module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [HTMLWebpackPluginConfig],
  
  devServer: {
        port: devServerPort,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        hot: true,
        inline: false,
        noCredentials: true,
        lazy: false, // No watching, compiles on request (cannot be combined with --hot).
        
  }
};
