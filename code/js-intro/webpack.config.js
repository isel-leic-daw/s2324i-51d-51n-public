const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
  mode: 'production',
  resolve: {
    extensions: [".js", ".ts"]
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['js', 'jsx', 'ts', 'tsx']
    })
  ],
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
    ]
  }
};