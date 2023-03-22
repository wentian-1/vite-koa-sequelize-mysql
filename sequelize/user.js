const {
	sequelize,
	Sequelize
} = require('./index');
const moment = require('moment');

const User = sequelize.define('User', {
	id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		allowNull: true,
		autoIncrement: true
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false
	},
	// 真实开发中不会这么建表，现在是为了后面事务
	article: {
		type: Sequelize.INTEGER,
		defaultValue: 0
	},
	// 创建时间
	createdAt: {
		type: Sequelize.DATE,
		defaultValue: new Date(),
		get() {
			return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
		}
	},
	// 更新时间
	updatedAt: {
		type: Sequelize.DATE,
		defaultValue: new Date(),
		get() {
			return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss');
		}
	}
}, {
	timestamps: false,
	tableName: 'user'
})
User.sync(); // 如果不存在就创建
// User.sync({ force: true }); // 强制创建 如果已存在先删除
// User.sync({ alter: true }); // 检查表中的列，数据类型，然后更改使其与模型匹配
module.exports = User;