const appName = 'abcwallet.js'

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: appName,
      script: 'node_modules/.bin/webpack-dev-server',
      args: '--mode=production --config webpack.conf.js',
      instances: 1,
      watch: false,
      error_file: `logs/${appName}.stderr.log'`,
      out_file: `logs/${appName}.stdout.log`,
      log_date_format: 'MM-DD HH:mm:ss',
      env: {
        PORT: 8001
      }
    }
  ]
}
