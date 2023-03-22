const Redis = require('ioredis');
const { redisConfig } = require('@config/config');

const redis = new Redis(redisConfig)


const setItem = (key, value) => redis.set(key, value, 'EX', 3600);
const getItem = (key) => new Promise((resolve, reject) => {
	redis.get(key, (err, result) => {
	  if (err) {
	    reject(err);
	  } else {
	    resolve(result);
	  }
	});
});

module.exports = {
	redis,
	setItem,
	getItem
};