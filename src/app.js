const express = require('express')

class PrometheusTestApp {
  constructor() {
    this.app = express()

    this.app.get('/', (req, res) => {
      return res.status(200).send('<h1>Hello World!</h1>')
    })
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
}

module.exports = {
  PrometheusTestApp,
}
