# is-site-down

Checks if a website is down for everyone

[![Build Status](https://travis-ci.org/anubhavsrivastava/is-site-down.svg?branch=master)](https://travis-ci.org/anubhavsrivastava/is-site-down)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![GitHub issues](https://img.shields.io/github/issues/anubhavsrivastava/is-site-down.svg?style=flat-square)](https://github.com/anubhavsrivastava/is-site-down/issues)
[![HitCount](http://hits.dwyl.io/anubhavsrivastava/is-site-down.svg)](http://hits.dwyl.io/anubhavsrivastava/is-site-down)

[![NPM](https://nodei.co/npm/is-site-down.png?downloads=true&stars=true)](https://nodei.co/npm/is-site-down/)

### Install

```
$ npm install is-site-down --save
```

or

```
yarn add is-site-down
```

### Usage

```js
const { isSiteDown } = require('is-site-down');

isSiteDown('https://about.theanubhav.com').then(console.log);
```

Above call returns following `response`

```json
{
	"host": "about.theanubhav.com",
	"isitdown": false,
	"response_code": 200
}
```

### API Specification

#### `isSiteDown`

-   returns - Promise
-   arguments - siteUrl // e.g theanubhav.com

-   Result Data

1.  Success :

        {
            "host": "about.theanubhav.com",
            "isitdown": false,
            "response_code": 200
        }

Description properties of icon object:

-   "host" - string, URL which was queried for status
-   "isitdown" : Boolean, whether site was down
-   "response_code", number, response returned by server

2. Failure :

All error messages have the following format

    { error: 'Too many requests to the same site.' }

### Reference

`is-site-down` uses HTTP API from [isitdown.site](https://isitdown.site). Refer service API sample [here](https://isitdown.site/api/v3/google.com).

### Environment

Currently, `is-site-down` is supported for Nodejs Environment only. Please open a issue for browser support, if required.

### Related Module

-   [is-site-down-cli](https://github.com/anubhavsrivastava/is-site-down-cli) CLI for is-site-down module

### Contribution

Suggestions and PRs are welcome!

Please create issue or open PR request for contribution.

### License

[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](LICENSE)

refer `LICENSE` file in this repository.
