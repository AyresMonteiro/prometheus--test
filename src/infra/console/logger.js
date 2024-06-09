const { AbstractLogger } = require("../../interfaces/abstract-logger")

class ConsoleLogger extends AbstractLogger {
  constructor() {
    super()
  }

  /**
   * @param {string} message 
   */
  log(message) {
    console.log(message)
  }
}

module.exports = {
  ConsoleLogger,
}
