const { AbstractLogger } = require('../../src/interfaces/abstract-logger')
const { LogRequestMiddleware } = require('../../src/middleware/log-request')

const nextFactory = () => jest.fn()
const responseFactory = () => ({})
const requestFactory = () => ({
  method: 'GET',
  originalUrl: '/',
})

class LoggerStub extends AbstractLogger {
  log(message) {
    return message
  }
}

const sutFactory = () => {
  const loggerStub = new LoggerStub()
  const sut = new LogRequestMiddleware(loggerStub)
  const middlewareHandler = sut.getMiddlewareHandler()
  const logSpy = jest.spyOn(loggerStub, 'log')

  return {
    sut,
    loggerStub,
    logSpy,
    req: requestFactory(),
    res: responseFactory(),
    next: nextFactory(),
    middlewareHandler,
  }
}

describe('LogRequestMiddleware', () => {
  it('should call logger.log when executing', () => {
    const { middlewareHandler, logSpy, next, req, res } = sutFactory()

    middlewareHandler(req, res, next)

    expect(logSpy).toHaveBeenCalled()
  })

  it('should show timestamp', () => {
    const { middlewareHandler, logSpy, next, req, res } = sutFactory()

    middlewareHandler(req, res, next)

    const timestampRegex = /^\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z\].*$/

    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(timestampRegex))
  })

  it('should show method', () => {
    const { middlewareHandler, logSpy, next, req, res } = sutFactory()

    middlewareHandler(req, res, next)

    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/^.*\[GET\].*$/))
  })

  it('should show route', () => {
    const { middlewareHandler, logSpy, next, req, res } = sutFactory()

    middlewareHandler(req, res, next)

    expect(logSpy).toHaveBeenCalledWith(expect.stringMatching(/^.*\/$/))
  })
})
