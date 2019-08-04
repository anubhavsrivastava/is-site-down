const axios = require('axios');
const { axiosResponseDataUnpacker } = require('axios-data-unpacker');
axiosResponseDataUnpacker(axios);

const config = {
	host: 'https://isitdown.site',
	path: '/api',
	route: {
		v3: '/v3'
	}
};

const leftExtract = (str, of) => {
	const inx = str.lastIndexOf(of);
	return inx > -1 ? str.slice(inx + of.length) : str;
};

const rightExtract = (str, of) => {
	const inx = str.indexOf(of);
	return inx > -1 ? str.slice(0, inx) : str;
};

const extractDomain = url => {
	if (url == null) {
		throw new Error('The url parameter is required.');
	}

	let next = url;

	// https://user:pass@theanubhav.com:8080/p/a/t/h?query=string#has
	next = leftExtract(next, '://');
	// user:pass@theanubhav.com:8080/p/a/t/h?query=string#has
	next = rightExtract(next, '/');
	// user:pass@theanubhav.com:8080
	next = leftExtract(next, '@');
	// theanubhav.com:8080
	next = rightExtract(next, ':');

	return next;
};

const getAPIUrl = site => {
	const { host, path, route } = config;
	return `${host}${path}${route.v3}/${extractDomain(site)}`;
};

const isSiteDown = site => {
	return axios
		.get(getAPIUrl(site))
		.then(d => {
			delete d.deprecated;
			return d;
		})
		.catch(e => (e.response ? e.response.data : e));
};

export default isSiteDown;
export { isSiteDown };
