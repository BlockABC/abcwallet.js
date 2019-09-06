"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChainBaseAPI_1 = require("./ChainBaseAPI");
class EOSAPI extends ChainBaseAPI_1.default {
    constructor() {
        super(...arguments);
        this._namespace = 'eos';
    }
}
exports.EOSAPI = EOSAPI;
exports.default = EOSAPI;
