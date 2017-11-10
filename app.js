const Koa = require('koa')
const index = require('./routes')
const app = new Koa()

app.use(index.routes())

module.exports = app;
