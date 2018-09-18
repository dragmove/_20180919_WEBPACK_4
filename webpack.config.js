const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {
  let devtool = '';
  let minimize = false;
  let minimizer = null;
  let usedExports = false;

  switch (argv.mode) {
    case 'development':
      devtool = 'eval-source-map';

      minimize = false;

      // https://github.com/webpack-contrib/uglifyjs-webpack-plugin
      minimizer = new UglifyJsPlugin({
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
      });

      usedExports = false;
      break;

    case 'production':
      devtool = 'source-map';

      minimize = true;

      minimizer = new UglifyJsPlugin({
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          warnings: false,
          compress: {
            unused: true,
            drop_console: true,
            warnings: true
          },
          mangle: true,
          output: {
            beautify: false,
            comments: false
          },
          keep_fnames: false
        }
      });

      usedExports = true;
      break;
  }

  return {
    devtool: devtool,

    entry: {
      client: './public/client.js'
    },

    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },

    mode: 'development', // 'development' or 'production'. $webpack --mode=production

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime']
            }
          }
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'eslint-loader'
        }
      ]
    },

    plugins: [new webpack.optimize.OccurrenceOrderPlugin()],

    optimization: {
      minimize: minimize,
      minimizer: [minimizer],
      usedExports: usedExports
    }

    // TODO:
    // https://webpack.js.org/concepts/entry-points/
  };
};
