import { verifyParams } from '../helper';
import BaseAPI from './BaseAPI';
export class DappAPI extends BaseAPI {
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
        verifyParams(params, ['userId']);
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
export default DappAPI;
