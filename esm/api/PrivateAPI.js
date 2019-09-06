import { verifyParams } from '../helper';
import BaseAPI from './BaseAPI';
export class PrivateAPI extends BaseAPI {
    constructor() {
        super(...arguments);
        this._namespace = 'abcwallet';
    }
    ensureHasCard(params) {
        verifyParams(params, ['chainType']);
        return this._request({
            method: 'ensureHasCards',
            params
        }, true);
    }
    buildGiftTransaction(params) {
        verifyParams(params, ['chainType', 'toAddress', 'toPrivateKey', 'value', 'skin', 'message']);
        return this._request({
            method: 'buildGiftTransaction',
            params
        });
    }
    encryptDataWithPrivateKey(params) {
        verifyParams(params, ['chainType', 'data', 'publicKey']);
        return this._request({
            method: 'encryptDataWithPrivateKey',
            params
        });
    }
    decryptDataWithPrivateKey(params) {
        verifyParams(params, ['chainType', 'cipher', 'publicKey']);
        return this._request({
            method: 'decryptDataWithPrivateKey',
            params
        });
    }
    forward(params) {
        verifyParams(params, ['dapp', 'method', 'params']);
        return this._request({
            method: 'forward',
            params
        });
    }
}
export default PrivateAPI;
