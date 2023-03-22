const { summary, tags, query, description, request, body } = require('koa-swagger-decorator')
const userService = require('@services/user');
const { PARAM_IS_BLANK, SUCCESS, USER_ACCOUNT_NOT_EXIST, USER_PASSWORD_FAIL }= require('@config/httpRes');
const tag = tags(['用户']);
const { signToken, verifyToken } = require('@utils/token')
const { setItem, getItem } = require("@utils/redis")

class UserController {
	@request('get', '/api/user')
	@summary('获取用户列表')
	@description('获取用户列表')
	@tag
	// @query({name: {type: 'string', required: false, example: 'male'}})
	static async getAllUser(ctx) {
		const token = ctx.request.header['authorization'].split(' ')[1];
		console.log(await getItem('key'))
		const res = await userService.findAllUser();
		ctx.body = res;
	}
	@request('get', '/api/userById')
	@summary('返回一个用户')
	@description('lalla')
	@tag
	@query({id: {type: 'number', required: true, example: 1}})
	static async getUserById(ctx){
		const query = ctx.query;
		if (!query.id) {
			await PARAM_IS_BLANK(ctx, 'id不能为null')
		}
		const res = await userService.findOneUserById(query.id);
		if (!res) {
			await USER_ACCOUNT_NOT_EXIST(ctx)
			return
		}
		await SUCCESS(ctx, res)
	}
	@request('post', '/api/login')
	@summary('登录')
	@description('lalla')
	@tag
	@body({
		name: { type: 'string', required: true, example: 'admin'},
		password: { type: 'string', required: true, example: '123456'},
	})
	static async login(ctx){
		const body = ctx.request.body;
		const res = await userService.findUserByName(body.name);
		if (!res) {
			await USER_ACCOUNT_NOT_EXIST(ctx);
			return
		}
		if (res.password !== body.password) {
			await USER_PASSWORD_FAIL(ctx);
			return
		}
		const token = signToken({
			name: res.name,
			password: res.password,
			id: res.id
		});
		setItem(res.id, token); // 用户权限被修改后清除掉token用
		setItem(token, token);
		await SUCCESS(ctx, { token });
		
	}
}


module.exports = UserController;