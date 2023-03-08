const Router = require('koa-router')
const user = require('./user')
const auth = require('./auth')
const router = new Router()

const hasLimit = async (ctx, next, role) => {
	console.log(role)
	// ctx.throw(401, '没有权限！！！')
	await next()
}

// 指定一个url匹配
router.get('/', async (ctx) => {
	ctx.type = 'html';
	ctx.body = '<h1>hello world!</h1>';
})

router.use('/api').use('/user', (ctx, next) => hasLimit(ctx, next, 'user'), user.routes()).use('/api', auth.routes())






module.exports = router;
