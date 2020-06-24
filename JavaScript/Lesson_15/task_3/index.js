export function createLogger() {
	let logger = [];
	
	return {
		warn: function(str) {
			logger.push({
				message: str,
				dateTime: new Date(),
				type: 'warn',
			});
		},
		error: function(str) {
			logger.push({
				message: str,
				dateTime: new Date(),
				type: 'error',
			});
		},
		log: function(str) {
			logger.push({
				message: str,
				dateTime: new Date(),
				type: 'log',
			});
		},
		getRecords: function(str) {
			if (!str) {
				return logger;
			}
			return logger.filter(el => el.type === str).sort((a, b) => b.dateTime.getTime() - a.dateTime.getTime());
		}
		
	};
}

