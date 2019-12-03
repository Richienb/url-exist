# URL Exist [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/url-exist/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/url-exist)

Check if a URL exists.

[![NPM Badge](https://nodei.co/npm/url-exist.png)](https://npmjs.com/package/url-exist)

## Install

```sh
npm install url-exist
```

## Why should I use this instead of [`url-exists`](https://www.npmjs.com/package/url-exists)?

- Promise interface.
- Cross-platform.
- 70% smaller install size.
- Typescript typings included.
- Catches invalid URLs.
- Supports drop-in replacement.

### Migrating

Replace:
```js
const urlExists = require("url-exists")
```

with:
```js
const urlExists = require("url-exist")
```

That's it!

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
