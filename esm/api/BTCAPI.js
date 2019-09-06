import ChainBaseAPI from './ChainBaseAPI';
export class BTCAPI extends ChainBaseAPI {
    constructor() {
        super(...arguments);
        this._namespace = 'btc';
    }
}
export default BTCAPI;
