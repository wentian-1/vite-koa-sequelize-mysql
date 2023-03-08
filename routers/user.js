const Router = require('koa-router');
const useController = require('../controller/user')
const router = new Router();

router.get("/", useController.getAllUser)
	.get("/:id", async (ctx) => {
		const {
			id
		} = ctx.params
		ctx.body = `获取id为${id}的用户`;
	})
	.post("/login", async (ctx) => {
		ctx.body = `用户登录`;
	})
	.post("/", async (ctx) => {
		ctx.body = `创建用户`;
	})
	.put("/:id", async (ctx) => {
		const {
			id
		} = ctx.params
		ctx.body = `修改id为${id}的用户`;
	})
	.del("/:id", async (ctx) => {
		const {
			id
		} = ctx.params
		ctx.body = `删除id为${id}的用户`;
	})
	.all("/users/:id", async (ctx) => {
		ctx.body = ctx.params;
	});

module.exports = router;
