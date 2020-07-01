const callbackPrompt = {
	message: "Tell me you phone number",
	showPrompt() {
		// eslint-disable-next-line no-alert
		const phoneNumber = prompt(this.message);
		console.log(phoneNumber);
	},
	showDeferredPrompt(ms) {
		setTimeout(this.showPrompt.bind(this), ms);
	},
}

export {callbackPrompt}