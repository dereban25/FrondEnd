export function createLogger () {
	let records = [];
	
	function warn(text) {
		return records.push({
			message: text,
			dateTime: new Date(),
			type: 'warn' })
	}
	
	function error(text) {
		return records.push({
			message: text,
			dateTime: new Date(),
			type: 'error' })
	}
	
	function log(text) {
		return records.push({
			message: text,
			dateTime: new Date(),
			type: 'log' })
	}
	
	function getRecords (text) {
		switch (text) {
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
	
	return {
		warn,
		error,
		log,
		getRecords,
	};
}