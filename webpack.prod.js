const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  devtool: 'source-map',

  mode: 'production', // 'development' or 'production'. $webpack --mode=production

  plugins: [
    // https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
    new CleanWebpackPlugin(['build']),

    // https://webpack.js.org/plugins/define-plugin/
    new webpack.DefinePlugin({
      // global constants in production mode
    })
  ],

  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          warnings: false,
          compress: {
            unused: true,
            drop_console: true,
            warnings: true
          },
          mangle: false,
          output: {
            beautify: true,
            comments: true
          },
          keep_fnames: false
        }
      })
    ],
    usedExports: true
  }
});
