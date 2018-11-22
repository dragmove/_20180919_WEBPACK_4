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
