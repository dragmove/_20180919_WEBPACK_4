import path from 'path';
import extend from 'extend';
import webpack from 'webpack';

const common = {
  stats: {
    colors: true,
    chunks: false
  },

  plugins: [
    new (webpack.optimize.OccurenceOrderPlugin ||
      webpack.optimize.OccurrenceOrderPlugin)(true)
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.join(__dirname, '../server.js')],
        loader: 'babel-loader'
      }
    ]
  }
};

const server = extend(true, {}, common, {
  entry: path.join(__dirname, '../server.js'),

  output: {
    path: path.join(__dirname, '../build'),
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },

  target: 'node',
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false
  },
  externals: /^[a-z][a-z\/\.\-0-9]*$/i
});

export default server;
// export default [client, server];
