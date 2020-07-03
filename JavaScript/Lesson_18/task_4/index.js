'use strict';
export function saveCalls(func) {
	let calls = [];
	withMemory.calls = calls;
	
	function withMemory(...infoCall) {
		calls.push(infoCall);
		return func.call(this, [func]);
	};
	
	return withMemory;
}