# URL Exist

Check if a URL exists.

## Install

```sh
npm install url-exist
```

## Usage

```js
import urlExist from 'url-exist';

await urlExist('https://google.com');
//=> true

await urlExist('https://google.com/404ingURL');
//=> false
 
await urlExist('notaurl');
//=> TypeError: Invalid URL
```

## API

### urlExist(url, options?)

#### url

Type: `string`

The URL to check.

#### options

Type: `object`

##### method

Type: `string`\
Default: `HEAD`

HTTP method used to make the request.

##### timeout

Type: `number`\
Default: `Infinity`

The time to wait before aborting the request and returning false.
