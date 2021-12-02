var unirest = require("unirest");
var req = unirest("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");

req.headers({
	"content-type": "application/x-www-form-urlencoded",
	"accept-encoding": "application/gzip",
	"x-rapidapi-key": "4b695a839emsh2bc9a220eb8bb7bp145d02jsnf1d5f4c36f65",
	"x-rapidapi-host": "google-translate1.p.rapidapi.com",
	"useQueryString": true
});

req.form({
	"q": "Hello, everyone! Today we are going to ",
	"target": "de",
	"source": "en"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body.data.translations);
		// .then(chrome.runtime.onInstalled.addListener(() => {
		// 	chrome.storage.sync.set({ color });
		// 	console.log('Default background color set to %cgreen', `color: ${color}`);
		//   }))
});

// chrome.runtime.onInstalled.addListener(
// 	// ADD a cb function to retrieve text from page (??)
// 	callback: function,
//   )