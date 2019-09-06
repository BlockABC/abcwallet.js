"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../helper");
const BaseAPI_1 = require("./BaseAPI");
class PrivateAPI extends BaseAPI_1.default {
    constructor() {
        super(...arguments);
        this._namespace = 'abcwallet';
    }
    ensureHasCard(params) {
        helper_1.verifyParams(params, ['chainType']);
        return this._request({
            method: 'ensureHasCards',
            params
        }, true);
    }
    buildGiftTransaction(params) {
        helper_1.verifyParams(params, ['chainType', 'toAddress', 'toPrivateKey', 'value', 'skin', 'message']);
        return this._request({
            method: 'buildGiftTransaction',
            params
        });
    }
    encryptDataWithPrivateKey(params) {
        helper_1.verifyParams(params, ['chainType', 'data', 'publicKey']);
        return this._request({
            method: 'encryptDataWithPrivateKey',
            params
        });
    }
    decryptDataWithPrivateKey(params) {
        helper_1.verifyParams(params, ['chainType', 'cipher', 'publicKey']);
        return this._request({
            method: 'decryptDataWithPrivateKey',
            params
        });
    }
    forward(params) {
        helper_1.verifyParams(params, ['dapp', 'method', 'params']);
        return this._request({
            method: 'forward',
            params
        });
    }
}
exports.PrivateAPI = PrivateAPI;
exports.default = PrivateAPI;
