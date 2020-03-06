import BaseAPI from './BaseAPI';
import { IDapp } from 'src/interface';
export declare class PrivateAPI extends BaseAPI {
    protected _namespace: string;
    ensureHasCard(params: {
        chainType: string;
    }): Promise<void>;
    buildGiftTransaction(params: {
        chainType: string;
        toAddress: string;
        toPrivateKey: string;
        value: string;
        skin: string;
        message: string;
    }): Promise<{
        transaction: string;
    }>;
    encryptDataWithPrivateKey(params: {
        chainType: string;
        data: string;
        publicKey: string;
    }): Promise<string>;
    decryptDataWithPrivateKey(params: {
        chainType: string;
        cipher: string;
        publicKey: string;
    }): Promise<string>;
    forward(params: {
        dapp: IDapp;
        method: string;
        params: any;
    }): Promise<any>;
}
export default PrivateAPI;
