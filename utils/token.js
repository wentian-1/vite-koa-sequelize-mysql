const jwt = require('jsonwebtoken');
const { secret } = require('@config/config');
const signToken = (data) => {
	return jwt.sign(data, secret, { expiresIn: '1h' });
} 

const verifyToken = (token) => {
	return jwt.verify(token, secret);
}


module.exports = {
	signToken,
	verifyToken
}