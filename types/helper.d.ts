import { IRequest } from './interface';
export declare function isRequest(obj: any): obj is IRequest;
export declare function verifyParams(params: any, required: string[]): boolean;
