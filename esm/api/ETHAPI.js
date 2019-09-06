import ChainBaseAPI from './ChainBaseAPI';
export class ETHAPI extends ChainBaseAPI {
    constructor() {
        super(...arguments);
        this._namespace = 'eth';
    }
}
export default ETHAPI;
