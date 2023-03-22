const Router = require('koa-router');
const authRouter = new Router();

authRouter.post('/register', async (ctx) => {
	ctx.body = ctx.request.body
}).post('/login', async (ctx) => {
	ctx.body = ctx.request.body
})
	
module.exports = authRouter;