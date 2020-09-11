const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const WorkboxPlugin = require('workbox-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (_, options) => {

  return{
  mode: options.mode,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
        },
      },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader',
        ],
      },   
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true // true outputs JSX tags
            }
          }
        ]
      },
      {
        test: /\.(png|gif|JPG|mp3|pdf|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: { 
              name: 'assets/[hash].[ext]',
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimize:  (options.mode === 'production'),
    minimizer:  (options.mode === 'production') ? ([ 
        new TerserPlugin({
            test: /\.js(\?.*)?$/i,
            exclude: [
                /node_modules/,
                path.resolve(__dirname,'src','server')
            ],
            sourceMap: ( options.mode === 'development')
        }) 
    ]) : ([]),
  },
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: true,
    writeToDisk: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      favicon: './public/favicon.png'
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
    new WebpackPwaManifest({
      name: 'Joaquin Noguera - Página Personal',
      short_name: 'Porfolio',
      description: 'En esta pagina ',
      background_color: '#13547A',
      crossorigin: null, //can be null, use-credentials or anonymous,
      theme_color: "#80D0C7",
      icons: [
        {
          src: path.resolve('public/favicon-manifest.png'),
          sizes: [512,256,168,144,96,72,48] // multiple sizes
        }
      ]
    }),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /(es)$/),
    new WorkboxPlugin.InjectManifest({
      swSrc: path.join(process.cwd(), '/src/service-worker.js'),
      swDest: 'service-worker.js',
      exclude: [
        /\.map$/,
        /manifest$/,
        /\.htaccess$/,
        /service-worker\.js$/,
        /sw\.js$/,
      ],
      maximumFileSizeToCacheInBytes: 10000000
      }),
  ]
}};