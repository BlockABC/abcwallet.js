import { Logger } from 'loglevel';
import * as EventEmitter from 'eventemitter3';
import { IPromise, IChannel } from './interface';
import { WebviewAPI, DappAPI, PrivateAPI, BTCAPI, BCHAPI, ETHAPI, EOSAPI, ABCIDAPI, PartnerAPI, BrowserAPI } from './api';
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
    browser: BrowserAPI;
    protected _channel: IChannel;
    protected _promises: Map<string, IPromise>;
    protected _timer: any;
    version: any;
    constructor(logger: Logger);
    request(payload: any, isNotify?: boolean): Promise<any>;
    response(msg: any): void;
    call(msg: any): void;
    get isABCWallet(): boolean;
    get clientVersion(): string;
    /**
     * check if clientVersion is greater/smaller/equal to targetVersion
     * @param targetVersion
     * @return -1 clientVersion smaller than targetVersion
     * @return 1 clientVersion greater than targetVersion
     * @return 0 clientVersion equal to targetVersion
     * @return null unknown, maybe not in ABCWallet
     */
    compareVersion(targetVersion: string): -1 | 1 | 0 | null;
    get clientLanguage(): string;
    get clientFiat(): string;
}
export default ABCWallet;
