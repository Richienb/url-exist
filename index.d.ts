export interface Options {
	/**
	HTTP method used to make the request.

	@default 'HEAD'
	*/
	method?: string;

	/**
	The time to wait before aborting the request and returning false.

	@default Infinity
	*/
	timeout?: number;
}

/**
Check if a URL exists.

@param url - The URL to check.

@example
```
import urlExist from 'url-exist';

await urlExist('https://google.com');
//=> true

await urlExist('https://google.com/404ingURL');
//=> false

await urlExist('notaurl');
//=> TypeError: Invalid URL
```
*/
export default function urlExist(url: string, options?: Options): Promise<boolean>;
