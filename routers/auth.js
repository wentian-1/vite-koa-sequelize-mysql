const Router = require('koa-router');
const useController = require('../controller/user');
const router = new Router();

router.get("/login", useController.getUserByName)
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