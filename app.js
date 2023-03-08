const Koa = require('koa');
const config = require('./config');
const router = require('./routers');
const bodyparser = require('koa-bodyparser');
const koajwt = require('koa-jwt');
const tokenVerify = require('./utils/tokenVerify');

const {
	info
} = require('./utils/log')


const logger = async (ctx, next) => {
	info(`${ctx.request.method}, ${ctx.request.url}`)
	await next()
}

const handlerErr = async (ctx, next) => {
	try {
		await next()
		ctx.body = {
			code: ctx.status,
			message: 'success',
			data: ctx.body
		}
	} catch (e) {
		ctx.status = e.status || 500;
		ctx.body = {
			message: e.message,
			code: ctx.status
		}
	}
}



const app = new Koa();
app.use(logger).use(handlerErr)
app.use(bodyparser())


app.use(function(ctx, next) {
	return next().catch((err) => {
		if (401 == err.status) {
			ctx.status = 401;
			ctx.body = '暂无权限\n';
		} else {
			throw err;
		}
	});
});


app.use(koajwt({
	secret: config.secret
}).unless({
	path: [
		/^\/api\/login/
	]
}));





app.use(router.routes());



app.listen(config.port, () => {
	info(config.port, '启动成功')
})
