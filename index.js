const { PrometheusTestApp } = require('./src/app')

const app = new PrometheusTestApp()

app.applyMiddlewares()
app.applyRoutes()

app.listen(3000)
