import every from 'lodash-es/every';
import isNil from 'lodash-es/isNil';
import { ABCWalletError } from './error';
export function isRequest(obj) {
    const requiredKeys = ['jsonrpc', 'id', 'namespace', 'method', 'params'];
    return every(requiredKeys, (key) => {
        return obj.hasOwnProperty(key);
    });
}
export function verifyParams(params, required) {
    if (isNil(params)) {
        throw ABCWalletError.fromCode(10, `[${required.toString()}]`);
    }
    const missing = [];
    for (const key of required) {
        if (!params.hasOwnProperty(key) || isNil(params[key])) {
            missing.push(key);
        }
    }
    if (missing.length > 0) {
        throw ABCWalletError.fromCode(10, `[${missing.toString()}]`);
    }
    return true;
}
