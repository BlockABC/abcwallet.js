import isNil from 'lodash-es/isNil';
import omitBy from 'lodash-es/omitBy';
import { verifyParams } from '../helper';
import BaseAPI from './BaseAPI';
export class WebviewAPI extends BaseAPI {
    constructor() {
        super(...arguments);
        this._namespace = 'webview';
    }
    setOrientation(params) {
        verifyParams(params, ['horizontal']);
        return this._request({
            method: 'setOrientation',
            params
        }, true);
    }
    setFullscreen(params) {
        verifyParams(params, ['fullscreen']);
        return this._request({
            method: 'setFullscreen',
            params
        }, true);
    }
    setTitlebar(params) {
        params = omitBy(params, isNil);
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
        verifyParams(params, ['url']);
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
export default WebviewAPI;
