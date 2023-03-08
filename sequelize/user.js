
const { sequelize, Sequelize } = require('./index');
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
User.sync();
module.exports = User
