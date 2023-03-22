const { info } = require('@utils/log');
const logger = async (ctx, next) => {
	info(`${ctx.request.method}, ${ctx.request.url}`);
	await next()
}

module.exports = logger;