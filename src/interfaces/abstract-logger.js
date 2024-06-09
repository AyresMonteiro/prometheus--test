class AbstractLogger {
  /**
   * @param {string} message 
   */
  log(_message) {
    throw new Error('This method must be implemented')
  }
}

module.exports = {
  AbstractLogger,
}
