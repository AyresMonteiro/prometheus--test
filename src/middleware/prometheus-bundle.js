const promBundle = require('express-prom-bundle')

const { BaseMiddleware } = require('../interfaces/base-middleware')

class PrometheusBundleMiddleware extends BaseMiddleware {
  constructor() {
    super()
  }

  /**
   * @returns {import("express").Handler}
   */
  getMiddlewareHandler() {
    return promBundle({ includeMethod: true })
  }
}

module.exports = {
  PrometheusBundleMiddleware,
}
