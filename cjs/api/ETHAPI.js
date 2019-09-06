"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ChainBaseAPI_1 = require("./ChainBaseAPI");
class ETHAPI extends ChainBaseAPI_1.default {
    constructor() {
        super(...arguments);
        this._namespace = 'eth';
    }
}
exports.ETHAPI = ETHAPI;
exports.default = ETHAPI;
