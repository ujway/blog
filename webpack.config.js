"use strict";
const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const autoprefixer = require("autoprefixer");
// const precss = require("precss");

module.exports = [
  {
    context: path.join(__dirname, 'public/src/js'),
    entry: {
      bundle: './Theme.js'
    },
    output: {
      path: path.join(__dirname, 'public/dist/js'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js[x]?$/,
          exclude: /node_modules/,
          options: {
            presets: ["es2015", "react"]
          },
        }
      ],
    },
    devServer: {
      contentBase: 'dist'
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
    ],
    devtool: 'source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    }
  },
  {
    context: path.join(__dirname, 'public/src/sass'),
    entry: {
      bundle: './style.scss'
    },
    output: {
      path: path.join(__dirname, 'public/dist/css'),
      filename: '[name].css'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract(
            {
              fallback: "style-loader",
              use: ["css-loader", "sass-loader"]
            }
          )
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('bundle.css')
    ]
  }
]

