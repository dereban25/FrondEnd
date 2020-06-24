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
			switch (str) {
				case 'worn':
					return records
						.filter(el => el.type === 'worn')
						.sort((a, b) => b.dateTime - a.dateTime);
				
				case 'log':
					return records
						.filter(el => el.type === 'log')
						.sort((a, b) => b.dateTime - a.dateTime);
				
				case 'error':
					return records
						.filter(el => el.type === 'error')
						.sort((a, b) => b.dateTime - a.dateTime);
				
				case undefined:
					return records
						.sort((a, b) => b.dateTime - a.dateTime);
				
			}
			return records;
		}
		
	};
}

