const increaseSpecificity = require('postcss-increase-specificity')
const JavaScriptObfuscator = require('webpack-obfuscator')

const path = require('path')

const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/components/embedded-widget.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'embedded-widget.js',
    library: 'EmbeddedWidget',
    libraryExport: 'default',
    libraryTarget: 'window',
  },
  plugins: [devMode ? null : new JavaScriptObfuscator()].filter((i) => i),
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: { presets: ['@babel/preset-env', '@babel/react'] },
          },
          {
            loader: 'ts-loader',
            options: { configFile: path.resolve(__dirname, 'tsconfig.json') },
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  target: 'web',
}
