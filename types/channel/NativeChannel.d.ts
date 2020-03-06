import { Logger } from 'loglevel';
import { IChannel } from '../interface';
/**
 * Native Channel
 */
export declare class NativeChannel implements IChannel {
    log: Logger;
    requestChannel: string;
    protected _isIOS: boolean;
    protected _isAndroid: boolean;
    protected _isElectron: boolean;
    constructor(requestChannel: string, logger: Logger);
    postMessage(data: any): void;
    /**
     * 将数据类型统一为 string
     *
     * @protected
     * @param {*} data
     * @returns
     * @memberof NativeChannel
     */
    protected _dataToString(data: any): string;
}
export default NativeChannel;
