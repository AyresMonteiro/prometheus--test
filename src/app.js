const express = require('express')
const { LogRequestMiddleware } = require('./middleware/log-request')
const { ConsoleLogger } = require('./infra/console/logger')

class PrometheusTestApp {
  constructor() {
    this.app = express()
  }

  getApp() {
    return this.app
  }

  listen(port) {
    return this.app.listen(port, () => {
      const currentDomain = 'http://localhost'

      const message = `Server is running at ${currentDomain}:${port}`

      console.log(message)
    })
  }

  applyRoutes() {
    this.app.get('/', (_req, res) => {
      return res.status(200).json({
        message: 'Hello World!',
      })
    })
  }

  applyMiddlewares() {
    const logRequestMiddleware = new LogRequestMiddleware(new ConsoleLogger())

    this.app.use(logRequestMiddleware.getMiddlewareHandler())
  }
}

module.exports = {
  PrometheusTestApp,
}
