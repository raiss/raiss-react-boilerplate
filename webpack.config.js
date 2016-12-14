var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loaders: [
            'style',
            'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:3]',
            'resolve-url',
            'sass'
        ]
      }
    ]
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  resolve: {
    alias: {
      utils: process.cwd() + '/src/utils',
      components: process.cwd() + '/src/components',
      containers: process.cwd() + '/src/containers',
    },
  },
};
