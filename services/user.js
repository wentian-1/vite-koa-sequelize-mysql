const userModel = require('../models/user')

const findAllUser = async () => {
	return new Promise((resolve, reject) => {
		userModel.findAllUser().then(res => {
			if (Array.isArray(res) && res.length) {
				resolve(res[0])
			} else {
				resolve(null)
			}
		}, err => reject(err))
	})
}

const findOneUserByName = async (name) => {
	return new Promise((resolve, reject) => {
		userModel.findOneUserByName(name).then(res => {
			resolve(res)
		}, err => reject(err))
	})
}





module.exports = {
	findAllUser,
	findOneUserByName
}