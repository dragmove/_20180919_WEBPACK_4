const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  devtool: 'eval-source-map',

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    compress: true,
    contentBase: __dirname, // path.join(__dirname, 'build'),
    // host: '0.0.0.0',
    hot: true, // https://webpack.js.org/configuration/dev-server/#devserver-hot
    inline: true,
    port: 9001,
    publicPath: '/' // https://webpack.js.org/configuration/dev-server/#devserver-publicpath-
  },

  mode: 'development', // 'development' or 'production'. $webpack --mode=development

  plugins: [
    // https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
    new CleanWebpackPlugin(['build']),

    // https://webpack.js.org/plugins/define-plugin/
    new webpack.DefinePlugin({
      // global constants in development mode
    }),
    new webpack.HotModuleReplacementPlugin() // https://webpack.js.org/guides/hot-module-replacement/
  ],

  optimization: {
    minimize: false,
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: false,
        uglifyOptions: {
          warnings: false,
          compress: {
            unused: false,
            drop_console: false,
            warnings: false
          },
          mangle: false,
          output: {
            beautify: true,
            comments: true
          },
          keep_fnames: true
        }
      })
    ],
    usedExports: false
  }
});
