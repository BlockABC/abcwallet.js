import BaseAPI from './BaseAPI';
export declare class ChainBaseAPI extends BaseAPI {
    pushSimpleTransaction(params: {
        from?: string;
        to?: string;
        value?: string;
        memo?: string;
    }): Promise<void>;
    getAddressFromAddressBook(): Promise<string>;
    getAddressFromCard(): Promise<string>;
    sendSimpleTransaction(params: {
        from?: string;
        to?: string;
        value?: string;
        memo?: string;
    }): Promise<void>;
}
export default ChainBaseAPI;
