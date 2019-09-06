"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChainBaseAPI_1 = require("./ChainBaseAPI");
class BTCAPI extends ChainBaseAPI_1.default {
    constructor() {
        super(...arguments);
        this._namespace = 'btc';
    }
}
exports.BTCAPI = BTCAPI;
exports.default = BTCAPI;
