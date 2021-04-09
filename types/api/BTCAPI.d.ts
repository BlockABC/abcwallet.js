import ChainBaseAPI from './ChainBaseAPI';
export declare class BTCAPI extends ChainBaseAPI {
    protected _namespace: string;
    offerIdentity(): Promise<string>;
    sign(params: {
        rawTransaction: string;
        unspents: string;
    }): Promise<void>;
    sendTransaction(params: {
        rawTransaction: string;
        unspents: string;
    }): Promise<void>;
    signMessage(params: {
        address: string;
        message: string;
    }): Promise<void>;
    verifyMessage(params: {
        address: string;
        message: string;
        signature: string;
    }): Promise<void>;
}
export default BTCAPI;
