const jwt = require('jsonwebtoken');
const {
	secret
} = require('../config')
async function verify(ctx, next) {
	let url = ctx.request.url;
	let authorization = ctx.request.headers["authorization"];
	if (authorization) {
		let token = authorization.split(" ")[1];
		let payload = jwt.verify(token, secret, (error, decoded) => {
			if (error) {
				ctx.body = {
					status: -1,
					msg: "登陆失效"
				};
			} else {
				ctx.token = decoded;
				return next();
			}
		});
	} else {
		return next();
	}
}

module.exports = verify;
