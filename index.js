import isUrl from "is-url-superb"
import ky from "ky-universal"

const urlExist = async url => {
	if (typeof url !== "string") {
		throw new TypeError(`Expected a string, got ${typeof url}`)
	}

	if (!isUrl(url)) {
		return false
	}

	const response = await ky.head(url, {
		throwHttpErrors: false
	})

	return response !== undefined && (response.status < 400 || response.status >= 500)
}

export default urlExist
