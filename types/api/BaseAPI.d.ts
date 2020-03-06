import ABCWallet from '../ABCWallet';
export declare class BaseAPI {
    protected _abcwallet: ABCWallet;
    protected _namespace: string;
    constructor(abcwallet: ABCWallet);
    protected _request(payload: any, isNotify?: boolean): Promise<any>;
}
export default BaseAPI;
