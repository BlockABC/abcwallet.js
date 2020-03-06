import { Logger } from 'loglevel';
import * as EventEmitter from 'eventemitter3';
import { IPromise, IChannel } from './interface';
import { WebviewAPI, DappAPI, PrivateAPI, BTCAPI, BCHAPI, ETHAPI, EOSAPI, ABCIDAPI, PartnerAPI } from './api';
export declare class ABCWallet extends EventEmitter {
    log: Logger;
    webview: WebviewAPI;
    dapp: DappAPI;
    private: PrivateAPI;
    btc: BTCAPI;
    bch: BCHAPI;
    eth: ETHAPI;
    eos: EOSAPI;
    abcid: ABCIDAPI;
    partner: PartnerAPI;
    protected _channel: IChannel;
    protected _promises: Map<string, IPromise>;
    protected _timer: any;
    constructor(logger: Logger);
    request(payload: any, isNotify?: boolean): Promise<any>;
    response(msg: any): void;
    call(msg: any): void;
}
export default ABCWallet;
