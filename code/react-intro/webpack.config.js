const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
  mode: 'development',
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
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