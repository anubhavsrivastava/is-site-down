/* eslint-disable no-console */
const { isSiteDown } = require('./dist/index');

isSiteDown('https://about.theanubhav.com')
	.then(console.log)
	.catch(console.log);
