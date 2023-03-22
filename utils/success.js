class Success {
	constructor(code, msg, data) {
		this.code = code;
		this.msg = msg || '操作成功';
		this.data = data || null
	}
	success(ctx) {
		ctx.body = this
	}
}


module.exports = Success;