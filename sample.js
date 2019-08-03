const { isSiteUp } = require('./dist/index');

isSiteUp('https://about.theanubhav.com')
	.then(console.log)
	.catch(console.log);
