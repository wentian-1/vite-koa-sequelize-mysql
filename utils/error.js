class ErrorClass {
	constructor(code = 500, msg = '服务开小车啦', statusCode = 500) {
		this.code = code;
		this.msg = msg;
		this.statusCode = statusCode;
	}
	throwErr(ctx) {
		ctx.throw(this.statusCode, this.msg, {
			code: this.code,
			flag: "ErrorClass"
		})
	}
}

class ParameterError extends ErrorClass {
	constructor(code, msg="参数错误") {
		super(code, msg, 400);
	}
}

class AuthError extends ErrorClass {
	constructor(code, msg = "token认证失败") {
		super(code, msg, 401)
	}
}

// 404
class NotFoundError extends ErrorClass {
	constructor(code, msg = "未找到该api") {
		super(code, msg, 404)
	}
}
// 500
class InternalServerError extends ErrorClass {
	constructor(code, msg = "服务器内部错误") {
		super(code, msg, 500)
	}
}

module.exports = {
	ErrorClass,
	ParameterError,
	AuthError,
	NotFoundError,
	InternalServerError
}