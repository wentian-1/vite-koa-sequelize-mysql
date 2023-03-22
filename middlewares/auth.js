// 用于在token权限通过后来检测是否有相应的操作权限
const auth = async (ctx, next) => {
	const a = Math.floor(Math.random() * 10)
	if (a%2 === 0) {
		ctx.throw('bad')
	}
	await next()
}

module.exports = auth;