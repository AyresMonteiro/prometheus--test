const { AbstractLogger } = require('../interfaces/abstract-logger')

class LogRequestMiddleware {
  /**
   * @param {AbstractLogger} logger
   */
  constructor(logger) {
    this.logger = logger
  }

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
