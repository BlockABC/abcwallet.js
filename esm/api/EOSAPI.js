import ChainBaseAPI from './ChainBaseAPI';
export class EOSAPI extends ChainBaseAPI {
    constructor() {
        super(...arguments);
        this._namespace = 'eos';
    }
}
export default EOSAPI;
