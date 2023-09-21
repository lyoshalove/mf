const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 8000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        app1: 'app1@http://localhost:8001/remoteEntry.js',
        app2: 'app2@http://localhost:8002/remoteEntry.js',
        app3: 'app3@http://localhost:8003/remoteEntry.js'
      }
    })
  ]
}