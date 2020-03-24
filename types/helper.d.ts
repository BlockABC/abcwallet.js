import { IRequest } from './interface';
export declare function isRequest(obj: any): obj is IRequest;
export declare function verifyParams(params: any, required: string[]): boolean;
/**
 * 判断当前页面是否被隐藏了
 */
export declare function isDocumentHidden(): boolean;
/**
 * 唤起 native
 * @param schema {string|Function} string 的时候是一个要唤起的 schema；Function 时是一个要执行的动作
 * @param timeout
 */
export declare function invokeNative(schema: string | Function, timeout?: number): Promise<void>;
