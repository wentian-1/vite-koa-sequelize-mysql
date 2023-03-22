require('module-alias/register');
require("babel-register");
const Koa = require('koa');
const app = new Koa();
// const router = require('@routers/index');
const swaggerDec = require('@config/swaggerDec');
const logger = require('@middlewares/logger');
const { error } = require('@utils/log');
const exception = require('@middlewares/exception');
const bodyparser = require('koa-bodyparser');

app.use(bodyparser());

app.use(exception);



app.use(logger);
// app.use(router.routes());
app.use(swaggerDec.routes(), swaggerDec.allowedMethods());

app.on('error', (err, ctx) => {
  error(err)
});

module.exports = app;