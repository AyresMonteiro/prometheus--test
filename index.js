const { PrometheusTestApp } = require('./src/app')
const { ConsoleLogger } = require('./src/infra/console/logger')
const { LogRequestMiddleware } = require('./src/middleware/log-request')
const {
  PrometheusBundlerMiddleware,
} = require('./src/middleware/prometheus-bundle')

const app = new PrometheusTestApp()

const registeredMiddlewares = [
  new LogRequestMiddleware(new ConsoleLogger()).getMiddlewareHandler(),
  new PrometheusBundlerMiddleware().getMiddlewareHandler(),
]

app.applyMiddlewares(registeredMiddlewares)

app.applyRoutes()

app.listen(3000)
