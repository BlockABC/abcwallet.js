"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const every_1 = require("lodash-es/every");
const isNil_1 = require("lodash-es/isNil");
const error_1 = require("./error");
function isRequest(obj) {
    const requiredKeys = ['jsonrpc', 'id', 'namespace', 'method', 'params'];
    return every_1.default(requiredKeys, (key) => {
        return obj.hasOwnProperty(key);
    });
}
exports.isRequest = isRequest;
function verifyParams(params, required) {
    if (isNil_1.default(params)) {
        throw error_1.ABCWalletError.fromCode(10, `[${required.toString()}]`);
    }
    const missing = [];
    for (const key of required) {
        if (!params.hasOwnProperty(key) || isNil_1.default(params[key])) {
            missing.push(key);
        }
    }
    if (missing.length > 0) {
        throw error_1.ABCWalletError.fromCode(10, `[${missing.toString()}]`);
    }
    return true;
}
exports.verifyParams = verifyParams;
