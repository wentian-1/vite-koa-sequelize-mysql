const userService = require('../services/user')
const {
	NotFontException
} = require('../utils/exceptions')




const getAllUser = async (ctx) => {
	const res = await userService.findAllUser()
	console.log(res)
	ctx.body = 'sss'
}

const getUserByName = async (ctx) => {
	const res = await userService.findOneUserByName('admin')
	console.log(a)
	ctx.body = res
}


module.exports = {
	getAllUser,
	getUserByName
}
