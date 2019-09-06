"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("../helper");
const BaseAPI_1 = require("./BaseAPI");
class DappAPI extends BaseAPI_1.default {
    constructor() {
        super(...arguments);
        this._namespace = 'dapp';
    }
    getDapp() {
        return this._request({
            method: 'getDapp',
            params: {}
        });
    }
    isCardExist(params) {
        helper_1.verifyParams(params, ['userId']);
        return this._request({
            method: 'isCardExist',
            params
        });
    }
    addCard(params) {
        return this._request({
            method: 'addCard',
            params
        });
    }
    updateCard(params) {
        return this._request({
            method: 'updateCard',
            params
        });
    }
    getCard(params) {
        return this._request({
            method: 'getCard',
            params
        });
    }
    updateCardBalance(params) {
        return this._request({
            method: 'updateCardBalance',
            params
        });
    }
}
exports.DappAPI = DappAPI;
exports.default = DappAPI;
