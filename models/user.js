const User = require('../sequelize/user')
class ArticleModel {
	/**
	 * 创建
	 * @param data
	 */
	static async createUser(data) {
		return await User.create({
			name: data.name,
			password: data.password,
		})
	}
	/**
	 * 查询
	 * @param id  
	 */
	static async getUserDetail(id) {
		return await User.findOne({
			where: {
				id,
			},
		})
	}
	/**
	 * 删除
	 * @param id  
	 */
	static async deleteUser(id) {
		return await User.destroy({
			where: {
				id,
			},
		})
	}
	/**
	 * 修改
	 * @param id  
	 * @param date
	 */
	static async updateUser(id, date) {
		return await User.update({
			name: date.name
		}, {
			where: {
				id,
			},
		})
	}
	/**
	 * 查询所有
	 * @param id  
	 */
	static async findAllUser() {
		return await User.findAll({})
	}
	/**
	 * 查询单个
	 * @param date  
	 */
	static async findOneUser(date) {
		return await User.findOne({
			where: {
				id: date.id
			}
		})
	}
	static async findOneUserByName(name) {
		return await User.findOne({
			where: {
				name: name
			}
		})
	}
}
module.exports = ArticleModel
