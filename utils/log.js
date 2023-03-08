const log4j = require('log4js')

const levels = {
	trace: log4j.levels.TRACE,
	debug: log4j.levels.DEBUG,
	info: log4j.levels.INFO,
	warn: log4j.levels.WARN,
	error: log4j.levels.ERROR,
	fatal: log4j.levels.FATAL
}

log4j.configure({
	appenders: {
		console: {
			type: 'console'
		},
		info: {
			type: 'file',
			filename: 'logs/all-logs.log'
		},
		error: {
			type: 'dateFile',
			filename: 'logs/log',
			pattern: 'yyyy-MM-dd.log',
			alwaysIncludePattern: true
		}
	},
	categories: {
		default: {
			appenders: ['console'],
			level: 'debug'
		},
		info: {
			appenders: ['info', 'console'],
			level: 'info'
		},
		error: {
			appenders: ['error', 'console'],
			level: 'error'
		}
	}
})


exports.info = (content) => {
	let log = log4j.getLogger('info')
	log.level = levels.info
	log.info(content)
}


exports.debug = (content) => {
	let log = log4j.getLogger('debug')
	log.level = levels.debug
	log.debug(content)
}


exports.error = (content) => {
	let log = log4j.getLogger('error')
	log.level = levels.error
	log.error(content)
}
