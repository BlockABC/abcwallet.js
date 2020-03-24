import BaseAPI from './BaseAPI';
export declare class BrowserAPI extends BaseAPI {
    protected _namespace: string;
    /**
     * invoker and open dapp in abcwallet client
     */
    openDapp({ url, dapp_id }: {
        url: any;
        dapp_id: any;
    }): Promise<void>;
}
export default BrowserAPI;
