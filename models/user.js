const User = require('@sequelize/user')
class UserModel {
	static async findAllUser() {
		return await User.findAll()
	}
	static async findUserById(id) {
		return await User.findOne({
			where: {
				id
			}
		})
	}
	static async findUserByName(name) {
		return await User.findOne({
			where: {
				name
			}
		})
	}
}
module.exports = UserModel