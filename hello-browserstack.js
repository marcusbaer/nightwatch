var BrowserStack = require("browserstack");
var browserStackCredentials = {
	username: "marcus194",
	password: "h9GGagETgqsEtoU6phsM"
};

// REST API
var client = BrowserStack.createClient(browserStackCredentials);
//
// client.getBrowsers(function(error, browsers) {
// 	console.log("The following browsers are available for testing");
// 	console.log(browsers);
// });

client.createWorker({
  os: 'Windows',
  os_version: '7',
  browser: 'chrome',
  device: null,
  browser_version: '26.0'
}, (error, worker) => {
  console.log(worker)
})

// client.getWorkers(function(errors, workers){
//   console.log(workers)
// });

// Automate API
// var automateClient = BrowserStack.createAutomateClient(browserStackCredentials);
//
// automateClient.getBrowsers(function(error, browsers) {
// 	console.log("The following browsers are available for automated testing");
// 	console.log(browsers);
// });

// Screenshots API
// var screenshotClient = BrowserStack.createScreenshotClient(browserStackCredentials);
//
// screenshotClient.getBrowsers(function(error, browsers) {
// 	console.log("The following browsers are available for screenshots");
// 	console.log(browsers);
// });
