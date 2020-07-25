const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const environment = process.env.NODE_ENV;

module.exports = {
  mode: environment,
  module: {
    rules: [
      {
        test: /\.(sc|c|sa)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ]
      }
    ]
  },
  output: {
    filename: 'js/[name].js',
    path: __dirname + '/dist'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    }),
    new OptimizeCssAssetsPlugin({}),
  ],
};
