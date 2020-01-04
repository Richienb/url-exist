"use strict"

const isURL = require("is-url-superb")
const { fromPromise } = require("universalify")
const ky = require("ky-universal").create({
    throwHttpErrors: false,
})

module.exports = fromPromise(async (url) => {
    if (!isURL(url)) return false
    const res = await ky.head(url)
    return res !== undefined && !/4\d\d/.test(res.status)
})
