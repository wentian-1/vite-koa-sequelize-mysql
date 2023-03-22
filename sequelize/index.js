const { Sequelize } = require('sequelize')
const { database } = require('@config/config.js')
const sequelize = new Sequelize(database.name, database.username, database.password, {
	host: database.host,
	dialect: database.dialect,
	dialectOptions: {
		charset: 'utf8mb4',
		supportBigNumbers: true,
		bigNumberStrings: true
	},
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
	timezone: '+08:00'
})

module.exports = {
	sequelize,
	Sequelize
}