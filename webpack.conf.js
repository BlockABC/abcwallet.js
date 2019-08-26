/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const pkg = require('./package.json')

const SRC = path.resolve(__dirname, 'src')
const DIST = path.resolve(__dirname, 'dist')

module.exports = function (env = {}, argv) {
  // env 来自于 https://webpack.js.org/api/cli/#environment-options
  // argv 是 webpack 启动参数，其中 mode 来自于 --mode 参数
  const PROD = argv.mode === 'production'

  const config = {
    mode: argv.mode,
    entry: path.join(SRC, 'index.ts'),
    target: 'web',
    resolve: {
      mainFields: ['browser', 'module', 'main'],
      extensions: ['.ts', '.js', '.json']
    },
    output: {
      path: DIST,
      filename: `${pkg.name}.umd.js`,
      libraryTarget: 'umd',
      library: 'ABCWallet',
      libraryExport: 'default',
    },
    optimization: {
      minimize: false
    },
    module: {
      rules: [{
        test: /\.(ts)$/,
        include: [SRC],
        use: {
          loader: 'ts-loader',
          options: {
            onlyCompileBundledFiles: true
          }
        }
      } ]
    },
    plugins: [
      new webpack.DefinePlugin({
        NODE_RUNTIME: JSON.stringify(false),
        WEB_RUNTIME: JSON.stringify(true)
      }),
    ],
    devtool: false
  }

  if (PROD) {
    // 生成 .min 格式
    const minifiedConfig = merge(config, {
      output: {
        filename: `${pkg.name}.umd.min.js`
      },
      optimization: {
        minimize: true
      },
      devtool: 'source-map',
    })

    // 生成 bundle 分析报告
    if (env.analysis) {
      minifiedConfig.plugins.push(new BundleAnalyzerPlugin())
    }

    return [config, minifiedConfig]
  }
  else {
    // config.watch = true
    config.devServer = {
      host: '0.0.0.0',
      contentBase: ['dist', 'public'],
      clientLogLevel: 'debug'
    }

    return config
  }
}
