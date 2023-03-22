const {
	ParameterError,
	AuthError
} = require("@utils/error");
const Success = require("@utils/success");


exports.SUCCESS = async (ctx, data) => {
	new Success(200, '操作成功', data).success(ctx);
}

exports.USER_ACCOUNT_NOT_EXIST = async (ctx) => 
	new Success(2001, '账号不存在').success(ctx);

exports.USER_PASSWORD_FAIL = async (ctx) => 
	new Success(2001, 'mi').success(ctx);


exports.NO_AUTH = async (ctx, msg = "暂无权限") => new AuthError(4001, msg).throwErr(ctx);

exports.PARAM_IS_BLANK = async (ctx, msg = "请求参数为空") => new ParameterError(1001, msg).throwErr(ctx);