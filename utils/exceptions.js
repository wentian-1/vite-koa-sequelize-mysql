
class BaseException extends Error {
	status = 500
	message = '服务器开小车'
}

class NotFontException extends BaseException {
	status = 404
	constructor(message) {
		super()
		this.message = message || '无此内容'
	}
}


class UnauthorizedException extends BaseException {
	status = 401
	constructor(message) {
		super()
		this.message = message || '尚未登录'
	}
}


class ForbiddenException extends BaseException {
	status = 401
	constructor(message) {
		super()
		this.message = message || '权限不足'
	}
}

module.exports = {
	BaseException,
	NotFontException,
	UnauthorizedException,
	ForbiddenException
}