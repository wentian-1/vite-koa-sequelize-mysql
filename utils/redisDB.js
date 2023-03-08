const Redis = require('ioredis');
const { redisConfig } = require('../config');

const redis = new Redis({
	...redisConfig
})

module.exports = redis;