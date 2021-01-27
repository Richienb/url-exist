/**
Check if a URL exists.

@param url The URL to check.

@example
```
import urlExist from "url-exist"

await urlExist("https://google.com")
//=> true

await urlExist("https://google.com/404ingURL")
//=> false

await urlExist("notaurl")
//=> false
```
*/
declare function urlExist(url: string): Promise<boolean>

export default urlExist
