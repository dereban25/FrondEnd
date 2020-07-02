const timer = {
	
	secondsPassed: 0,
	minsPassed: 0,
	loopID: 0,
	
	startTimer() {
		
		this.loopID = setInterval(() => {
			
			// eslint-disable-next-line no-plusplus
			this.secondsPassed++;
			if (this.secondsPassed === 60) {
				this.secondsPassed = 0;
				// eslint-disable-next-line no-plusplus
				this.minsPassed++;
			}
			
		}, 1000);
	},
	
	getTime() {
		
		return `${this.minsPassed}:${this.secondsPassed < 10 ?
			'0' + this.secondsPassed : this.secondsPassed}`;
	},
	
	stopTimer() {
		
		clearInterval(this.loopID);
	},
	
	resetTimer() {
		
		this.minsPassed = 0;
		this.secondsPassed = 0;
	}
};

export { timer };