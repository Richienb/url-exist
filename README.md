# URL Exist [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/url-exist/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/url-exist)

Check if a URL exists.

[![NPM Badge](https://nodei.co/npm/url-exist.png)](https://npmjs.com/package/url-exist)

## Install

```sh
npm install url-exist
```

## Improvements over [`url-exists`](https://github.com/boblauer/url-exists)?

- Promise interface.
- Works cross-platform.
- 87% smaller install size.
- Typescript supported included.
- Catches invalid URLs.
- Actively maintained.

## Usage

```js
const urlExist = require("url-exist");

(async () => {
	await urlExist("https://google.com");
	//=> true

	await urlExist("https://google.com/404ingURL");
	//=> false

	await urlExist("notaurl");
	//=> false
})();
```

## API

### urlExist(url)

#### url

Type: `string`

The URL to check.

## Migrating from v1

- Node.js 10 or later is now required.
- Support for callbacks have been removed.
