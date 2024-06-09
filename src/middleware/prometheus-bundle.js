const promBundle = require('express-prom-bundle')

const { BaseMiddleware } = require('../interfaces/base-middleware')

class PrometheusBundlerMiddleware extends BaseMiddleware {
  /**
   * @returns {import("express").Handler}
   */
  getMiddlewareHandler() {
    return promBundle({ includeMethod: true })
  }
}

module.exports = {
  PrometheusBundlerMiddleware,
}
