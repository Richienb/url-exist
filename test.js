const test = require("ava")
const urlExist = require(".")

test("main", async t => {
	t.true(await urlExist("https://httpbin.org/status/200"))

	t.true(await urlExist("https://httpbin.org/status/301"))

	t.false(await urlExist("https://httpbin.org/status/404"))

	t.false(await urlExist("notaurl"))

	t.false(await urlExist("https://aurlthatprobablydoesnotexist.co"))
})
