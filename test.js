import test from 'ava';
import urlExist from './index.js';

test('main', async t => {
	t.true(await urlExist('https://httpbin.org/status/200'));

	t.false(await urlExist('https://httpbin.org/status/404'));

	t.false(await urlExist('notaurl'));

	t.false(await urlExist('https://aurlthatprobablydoesnotexist.co'));
});
