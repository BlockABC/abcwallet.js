"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebviewAPI_1 = require("./WebviewAPI");
exports.WebviewAPI = WebviewAPI_1.WebviewAPI;
const DappAPI_1 = require("./DappAPI");
exports.DappAPI = DappAPI_1.DappAPI;
const PrivateAPI_1 = require("./PrivateAPI");
exports.PrivateAPI = PrivateAPI_1.PrivateAPI;
const BTCAPI_1 = require("./BTCAPI");
exports.BTCAPI = BTCAPI_1.BTCAPI;
const ETHAPI_1 = require("./ETHAPI");
exports.ETHAPI = ETHAPI_1.ETHAPI;
const EOSAPI_1 = require("./EOSAPI");
exports.EOSAPI = EOSAPI_1.EOSAPI;
exports.default = {
    webview: WebviewAPI_1.WebviewAPI,
    dapp: DappAPI_1.DappAPI,
    private: PrivateAPI_1.PrivateAPI,
    btc: BTCAPI_1.BTCAPI,
    eth: ETHAPI_1.ETHAPI,
    eos: EOSAPI_1.EOSAPI,
};
