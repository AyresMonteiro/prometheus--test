const { AbstractLogger } = require('../interfaces/abstract-logger')
const { BaseMiddleware } = require('../interfaces/base-middleware')

class LogRequestMiddleware extends BaseMiddleware {
  /**
   * @param {AbstractLogger} logger
   */
  constructor(logger) {
    super()

    this.logger = logger
  }

  /**
   * @returns {import("express").Handler}
   */
  getMiddlewareHandler() {
    const ctx = this

    return (req, _res, next) => {
      const timestamp = new Date().toISOString()
      const method = req.method.toUpperCase()
      const url = req.originalUrl

      const message = `[${timestamp}] [${method}] ${url}`

      ctx.logger.log(message)

      next()
    }
  }
}

module.exports = {
  LogRequestMiddleware,
}
