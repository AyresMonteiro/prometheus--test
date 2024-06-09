const express = require('express')
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

  /**
   * @param {(import('express').Handler)[]} middlewares 
   */
  applyMiddlewares(middlewares = []) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware)
    })
  }
}

module.exports = {
  PrometheusTestApp,
}
