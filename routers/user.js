const Router = require('koa-router');
const userRouter = new Router();
const User = require('@controller/user')

userRouter.get('/', User.getAllUser)

module.exports = userRouter;