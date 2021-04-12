import ChainBaseAPI from './ChainBaseAPI';
export declare class CKBAPI extends ChainBaseAPI {
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
