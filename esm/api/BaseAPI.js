export class BaseAPI {
    constructor(abcwallet) {
        this._abcwallet = abcwallet;
    }
    _request(payload, isNotify = false) {
        payload.namespace = this._namespace;
        return this._abcwallet.request(payload, isNotify);
    }
}
export default BaseAPI;
