const Router = require('koa-router');
const router = new Router();
const userRouter = require('./user');
const authRouter = require('./auth');
const apiRouter = new Router({
	prefix: '/api'
})

router.get('/', async (ctx) => {
	ctx.type = 'html';
	ctx.body = '<h1>hello world!</h1>';
})

// 第一种方式
apiRouter.use('/user', userRouter.routes());
router.use(apiRouter.routes());
// 第二种方式
router.use('/api', authRouter.routes())
module.exports = router;