# URL Exist

Check if a URL exists.

[![NPM Badge](https://nodei.co/npm/url-exist.png)](https://npmjs.com/package/url-exist)

## Install

```sh
npm install url-exist
```

## Improvements over [`url-exists`](https://github.com/boblauer/url-exists)

- Promise interface.
- Works cross-platform.
- Smaller install size.
- Typescript support included.
- Catches invalid URLs.
- Actively maintained.

## Usage

```js
import urlExist from "url-exist"

await urlExist("https://google.com")
//=> true

await urlExist("https://google.com/404ingURL")
//=> false
 
await urlExist("notaurl")
//=> false
```

## API

### urlExist(url)

#### url

Type: `string`

The URL to check.
