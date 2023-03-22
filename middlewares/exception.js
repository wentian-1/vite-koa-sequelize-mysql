const {
	ErrorClass,
	NotFoundError
} = require('@utils/error');
const { error } = require('../utils/log');
const format = (err, ctx) => {
	ctx.response.status = err.statusCode;
	ctx.body = {
		code: err.code,
		message: err.message || err.msg,
		data: null
	}
}

const exception = async (ctx, next) => {
	try {
		await next();
	} catch (err) {
		if (err.flag === 'ErrorClass') {
			format(err, ctx);
		} else {
			format(new ErrorClass(500, err.message), ctx);
		}
	}
}

module.exports = exception;
