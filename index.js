"use strict"

const isURL = require("is-url-superb")
const ky = require("ky-universal").create({
    throwHttpErrors: false,
})

module.exports = async (url) => {
    if (!isURL(url)) return false
    const { status } = await ky.head(url)
    return !/4\d\d/.test(status)
}
