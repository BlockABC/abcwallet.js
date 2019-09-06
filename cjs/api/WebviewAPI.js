"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isNil_1 = require("lodash-es/isNil");
const omitBy_1 = require("lodash-es/omitBy");
const helper_1 = require("../helper");
const BaseAPI_1 = require("./BaseAPI");
class WebviewAPI extends BaseAPI_1.default {
    constructor() {
        super(...arguments);
        this._namespace = 'webview';
    }
    setOrientation(params) {
        helper_1.verifyParams(params, ['horizontal']);
        return this._request({
            method: 'setOrientation',
            params
        }, true);
    }
    setFullscreen(params) {
        helper_1.verifyParams(params, ['fullscreen']);
        return this._request({
            method: 'setFullscreen',
            params
        }, true);
    }
    setTitlebar(params) {
        params = omitBy_1.default(params, isNil_1.default);
        return this._request({
            method: 'setTitlebar',
            params
        }, true);
    }
    home() {
        return this._request({
            method: 'home',
            params: {}
        }, true);
    }
    back() {
        return this._request({
            method: 'back',
            params: {}
        }, true);
    }
    close() {
        return this._request({
            method: 'close',
            params: {}
        }, true);
    }
    share(params = {}) {
        return this._request({
            method: 'share',
            params,
        }, true);
    }
    openUrl(params) {
        helper_1.verifyParams(params, ['url']);
        return this._request({
            method: 'openUrl',
            params
        }, true);
    }
    invokeQRScanner() {
        return this._request({
            method: 'invokeQRScanner',
            params: {}
        });
    }
}
exports.WebviewAPI = WebviewAPI;
exports.default = WebviewAPI;
