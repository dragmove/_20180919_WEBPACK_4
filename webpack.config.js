const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {
  let devtool = '';
  let devServer = {};
  let externals = {};
  let plugins = [];
  let minimize = false;
  let minimizer = null;
  let usedExports = false;
  let target = 'web';

  switch (argv.mode) {
    // https://webpack.js.org/concepts/mode/#mode-development
    case 'development':
      devtool = 'eval-source-map'; // https://webpack.js.org/configuration/devtool/

      // https://webpack.js.org/configuration/dev-server/
      devServer = {
        color: true,
        compress: true,
        contentBase: path.join(__dirname, 'build'),
        // host: '0.0.0.0',
        // hot: true, // https://webpack.js.org/configuration/dev-server/#devserver-hot
        port: 9000,
        publicPath: '/' // https://webpack.js.org/configuration/dev-server/#devserver-publicpath-
      };

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

      plugins = [
        // https://webpack.js.org/plugins/define-plugin/
        new webpack.DefinePlugin({
          // global constants in development mode
        })
      ];
      break;

    // https://webpack.js.org/concepts/mode/#mode-production
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

      plugins = [
        // https://webpack.js.org/plugins/define-plugin/
        new webpack.DefinePlugin({
          // global constants in development mode
        })
      ];
      break;
  }

  return {
    devtool: devtool,

    devServer: devServer,

    entry: {
      client: './public/client.js'
    },

    externals: externals, // https://webpack.js.org/configuration/externals/

    mode: 'development', // 'development' or 'production'. $webpack --mode=production

    module: {
      // https://webpack.js.org/concepts/loaders/
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }]
        }
      ]
    },

    plugins: plugins,

    optimization: {
      minimize: minimize,
      minimizer: [minimizer],
      usedExports: usedExports
    },

    output: {
      // publicPath: '',
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },

    target: target // https://webpack.js.org/configuration/target/

    // TODO: Read next articles
    // https://webpack.js.org/concepts/hot-module-replacement/
    // https://webpack.js.org/configuration/performance/
  };
};
