import BaseAPI from './BaseAPI';
export declare class CKBAPI extends BaseAPI {
    protected _namespace: string;
    sign(params: {
        rawTransaction: any;
        unspents: any[];
    }): Promise<void>;
    sendTransaction(params: {
        rawTransaction: any;
    }): Promise<void>;
}
export default CKBAPI;
