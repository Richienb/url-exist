export default async function urlExist(url, {method = 'HEAD', timeout = Number.POSITIVE_INFINITY} = {}) {
	if (typeof url !== 'string') {
		throw new TypeError(`Expected url to be a string, got ${typeof url}`);
	}

	// Check if url is valid
	new URL(url); // eslint-disable-line no-new

	const controller = new AbortController();

	let timeoutId;

	if (timeout !== Number.POSITIVE_INFINITY) {
		timeoutId = setTimeout(() => {
			controller.abort();
		}, timeout);
	}

	try {
		const {status} = await fetch(url, {method, signal: controller.signal});

		return status < 400 || status >= 500;
	} catch {
		return false;
	} finally {
		controller.abort();
		clearTimeout(timeoutId);
	}
}
