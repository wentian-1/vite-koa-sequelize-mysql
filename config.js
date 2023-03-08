module.exports = {
	port: 8888,
	database: {
		host: 'localhost',
		dialect: 'mysql',
		name: 'koa-system',
		username: 'root',
		password: 'root'
	},
	secret: 'yfc',
	redisConfig: {
		host: '127.0.0.1',
		port: '6379',
		username: 'koa-system',
		password: 'root'
	}
}