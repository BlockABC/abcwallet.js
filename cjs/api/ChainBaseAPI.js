"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseAPI_1 = require("./BaseAPI");
class ChainBaseAPI extends BaseAPI_1.default {
    // showTransactionDetail (params: { chainType: string; trxId: string }) {
    //   verifyParams(params, ['chainType', 'trxId'])
    //   return this._request({
    //     method: 'showTransactionDetail',
    //     params
    //   }, true)
    // }
    getAddressFromAddressBook() {
        return this._request({
            method: 'getAddressFromAddressBook',
            params: {}
        });
    }
    getAddressFromCard() {
        return this._request({
            method: 'getAddressFromCard',
            params: {}
        });
    }
}
exports.ChainBaseAPI = ChainBaseAPI;
exports.default = ChainBaseAPI;
