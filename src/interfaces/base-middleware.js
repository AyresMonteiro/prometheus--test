class BaseMiddleware {
  /**
   * @returns {import("express").Handler}
   */
  getMiddlewareHandler() {
    throw new Error('This method must be implemented')
  }
}

module.exports = {
  BaseMiddleware,
}
