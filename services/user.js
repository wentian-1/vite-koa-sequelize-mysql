const userModel = require('@models/user')

const findAllUser = async () => {
	return new Promise((resolve, reject) => {
		userModel.findAllUser().then(res => {
			if (Array.isArray(res) && res.length) {
				resolve(res)
			} else {
				resolve(null)
			}
		}, err => reject(err))
	})
}
const findOneUserById = async (id) => {
	return new Promise((resolve, reject) => {
		userModel.findUserById(id).then(res => {
			resolve(res)
		}, err => reject(err))
	})
}
const findUserByName = async (name) => {
	return new Promise((resolve, reject) => {
		userModel.findUserByName(name).then(res => {
			resolve(res)
		}, err => reject(err))
	})
}
module.exports = {
	findAllUser,
	findOneUserById,
	findUserByName
}