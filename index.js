"use strict"

const isUrl = require("is-url-superb")
const ky = require("ky-universal").create({
	throwHttpErrors: false,
})

module.exports = async (url) => {
	if (!isUrl(url)) return false
	const response = await ky.head(url)
	return response !== undefined && !/4\d\d/.test(response.status)
}
