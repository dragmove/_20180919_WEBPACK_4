// https://webpack.js.org/guides/production/
module.exports = {
  // devtool:

  // devServer:

  entry: {
    client: './public/client.js'
  },

  externals: {}, // https://webpack.js.org/configuration/externals/

  // mode:

  module: {
    // https://webpack.js.org/concepts/loaders/
    // https://webpack.js.org/loaders/
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'eslint-loader' }]
      }
    ]
  },

  // plugins:

  // optimization:

  // output:

  target: 'web' // https://webpack.js.org/configuration/target/
};

// TODO: Read next articles
// https://webpack.js.org/guides/code-splitting/

/*
// webpack.config.js

const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {
  // https://webpack.js.org/configuration/dev-server/
  const devServer = {
    compress: true,
    contentBase: __dirname, // path.join(__dirname, 'build'),
    // host: '0.0.0.0',
    hot: true, // https://webpack.js.org/configuration/dev-server/#devserver-hot
    inline: true,
    port: 9001,
    publicPath: '/' // https://webpack.js.org/configuration/dev-server/#devserver-publicpath-
  };

  const target = 'web';

  let devtool = '';
  let externals = {};
  let plugins = [];
  let mode = '';
  let minimize = false;
  let minimizer = [];
  let usedExports = false;

  switch (argv.mode) {
    // https://webpack.js.org/concepts/mode/#mode-development
    case 'development':
      devtool = 'eval-source-map'; // https://webpack.js.org/configuration/devtool/

      mode = 'development';

      minimize = false;

      // https://github.com/webpack-contrib/uglifyjs-webpack-plugin
      minimizer = [
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
      ];

      usedExports = false;

      plugins = [
        // https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
        // new CleanWebpackPlugin(['build']),

        // https://webpack.js.org/plugins/define-plugin/
        new webpack.DefinePlugin({
          // global constants in development mode
        }),
        new webpack.HotModuleReplacementPlugin() // https://webpack.js.org/guides/hot-module-replacement/
      ];
      break;

    // https://webpack.js.org/concepts/mode/#mode-production
    case 'production':
      devtool = 'source-map';

      mode = 'production';

      minimize = true;

      minimizer = [
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
      ];

      usedExports = true;

      plugins = [
        // https://webpack.js.org/guides/output-management/#cleaning-up-the-dist-folder
        new CleanWebpackPlugin(['build']),

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

    mode: mode, // 'development' or 'production'. $webpack --mode=production

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
      minimizer: minimizer,
      usedExports: usedExports
    },

    output: {
      // publicPath: '',
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js'
    },

    target: target // https://webpack.js.org/configuration/target/

    // TODO: Read next articles
    // https://webpack.js.org/guides/asset-management/
  };
};
*/