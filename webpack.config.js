const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const remarkGfm = import('remark-gfm');

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.resolve(__dirname, './public/index.html'),
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  entry: path.join(__dirname, 'index.web.js'),
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build'),
  },
  externals: {
    'react-native': true,
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'react-native$': 'react-native-web',
      '@storybook/react-native': '@storybook/react', //<-here
      'styled-components/native': 'styled-components',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: [/\.test\.tsx$/, /node_modules/],
        loader: 'ts-loader',
      },
      {
        // 2a. Load `.stories.mdx` / `.story.mdx` files as CSF and generate
        //     the docs page from the markdown
        test: /\.(stories|story)\.mdx$/,
        use: [
          {
            loader: 'babel-loader',
            // may or may not need this line depending on your app's setup
            options: {
              plugins: ['@babel/plugin-transform-react-jsx'],
            },
          },
          {
            loader: '@mdx-js/loader',
            options: {
              providerImportSource: '@mdx-js/react',
              remarkPlugins: [remarkGfm],
            },
          },
        ],
      },
    ],
  },
  plugins: [HTMLWebpackPluginConfig],
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
  },
};
