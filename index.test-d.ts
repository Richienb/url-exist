import {expectType} from 'tsd';
import urlExist from './index.js';

expectType<Promise<boolean>>(urlExist('https://example.com'));
expectType<Promise<boolean>>(urlExist('https://example.com', {method: 'GET'}));
expectType<Promise<boolean>>(urlExist('https://example.com', {timeout: 1000}));
