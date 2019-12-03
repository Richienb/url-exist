/**
 * Check if a URL exists.
 * @param url The URL to check.
 * @param cb The callback to execute.
 * @example
 * ```
 * const urlExist = require("url-exist");
 *
 * (async () => {
 *     await urlExist("https://google.com");
 *     //=> true
 *
 *     await urlExist("https://google.com/404ingURL");
 *     //=> false
 *
 *     await urlExist("notaurl");
 *     //=> false
 * })();
 * ```
*/
declare function urlExist(url: string): Promise<boolean>;
declare function urlExist(url: string, cb: (err?: Error, exists: boolean) => any): Promise<boolean>;

export = urlExist;
