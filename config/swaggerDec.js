const { SwaggerRouter } = require('koa-swagger-decorator')
const path = require('path')
const router = new SwaggerRouter()
const koajwt = require('koa-jwt');
const { secret } = require('@config/config');
const { NO_AUTH } = require('@config/httpRes');
const auth = require('@middlewares/auth');

router.swagger({
	title: '管理系统',
	description: '管理系统---管理系统',
	version: '0.0.1',
})

router.use(async(ctx, next) => {
	try{
		await next();
	}catch(e){
		if (e.name === 'UnauthorizedError') {
			await NO_AUTH(ctx);
		}
		throw e
	}
})
router.use(koajwt({ secret }).unless({
  path: [
    /^\/api\/login/, // 登陆接口
    /^\/api\/register/, // 注册
		/^\/swagger/, // 接口文档
  ]
}));

router.use(auth)


router.mapDir(path.resolve(__dirname, '../controller/'));

module.exports = router;