const path = require('path');
const webpack = require('webpack');
var copyWebpackPlugin = require('copy-webpack-plugin');
const bundleOutputDir = './dist';

module.exports = (env) => {
  const isDevBuild = !(env && env.prod);

  return [
    {
      entry: './src/index.ts',
      output: {
        filename: 'widget.js',
        path: path.resolve(bundleOutputDir)
      },
      devServer: {
        contentBase: bundleOutputDir
      },
      plugins: isDevBuild
        ? [new webpack.SourceMapDevToolPlugin(), new copyWebpackPlugin({ patterns: [{ from: 'dev/' }] })]
        : [],
      optimization: {
        minimize: !isDevBuild
      },
      mode: isDevBuild ? 'development' : 'production',
      module: {
        rules: [
          // packs SVG's discovered in url() into bundle
          { test: /\.svg/, use: 'svg-url-loader' },
          {
            test: /\.css$/i,
            use: [
              {
                loader: 'style-loader',
                options: { injectType: 'singletonStyleTag' }
              },
              {
                // allows import CSS as modules
                loader: 'css-loader',
                options: {
                  modules: {
                    // css class names format
                    localIdentName: '[name]-[local]-[hash:base64:5]'
                  },
                  sourceMap: isDevBuild
                }
              },
              {
                loader: 'postcss-loader'
              }
            ]
          },
          // use babel-loader for TS and JS modeles,
          // starting v7 Babel babel-loader can transpile TS into JS,
          // so no need for ts-loader
          // note, that in dev we still use tsc for type checking
          {
            test: /\.(js|ts|tsx|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.ts', '.tsx'],
        modules: [path.resolve('./node_modules'), path.resolve('./src')]
      }
    }
  ];
};
